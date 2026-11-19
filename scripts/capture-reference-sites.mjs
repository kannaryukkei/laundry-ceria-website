import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.resolve('artifacts/reference-sites');
await mkdir(outputDirectory, { recursive: true });

const references = [
  { name: 'qnc-home', url: 'https://www.qnclaundry.net/' },
  { name: 'qnc-pricing', url: 'https://www.qnclaundry.net/layanan-dan-harga' },
  { name: 'bloom-pricing', url: 'https://www.bloomlaundry.id/price-list/' },
  { name: 'yanti-home', url: 'https://yantilaundry.web.id/' },
];

const viewports = [
  { name: 'desktop', width: 1440, height: 900, fullPage: true },
  { name: 'tablet', width: 768, height: 1024, fullPage: false },
  { name: 'mobile', width: 390, height: 844, fullPage: true },
];

const browser = await chromium.launch({ headless: true });
const captures = [];

try {
  for (const reference of references) {
    for (const viewport of viewports) {
      const page = await browser.newPage({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: 1,
      });

      const pageErrors = [];
      page.on('pageerror', (error) => pageErrors.push(error.message));

      try {
        const response = await page.goto(reference.url, {
          waitUntil: 'domcontentloaded',
          timeout: 45000,
        });

        await page.evaluate(() =>
          Promise.race([
            document.fonts.ready.then(() => true),
            new Promise((resolve) => setTimeout(resolve, 5000)),
          ]),
        );
        await page.waitForTimeout(900);

        const fileName = `${reference.name}-${viewport.name}.png`;
        const screenshotPath = path.join(outputDirectory, fileName);
        await page.screenshot({
          path: screenshotPath,
          fullPage: viewport.fullPage,
          animations: 'disabled',
        });

        captures.push({
          reference: reference.name,
          requestedUrl: reference.url,
          finalUrl: page.url(),
          pageTitle: await page.title(),
          viewport: `${viewport.width}x${viewport.height}`,
          fullPage: viewport.fullPage,
          httpStatus: response?.status() ?? null,
          screenshot: fileName,
          pageErrors,
          result: 'captured',
        });
      } catch (error) {
        captures.push({
          reference: reference.name,
          requestedUrl: reference.url,
          viewport: `${viewport.width}x${viewport.height}`,
          screenshot: null,
          pageErrors,
          result: 'failed',
          error: error instanceof Error ? error.message : String(error),
        });
      } finally {
        await page.close();
      }
    }
  }
} finally {
  await browser.close();
}

const manifestPath = path.join(outputDirectory, 'capture-manifest.json');
await writeFile(
  manifestPath,
  JSON.stringify(
    {
      createdAt: new Date().toISOString(),
      purpose: 'Public design reference screenshots for internal Laundry Ceria benchmark A2',
      references,
      viewports,
      captures,
    },
    null,
    2,
  ),
);

const successfulSites = new Set(
  captures.filter((capture) => capture.result === 'captured').map((capture) => capture.reference),
);

console.log(`Captured ${captures.filter((capture) => capture.result === 'captured').length} of ${captures.length} reference views.`);
console.log(`Successfully inspected ${successfulSites.size} reference pages.`);
console.log(`Evidence folder: ${outputDirectory}`);

if (successfulSites.size < 2) {
  console.error('Reference capture blocked: fewer than two reference pages could be inspected.');
  process.exitCode = 1;
}
