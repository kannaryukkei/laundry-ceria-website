import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { setTimeout as sleep } from 'node:timers/promises';
import process from 'node:process';

const baseUrl = 'http://127.0.0.1:4173';
const outputDir = 'artifacts/browser-qa';
const widths = [320, 360, 390, 640, 768, 1024, 1440];
const expectedSections = [
  'preview-notice', 'site-header', 'hero', 'services-pricing', 'turnaround',
  'how-it-works', 'pickup-delivery', 'hours-location', 'contact', 'site-footer'
];
const typeFloorSelectors = [
  '.notice-inner', '.notice-inner strong', '.hero-footnote', '.hero-bottom',
  '.eyebrow', '.section-topline', '.section-description', '.price-card-head p',
  '.price-card-foot', '.pricing-note p', '.timing-card-top', '.timing-detail',
  '.timing-rule', '.express-foot', '.process-aside p', '.process-item p',
  '.process-bottom-note p', '.note-label', '.pickup-copy>p:not(.eyebrow)',
  '.radius-display small', '.radius-display div>span', '.pickup-rule>p',
  '.rule-meta', '.rule-bottom span', '.pickup-footnote', '.info-card-head',
  '.hours-row', '.card-footnote', '.fictional-label', '.address-card>p',
  '.contact-card-top', '.contact-card>p', '.footer-main p', '.footer-nav a',
  '.footer-bottom'
];

const report = {
  test: 'Laundry Ceria browser / responsive smoke QA',
  tested_commit: process.env.GITHUB_SHA ?? 'LOCAL_UNPINNED',
  tested_at: new Date().toISOString(),
  base_url: baseUrl,
  viewport_widths: widths,
  result: 'RUNNING',
  checks: [],
  viewport_results: [],
  console_errors: [],
  page_errors: [],
  manual_checks_not_performed: [
    'Human visual design review of every screenshot',
    'Real browser UI zoom at 200% (640 CSS-pixel viewport is a narrow-layout proxy only)',
    'Screen-reader review'
  ]
};

function check(name, passed, details = '') {
  report.checks.push({ name, result: passed ? 'PASS' : 'FAIL', details });
  if (!passed) throw new Error(name + (details ? ': ' + details : ''));
}

async function waitForServer(server) {
  let lastError;
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (server.exitCode !== null) throw new Error('Vite preview exited before becoming ready.');
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch (error) {
      lastError = error;
    }
    await sleep(500);
  }
  throw new Error('Timed out waiting for Vite preview: ' + String(lastError ?? 'no response'));
}

await mkdir(outputDir + '/screenshots', { recursive: true });
const server = spawn('npm', ['run', 'preview', '--', '--host', '127.0.0.1', '--port', '4173', '--strictPort'], {
  stdio: 'inherit',
  env: process.env
});
let browser;
let failed = false;

