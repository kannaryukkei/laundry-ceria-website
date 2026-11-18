import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { setTimeout as sleep } from 'node:timers/promises';
import process from 'node:process';

const baselineCommit = '128050a348ca07afa9657b956250543730838daf';
const worktree = '/tmp/laundry-ceria-pre-refinement-baseline';
const baseUrl = 'http://127.0.0.1:4174';
const outputDir = 'artifacts/browser-qa/baseline';
const widths = [320, 360, 390, 640, 768, 1024, 1440];
const sampleSelectors = [
  '.notice-inner', '.hero-footnote', '.hero-bottom', '.eyebrow',
  '.section-topline', '.price-card-head p', '.price-card-foot',
  '.timing-detail', '.process-item p', '.pickup-rule>p',
  '.pickup-footnote', '.card-footnote', '.contact-card>p',
  '.footer-main p', '.footer-bottom'
];

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit', ...options });
    child.once('error', reject);
    child.once('exit', (code, signal) => {
      if (code === 0) resolve();
      else reject(new Error(command + ' ' + args.join(' ') + ' exited with ' + (signal ?? code)));
    });
  });
}

async function waitForServer(server) {
  let lastError;
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (server.exitCode !== null) throw new Error('Baseline Vite preview exited before ready.');
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch (error) {
      lastError = error;
    }
    await sleep(500);
  }
  throw new Error('Timed out waiting for baseline preview: ' + String(lastError ?? 'no response'));
}

await mkdir(outputDir + '/screenshots', { recursive: true });
let browser;
let server;
let worktreeCreated = false;
const report = {
  evidence_type: 'PRE_REFINEMENT_VISUAL_BASELINE',
  baseline_commit: baselineCommit,
  candidate_commit: process.env.GITHUB_SHA ?? 'UNPINNED',
  captured_at: new Date().toISOString(),
  viewport_widths: widths,
  screenshot_files: [],
  viewport_metrics: [],
  limitations: [
    'Baseline is the exact pre-refinement commit; comparison images are captured with the same browser binary and viewport sizes as the after-cycle job.',
    'This is a source/render baseline, not a historical client-approval record.',
    'The screenshot capture does not establish keyboard, screen-reader or true 200% browser-zoom acceptance.'
  ]
};

try {
  await run('git', ['fetch', '--no-tags', '--depth=1', 'origin', baselineCommit]);
  await run('git', ['worktree', 'add', '--detach', worktree, baselineCommit]);
  worktreeCreated = true;
  await run('npm', ['install'], { cwd: worktree });
  await run('npm', ['run', 'build'], { cwd: worktree });

  server = spawn('npm', ['run', 'preview', '--', '--host', '127.0.0.1', '--port', '4174', '--strictPort'], {
    cwd: worktree,
    stdio: 'inherit',
    env: process.env
  });
  await waitForServer(server);
  browser = await chromium.launch({ headless: true });

  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    const metrics = await page.evaluate((selectors) => ({
      innerWidth: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      bodyWidth: document.body.scrollWidth,
      typographySamples: selectors.flatMap((selector) =>
        [...document.querySelectorAll(selector)].slice(0, 3).map((element) => ({
          selector,
          fontSizePx: Number.parseFloat(getComputedStyle(element).fontSize)
        }))
      )
    }), sampleSelectors);
    const name = 'viewport-' + width + '.png';
    await page.screenshot({
      path: outputDir + '/screenshots/' + name,
      fullPage: true,
      animations: 'disabled'
    });
    report.screenshot_files.push(name);
    report.viewport_metrics.push({
      width,
      document_width: metrics.documentWidth,
      body_width: metrics.bodyWidth,
      horizontal_overflow: metrics.documentWidth > metrics.innerWidth + 1 || metrics.bodyWidth > metrics.innerWidth + 1,
      typography_samples: metrics.typographySamples
    });
    await page.close();
  }

  const reducedMotion = await browser.newPage({
    viewport: { width: 390, height: 844 },
    reducedMotion: 'reduce'
  });
  await reducedMotion.goto(baseUrl, { waitUntil: 'networkidle' });
  await reducedMotion.screenshot({
    path: outputDir + '/screenshots/reduced-motion-390.png',
    fullPage: true,
    animations: 'disabled'
  });
  report.screenshot_files.push('reduced-motion-390.png');

  report.result = 'CAPTURED';
  report.page_level_overflow_count = report.viewport_metrics.filter(item => item.horizontal_overflow).length;
} catch (error) {
  report.result = 'FAILED';
  report.error = error instanceof Error ? error.stack : String(error);
  throw error;
} finally {
  if (browser) await browser.close();
  if (server && server.exitCode === null) server.kill('SIGTERM');
  await writeFile(outputDir + '/baseline-report.json', JSON.stringify(report, null, 2) + '\n');
  if (worktreeCreated) {
    try {
      await run('git', ['worktree', 'remove', '--force', worktree]);
    } catch (error) {
      process.stderr.write('Warning: could not remove baseline worktree: ' + String(error) + '\n');
    }
  }
}

process.stdout.write(JSON.stringify({
  result: report.result,
  baseline_commit: baselineCommit,
  candidate_commit: report.candidate_commit,
  viewports: widths,
  screenshots: report.screenshot_files.length,
  page_level_overflow_count: report.page_level_overflow_count
}, null, 2) + '\n');
