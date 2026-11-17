import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const require = createRequire(path.resolve('.github/actions/shared-website-quality-gate/package.json'));
const { chromium } = require('playwright');
const baseUrl = 'http://127.0.0.1:4175';
const evidenceDir = path.resolve('.website-quality-artifacts/interactions');
const failures = [];
const passed = [];
let preview;
let browser;

function assert(condition, message) {
  if (!condition) throw new Error(message);
  passed.push(message);
}

async function waitForPreview(child, timeoutMs = 30_000) {
  const started = Date.now();
  let lastError = 'No HTTP response';
  while (Date.now() - started < timeoutMs) {
    if (child.exitCode !== null) throw new Error('Preview process exited early with code ' + child.exitCode);
    try {
      const response = await fetch(baseUrl);
      if (response.status === 200 && (response.headers.get('content-type') || '').includes('text/html')) return;
      lastError = 'HTTP ' + response.status;
    } catch (error) {
      lastError = error.message;
    }
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  throw new Error('Preview did not become ready: ' + lastError);
}

async function stopPreview(child) {
  if (!child || child.pid == null || child.exitCode !== null) return;
  if (process.platform === 'win32') {
    await new Promise(resolve => {
      const killer = spawn('taskkill', ['/pid', String(child.pid), '/t', '/f'], { windowsHide: true, stdio: 'ignore' });
      killer.once('close', resolve);
      killer.once('error', resolve);
    });
    return;
  }
  try { process.kill(-child.pid, 'SIGTERM'); } catch { child.kill('SIGTERM'); }
  await new Promise(resolve => setTimeout(resolve, 500));
  try { process.kill(-child.pid, 'SIGKILL'); } catch {}
}

try {
  await mkdir(evidenceDir, { recursive: true });
  preview = spawn(
    process.platform === 'win32' ? 'npm.cmd' : 'npm',
    ['run', 'preview', '--', '--host', '127.0.0.1', '--port', '4175'],
    { stdio: 'inherit', detached: process.platform !== 'win32', shell: process.platform === 'win32' },
  );
  await waitForPreview(preview);
  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Responsive width safety, separate from the shared gate's own overflow assertions.
  for (const width of [320, 360, 390, 640, 768, 900, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: width <= 640 ? 844 : 900 });
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
    }));
    assert(dimensions.document <= dimensions.viewport, 'No horizontal page overflow at ' + width + 'px');
  }

  // Tablet navigation: hidden by default, keyboard-operable, visibly focused, and closes on route selection.
  await page.setViewportSize({ width: 768, height: 900 });
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  const toggle = page.locator('.menu-toggle');
  const nav = page.locator('#primary-nav');
  assert(await toggle.isVisible(), 'Tablet menu toggle is visible at 768px');
  assert(!(await nav.isVisible()), 'Tablet navigation is collapsed by default');
  await page.keyboard.press('Tab');
  const firstFocus = await page.evaluate(() => document.activeElement?.className || '');
  assert(String(firstFocus).includes('wordmark'), 'Keyboard tab order reaches the brand link first');
  await page.keyboard.press('Tab');
  const focused = await page.evaluate(() => ({
    className: document.activeElement?.className || '',
    outlineStyle: getComputedStyle(document.activeElement).outlineStyle,
    outlineWidth: getComputedStyle(document.activeElement).outlineWidth,
  }));
  assert(String(focused.className).includes('menu-toggle'), 'Keyboard tab order reaches the menu toggle');
  assert(focused.outlineStyle !== 'none' && Number.parseFloat(focused.outlineWidth) >= 3, 'Menu toggle has a visible keyboard focus indicator');
  await page.keyboard.press('Enter');
  assert(await toggle.getAttribute('aria-expanded') === 'true', 'Enter opens the tablet navigation and updates aria-expanded');
  assert(await nav.isVisible(), 'Tablet navigation becomes visible when opened');
  await page.screenshot({ path: path.join(evidenceDir, 'tablet-768-menu-open.png'), fullPage: false });
  await nav.getByRole('link', { name: 'Proses' }).click();
  assert(new URL(page.url()).hash === '#how-it-works', 'Selecting a tablet nav item navigates to its section');
  assert(await toggle.getAttribute('aria-expanded') === 'false', 'Selecting a tablet nav item closes the menu');

  // Mobile navigation follows the same contract.
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  const mobileToggle = page.locator('.menu-toggle');
  const mobileNav = page.locator('#primary-nav');
  assert(await mobileToggle.isVisible(), 'Mobile menu toggle is visible at 390px');
  await mobileToggle.click();
  assert(await mobileToggle.getAttribute('aria-expanded') === 'true', 'Mobile menu opens and updates aria-expanded');
  assert(await mobileNav.isVisible(), 'Mobile navigation is visible when opened');
  await page.screenshot({ path: path.join(evidenceDir, 'mobile-390-menu-open.png'), fullPage: false });
  await mobileNav.getByRole('link', { name: 'Jam & Lokasi' }).click();
  assert(new URL(page.url()).hash === '#hours-location', 'Selecting a mobile nav item navigates to its section');
  assert(await mobileToggle.getAttribute('aria-expanded') === 'false', 'Selecting a mobile nav item closes the mobile menu');

  // The primary CTA remains a working same-page anchor, while unconfigured external actions stay inert.
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  await page.getByRole('link', { name: /Lihat layanan & harga/ }).click();
  assert(new URL(page.url()).hash === '#services-pricing', 'Primary hero CTA reaches the pricing section');
  const externalTargets = await page.locator('a[href]').evaluateAll(links => links.map(link => link.getAttribute('href')));
  assert(!externalTargets.some(href => /wa\.me|whatsapp|maps\.google|google\.com\/maps/i.test(href || '')), 'No active WhatsApp or map link is present in the demo');
  assert(await page.locator('.disabled-action[aria-disabled="true"]').count() === 1, 'Unconfigured WhatsApp remains a non-interactive disabled state');

  // Reduced-motion mode keeps scrolling and transitions at the requested reduced setting.
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const motion = await page.evaluate(() => ({
    scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
    transitionDuration: getComputedStyle(document.querySelector('.button')).transitionDuration,
    animationDuration: getComputedStyle(document.querySelector('.button')).animationDuration,
  }));
  assert(motion.scrollBehavior === 'auto', 'Reduced-motion mode disables smooth scrolling');
  assert(motion.transitionDuration.split(',').every(value => Number.parseFloat(value) <= 0.001), 'Reduced-motion mode minimizes button transitions');
  assert(motion.animationDuration.split(',').every(value => Number.parseFloat(value) <= 0.001), 'Reduced-motion mode minimizes button animations');

  const report = {
    baseUrl,
    result: 'PASS',
    passCount: passed.length,
    failCount: 0,
    passed,
    failures,
    notTested: ['Actual browser zoom at 200% (not simulated by deviceScaleFactor)'],
  };
  await writeFile(path.join(evidenceDir, 'interaction-smoke-report.json'), JSON.stringify(report, null, 2) + '\n');
  console.log('Experiment 06 interaction smoke result: PASS (' + passed.length + ' assertions)');
} catch (error) {
  failures.push(error.stack || error.message);
  await mkdir(evidenceDir, { recursive: true });
  await writeFile(path.join(evidenceDir, 'interaction-smoke-report.json'), JSON.stringify({
    result: 'FAIL', passCount: passed.length, failCount: failures.length, passed, failures,
    notTested: ['Actual browser zoom at 200% (not simulated by deviceScaleFactor)'],
  }, null, 2) + '\n');
  console.error('Experiment 06 interaction smoke result: FAIL');
  console.error(error);
  process.exitCode = 1;
} finally {
  if (browser) await browser.close();
  await stopPreview(preview);
}