try {
  await waitForServer(server);
  browser = await chromium.launch({ headless: true });
  const baseline = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  baseline.on('console', (message) => {
    if (message.type() === 'error') report.console_errors.push(message.text());
  });
  baseline.on('pageerror', (error) => report.page_errors.push(error.message));
  await baseline.goto(baseUrl, { waitUntil: 'networkidle' });

  const pageFacts = await baseline.evaluate((sectionIds) => {
    const text = document.body.innerText;
    const anchors = [...document.querySelectorAll('a[href^="#"]')].map((anchor) => {
      const href = anchor.getAttribute('href');
      return { href, targetExists: Boolean(href && document.getElementById(href.slice(1))) };
    });
    const externalLinks = [...document.querySelectorAll('a[href]')]
      .map((anchor) => anchor.getAttribute('href'))
      .filter((href) => href && /^(https?:|mailto:|tel:)|wa\.me/i.test(href));
    const whatsapp = document.querySelector('.whatsapp-card');
    const disabled = whatsapp?.querySelector('.disabled-action');
    const interactiveWhatsAppElements = whatsapp
      ? whatsapp.querySelectorAll('a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])').length
      : -1;
    return {
      title: document.title,
      language: document.documentElement.lang,
      robots: document.querySelector('meta[name="robots"]')?.content ?? '',
      text,
      sectionPresence: sectionIds.map((id) => ({ id, count: document.querySelectorAll('#' + CSS.escape(id)).length })),
      anchors,
      externalLinks,
      disabledWhatsApp: {
        present: Boolean(whatsapp),
        status: disabled?.getAttribute('aria-disabled') ?? '',
        text: disabled?.innerText ?? '',
        interactiveElementCount: interactiveWhatsAppElements
      }
    };
  }, expectedSections);

  check('Document title identifies preview', pageFacts.title.includes('Demo Preview'), pageFacts.title);
  check('Document language is Indonesian', pageFacts.language === 'id', pageFacts.language);
  check('Page is noindex', /noindex/.test(pageFacts.robots), pageFacts.robots);
  check('All canonical sections appear exactly once', pageFacts.sectionPresence.every((item) => item.count === 1), JSON.stringify(pageFacts.sectionPresence));
  check('Every in-page link has a matching target', pageFacts.anchors.every((item) => item.targetExists), JSON.stringify(pageFacts.anchors.filter((item) => !item.targetExists)));
  check('No external contact or navigation links exist', pageFacts.externalLinks.length === 0, JSON.stringify(pageFacts.externalLinks));
  check('WhatsApp remains non-interactive and NOT_CONFIGURED',
    pageFacts.disabledWhatsApp.present &&
    pageFacts.disabledWhatsApp.status === 'true' &&
    pageFacts.disabledWhatsApp.interactiveElementCount === 0 &&
    /NOT_CONFIGURED|belum dikonfigurasi/i.test(pageFacts.disabledWhatsApp.text),
    JSON.stringify(pageFacts.disabledWhatsApp));
  check('Fictional address is disclosed', /ALAMAT FIKTIF — DATA DEMO/.test(pageFacts.text), 'Expected prominent demo address label.');
  const requiredCopy = [
    'PREVIEW ONLY', 'DEMO-ONLY', 'NOT_APPROVED',
    'Rp8.000', 'Rp12.000', 'Rp7.000', 'Rp25.000', 'Rp20.000',
    'biasanya', '10.00', '20.00', '2 km'
  ];
  for (const phrase of requiredCopy) {
    check('Required source-backed copy: ' + phrase, pageFacts.text.toLocaleLowerCase().includes(phrase.toLocaleLowerCase()), phrase);
  }

  // Keyboard-only smoke checks: skip link, menu open, first navigation link and Escape return.
  const keyboardPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await keyboardPage.goto(baseUrl, { waitUntil: 'networkidle' });
  await keyboardPage.keyboard.press('Tab');
  check('Skip link is the first keyboard stop',
    await keyboardPage.locator('.skip-link').evaluate((element) => element === document.activeElement));
  await keyboardPage.keyboard.press('Enter');
  check('Skip link moves focus to main content',
    new URL(keyboardPage.url()).hash === '#main-content' &&
    await keyboardPage.locator('#main-content').evaluate((element) => element === document.activeElement));

  const keyboardMenu = keyboardPage.locator('.menu-toggle');
  await keyboardPage.locator('.wordmark').focus();
  await keyboardPage.keyboard.press('Tab');
  check('Mobile menu button receives keyboard focus',
    await keyboardMenu.evaluate((element) => element === document.activeElement));
  check('Mobile menu button has a visible keyboard focus ring',
    await keyboardMenu.evaluate((element) => getComputedStyle(element).outlineStyle !== 'none'));
  await keyboardPage.keyboard.press('Enter');
  check('Keyboard Enter opens mobile navigation',
    await keyboardMenu.getAttribute('aria-expanded') === 'true');
  await keyboardPage.keyboard.press('Tab');
  check('Keyboard Tab enters the first mobile navigation link',
    await keyboardPage.locator('.primary-nav a[href="#services-pricing"]').evaluate((element) => element === document.activeElement));
  await keyboardPage.keyboard.press('Escape');
  check('Escape closes mobile navigation and restores focus',
    await keyboardMenu.getAttribute('aria-expanded') === 'false' &&
    await keyboardMenu.evaluate((element) => element === document.activeElement));
  await keyboardPage.close();

  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    page.on('pageerror', (error) => report.page_errors.push(error.message));
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    const metrics = await page.evaluate((selectors) => ({
      innerWidth: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      bodyWidth: document.body.scrollWidth,
      overflowElements: [...document.querySelectorAll('body *')]
        .filter((element) => {
          const rect = element.getBoundingClientRect();
          const style = getComputedStyle(element);
          return rect.width > 0 && rect.right > document.documentElement.clientWidth + 1 &&
            !['absolute', 'fixed'].includes(style.position);
        })
        .slice(0, 10)
        .map((element) => ({ tag: element.tagName, className: String(element.className).slice(0, 80) })),
      typeSamples: selectors.flatMap((selector) => [...document.querySelectorAll(selector)].slice(0, 3).map((element) => ({
        selector,
        fontSizePx: Number.parseFloat(getComputedStyle(element).fontSize)
      })))
    }), typeFloorSelectors);

    const noPageOverflow = metrics.documentWidth <= metrics.innerWidth + 1 && metrics.bodyWidth <= metrics.innerWidth + 1;
    check('No page-level horizontal overflow at ' + width + 'px', noPageOverflow,
      JSON.stringify({ innerWidth: metrics.innerWidth, documentWidth: metrics.documentWidth, bodyWidth: metrics.bodyWidth }));
    const undersized = metrics.typeSamples.filter((sample) => sample.fontSizePx < 11.5);
    check('Support text floor >= 12px at ' + width + 'px', undersized.length === 0, JSON.stringify(undersized));

    await page.screenshot({
      path: outputDir + '/screenshots/viewport-' + width + '.png',
      fullPage: true,
      animations: 'disabled'
    });
    report.viewport_results.push({
      width,
      document_width: metrics.documentWidth,
      body_width: metrics.bodyWidth,
      horizontal_overflow: !noPageOverflow,
      typography_samples: metrics.typeSamples.length,
      minimum_sampled_font_px: metrics.typeSamples.length
        ? Math.min(...metrics.typeSamples.map((sample) => sample.fontSizePx))
        : null,
      nested_overflow_candidates: metrics.overflowElements
    });

    if (width === 390) {
      const menu = page.locator('.menu-toggle');
      await menu.click();
      check('Mobile menu opens and exposes expanded state',
        await menu.getAttribute('aria-expanded') === 'true' &&
        await page.locator('.primary-nav').evaluate((element) => element.classList.contains('is-open')));
      await page.locator('.primary-nav a[href="#services-pricing"]').click();
      check('Mobile navigation anchor works and closes menu',
        new URL(page.url()).hash === '#services-pricing' &&
        await menu.getAttribute('aria-expanded') === 'false');
    }
    await page.close();
  }

  const reducedMotion = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  await reducedMotion.goto(baseUrl, { waitUntil: 'networkidle' });
  const reducedDuration = await reducedMotion.locator('.button').first().evaluate((element) => getComputedStyle(element).transitionDuration);
  check('Reduced-motion preference suppresses button transitions',
    reducedDuration.split(',').every((value) => Number.parseFloat(value) <= 0.0001),
    reducedDuration);
  await reducedMotion.screenshot({ path: outputDir + '/screenshots/reduced-motion-390.png', fullPage: true, animations: 'disabled' });

  report.result = 'PASS';
} catch (error) {
  failed = true;
  report.result = 'FAIL';
  report.error = error instanceof Error ? error.stack : String(error);
} finally {
  if (browser) await browser.close();
  server.kill('SIGTERM');
  await writeFile(outputDir + '/browser-qa-report.json', JSON.stringify(report, null, 2) + '\n');
}

if (failed) {
  process.stderr.write(report.error + '\n');
  process.exitCode = 1;
} else {
  process.stdout.write(JSON.stringify({
    result: report.result,
    tested_commit: report.tested_commit,
    checks: report.checks.length,
    viewports: report.viewport_results.map((item) => item.width),
    evidence_dir: outputDir
  }, null, 2) + '\n');
}
