import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { spawn, spawnSync } from 'node:child_process';
import { createServer as createTcpServer } from 'node:net';
import { once } from 'node:events';
import { fileURLToPath } from 'node:url';
import os from 'node:os';
import path from 'node:path';
import {
  classifyTypographyRole, typographyFloor, TYPOGRAPHY_FLOORS, parseCssColor, composite,
  contrastRatio, contrastFloor, classifySurface, evaluateContrastSample, validateEvidenceManifest,
  evaluateEvidenceCandidates, detectEvidenceCandidate, detectOverflow, waitForPreview, writeArtifacts,
} from './lib.mjs';
import { stopPreview } from './preview-process.mjs';
import { planSectionCapture, safeVisualSlug } from './visual-evidence.mjs';
import { findRunArtifact } from './artifact-verification.mjs';

const verified = () => ({
  id: 'claim-1', category: 'testimonial', item: '“The service was clear and helpful.” — A. Customer',
  match: { exactText: '“The service was clear and helpful.” — A. Customer' },
  source: { reference: 'Original customer approval record #42', dateOrScope: 'Approved 2026-05-10; single service visit' },
  publicationPermission: { granted: true, scope: 'Quotation and first name on this website' },
  accuracyVerification: { verified: true, verifier: 'Studio reviewer', checkedOn: '2026-05-11', contextRetained: true },
  ownerApproval: { approved: true, owner: 'Business owner', approvedOn: '2026-05-12', approvedWording: '“The service was clear and helpful.” — A. Customer', approvedPlacement: 'Testimonials section on home page' },
  status: 'VERIFIED',
});
const manifest = (items = [verified()]) => ({ version: 1, humanReviewRequired: true, items });

test('run artifact verification retries eventual listing visibility after a successful upload', async () => {
  const sleeps = [];
  let requests = 0;
  const result = await findRunArtifact({
    repository: 'owner/repository',
    runId: '12345',
    token: 'test-token',
    artifactName: 'shared-website-quality-gate',
    retryDelayMs: 25,
    sleep: async (milliseconds) => sleeps.push(milliseconds),
    fetchImpl: async () => {
      requests += 1;
      return {
        ok: true,
        json: async () => ({
          artifacts: requests < 3 ? [] : [{
            id: 987,
            name: 'shared-website-quality-gate',
            expired: false,
            size_in_bytes: 1024,
          }],
        }),
      };
    },
  });

  assert.equal(result.id, 987);
  assert.equal(requests, 3);
  assert.deepEqual(sleeps, [25, 25]);
});

test('run artifact verification rejects expired or empty matches and returns null after bounded retries', async () => {
  let requests = 0;
  const result = await findRunArtifact({
    repository: 'owner/repository',
    runId: '12345',
    token: 'test-token',
    artifactName: 'shared-website-quality-gate',
    attempts: 2,
    sleep: async () => {},
    fetchImpl: async () => {
      requests += 1;
      return {
        ok: true,
        json: async () => ({
          artifacts: [
            { name: 'shared-website-quality-gate', expired: true, size_in_bytes: 1024 },
            { name: 'shared-website-quality-gate', expired: false, size_in_bytes: 0 },
          ],
        }),
      };
    },
  });

  assert.equal(result, null);
  assert.equal(requests, 2);
});

test('run artifact verification does not retry permanent API authorization failures', async () => {
  let requests = 0;
  await assert.rejects(findRunArtifact({
    repository: 'owner/repository',
    runId: '12345',
    token: 'test-token',
    artifactName: 'shared-website-quality-gate',
    sleep: async () => {},
    fetchImpl: async () => {
      requests += 1;
      return { ok: false, status: 403 };
    },
  }), /HTTP 403/);
  assert.equal(requests, 1);
});

