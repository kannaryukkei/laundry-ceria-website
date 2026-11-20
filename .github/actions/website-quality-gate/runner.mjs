import { spawn } from 'node:child_process';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright';
import { stopPreview } from './preview-process.mjs';
import { captureVisualEvidence } from './visual-evidence.mjs';
import {
  VIEWPORTS, classifyTypographyRole, typographyFloor, contrastFloor, parseCssColor,
  composite, contrastRatio, classifySurface, evaluateContrastSample, detectEvidenceCandidate,
  evaluateEvidenceCandidates, validateEvidenceManifest, detectOverflow, waitForPreview, writeArtifacts,
} from './lib.mjs';

const root = path.resolve(process.env.SWQG_WORKING_DIRECTORY || process.cwd());
const url = process.env.SWQG_URL;
const previewCommand = process.env.SWQG_PREVIEW_COMMAND;
const manifestPath = path.resolve(root, process.env.SWQG_EVIDENCE_MANIFEST || '.website-quality/evidence-manifest.json');
const artifactPath = path.resolve(root, process.env.SWQG_ARTIFACTS_DIRECTORY || '.website-quality-artifacts');
if (!url || !previewCommand) throw new Error('SWQG_URL and SWQG_PREVIEW_COMMAND are required.');

const report = {
  schemaVersion: 1,
  url,
  workingDirectory: root,
  generatedAt: new Date().toISOString(),
  viewports: [],
  screenshots: [],
  visualEvidence: { schemaVersion: 1, viewportScreenshots: [], sectionScreenshots: [], sectionCaptureSummaries: [], sectionCaptureLimitPerViewport: 12 },
  typography: { samples: [], failures: [] },
  contrast: { samples: [], failures: [], excludedSurfaces: [], notVisible: 0, manualReviewStatus: 'REQUIRED_WHEN_EXCLUSIONS_EXIST' },
  evidence: { manifest: manifestPath, valid: false, candidates: [], failures: [], humanReviewRequired: true },
  responsive: { failures: [] },
  diagnostics: [],
  status: 'RUNNING',
};
let diagnosticText = '';
let server = null;
let browser = null;

function log(line) {
  const entry = new Date().toISOString() + ' ' + line;
  report.diagnostics.push(entry);
  diagnosticText += entry + '\n';
  process.stdout.write(entry + '\n');
}

function startPreview() {
  const isWindows = process.platform === 'win32';
  const command = isWindows ? (process.env.ComSpec || 'cmd.exe') : '/bin/sh';
  const args = isWindows ? ['/d', '/s', '/c', previewCommand] : ['-lc', previewCommand];
  const child = spawn(command, args, { cwd: root, shell: false, windowsHide: true, detached: !isWindows, stdio: ['ignore', 'pipe', 'pipe'] });
  child.stdout.on('data', (chunk) => { const line = '[preview stdout] ' + chunk.toString().trimEnd(); diagnosticText += line + '\n'; process.stdout.write(line + '\n'); });
  child.stderr.on('data', (chunk) => { const line = '[preview stderr] ' + chunk.toString().trimEnd(); diagnosticText += line + '\n'; process.stderr.write(line + '\n'); });
  child.on('error', (error) => {
    child.previewStartError = error;
    log('Preview process error: ' + error.message);
  });
  return child;
}

async function captureSurface(page, width) {
  const height = width <= 640 ? 844 : 900;
  await page.setViewportSize({ width, height });
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 });
  await page.evaluate(() => document.fonts?.ready);
  const name = width === 390 ? 'initial-mobile-390.png' : width === 768 ? 'initial-tablet-768.png' : 'initial-desktop-1440.png';
  const destination = path.join(artifactPath, 'screenshots', name);
  await mkdir(path.dirname(destination), { recursive: true });
  await page.screenshot({ path: destination, fullPage: true });
  report.screenshots.push(destination);
  log('Captured initial ' + width + 'px screenshot: ' + destination);
}

