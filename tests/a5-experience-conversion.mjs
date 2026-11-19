import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const baseURL = process.env.PREVIEW_URL ?? 'http://127.0.0.1:4173/';
const browser = await chromium.launch({ headless: true });

const readText = async (locator) => (await locator.innerText()).replace(/\s+/g, ' ').trim();

try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(baseURL, { waitUntil: 'networkidle' });

  assert.equal(await page.locator('.washer-illustration').count(), 1, 'The hero includes one original washer illustration');
  assert.equal(await page.locator('#price-estimator').count(), 1, 'The interactive estimator is present');
  assert.equal(await page.locator('a[href*="wa.me"], a[href*="whatsapp"]').count(), 0, 'No live WhatsApp destination is invented');
  assert.equal(await page.locator('form').count(), 0, 'The estimate is local and does not pretend to submit an order');

  const heroEstimatorLink = page.locator('.hero-actions a[href="#price-estimator"]');
  assert.equal(await heroEstimatorLink.count(), 1, 'Hero CTA points to the price estimator');

  // Five kilograms is within the paid pickup threshold, so the fee remains Rp5,000.
  await page.locator('#estimate-service').selectOption('Cuci lipat');
  await page.locator('#estimate-quantity').fill('5');
  await page.locator('#estimate-pickup').check();
  assert.match(await readText(page.locator('#estimate-total')), /45\.000/, '5 kg at Rp8,000/kg plus Rp5,000 pickup totals Rp45,000');
  const paidPickup = page.locator('.estimate-breakdown > div').filter({ hasText: 'Antar-jemput' }).locator('strong');
  assert.match(await readText(paidPickup), /5\.000/, 'Exactly 5 kg still incurs the paid pickup fee');

  // More than five kilograms makes pickup free; the laundry subtotal remains separate.
  await page.locator('#estimate-quantity').fill('5.1');
  assert.match(await readText(page.locator('#estimate-total')), /40\.800/, '5.1 kg at Rp8,000/kg totals Rp40,800 with free pickup');
  assert.equal(await readText(paidPickup), 'GRATIS', 'Pickup becomes free only above 5 kg');

  // A single-piece service uses its own per-piece rate and does not infer pickup weight.
  await page.getByRole('button', { name: /Laundry satuan/ }).click();
  assert.equal(await page.locator('#estimate-pickup').count(), 0, 'Piece-based services do not infer a weight-based pickup fee');
  await page.locator('#estimate-service').selectOption('Bed cover');
  await page.locator('#estimate-quantity').fill('2');
  assert.match(await readText(page.locator('#estimate-total')), /50\.000/, 'Two bed covers at Rp25,000 each total Rp50,000');

  // Fractional piece counts and zero quantities must not produce a price.
  await page.locator('#estimate-quantity').fill('1.5');
  assert.match(await readText(page.locator('.estimate-validation')), /bilangan bulat/i);
  assert.match(await readText(page.locator('#estimate-total')), /Isi jumlah/i);
  await page.locator('#estimate-quantity').fill('0');
  assert.match(await readText(page.locator('.estimate-validation')), /lebih besar dari nol/i);

  // Reset clears user input and returns to the default category without saving or sending anything.
  await page.getByRole('button', { name: 'Atur ulang simulasi' }).click();
  assert.equal(await page.locator('#estimate-quantity').inputValue(), '');
  assert.equal(await page.locator('#estimate-pickup').isChecked(), false);
  assert.equal(await page.locator('#estimate-service').inputValue(), 'Cuci lipat');
  assert.match(await readText(page.locator('#estimate-total')), /Isi jumlah/i);

  // Reduced-motion mode must stop the animated illustration and scroll reveal effect.
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const motion = await page.evaluate(() => ({
    drumDuration: getComputedStyle(document.querySelector('.washer-drum')).animationDuration,
    machineDuration: getComputedStyle(document.querySelector('.washer-machine')).animationDuration,
  }));
  const maxDurationMs = (value) => {
    const parsed = Number.parseFloat(value);
    return value.endsWith('ms') ? parsed : parsed * 1000;
  };
  assert.ok(maxDurationMs(motion.drumDuration.split(',')[0].trim()) <= 0.02, 'Drum motion respects reduced motion');
  assert.ok(maxDurationMs(motion.machineDuration.split(',')[0].trim()) <= 0.02, 'Machine float respects reduced motion');

  // The new interactive section must still reflow on the narrowest supported viewport.
  await page.setViewportSize({ width: 320, height: 900 });
  const viewportAudit = await page.evaluate(() => {
    const viewport = document.documentElement.clientWidth;
    const offenders = Array.from(document.body.querySelectorAll('*')).map((element) => {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return {
        tag: element.tagName.toLowerCase(),
        id: element.id,
        className: typeof element.className === 'string' ? element.className : '',
        text: (element.textContent || '').replace(/\\s+/g, ' ').trim().slice(0, 70),
        left: Math.round(rect.left),
        right: Math.round(rect.right),
        width: Math.round(rect.width),
        scrollWidth: element.scrollWidth,
        whiteSpace: style.whiteSpace,
        position: style.position,
      };
    }).filter((item) => item.right > viewport + 1 || item.left < -1)
      .sort((a, b) => b.right - a.right)
      .slice(0, 18);
    return {
      viewport,
      document: document.documentElement.scrollWidth,
      body: document.body.scrollWidth,
      offenders,
    };
  });
  assert.equal(
    viewportAudit.document,
    viewportAudit.viewport,
    `No horizontal document overflow at 320px: ${JSON.stringify(viewportAudit)}`,
  );
  assert.ok(viewportAudit.body <= viewportAudit.viewport, 'Body fits the 320px viewport');

  console.log('A5 EXPERIENCE PASS: hero interaction path, arithmetic estimates, pickup threshold, piece pricing, reset, no fake conversion, reduced motion, and 320px reflow.');
} finally {
  await browser.close();
}