test('visual evidence section capture prefers explicit markers and enforces a bounded screenshot count', () => {
  assert.deepEqual(planSectionCapture({ markedCount: 14, semanticCount: 20 }), {
    selector: 'main [data-qa-visual-section]',
    strategy: 'explicit-markers',
    total: 14,
    captureCount: 12,
    omitted: 2,
  });
  assert.deepEqual(planSectionCapture({ markedCount: 0, semanticCount: 3 }), {
    selector: 'main > section',
    strategy: 'semantic-sections',
    total: 3,
    captureCount: 3,
    omitted: 0,
  });
  assert.deepEqual(planSectionCapture({ markedCount: 0, semanticCount: 0 }), {
    selector: null,
    strategy: 'none',
    total: 0,
    captureCount: 0,
    omitted: 0,
  });
});

test('visual evidence section filenames stay readable and filesystem-safe', () => {
  assert.equal(safeVisualSlug('Pilihan & Harga — Mobil/Motor!'), 'pilihan-harga-mobil-motor');
  assert.equal(safeVisualSlug('   '), 'section');
  assert.ok(safeVisualSlug('A'.repeat(80)).length <= 48);
});

test('typography roles use semantic elements and documented data attribute overrides', () => {
  assert.equal(classifyTypographyRole('p'), 'BODY');
  assert.equal(classifyTypographyRole('li'), 'BODY');
  assert.equal(classifyTypographyRole('button'), 'CONTROL');
  assert.equal(classifyTypographyRole('a', { inNavigation: true }), 'CONTROL');
  assert.equal(classifyTypographyRole('small'), 'METADATA');
  assert.equal(classifyTypographyRole('summary'), 'DISCLOSURE');
  assert.equal(classifyTypographyRole('div', { 'data-qa-role': 'metadata' }), 'METADATA');
  assert.equal(classifyTypographyRole('div'), null);
  assert.deepEqual(TYPOGRAPHY_FLOORS, { BODY: 15, CONTROL: 13, METADATA: 11, DISCLOSURE: 13 });
  assert.equal(typographyFloor('BODY'), 15);
  assert.equal(typographyFloor('CONTROL'), 13);
  assert.equal(typographyFloor('METADATA'), 11);
  assert.equal(typographyFloor('DISCLOSURE'), 13);
});

test('solid-surface contrast composites translucent foreground and background colors', () => {
  const foreground = parseCssColor('rgba(0, 0, 0, 0.5)');
  const background = parseCssColor('rgba(255, 255, 255, 0.5)');
  assert.deepEqual(foreground, [0, 0, 0, 0.5]);
  const composedBackground = composite(background, [255, 255, 255, 1]);
  const composedForeground = composite(foreground, composedBackground);
  assert.ok(Math.abs(composedBackground[0] - 255) < 0.001);
  assert.ok(Math.abs(contrastRatio(composedForeground, composedBackground) - 3.976) < 0.02);
  assert.equal(contrastFloor(16, 400), 4.5);
  assert.equal(contrastFloor(24, 400), 3);
  assert.equal(contrastFloor(19, 700), 3);
});

