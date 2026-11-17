import { mkdir } from 'node:fs/promises';
import path from 'node:path';

export const DEFAULT_SECTION_CAPTURE_LIMIT = 12;

export function safeVisualSlug(value) {
  const slug = String(value ?? '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48)
    .replace(/-+$/g, '');

  return slug || 'section';
}

export function planSectionCapture({
  markedCount = 0,
  semanticCount = 0,
  limit = DEFAULT_SECTION_CAPTURE_LIMIT,
} = {}) {
  const explicitCount = Math.max(0, Number(markedCount) || 0);
  const fallbackCount = Math.max(0, Number(semanticCount) || 0);
  const useExplicitMarkers = explicitCount > 0;
  const total = useExplicitMarkers ? explicitCount : fallbackCount;
  const normalizedLimit = Math.max(0, Number.isInteger(limit) ? limit : DEFAULT_SECTION_CAPTURE_LIMIT);

  return {
    selector: useExplicitMarkers ? 'main [data-qa-visual-section]' : fallbackCount > 0 ? 'main > section' : null,
    strategy: useExplicitMarkers ? 'explicit-markers' : fallbackCount > 0 ? 'semantic-sections' : 'none',
    total,
    captureCount: Math.min(total, normalizedLimit),
    omitted: Math.max(0, total - normalizedLimit),
  };
}

function relativeArtifactPath(artifactPath, destination) {
  return path.relative(artifactPath, destination).split(path.sep).join('/');
}

async function waitForPaint(page) {
  await page.evaluate(() => new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  }));
}

/**
 * Capture human/AI-reviewable screenshots from the rendered page.
 * This adds evidence only; it does not score visual quality or change gate status.
 */
export async function captureVisualEvidence({
  page,
  url,
  artifactPath,
  report,
  log = () => {},
  sectionLimit = DEFAULT_SECTION_CAPTURE_LIMIT,
}) {
  const viewports = [
    { key: 'mobile', width: 390, height: 844 },
    { key: 'tablet', width: 768, height: 900 },
    { key: 'desktop', width: 1440, height: 900 },
  ];

  report.visualEvidence ??= {
    schemaVersion: 1,
    viewportScreenshots: [],
    sectionScreenshots: [],
    sectionCaptureSummaries: [],
    sectionCaptureLimitPerViewport: sectionLimit,
  };

  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    await page.evaluate(() => document.fonts?.ready);

    const viewportDestination = path.join(
      artifactPath,
      'screenshots',
      `viewport-${viewport.key}-${viewport.width}.png`,
    );
    await mkdir(path.dirname(viewportDestination), { recursive: true });
    await page.screenshot({
      path: viewportDestination,
      fullPage: false,
      animations: 'disabled',
    });

    report.visualEvidence.viewportScreenshots.push({
      viewport: viewport.key,
      width: viewport.width,
      height: viewport.height,
      state: 'page-top',
      path: viewportDestination,
      relativePath: relativeArtifactPath(artifactPath, viewportDestination),
    });
    log('Captured ' + viewport.key + ' viewport screenshot: ' + viewportDestination);

    if (viewport.width !== 390 && viewport.width !== 1440) continue;

    const markedSections = page.locator('main [data-qa-visual-section]');
    const markedCount = await markedSections.count();
    const semanticCount = markedCount === 0 ? await page.locator('main > section').count() : 0;
    const plan = planSectionCapture({ markedCount, semanticCount, limit: sectionLimit });

    report.visualEvidence.sectionCaptureSummaries.push({
      viewport: viewport.key,
      width: viewport.width,
      selector: plan.selector,
      strategy: plan.strategy,
      sectionsFound: plan.total,
      captured: plan.captureCount,
      omitted: plan.omitted,
      status: plan.total === 0 ? 'NO_SEMANTIC_SECTIONS' : 'CAPTURED',
    });

    if (!plan.selector) {
      log('No semantic or explicitly marked main sections found at ' + viewport.width + 'px; page-level evidence retained.');
      continue;
    }

    const sections = page.locator(plan.selector);
    for (let index = 0; index < plan.captureCount; index += 1) {
      const section = sections.nth(index);
      const details = await section.evaluate((element) => {
        const heading = element.querySelector('h1, h2, h3, h4, h5, h6');
        const label = element.getAttribute('data-qa-visual-section')
          || element.getAttribute('aria-label')
          || element.id
          || heading?.textContent
          || '';
        return {
          label: String(label).replace(/\s+/g, ' ').trim().slice(0, 80),
          documentTop: element.getBoundingClientRect().top + window.scrollY,
        };
      });
      const label = details.label || `section-${index + 1}`;
      await page.evaluate((documentTop) => {
        window.scrollTo({ top: Math.max(0, documentTop - 96), left: 0, behavior: 'instant' });
      }, details.documentTop);
      await waitForPaint(page);

      const fileName = String(index + 1).padStart(2, '0') + '-' + safeVisualSlug(label) + '.png';
      const destination = path.join(
        artifactPath,
        'screenshots',
        'sections',
        viewport.key + '-' + viewport.width,
        fileName,
      );
      await mkdir(path.dirname(destination), { recursive: true });
      await page.screenshot({
        path: destination,
        fullPage: false,
        animations: 'disabled',
      });

      report.visualEvidence.sectionScreenshots.push({
        viewport: viewport.key,
        width: viewport.width,
        index: index + 1,
        total: plan.total,
        label,
        state: 'section-start',
        path: destination,
        relativePath: relativeArtifactPath(artifactPath, destination),
      });
      log('Captured section ' + (index + 1) + '/' + plan.total + ' at ' + viewport.width + 'px: ' + destination);
    }

    if (plan.omitted > 0) {
      log('Section screenshot limit reached at ' + viewport.width + 'px; omitted ' + plan.omitted + ' additional sections.');
    }
  }
}
