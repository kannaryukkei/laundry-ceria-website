import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const baseURL = process.env.PREVIEW_URL ?? 'http://127.0.0.1:4173/';
const browser = await chromium.launch({ headless: true });
const widths = [320, 360, 390, 640, 768, 900, 1024, 1280, 1440];

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const consoleErrors = [];
  page.on('pageerror', error => consoleErrors.push(error.message));
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  const bodyText = (await page.locator('body').innerText()).replace(/\s+/g, ' ');
  for (const expected of ['PREVIEW ONLY','DEMO-ONLY','NOT_APPROVED','penghuni kos dan keluarga muda','Cuci lipat','Rp8.000','Cuci setrika','Rp12.000','Setrika saja','Rp7.000','Bed cover','Rp25.000','Selimut','Rp20.000','Biasanya 2 hari','Kiloan reguler','10.00','20.00','+50%','Di atas 5 kg','GRATIS','5 kg atau kurang','Rp5.000','Jl. Melati No. 12','ALAMAT FIKTIF','NOT CONFIGURED']) {
    assert.ok(bodyText.includes(expected), 'Required source-backed content is present: ' + expected);
  }
  assert.ok(!bodyText.includes('Waktu reguler'), 'Regular turnaround is not generalized to all services');
  for (const unsupported of ['testimoni', 'penghargaan', 'rating pelanggan']) assert.ok(!bodyText.toLowerCase().includes(unsupported), 'No unsupported social proof: ' + unsupported);
  assert.equal(await page.locator('a[href*="wa.me"], a[href*="whatsapp.com"], a[href*="api.whatsapp"]').count(), 0, 'No WhatsApp destination is fabricated');
  assert.equal(await page.locator('iframe, [data-map], a[href*="maps.google"], a[href*="google.com/maps"]').count(), 0, 'No real map or directions are created');
  assert.equal(await page.locator('.contact-disabled a, .contact-disabled button').count(), 0, 'Unconfigured WhatsApp remains non-interactive');
  assert.equal(await page.locator('a[href^="http"]').count(), 0, 'No external business action is exposed');
  assert.equal(await page.locator('h1').count(), 1, 'Page has one primary heading');
  assert.equal(await page.locator('main').count(), 1, 'Page has one main landmark');
  assert.equal(await page.locator('ol.process-list > li').count(), 6, 'All six supplied process steps are present');
  assert.equal(await page.locator('.hours-line').count(), 7, 'All seven opening-day entries are present');
  const hoursText = (await page.locator('.hours-sheet').innerText()).replace(/\s+/g, ' ');
  for (const day of ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']) assert.ok(hoursText.includes(day + ' 08.00–20.00'), 'Correct weekday hours: ' + day);
  assert.ok(hoursText.includes('Minggu 09.00–15.00'), 'Correct Sunday hours');
  assert.equal(await page.locator('form').count(), 0, 'No fake booking or submission form is present');
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(80);
    const metrics = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, document: document.documentElement.scrollWidth, body: document.body.scrollWidth }));
    assert.equal(metrics.document, metrics.viewport, 'No horizontal overflow at ' + width + 'px');
    assert.ok(metrics.body <= metrics.viewport, 'Body fits viewport at ' + width + 'px');
  }
  assert.deepEqual(consoleErrors, [], 'No uncaught browser runtime errors');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.locator('button.menu-toggle').click();
  await page.waitForFunction(() => document.querySelector('#primary-nav')?.classList.contains('is-open'));
  assert.equal(await page.locator('h1').isVisible(), true, 'Hero heading remains visible when mobile navigation opens');
  const menuBox = await page.locator('#primary-nav').boundingBox();
  const heroBox = await page.locator('.hero').boundingBox();
  assert.ok(menuBox && heroBox && heroBox.y >= menuBox.y + menuBox.height, 'Expanded mobile menu pushes hero down instead of covering it');
  const interactionDirectory = path.resolve('artifacts/test-02-interaction');
  await mkdir(interactionDirectory, { recursive: true });
  await page.screenshot({ path: path.join(interactionDirectory, 'mobile-menu-open-390.png'), fullPage: false, animations: 'disabled' });
  console.log('TEST-02 CONTRACT PASS: source content, synthetic-data safeguards, no fake conversion, semantic structure, nine responsive widths, and mobile menu capture.');
} finally { await browser.close(); }