test('solid-surface contrast resolves ancestor backgrounds, alpha, visibility, and review surfaces', () => {
  const darkBackground = [{ color: '#0b1315', opacity: 1 }];
  const whiteOnDark = evaluateContrastSample({
    text: 'White on dark', foreground: '#fffefa', backgroundLayers: darkBackground, fontSize: 16, fontWeight: 400,
  });
  assert.equal(whiteOnDark.status, 'PASS');
  assert.equal(whiteOnDark.background, 'rgb(11, 19, 21)');

  const whiteOnLight = evaluateContrastSample({
    text: 'White on light', foreground: '#fffefa', backgroundLayers: [{ color: '#f1efe7', opacity: 1 }], fontSize: 16, fontWeight: 400,
  });
  assert.equal(whiteOnLight.status, 'FAIL');

  const transparentChild = evaluateContrastSample({
    text: 'Transparent child', foreground: '#fffefa',
    backgroundLayers: [...darkBackground, { color: 'rgba(0, 0, 0, 0)', opacity: 1 }],
    fontSize: 16, fontWeight: 400,
  });
  assert.equal(transparentChild.status, 'PASS');
  assert.equal(transparentChild.background, 'rgb(11, 19, 21)');

  const translucentOverlay = evaluateContrastSample({
    text: 'Alpha overlay', foreground: '#fffefa',
    backgroundLayers: [{ color: '#ffffff', opacity: 1 }, { color: 'rgba(0, 0, 0, 0.5)', opacity: 1 }],
    fontSize: 16, fontWeight: 400,
  });
  assert.equal(translucentOverlay.background, 'rgb(128, 128, 128)');
  assert.equal(translucentOverlay.status, 'FAIL');
  assert.ok(Math.abs(translucentOverlay.contrast - 3.941) < 0.01);

  const hiddenSkipLink = evaluateContrastSample({
    text: 'Lewati ke konten utama', foreground: '#fffefa', backgroundLayers: darkBackground,
    fontSize: 16, fontWeight: 400, visible: false,
  });
  assert.equal(hiddenSkipLink.status, 'NOT_VISIBLE');
  const focusedSkipLink = evaluateContrastSample({
    text: 'Lewati ke konten utama', foreground: '#fffefa', backgroundLayers: darkBackground,
    fontSize: 16, fontWeight: 400, visible: true,
  });
  assert.equal(focusedSkipLink.status, 'PASS');

  assert.equal(evaluateContrastSample({ foreground: '#fff', gradientBackground: true }).status, 'MANUAL REVIEW');
  assert.equal(evaluateContrastSample({ foreground: '#fff', imageBackground: true }).status, 'MANUAL REVIEW');
});
test('photo and gradient surfaces are excluded with an explicit manual-review reason', () => {
  assert.equal(classifySurface().measurable, true);
  assert.match(classifySurface({ backgroundImage: true }).reason, /manual screenshot review/);
  assert.match(classifySurface({ imageBacking: true }).reason, /manual screenshot review/);
  assert.equal(detectEvidenceCandidate({ text: 'Concept imagery only — not a claim of completed customer work.' }), null);
  assert.equal(detectEvidenceCandidate({ text: 'We explain our cancellation policy before work starts.' }), null);
});

test('evidence manifest accepts a complete VERIFIED proof record and requires human review', () => {
  const result = validateEvidenceManifest(manifest());
  assert.equal(result.valid, true, result.errors.join('; '));
  assert.equal(evaluateEvidenceCandidates([{ category: 'testimonial', text: verified().item }], manifest()).valid, true);
});

test('missing, malformed, blocked, permission-less, and unapproved evidence fail', () => {
  assert.equal(validateEvidenceManifest(null).valid, false);
  assert.equal(evaluateEvidenceCandidates([{ category: 'review-rating', text: '5 stars' }], manifest([])).valid, false);
  const noPermission = verified(); noPermission.publicationPermission = { granted: false, scope: '' };
  assert.equal(validateEvidenceManifest(manifest([noPermission])).valid, false);
  const noOwnerApproval = verified(); noOwnerApproval.ownerApproval = { approved: false };
  assert.equal(validateEvidenceManifest(manifest([noOwnerApproval])).valid, false);
  const blocked = verified(); blocked.status = 'BLOCKED';
  assert.equal(validateEvidenceManifest(manifest([blocked])).valid, false);
  const expired = verified(); expired.status = 'EXPIRED';
  assert.equal(validateEvidenceManifest(manifest([expired])).valid, false);
});

