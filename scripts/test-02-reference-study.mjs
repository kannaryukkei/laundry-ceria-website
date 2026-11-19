import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const output = path.resolve('artifacts/test-02-reference-study');
await mkdir(output, { recursive: true });
const references = [
  { id: 'poplin-home', url: 'https://poplin.co/', purpose: 'service proposition and pricing disclosure' },
  { id: 'qnc-home', url: 'https://www.qnclaundry.net/', purpose: 'local laundry information hierarchy' },
  { id: 'bloom-pricing', url: 'https://www.bloomlaundry.id/price-list/', purpose: 'service category and price-row scanning' },
];
const viewports = [{ id: 'desktop', width: 1440, height: 960 }, { id: 'tablet', width: 768, height: 1024 }, { id: 'mobile', width: 390, height: 844 }];
const browser = await chromium.launch({ headless: true });
const evidence = [];
try {
  for (const reference of references) {
    for (const viewport of viewports) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      try {
        const response = await page.goto(reference.url, { waitUntil: 'domcontentloaded', timeout: 45000 });
        await page.waitForLoadState('networkidle', { timeout: 6000 }).catch(() => {});
        await page.waitForTimeout(500);
        const measurements = await page.evaluate(() => {
          const visible = element => { if (!element) return false; const rect = element.getBoundingClientRect(); const style = getComputedStyle(element); return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden'; };
          const box = element => { if (!element) return null; const rect = element.getBoundingClientRect(); return { x: Math.round(rect.x), y: Math.round(rect.y), width: Math.round(rect.width), height: Math.round(rect.height) }; };
          const heading = document.querySelector('h1') || document.querySelector('h2');
          const header = document.querySelector('header') || document.querySelector('nav');
          const hero = heading && (heading.closest('section, header, main, article') || heading.parentElement);
          const links = Array.from(document.querySelectorAll('a,button')).filter(visible).slice(0, 16);
          return { viewport: { width: innerWidth, height: innerHeight }, document: { clientWidth: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth, scrollHeight: document.documentElement.scrollHeight }, title: document.title, header: box(header), heading: heading ? { text: (heading.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 120), box: box(heading), fontFamily: getComputedStyle(heading).fontFamily, fontSize: getComputedStyle(heading).fontSize, lineHeight: getComputedStyle(heading).lineHeight, color: getComputedStyle(heading).color } : null, hero: box(hero), visibleImages: Array.from(document.querySelectorAll('img')).filter(visible).slice(0, 8).map(img => ({ alt: img.alt, box: box(img), loaded: img.complete && img.naturalWidth > 0 })), visibleActions: links.map(el => ({ tag: el.tagName.toLowerCase(), text: (el.innerText || el.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 60), href: el.getAttribute('href') })), horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1 };
        });
        const file = reference.id + '-' + viewport.id + '.png';
        await page.screenshot({ path: path.join(output, file), fullPage: true, animations: 'disabled' });
        evidence.push({ reference: reference.id, url: reference.url, purpose: reference.purpose, viewport, status: response ? response.status() : null, finalUrl: page.url(), screenshot: file, measurements, pageErrors: errors });
      } catch (error) {
        evidence.push({ reference: reference.id, url: reference.url, purpose: reference.purpose, viewport, status: 'BLOCKED', error: String(error), pageErrors: errors });
      } finally { await page.close(); }
    }
  }
} finally { await browser.close(); }
await writeFile(path.join(output, 'measurements.json'), JSON.stringify(evidence, null, 2));
const lines = ['# Test 02 — Reference capture', '', 'Automated browser captures are observational inputs, not design approval. A failed/unavailable URL is recorded as BLOCKED.', '', '| Reference | Viewport | HTTP | Overflow | H1 | Screenshot |', '|---|---:|---:|---|---|---|'];
for (const item of evidence) lines.push('| ' + item.reference + ' | ' + item.viewport.width + 'px | ' + item.status + ' | ' + (item.measurements ? (item.measurements.horizontalOverflow ? 'Yes' : 'No') : 'Not measured') + ' | ' + (item.measurements && item.measurements.heading ? item.measurements.heading.text : 'Not available') + ' | ' + (item.screenshot || 'Not captured') + ' |');
lines.push('', 'Inspect the screenshots before drawing visual conclusions. This capture does not establish conversion performance, accessibility, or service quality.');
await writeFile(path.join(output, 'README.md'), lines.join('\n'));
console.log('TEST-02 REFERENCE CAPTURE: ' + evidence.length + ' viewport records written.');