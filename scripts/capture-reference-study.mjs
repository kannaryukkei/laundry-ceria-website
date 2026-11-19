import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.resolve('artifacts/a3-reference-study');
await mkdir(outputDirectory, { recursive: true });

const references = [
  { id: 'qnc-home', url: 'https://www.qnclaundry.net/' },
  { id: 'qnc-pricing', url: 'https://www.qnclaundry.net/layanan-dan-harga' },
  { id: 'bloom-pricing', url: 'https://www.bloomlaundry.id/price-list/' },
  { id: 'yanti-home', url: 'https://yantilaundry.web.id/' },
];

const viewports = [
  { id: 'desktop', width: 1440, height: 900, fullPage: true },
  { id: 'tablet', width: 768, height: 1024, fullPage: false },
  { id: 'mobile', width: 390, height: 844, fullPage: true },
];

const browser = await chromium.launch({ headless: true });
const captures = [];
const measurements = [];

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
        await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
        const contentReady = await page
          .locator('h1, main, [role="main"]')
          .first()
          .waitFor({ state: 'visible', timeout: 10000 })
          .then(() => true)
          .catch(() => false);

        await page.evaluate(() =>
          Promise.race([
            document.fonts.ready.then(() => true),
            new Promise((resolve) => setTimeout(resolve, 5000)),
          ]),
        );
        await page.waitForTimeout(700);
        await page.evaluate(() => window.scrollTo(0, 0));

        const filePrefix = reference.id + '-' + viewport.id;
        await page.screenshot({
          path: path.join(outputDirectory, filePrefix + '.png'),
          fullPage: viewport.fullPage,
          animations: 'disabled',
        });

        const pageMetrics = await page.evaluate(({ referenceId, viewportId }) => {
          const cleanText = (value) => (value || '').replace(/\s+/g, ' ').trim().slice(0, 90);
          const visible = (element) => {
            if (!element) return false;
            const rect = element.getBoundingClientRect();
            const style = getComputedStyle(element);
            return rect.width > 0 && rect.height > 0 &&
              style.display !== 'none' && style.visibility !== 'hidden' &&
              Number(style.opacity || 1) > 0;
          };
          const box = (element) => {
            if (!element) return null;
            const rect = element.getBoundingClientRect();
            return {
              x: Math.round((rect.x + window.scrollX) * 10) / 10,
              y: Math.round((rect.y + window.scrollY) * 10) / 10,
              width: Math.round(rect.width * 10) / 10,
              height: Math.round(rect.height * 10) / 10,
              right: Math.round((rect.right + window.scrollX) * 10) / 10,
              bottom: Math.round((rect.bottom + window.scrollY) * 10) / 10,
            };
          };
          const styleOf = (element) => {
            if (!element) return null;
            const style = getComputedStyle(element);
            return {
              display: style.display,
              position: style.position,
              fontFamily: style.fontFamily,
              fontSize: style.fontSize,
              fontWeight: style.fontWeight,
              lineHeight: style.lineHeight,
              letterSpacing: style.letterSpacing,
              textAlign: style.textAlign,
              color: style.color,
              backgroundColor: style.backgroundColor,
              border: style.border,
              borderRadius: style.borderRadius,
              padding: style.padding,
              margin: style.margin,
              gap: style.gap,
              columnGap: style.columnGap,
              rowGap: style.rowGap,
              gridTemplateColumns: style.gridTemplateColumns,
              objectFit: style.objectFit,
              objectPosition: style.objectPosition,
            };
          };
          const summary = (element) => {
            if (!element) return null;
            return {
              tag: element.tagName.toLowerCase(),
              text: cleanText(element.innerText || element.getAttribute('aria-label') || ''),
              box: box(element),
              style: styleOf(element),
            };
          };

          const semanticHeading = document.querySelector('h1');
          const heading = semanticHeading || document.querySelector('h2, h3');
          let hero = heading || document.querySelector('main, [role="main"]') ||
            document.querySelector('[class*="hero" i]') || document.body;
          let heroFound = false;
          let ancestor = heading || hero;
          for (let depth = 0; ancestor && depth < 7; depth += 1) {
            const rect = ancestor.getBoundingClientRect();
            const hasImage = Boolean(ancestor.querySelector('img, picture, video, svg'));
            if (hasImage && rect.width >= window.innerWidth * 0.48 &&
                rect.height >= 150 && rect.height <= 1400) {
              hero = ancestor;
              heroFound = true;
              break;
            }
            ancestor = ancestor.parentElement;
          }

          const headingNodes = Array.from(document.querySelectorAll('h1, h2, h3'))
            .filter(visible)
            .slice(0, 24);
          const sections = Array.from(document.querySelectorAll(
            'header, main, section, article, footer, [class*="container"], [class*="hero"], [class*="price"]',
          ))
            .filter(visible)
            .slice(0, 36);
          const images = Array.from(document.querySelectorAll('img'))
            .filter(visible)
            .slice(0, 18)
            .map((image) => ({
              ...summary(image),
              naturalWidth: image.naturalWidth,
              naturalHeight: image.naturalHeight,
              currentSrcDomain: (() => {
                try { return new URL(image.currentSrc || image.src).hostname; }
                catch { return null; }
              })(),
            }));
          const actions = Array.from(document.querySelectorAll('a, button, [role="button"]'))
            .filter(visible)
            .slice(0, 24)
            .map((element) => ({
              ...summary(element),
              href: element.tagName.toLowerCase() === 'a' ? element.getAttribute('href') : null,
            }));
          const colorSamples = [document.body, document.documentElement,
            document.querySelector('header'), document.querySelector('nav'),
            document.querySelector('main'), ...Array.from(document.querySelectorAll('section')).slice(0, 8),
            document.querySelector('footer'), heading];
          const palette = [];
          for (const element of colorSamples.filter(Boolean)) {
            const s = getComputedStyle(element);
            const item = { selectorHint: element.tagName.toLowerCase(), color: s.color, backgroundColor: s.backgroundColor };
            const key = JSON.stringify(item);
            if (!palette.some((existing) => JSON.stringify(existing) === key)) palette.push(item);
          }

          return {
            referenceId,
            viewportId,
            viewport: { width: window.innerWidth, height: window.innerHeight },
            document: {
              clientWidth: document.documentElement.clientWidth,
              scrollWidth: document.documentElement.scrollWidth,
              scrollHeight: document.documentElement.scrollHeight,
              horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
            },
            pageBackground: getComputedStyle(document.body).backgroundColor,
            header: summary(document.querySelector('header')),
            navigation: summary(document.querySelector('nav')),
            hero: { foundImageAncestor: heroFound, element: summary(hero) },
            hasSemanticH1: Boolean(semanticHeading),
            mainHeading: heading ? summary(heading) : null,
            headings: headingNodes.map(summary),
            measuredSections: sections.map(summary),
            images,
            actions,
            palette,
          };
        }, { referenceId: reference.id, viewportId: viewport.id });

        measurements.push({
          ...pageMetrics,
          pageTitle: await page.title(),
          finalUrl: page.url(),
          httpStatus: response?.status() ?? null,
          contentReady,
          pageErrors,
        });

        // A separate crop makes the opening composition easier to inspect than a scaled full-page image.
        const heroCrop = await page.evaluate(() => {
          const heading = document.querySelector('h1, h2, h3');
          let candidate = heading || document.querySelector('main, [role="main"]') ||
            document.querySelector('[class*="hero" i]') || document.body;
          let ancestor = heading || candidate;
          for (let depth = 0; ancestor && depth < 7; depth += 1) {
            const rect = ancestor.getBoundingClientRect();
            const hasImage = Boolean(ancestor.querySelector('img, picture, video, svg'));
            if (hasImage && rect.width >= window.innerWidth * 0.48 &&
                rect.height >= 150 && rect.height <= 1400) {
              candidate = ancestor;
              break;
            }
            ancestor = ancestor.parentElement;
          }
          const rect = candidate.getBoundingClientRect();
          const left = Math.max(0, Math.floor(rect.left));
          const top = Math.max(0, Math.floor(rect.top));
          const right = Math.min(window.innerWidth, Math.ceil(rect.right));
          const bottom = Math.min(window.innerHeight, Math.ceil(rect.bottom));
          if (right <= left || bottom <= top) return null;
          return { x: left, y: top, width: right - left, height: bottom - top };
        });
        if (heroCrop && heroCrop.width > 10 && heroCrop.height > 10) {
          await page.screenshot({
            path: path.join(outputDirectory, filePrefix + '-opening-crop.png'),
            clip: heroCrop,
            animations: 'disabled',
          });
        }

        captures.push({
          reference: reference.id,
          requestedUrl: reference.url,
          finalUrl: page.url(),
          viewport: viewport.width + 'x' + viewport.height,
          contentReady,
          httpStatus: response?.status() ?? null,
          fullPage: viewport.fullPage,
          pageErrors,
          result: 'captured',
        });
      } catch (error) {
        captures.push({
          reference: reference.id,
          requestedUrl: reference.url,
          viewport: viewport.width + 'x' + viewport.height,
          contentReady: false,
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

const successfulReferences = new Set(
  captures.filter((capture) => capture.result === 'captured').map((capture) => capture.reference),
);
const report = {
  createdAt: new Date().toISOString(),
  purpose: 'A3 rendered-reference measurement and screenshot evidence; not a source-code copy',
  references,
  viewports,
  captures,
  measurements,
  outcome: successfulReferences.size >= 2 ? 'PARTLY REVIEWED OR VISUALLY REVIEWED' : 'BLOCKED',
};
await writeFile(path.join(outputDirectory, 'reference-study.json'), JSON.stringify(report, null, 2));
await writeFile(path.join(outputDirectory, 'capture-manifest.json'), JSON.stringify({
  createdAt: report.createdAt,
  purpose: report.purpose,
  successfulReferencePages: Array.from(successfulReferences),
  expectedCaptures: references.length * viewports.length,
  successfulCaptures: captures.filter((capture) => capture.result === 'captured').length,
  measurementRecords: measurements.length,
  viewports,
  references,
}, null, 2));

console.log('A3 reference captures: ' + captures.filter((capture) => capture.result === 'captured').length + '/' + captures.length);
console.log('A3 measured pages: ' + successfulReferences.size + '/' + references.length);
console.log('Evidence: ' + outputDirectory);

if (successfulReferences.size < 2) {
  console.error('A3 reference study blocked: fewer than two reference pages were captured.');
  process.exitCode = 1;
}