test('content detector distinguishes tagged policy and non-proof copy from endorsements', () => {
  assert.equal(detectEvidenceCandidate({
    tagName: 'div',
    attrs: { class: 'preview-notice', role: 'note', 'aria-label': 'Pemberitahuan demo' },
    text: 'Pemberitahuan demo',
  }), null);
  assert.equal(detectEvidenceCandidate({
    tagName: 'blockquote',
    attrs: { class: 'customerReviewCard' },
    text: 'The team explained the service clearly. — A. Customer',
  }).category, 'testimonial');
  assert.equal(detectEvidenceCandidate({ text: 'We publish a clear service policy.', attrs: { 'data-qa-content-kind': 'policy' } }), null);
  assert.equal(detectEvidenceCandidate({ text: 'Lewati ke konten utama', attrs: { 'data-qa-proof': null, 'data-qa-proof-id': null, 'data-qa-proof-type': null } }), null);
  assert.equal(detectEvidenceCandidate({ text: 'Book a detailing visit whenever it works for your day.' }), null);
  assert.equal(detectEvidenceCandidate({ text: 'Ordinary copy', attrs: { 'data-qa-proof': '' } }), null);
  assert.equal(detectEvidenceCandidate({ text: 'Ordinary copy', attrs: { 'data-qa-proof': '   ' } }), null);
  assert.equal(detectEvidenceCandidate({ text: 'Ordinary copy', attrs: { 'data-qa-proof': 'unknown' } }), null);
  assert.equal(detectEvidenceCandidate({ text: 'Ordinary copy', attrs: { 'data-qa-proof-id': '   ', 'data-qa-proof-type': '   ' } }), null);
  assert.equal(detectEvidenceCandidate({ text: 'Sales grew 32%.', attrs: { 'data-qa-proof-type': 'business-performance' } }).category, 'business-performance');
  assert.equal(detectEvidenceCandidate({ text: 'Reviewed owner approved content.', attrs: { 'data-qa-proof': 'testimonial' } }).category, 'testimonial');
  assert.equal(detectEvidenceCandidate({ text: 'Reviewed owner approved content.', attrs: { 'data-qa-proof-id': 'review-7' } }).proofId, 'review-7');
  assert.equal(detectEvidenceCandidate({ text: 'Not a customer testimonial or performance claim.' }), null);
  assert.equal(detectEvidenceCandidate({ text: 'This is not an actual customer review.' }), null);
  assert.equal(detectEvidenceCandidate({ text: '4.9 out of 5 stars from 230 reviews' }).category, 'review-rating');
  assert.equal(detectEvidenceCandidate({ text: '230 reviews' }).category, 'review-total');
  assert.equal(detectEvidenceCandidate({ text: 'Rated 4.9 out of 5 stars' }).category, 'review-rating');
  assert.equal(detectEvidenceCandidate({ text: 'Completed 240 customer jobs' }).category, 'completed-work');
  assert.equal(detectEvidenceCandidate({
    tagName: 'blockquote', attrs: { class: 'testimonial-card' },
    text: '“The team explained every step clearly and treated my car with care.” — A. Customer',
  }).category, 'testimonial');
  assert.equal(detectEvidenceCandidate({ text: 'Sales increased 32% in the first quarter.' }).category, 'business-performance');
  assert.equal(detectEvidenceCandidate({ text: 'Not a customer testimonial or performance claim. Sales increased 32% in the first quarter.' }).category, 'business-performance');
  assert.equal(detectEvidenceCandidate({ text: 'Trusted by many' }), null);
  assert.equal(detectEvidenceCandidate({ text: 'Concept imagery only — not a claim of completed customer work.' }), null);
});

