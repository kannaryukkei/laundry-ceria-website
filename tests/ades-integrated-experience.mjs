import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const baseURL = process.env.PREVIEW_URL ?? 'http://127.0.0.1:4176/';
const browser = await chromium.launch({ headless: true });
const widths = [320, 360, 390, 640, 768, 900, 1024, 1280, 1440];

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.goto(baseURL, { waitUntil: 'networkidle' });

  assert.equal(await page.locator('h1').count(), 1, 'One primary heading');
  assert.equal(await page.locator('main').count(), 1, 'One main landmark');
  assert.equal(await page.locator('ol.process-list > li').count(), 6, 'Six process steps');
  assert.equal(await page.locator('.hours-line').count(), 7, 'Seven opening-day entries');
  assert.equal(await page.locator('img.hero-image-wrap, .hero-image-wrap img').count(), 1, 'Hero illustration is integrated');
  const image = page.locator('.hero-image-wrap img');
  await image.waitFor({ state: 'visible' });
  const imageLoaded = await image.evaluate((img) => img.complete && img.naturalWidth > 0 && img.naturalHeight > 0);
  assert.equal(imageLoaded, true, 'Local hero illustration loads');
  assert.ok((await image.getAttribute('alt'))?.length > 10, 'Hero image has useful alternative text');

  const bodyText = (await page.locator('body').innerText()).replace(/\s+/g, ' ');
  for (const expected of [
    'PREVIEW ONLY', 'DEMO-ONLY', 'NOT_APPROVED', 'Cuci lipat', 'Rp8.000', 'Cuci setrika',
    'Rp12.000', 'Setrika saja', 'Rp7.000', 'Bed cover', 'Rp25.000', 'Selimut', 'Rp20.000',
    'Biasanya 2 hari', 'Kiloan reguler', '10.00', '20.00', '+50%', 'Di atas 5 kg', 'GRATIS',
    '5 kg atau kurang', 'Rp5.000', 'Jl. Melati No. 12', 'ALAMAT FIKTIF', 'NOT CONFIGURED',
  ]) assert.ok(bodyText.includes(expected), 'Required source-backed content: ' + expected);

  assert.equal(await page.locator('a[href*="wa.me"],a[href*="whatsapp.com"],a[href*="api.whatsapp"]').count(), 0, 'No fabricated WhatsApp links');
  assert.equal(await page.locator('iframe,[data-map],a[href*="maps.google"],a[href*="google.com/maps"]').count(), 0, 'No fabricated map or directions');
  assert.equal(await page.locator('.contact-disabled a,.contact-disabled button').count(), 0, 'Unconfigured contact has no active action');
  assert.equal(await page.locator('a[href^="http"]').count(), 0, 'No external business action');
  assert.equal(await page.locator('form').count(), 0, 'No fake booking or submission form');

  const weight = page.locator('#laundry-weight');
  const result = page.locator('.estimate-result strong');
  await weight.fill('3');
  assert.equal((await result.innerText()).trim(), 'Rp24.000', 'Three kg at Rp8,000/kg produces Rp24,000');
  await page.getByLabel(/Express/).check();
  assert.equal((await result.innerText()).trim(), 'Rp36.000', 'Express adds 50 percent');
  await page.getByLabel(/Hitung biaya antar-jemput/).check();
  assert.equal((await result.innerText()).trim(), 'Rp41.000', 'Three kg express plus delivery adds Rp5,000');
  await weight.fill('6');
  assert.equal((await result.innerText()).trim(), 'Rp72.000', 'Six kg express is Rp72,000');
  assert.ok((await page.locator('.estimate-result').innerText()).includes('Antar-jemput gratis'), 'Pickup becomes free above five kg');

  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    const metrics = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
      body: document.body.scrollWidth,
    }));
    assert.equal(metrics.document, metrics.viewport, 'No horizontal overflow at ' + width + 'px');
    assert.ok(metrics.body <= metrics.viewport, 'Body fits at ' + width + 'px');
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  const menuButton = page.locator('button.menu-toggle');
  await menuButton.click();
  await page.waitForFunction(() => document.querySelector('#primary-nav')?.classList.contains('is-open'));
  assert.equal(await page.locator('h1').isVisible(), true, 'Hero remains visible with mobile nav open');
  const menuBox = await page.locator('#primary-nav').boundingBox();
  const heroBox = await page.locator('.hero').boundingBox();
  assert.ok(menuBox && heroBox && heroBox.y >= menuBox.y + menuBox.height, 'Mobile menu pushes hero down, not over it');
  await page.keyboard.press('Escape');
  assert.equal(await menuButton.getAttribute('aria-expanded'), 'false', 'Escape closes the menu');

  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  const tabletMenu = page.locator('button.menu-toggle');
  assert.equal(await tabletMenu.isVisible(), true, 'Tablet portrait uses compact navigation');
  await tabletMenu.click();
  await page.waitForFunction(() => document.querySelector('#primary-nav')?.classList.contains('is-open'));
  const tabletNavBox = await page.locator('#primary-nav').boundingBox();
  const tabletHeroBox = await page.locator('.hero').boundingBox();
  assert.ok(tabletNavBox && tabletHeroBox && tabletHeroBox.y >= tabletNavBox.y + tabletNavBox.height, 'Tablet navigation pushes hero down');
  await page.keyboard.press('Escape');
  assert.equal(await tabletMenu.getAttribute('aria-expanded'), 'false', 'Escape closes tablet navigation');
  assert.deepEqual(pageErrors, [], 'No uncaught browser errors');

  await page.emulateMedia({ reducedMotion: 'reduce' });
  const scrollBehavior = await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior);
  assert.equal(scrollBehavior, 'auto', 'Reduced motion disables smooth scrolling');
  console.log('ADES INTEGRATED EXPERIENCE PASS: content, local image, calculator states, safeguard boundaries, nine responsive widths, mobile navigation and reduced motion.');
} finally {
  await browser.close();
}