async function inspectTypography(page, width) {
  const samples = await page.evaluate(() => {
    const visible = (element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) > 0 && rect.width > 0 && rect.height > 0;
    };
    const found = [];
    for (const element of document.body.querySelectorAll('*')) {
      if (!visible(element)) continue;
      const attributes = {
        'data-qa-role': element.getAttribute('data-qa-role'),
        role: element.getAttribute('role'),
        inNavigation: Boolean(element.closest('nav,[role="navigation"]')),
      };
      const tag = element.tagName.toLowerCase();
      let role = attributes['data-qa-role'];
      if (role) role = ({ body: 'BODY', control: 'CONTROL', metadata: 'METADATA', 'compact-metadata': 'METADATA', disclosure: 'DISCLOSURE' })[role.toLowerCase()] || null;
      if (!role) {
        if (tag === 'summary' || tag === 'details') role = 'DISCLOSURE';
        else if (['button', 'input', 'select', 'textarea'].includes(tag) || ['button', 'menuitem', 'tab'].includes(attributes.role) || (tag === 'a' && attributes.inNavigation)) role = 'CONTROL';
        else if (['small', 'time', 'figcaption'].includes(tag)) role = 'METADATA';
        else if (['p', 'li', 'label', 'blockquote', 'dt', 'dd'].includes(tag)) role = 'BODY';
      }
      if (!role) continue;
      const textNodes = [...element.childNodes].filter((node) => node.nodeType === Node.TEXT_NODE).map((node) => node.textContent).join(' ').replace(/\s+/g, ' ').trim();
      const text = textNodes || (['input', 'textarea'].includes(tag) ? element.getAttribute('aria-label') || element.placeholder || element.value : element.getAttribute('aria-label') || '');
      if (!text) continue;
      found.push({ role, text: text.slice(0, 100), fontSize: Number.parseFloat(getComputedStyle(element).fontSize), tag, locator: element.id ? '#' + element.id : null });
    }
    return found;
  });
  const counts = {};
  for (const sample of samples) {
    counts[sample.role] = (counts[sample.role] || 0) + 1;
    const minimum = typographyFloor(sample.role);
    if (minimum && sample.fontSize < minimum) report.typography.failures.push({ width, ...sample, requiredPx: minimum });
  }
  for (const role of ['BODY', 'CONTROL', 'METADATA']) if (!counts[role]) report.typography.failures.push({ width, role, error: 'no rendered samples; role floor cannot be verified' });
  report.typography.samples.push({ width, counts, total: samples.length });
}