test("business-performance detection distinguishes service process from outcome claims", () => {
  assert.equal(detectEvidenceCandidate({ text: 'INSPECT THE NEED. AGREE ON THE WORK. CARE FOR THE RESULT.' }), null);
  assert.equal(detectEvidenceCandidate({ text: 'We inspect each vehicle, agree on the work, and explain the treatment before service begins.' }), null);
  assert.equal(detectEvidenceCandidate({ text: 'Sales grew 32%.' })?.category, 'business-performance');
  assert.equal(detectEvidenceCandidate({ text: 'The service produced better outcomes for repeat customers.' })?.category, 'business-performance');
  assert.equal(detectEvidenceCandidate({
    tagName: 'blockquote', attrs: { class: 'testimonial-card' },
    text: 'The team explained every step clearly and treated my car with care. — A. Customer',
  })?.category, 'testimonial');
  assert.equal(detectEvidenceCandidate({ text: 'Not a customer testimonial or performance claim.' }), null);
  assert.equal(detectEvidenceCandidate({ text: 'This is not an actual customer review.' }), null);
  assert.equal(detectEvidenceCandidate({ text: '4.9 out of 5 stars from 230 reviews' })?.category, 'review-rating');
  assert.equal(detectEvidenceCandidate({ text: '230 reviews' })?.category, 'review-total');
  assert.equal(detectEvidenceCandidate({ text: 'Reviewed owner approved content.', attrs: { 'data-qa-proof': 'testimonial' } })?.category, 'testimonial');
  assert.equal(detectEvidenceCandidate({ text: 'Book a detailing visit whenever it works for your day.' }), null);
  assert.equal(detectEvidenceCandidate({ text: 'Good care starts with clear answers.' }), null);
});
function previewResponse(status, contentType) {
  return {
    status,
    headers: { get: (name) => name.toLowerCase() === 'content-type' ? contentType : null },
    body: { locked: false, cancel: async () => {} },
  };
}

function previewHarness(responses, { timeoutMs = 1_000 } = {}) {
  let currentTime = 0;
  let requestCount = 0;
  const waits = [];
  const fetchImpl = async () => {
    const response = responses[Math.min(requestCount, responses.length - 1)];
    requestCount += 1;
    if (response instanceof Error) throw response;
    return response;
  };
  const promise = waitForPreview({ exitCode: null }, 'http://127.0.0.1:4174/', {
    fetchImpl,
    timeoutMs,
    pollIntervalMs: 500,
    requestTimeoutMs: 2_500,
    now: () => currentTime,
    sleep: async (milliseconds) => { waits.push(milliseconds); currentTime += milliseconds; },
  });
  return { promise, get requestCount() { return requestCount; }, waits };
}

test('preview readiness accepts HTTP 200 with a case-insensitive text/html media type', async () => {
  const harness = previewHarness([previewResponse(200, 'Text/HTML; charset=UTF-8')]);
  await harness.promise;
  assert.equal(harness.requestCount, 1);
});

