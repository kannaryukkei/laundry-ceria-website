import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const base = (process.env.PREVIEW_URL || 'http://127.0.0.1:4176/').replace(/\/$/, '');
const out = path.resolve('artifacts/ades-integrated');
await mkdir(out, { recursive: true });
const viewports = [
  { id: 'desktop-1440', width: 1440, height: 1000 },
  { id: 'laptop-1024', width: 1024, height: 900 },
  { id: 'tablet-768', width: 768, height: 1024 },
  { id: 'mobile-390', width: 390, height: 844 },
  { id: 'mobile-360', width: 360, height: 800 },
  { id: 'small-mobile-320', width: 320, height: 800 },
];
const browser = await chromium.launch({ headless: true });
const results = [];
try {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    try {
      const response = await page.goto(base, { waitUntil: 'networkidle', timeout: 30000 });
      const metrics = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        pageHeight: document.documentElement.scrollHeight,
        h1: document.querySelector('h1')?.innerText.replace(/\s+/g, ' ').trim(),
        imageLoaded: [...document.images].map(img => ({ alt: img.alt, loaded: img.complete && img.naturalWidth > 0 })),
      }));
      const name = 'integrated-' + viewport.id + '.png';
      await page.screenshot({ path: path.join(out, name), fullPage: true, animations: 'disabled' });
      let menuState = 'not-applicable';
      if (viewport.width <= 900) {
        const menu = page.locator('.menu-toggle');
        await menu.click();
        menuState = await menu.getAttribute('aria-expanded');
        await page.screenshot({ path: path.join(out, 'integrated-' + viewport.id + '-menu.png'), fullPage: false, animations: 'disabled' });
        await page.keyboard.press('Escape');
      }
      if (viewport.width === 1440 || viewport.width === 390) {
        await page.locator('#laundry-weight').fill('3');
        await page.getByLabel(/Express/).check();
        await page.getByLabel(/Hitung biaya antar-jemput/).check();
        await page.screenshot({ path: path.join(out, 'integrated-' + viewport.id + '-estimator.png'), fullPage: false, animations: 'disabled' });
      }
      results.push({ viewport, http: response?.status() ?? null, screenshot: name, metrics, menuState, pageErrors: errors });
    } catch (error) {
      results.push({ viewport, status: 'BLOCKED', error: String(error), pageErrors: errors });
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
await writeFile(path.join(out, 'results.json'), JSON.stringify(results, null, 2));
const lines = ['# ADES Integrated Experience — Playwright captures', '', '| Viewport | HTTP | Overflow | Hero image | Mobile nav |', '|---:|---:|---|---|---|'];
for (const item of results) {
  lines.push('| ' + item.viewport.width + 'px | ' + (item.http ?? item.status ?? '—') + ' | ' + (item.metrics ? (item.metrics.scrollWidth > item.metrics.viewport ? 'Yes' : 'No') : 'Not measured') + ' | ' + (item.metrics?.imageLoaded?.every(image => image.loaded) ? 'Loaded' : 'Check') + ' | ' + (item.menuState ?? '—') + ' |');
}
lines.push('', 'These captures are evidence for visual review, not proof of aesthetics or accessibility conformance.');
await writeFile(path.join(out, 'README.md'), lines.join('\n'));
console.log('ADES integrated screenshot capture complete.');
