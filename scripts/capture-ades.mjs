import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const base = (process.env.ADES_PREVIEW_URL || 'http://127.0.0.1:4175').replace(/\/$/, '');
const out = path.resolve('artifacts/ades-exploration');
await mkdir(out, { recursive: true });
const concepts = [
  { id: 'a-counter', path: '/ades/concept-a-counter.html' },
  { id: 'b-textile', path: '/ades/concept-b-textile.html' },
  { id: 'c-neighborhood', path: '/ades/concept-c-neighborhood.html' },
];
const viewports = [
  { id: 'desktop-1440', width: 1440, height: 1000 },
  { id: 'tablet-768', width: 768, height: 1024 },
  { id: 'mobile-390', width: 390, height: 844 },
  { id: 'small-mobile-320', width: 320, height: 800 },
];
const browser = await chromium.launch({ headless: true });
const results = [];
try {
  for (const concept of concepts) {
    for (const viewport of viewports) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, reducedMotion: 'reduce' });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      try {
        const response = await page.goto(base + concept.path, { waitUntil: 'networkidle', timeout: 30000 });
        const metrics = await page.evaluate(() => ({
          title: document.title,
          h1: document.querySelector('h1')?.innerText.replace(/\s+/g, ' ').trim() || null,
          viewportWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          pageHeight: document.documentElement.scrollHeight,
          brokenAnchors: [...document.querySelectorAll('a[href^="#"]')].map(a => a.getAttribute('href')).filter(h => h.length > 1 && !document.querySelector(h)),
          previewVisible: document.body.innerText.includes('PREVIEW ONLY') && document.body.innerText.includes('DEMO-ONLY'),
          externalLinks: [...document.querySelectorAll('a[href^="http"]')].map(a => a.href),
          whatsappLinks: document.querySelectorAll('a[href*="wa.me"],a[href*="whatsapp.com"]').length,
        }));
        const file = concept.id + '-' + viewport.id + '.png';
        await page.screenshot({ path: path.join(out, file), fullPage: true, animations: 'disabled' });
        let mobileMenu = 'NOT_APPLICABLE';
        if (viewport.width <= 820) {
          const button = page.locator('button.menu');
          await button.click();
          mobileMenu = await button.getAttribute('aria-expanded');
          await page.screenshot({ path: path.join(out, concept.id + '-' + viewport.id + '-menu-open.png'), fullPage: false, animations: 'disabled' });
          await page.keyboard.press('Escape');
          if (await button.getAttribute('aria-expanded') === 'true') await button.click();
        }
        results.push({ concept: concept.id, viewport, httpStatus: response?.status() ?? null, screenshot: file, metrics, mobileMenu, pageErrors: errors, overflow: metrics.scrollWidth > metrics.viewportWidth + 1 });
      } catch (error) {
        results.push({ concept: concept.id, viewport, status: 'BLOCKED', error: String(error), pageErrors: errors });
      } finally {
        await page.close();
      }
    }
  }
} finally {
  await browser.close();
}
await writeFile(path.join(out, 'results.json'), JSON.stringify(results, null, 2));
const lines = [
  '# ADES Test 03 — automated capture evidence',
  '',
  'These are candidate previews, not final visual acceptance. Review the screenshots at useful scale.',
  '',
  '| Candidate | Viewport | HTTP | Horizontal overflow | Mobile menu | Broken anchors |',
  '|---|---:|---:|---|---|---:|',
];
for (const item of results) {
  lines.push('| ' + item.concept + ' | ' + item.viewport.width + 'px | ' + (item.httpStatus ?? item.status ?? '—') + ' | ' + (item.overflow === undefined ? 'Not measured' : item.overflow ? 'Yes' : 'No') + ' | ' + (item.mobileMenu ?? '—') + ' | ' + (item.metrics?.brokenAnchors?.length ?? '—') + ' |');
}
lines.push('', 'Automated capture does not judge visual quality, accessibility conformance, or business effectiveness.');
await writeFile(path.join(out, 'README.md'), lines.join('\n'));
console.log('ADES CAPTURE COMPLETE: ' + results.length + ' viewport records.');