async function inspectContrast(page, width, state) {
  const samples = await page.evaluate(() => {
    const collected = [];
    const seen = new Set();
    for (const element of document.body.querySelectorAll('*')) {
      const directText = [...element.childNodes]
        .filter((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim())
        .map((node) => node.textContent).join(' ').replace(/\s+/g, ' ').trim();
      const tag = element.tagName.toLowerCase();
      let text = directText;
      let foreground = getComputedStyle(element).color;
      if (!text && ['input', 'textarea'].includes(tag)) {
        text = element.value || element.getAttribute('placeholder') || '';
        if (!element.value && element.getAttribute('placeholder')) foreground = getComputedStyle(element, '::placeholder').color;
      } else if (!text && tag === 'select') {
        text = element.selectedOptions?.[0]?.textContent?.trim() || '';
      }
      if (!text) continue;
      const rect = element.getBoundingClientRect();
      const key = tag + '|' + text + '|' + Math.round(rect.x) + '|' + Math.round(rect.y);
      if (seen.has(key)) continue;
      seen.add(key);

      const chain = [];
      let current = element;
      let visible = rect.width > 0 && rect.height > 0;
      let totalOpacity = 1;
      let imageBackground = false;
      let gradientBackground = false;
      let generatedBackground = false;
      while (current) {
        chain.push(current);
        const style = getComputedStyle(current);
        totalOpacity *= Number.parseFloat(style.opacity || '1');
        if (style.display === 'none' || style.visibility === 'hidden' || style.visibility === 'collapse' || style.contentVisibility === 'hidden') visible = false;
        if (style.backgroundImage !== 'none') imageBackground = true;
        const before = getComputedStyle(current, '::before');
        const after = getComputedStyle(current, '::after');
        if ([before, after].some((pseudo) => pseudo.backgroundImage !== 'none')) imageBackground = true;
        if ([style.backgroundImage, before.backgroundImage, after.backgroundImage].some((value) => value.includes('gradient('))) gradientBackground = true;
        if ([before, after].some((pseudo) => pseudo.content !== 'none' && pseudo.backgroundColor !== 'rgba(0, 0, 0, 0)')) generatedBackground = true;
        current = current.parentElement;
      }
      if (totalOpacity <= 0) visible = false;
      let inViewport = rect.right > 0 && rect.left < window.innerWidth;
      const position = getComputedStyle(element).position;
      if ((position === 'fixed' || position === 'absolute') && (rect.bottom <= 0 || rect.top >= window.innerHeight)) inViewport = false;

      const backgroundLayers = chain.reverse().map((ancestor) => {
        const style = getComputedStyle(ancestor);
        return { color: style.backgroundColor, opacity: Number.parseFloat(style.opacity || '1') };
      });
      const imageBacked = [...document.images].some((img) => {
        const imageRect = img.getBoundingClientRect();
        const overlaps = imageRect.width > 0 && imageRect.height > 0 && imageRect.left < rect.right && imageRect.right > rect.left && imageRect.top < rect.bottom && imageRect.bottom > rect.top;
        return overlaps && (img.closest('figure,[class*="hero"],[class*="photo"],[class*="gallery"]') || getComputedStyle(img).objectFit === 'cover');
      });
      if (imageBacked) imageBackground = true;
      collected.push({
        text: text.slice(0, 100),
        tag,
        foreground,
        backgroundLayers,
        fontSize: Number.parseFloat(getComputedStyle(element).fontSize),
        fontWeight: Number.parseInt(getComputedStyle(element).fontWeight, 10),
        visible,
        inViewport,
        imageBackground,
        gradientBackground,
        generatedBackground,
      });
    }
    return collected;
  });

  const measured = [];
  const hidden = [];
  const manualReview = [];
  for (const sample of samples) {
    const result = evaluateContrastSample(sample);
    if (result.status === 'NOT_VISIBLE') hidden.push(sample);
    else if (result.status === 'MANUAL REVIEW') manualReview.push({ ...sample, ...result });
    else measured.push({ ...sample, ...result });
  }
  const failures = measured.filter((item) => item.status === 'FAIL');
  for (const sample of failures) report.contrast.failures.push({ width, state, ...sample });
  if (measured.length < 20) report.contrast.failures.push({ width, state, error: 'only ' + measured.length + ' measurable text samples; at least 20 are required' });
  report.contrast.notVisible += hidden.length;
  report.contrast.samples.push({
    width,
    state,
    measured: measured.length,
    failures: failures.length,
    excludedForManualReview: manualReview.length,
    notVisible: hidden.length,
    selectedControls: await page.locator(':checked,[aria-selected="true"],[aria-pressed="true"],[aria-current]:not([aria-current="false"])').count(),
  });
  for (const sample of manualReview) report.contrast.excludedSurfaces.push({ width, state, status: 'MANUAL REVIEW', ...sample });
}async function inspectEvidence(page, manifest) {
  const nodes = await page.evaluate(() => {
    const result = [];
    for (const element of document.body.querySelectorAll('*')) {
      const style = getComputedStyle(element); const rect = element.getBoundingClientRect();
      if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0 || rect.width === 0 || rect.height === 0) continue;
      const direct = [...element.childNodes].filter((node) => node.nodeType === Node.TEXT_NODE).map((node) => node.textContent).join(' ').replace(/\s+/g, ' ').trim();
      const categories = new Set(['testimonial', 'customer-story', 'review-rating', 'review-total', 'customer-count', 'award-certification', 'completed-work', 'business-performance']);
      const proofValue = (element.getAttribute('data-qa-proof') || '').trim().toLowerCase();
      const proofIdValue = (element.getAttribute('data-qa-proof-id') || '').trim();
      const proofTypeValue = (element.getAttribute('data-qa-proof-type') || '').trim().toLowerCase();
      const explicit = Boolean(proofIdValue || categories.has(proofValue) || categories.has(proofTypeValue));
      const text = direct || (explicit ? (element.innerText || element.textContent || '').replace(/\s+/g, ' ').trim() : element.getAttribute('aria-label') || '');
      if (!text) continue;
      const attrs = {
        class: typeof element.className === 'string' ? element.className : '', role: element.getAttribute('role'),
        'aria-label': element.getAttribute('aria-label'), 'data-qa-proof': element.getAttribute('data-qa-proof'),
        'data-qa-proof-id': element.getAttribute('data-qa-proof-id'), 'data-qa-proof-type': element.getAttribute('data-qa-proof-type'),
        'data-qa-content-kind': element.getAttribute('data-qa-content-kind'),
      };
      let locator = null;
      if (proofIdValue) locator = '[data-qa-proof-id="' + CSS.escape(proofIdValue) + '"]';
      else if (categories.has(proofValue)) locator = '[data-qa-proof="' + CSS.escape(proofValue) + '"]';
      else if (element.id) locator = '#' + CSS.escape(element.id);
      result.push({ tagName: element.tagName.toLowerCase(), text, attrs, locator });
    }
    return result;
  });
  const unique = new Map();
  for (const node of nodes) {
    const candidate = detectEvidenceCandidate(node);
    if (!candidate) continue;
    const key = [candidate.category, candidate.proofId || '', candidate.text].join('|');
    unique.set(key, candidate);
  }
  report.evidence.candidates = [...unique.values()];
  const result = evaluateEvidenceCandidates(report.evidence.candidates, manifest);
  report.evidence.valid = result.valid;
  report.evidence.failures = result.errors;
  report.evidence.matchedRecordIds = result.matchedRecordIds;
  report.evidence.humanReviewRequired = true;
}