test('preview readiness releases an HTTP/1.0 Connection: close response body before succeeding', async () => {
  let requests = 0;
  const sockets = new Set();
  const body = '<!doctype html><title>ready</title>';
  const server = createTcpServer((socket) => {
    sockets.add(socket);
    socket.once('close', () => sockets.delete(socket));
    socket.once('data', () => {
      requests += 1;
      socket.end('HTTP/1.0 200 OK\r\nContent-Type: text/html; charset=utf-8\r\nContent-Length: ' + Buffer.byteLength(body) + '\r\nConnection: close\r\n\r\n' + body);
    });
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  try {
    const address = server.address();
    await waitForPreview({ exitCode: null, signalCode: null }, 'http://127.0.0.1:' + address.port + '/', { timeoutMs: 2_000 });
    assert.equal(requests, 1);
  } finally {
    const closed = new Promise((resolve) => server.close(resolve));
    for (const socket of sockets) socket.destroy();
    await closed;
  }
});

test('preview responses are released before readiness resolves or another poll starts', async () => {
  let activePolls = 0;
  let maximumActivePolls = 0;
  let releasedResponses = 0;
  let requestCount = 0;
  const child = { exitCode: null };
  await waitForPreview(child, 'http://127.0.0.1:4174/', {
    timeoutMs: 1_000,
    pollIntervalMs: 1,
    fetchImpl: async () => {
      activePolls += 1;
      maximumActivePolls = Math.max(maximumActivePolls, activePolls);
      requestCount += 1;
      return {
        status: requestCount === 1 ? 503 : 200,
        headers: { get: () => 'text/html; charset=utf-8' },
        body: {
          locked: false,
          cancel: async () => {
            await new Promise((resolve) => setTimeout(resolve, 5));
            releasedResponses += 1;
            activePolls -= 1;
          },
        },
      };
    },
  });
  assert.equal(requestCount, 2);
  assert.equal(releasedResponses, 2);
  assert.equal(maximumActivePolls, 1);
});

test('preview readiness rejects HTTP 404 even when the response is HTML', async () => {
  const harness = previewHarness([previewResponse(404, 'text/html')]);
  await assert.rejects(harness.promise, (error) => {
    assert.match(error.message, /Last observed HTTP status:\s*404/);
    assert.match(error.message, /Last observed content type:\s*text\/html/);
    return true;
  });
});

test('preview readiness rejects HTTP 403 even when the response is HTML', async () => {
  const harness = previewHarness([previewResponse(403, 'text/html')]);
  await assert.rejects(harness.promise, (error) => {
    assert.match(error.message, /Last observed HTTP status:\s*403/);
    assert.match(error.message, /Last observed content type:\s*text\/html/);
    return true;
  });
});

test('preview readiness rejects HTTP 500 even when the response is HTML', async () => {
  const harness = previewHarness([previewResponse(500, 'text/html')]);
  await assert.rejects(harness.promise, (error) => {
    assert.match(error.message, /Last observed HTTP status:\s*500/);
    assert.match(error.message, /Last observed content type:\s*text\/html/);
    return true;
  });
});

test('preview readiness rejects HTTP 200 with a non-HTML content type', async () => {
  const harness = previewHarness([previewResponse(200, 'application/json')]);
  await assert.rejects(harness.promise, /HTTP 200.*application\/json/);
});

test('preview readiness rejects HTTP 200 when content type is missing', async () => {
  const harness = previewHarness([previewResponse(200, null)]);
  await assert.rejects(harness.promise, /HTTP 200.*content type: none/i);
});

test('preview readiness requires exactly HTTP 200, not another successful status', async () => {
  const harness = previewHarness([previewResponse(204, 'text/html')]);
  await assert.rejects(harness.promise, (error) => {
    assert.match(error.message, /Last observed HTTP status:\s*204/);
    assert.match(error.message, /Last observed content type:\s*text\/html/);
    return true;
  });
});

test('preview readiness retries a transient 404 and accepts a later valid HTML response', async () => {
  const harness = previewHarness([previewResponse(404, 'text/html'), previewResponse(200, 'text/html; charset=utf-8')]);
  await harness.promise;
  assert.equal(harness.requestCount, 2);
  assert.deepEqual(harness.waits, [500]);
});

test('preview network failures retry and do not produce readiness', async () => {
  const harness = previewHarness([new Error('ECONNREFUSED'), new Error('ECONNRESET')]);
  await assert.rejects(harness.promise, (error) => {
    assert.ok(error.message.includes("http://127.0.0.1:4174/"));
    assert.match(error.message, /no valid HTTP 200 HTML response/);
    assert.match(error.message, /Last observed HTTP status: none/);
    assert.match(error.message, /Last network error: ECONNRESET/);
    return true;
  });
  assert.equal(harness.requestCount, 2);
  assert.deepEqual(harness.waits, [500, 500]);
});

test('preview request timeout aborts one request without overlapping a later poll', async () => {
  let requests = 0;
  const child = { exitCode: null };
  const started = Date.now();
  await assert.rejects(waitForPreview(child, 'http://127.0.0.1:4174/', {
    timeoutMs: 80,
    requestTimeoutMs: 20,
    pollIntervalMs: 5,
    fetchImpl: (_url, { signal }) => new Promise((resolve, reject) => {
      requests += 1;
      signal.addEventListener('abort', () => reject(new Error('request aborted')), { once: true });
    }),
  }), (error) => {
    assert.match(error.message, /overall timeout|timed out/i);
    assert.match(error.message, /Last observed HTTP status: none/);
    assert.match(error.message, /Last network error:/);
    return true;
  });
  assert.equal(requests, 1, 'an aborted request must not overlap a later readiness poll');
  assert.ok(Date.now() - started < 500);
});

test('preview process exit before readiness reports the exit code immediately', async () => {
  let requests = 0;
  await assert.rejects(waitForPreview({ exitCode: 7, signalCode: null }, 'http://127.0.0.1:4174/', {
    fetchImpl: async () => { requests += 1; throw new Error('must not poll an exited process'); },
  }), /exited with code 7 before a valid HTTP 200 HTML response/);
  assert.equal(requests, 0);
});

test('preview process exit while a readiness request is pending fails without waiting for request timeout', async () => {
  const { EventEmitter } = await import('node:events');
  const child = new EventEmitter();
  child.exitCode = null;
  child.signalCode = null;
  let requests = 0;
  const started = Date.now();
  const readiness = waitForPreview(child, 'http://127.0.0.1:4174/', {
    timeoutMs: 1_000,
    requestTimeoutMs: 800,
    fetchImpl: async () => { requests += 1; return new Promise(() => {}); },
  });
  setTimeout(() => {
    child.exitCode = 9;
    child.emit('exit', 9, null);
  }, 10);
  await assert.rejects(readiness, /exited from code 9 before readiness/);
  assert.equal(requests, 1);
  assert.ok(Date.now() - started < 500);
});

test('preview readiness never starts a new poll until body cancellation completes', async () => {
  let activeRequests = 0;
  let maximumActiveRequests = 0;
  let releasedResponses = 0;
  let requestCount = 0;
  await waitForPreview({ exitCode: null }, 'http://127.0.0.1:4174/', {
    timeoutMs: 1_000,
    pollIntervalMs: 1,
    fetchImpl: async () => {
      activeRequests += 1;
      maximumActiveRequests = Math.max(maximumActiveRequests, activeRequests);
      requestCount += 1;
      return {
        status: requestCount === 1 ? 503 : 200,
        headers: { get: () => 'text/html; charset=utf-8' },
        body: { locked: false, cancel: async () => {
          await new Promise((resolve) => setTimeout(resolve, 5));
          releasedResponses += 1;
          activeRequests -= 1;
        } },
      };
    },
  });
  assert.equal(requestCount, 2);
  assert.equal(releasedResponses, 2);
  assert.equal(maximumActiveRequests, 1);
});

test('preview response body release is bounded by the overall readiness timeout', async () => {
  const started = Date.now();
  await assert.rejects(waitForPreview({ exitCode: null }, 'http://127.0.0.1:4174/', {
    timeoutMs: 40,
    requestTimeoutMs: 500,
    fetchImpl: async () => ({ status: 200, headers: { get: () => 'text/html' }, body: { locked: false, cancel: () => new Promise(() => {}) } }),
  }), (error) => {
    assert.match(error.message, /timed out/);
    assert.match(error.message, /Could not release preview response body/);
    return true;
  });
  assert.ok(Date.now() - started < 500);
});

test('preview cleanup terminates its child process or process tree', async () => {
  if (process.platform === 'win32') {
    const { EventEmitter } = await import('node:events');
    const child = new EventEmitter();
    child.pid = 4242;
    child.exitCode = null;
    child.signalCode = null;
    let invocation;
    const spawnProcess = (command, args) => {
      invocation = { command, args };
      const killer = new EventEmitter();
      setImmediate(() => {
        child.exitCode = 0;
        child.emit('exit', 0, null);
        killer.emit('close', 0, null);
      });
      return killer;
    };
    await stopPreview(child, { platform: 'win32', spawnProcess });
    assert.match(invocation.args.join(' '), /taskkill \/pid 4242 \/t \/f/);
    assert.equal(child.exitCode, 0);
    return;
  }

  const child = spawn(process.execPath, ['-e', 'setInterval(() => {}, 1000)'], { detached: true, stdio: 'ignore' });
  try {
    await once(child, 'spawn');
    await stopPreview(child);
    assert.ok(child.exitCode !== null || child.signalCode !== null, 'preview child should have exited after cleanup');
  } finally {
    if (child.exitCode === null && child.signalCode === null) await stopPreview(child);
  }
});

test('runner writes a failure report and diagnostics when preview readiness fails before Chromium launch', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'swqg-runner-readiness-'));
  const artifacts = path.join(directory, '.website-quality-artifacts');
  const isWindows = process.platform === 'win32';
  const previewCommand = isWindows ? 'exit /b 7' : 'exit 7';
  const runnerPath = fileURLToPath(new URL('./runner.mjs', import.meta.url));
  try {
    await writeFile(path.join(directory, 'evidence.json'), JSON.stringify({ version: 1, humanReviewRequired: true, items: [] }));
    const result = spawnSync(process.execPath, [runnerPath], {
      cwd: directory,
      encoding: 'utf8',
      timeout: 10_000,
      env: {
        ...process.env,
        SWQG_WORKING_DIRECTORY: directory,
        SWQG_PREVIEW_COMMAND: previewCommand,
        SWQG_URL: 'http://127.0.0.1:4174/',
        SWQG_EVIDENCE_MANIFEST: 'evidence.json',
        SWQG_ARTIFACTS_DIRECTORY: '.website-quality-artifacts',
      },
    });
    assert.equal(result.status, 1, result.stderr || result.stdout);
    const report = JSON.parse(await readFile(path.join(artifacts, 'report.json'), 'utf8'));
    const diagnostics = await readFile(path.join(artifacts, 'diagnostics.log'), 'utf8');
    assert.equal(report.status, 'FAIL');
    assert.match(report.error, /Preview command exited with code 7/);
    assert.match(diagnostics, /Quality gate failed:.*Preview command exited with code 7/s);
    assert.doesNotMatch(result.stdout, /Quality gate status: PASS/);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test('preview timeout reports the URL and last invalid response details', async () => {
  const harness = previewHarness([previewResponse(403, 'text/html; charset=utf-8')]);
  await assert.rejects(harness.promise, (error) => {
    assert.ok(error.message.includes("http://127.0.0.1:4174/"));
    assert.match(error.message, /no valid HTTP 200 HTML response/);
    assert.match(error.message, /Last observed HTTP status: 403/);
    assert.match(error.message, /Last observed content type: text\/html; charset=utf-8/);
    return true;
  });
  assert.equal(harness.requestCount, 2);
  assert.deepEqual(harness.waits, [500, 500]);
});

test('responsive document overflow is detected with one pixel tolerance', () => {
  assert.equal(detectOverflow({ viewportWidth: 390, documentWidth: 392 }), true);
  assert.equal(detectOverflow({ viewportWidth: 390, documentWidth: 391 }), false);
});

test('artifact writer creates a machine-readable report and diagnostics file', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'swqg-artifacts-'));
  try {
    const paths = await writeArtifacts(directory, { status: 'PASS', viewports: [320] }, 'captured diagnostic');
    assert.deepEqual(JSON.parse(await readFile(paths.report, 'utf8')), { status: 'PASS', viewports: [320] });
    assert.equal(await readFile(paths.diagnostics, 'utf8'), 'captured diagnostic');
  } finally { await rm(directory, { recursive: true, force: true }); }
});


test('runner forwards configured SWQG_URL to preview readiness', async () => {
  const source = await readFile(new URL('./runner.mjs', import.meta.url), 'utf8');
  assert.match(source, /const url = process\.env\.SWQG_URL;/);
  assert.match(source, /await waitForPreview\(server,\s*url\);/);
});
