import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const baseURL = process.env.PREVIEW_URL ?? 'http://127.0.0.1:4173/';
const browser = await chromium.launch({ headless: true });
const widths = [320, 360, 390, 640, 768, 900, 1024, 1280, 1440];

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const consoleErrors = [];
  page.on('pageerror', error => consoleErrors.push(error.message));
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  const bodyText = (await page.locator('body').innerText()).replace(/\s+/g, ' ');
  for (const expected of ['PREVIEW ONLY','DEMO-ONLY','NOT_APPROVED','Cuci lipat','Rp8.000','Cuci setrika','Rp12.000','Setrika saja','Rp7.000','Bed cover','Rp25.000','Selimut','Rp20.000','Biasanya 2 hari','10.00','20.00','+50%','Di atas 5 kg','GRATIS','5 kg atau kurang','Rp5.000','Jl. Melati No. 12','ALAMAT FIKTIF','NOT CONFIGURED']) {
    assert.ok(bodyText.includes(expected), 'Required source-backed content is present: ' + expected);
  }
  assert.equal(await page.locator('a[href*="wa.me"], a[href*="whatsapp.com"], a[href*="api.whatsapp"]').count(), 0, 'No WhatsApp destination is fabricated');
  assert.equal(await page.locator('iframe, [data-map], a[href*="maps.google"], a[href*="google.com/maps"]').count(), 0, 'No real map or directions are created');
  assert.equal(await page.locator('.contact-disabled a, .contact-disabled button').count(), 0, 'Unconfigured WhatsApp remains non-interactive');
  assert.equal(await page.locator('a[href^="http"]').count(), 0, 'No external business action is exposed');
  assert.equal(await page.locator('h1').count(), 1, 'Page has one primary heading');
  assert.equal(await page.locator('main').count(), 1, 'Page has one main landmark');
  assert.equal(await page.locator('ol.process-list > li').count(), 6, 'All six supplied process steps are present');
  assert.equal(await page.locator('.hours-line').count(), 7, 'All seven opening-day entries are present');
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(80);
    const metrics = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, document: document.documentElement.scrollWidth, body: document.body.scrollWidth }));
    assert.equal(metrics.document, metrics.viewport, 'No horizontal overflow at ' + width + 'px');
    assert.ok(metrics.body <= metrics.viewport, 'Body fits viewport at ' + width + 'px');
  }
  assert.deepEqual(consoleErrors, [], 'No uncaught browser runtime errors');
  console.log('TEST-02 CONTRACT PASS: source content, synthetic-data safeguards, no fake conversion, semantic structure, and nine responsive widths.');
} finally { await browser.close(); }