async function main() {
  await mkdir(path.join(artifactPath, 'screenshots'), { recursive: true });
  let manifest;
  try { manifest = JSON.parse(await readFile(manifestPath, 'utf8')); }
  catch (error) {
    manifest = null;
    report.evidence.failures.push('evidence manifest could not be read: ' + error.message);
  }
  const manifestValidation = validateEvidenceManifest(manifest);
  report.evidence.valid = manifestValidation.valid;
  report.evidence.failures.push(...manifestValidation.errors);
  server = startPreview();
  log('Started preview command in ' + root + ': ' + previewCommand);
  await waitForPreview(server, url);
  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  page.on('console', (message) => { if (message.type() === 'error') log('Browser console error: ' + message.text()); });
  page.on('pageerror', (error) => log('Browser page error: ' + error.message));
  page.on('requestfailed', (request) => log('Browser request failed: ' + request.url() + ' ' + request.failure()?.errorText));

  // Keep an initial visual record for all three form factors before any quality assertion runs.
  for (const width of [390, 768, 1440]) await captureSurface(page, width);
  // Capture viewport- and section-level evidence before quality assertions can abort the run.
  await captureVisualEvidence({ page, url, artifactPath, report, log });

  for (const width of VIEWPORTS) {
    await page.setViewportSize({ width, height: width <= 640 ? 844 : 900 });
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    const dimensions = await page.evaluate(() => {
      const viewportWidth = document.documentElement.clientWidth;
      const documentWidth = document.documentElement.scrollWidth;
      const offenders = [...document.body.querySelectorAll('*')].map((node) => {
        const rect = node.getBoundingClientRect(); const style = getComputedStyle(node);
        return { element: node.tagName.toLowerCase() + (node.id ? '#' + node.id : ''), text: (node.innerText || node.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 64), left: Math.round(rect.left), right: Math.round(rect.right), scrollWidth: node.scrollWidth, clientWidth: node.clientWidth, position: style.position };
      }).filter((item) => item.right > viewportWidth + 1 || item.scrollWidth > item.clientWidth + 1).sort((a, b) => b.right - a.right).slice(0, 12);
      return { viewportWidth, documentWidth, offenders };
    });
    report.viewports.push({ width, ...dimensions });
    if (detectOverflow({ viewportWidth: dimensions.viewportWidth, documentWidth: dimensions.documentWidth })) report.responsive.failures.push({ width, ...dimensions });
    await inspectTypography(page, width);
    await inspectContrast(page, width, 'initial');
  }

  for (const width of [390, 768, 1440]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    const controls = page.locator('button:visible, input:visible, select:visible, textarea:visible, a:visible, [role="button"]:visible');
    const count = await controls.count();
    for (let index = 0; index < count; index += 1) {
      const control = controls.nth(index);
      if (await control.isEnabled().catch(() => false)) {
        await control.focus().catch(() => {});
        await inspectContrast(page, width, 'focused-control-' + index);
      }
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await inspectEvidence(page, manifest);
  await browser.close(); browser = null;
  await stopPreview(server); server = null;

  report.status = report.responsive.failures.length || report.typography.failures.length || report.contrast.failures.length || report.evidence.failures.length ? 'FAIL' : report.contrast.excludedSurfaces.length ? 'PASS_WITH_MANUAL_REVIEW_REQUIRED' : 'PASS';
  const artifacts = await writeArtifacts(artifactPath, report, diagnosticText);
  log('Wrote report ' + artifacts.report);
  log('Wrote diagnostics ' + artifacts.diagnostics);
  process.stdout.write('Quality gate status: ' + report.status + '\n');
  if (report.status === 'FAIL') process.exitCode = 1;
}

try {
  await main();
} catch (error) {
  report.status = 'FAIL';
  report.error = error.stack || error.message;
  log('Quality gate failed: ' + error.stack);
  try { await browser?.close(); } catch {}
  try { await stopPreview(server); } catch (stopError) { log('Preview cleanup error: ' + stopError.message); }
  const artifacts = await writeArtifacts(artifactPath, report, diagnosticText);
  log('Wrote failure report ' + artifacts.report);
  log('Wrote diagnostics ' + artifacts.diagnostics);
  process.exitCode = 1;
}
