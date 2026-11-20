export const VIEWPORTS = [320, 360, 390, 640, 768, 900, 1024, 1280, 1440];
export const TYPOGRAPHY_FLOORS = Object.freeze({ BODY: 15, CONTROL: 13, METADATA: 11, DISCLOSURE: 13 });

const attrValue = (attrs, name) => attrs?.[name] ?? '';

export function classifyTypographyRole(tagName, attrs = {}) {
  const tag = String(tagName || '').toLowerCase();
  const override = String(attrValue(attrs, 'data-qa-role')).toLowerCase();
  if (override === 'body') return 'BODY';
  if (override === 'control') return 'CONTROL';
  if (override === 'metadata' || override === 'compact-metadata') return 'METADATA';
  if (override === 'disclosure') return 'DISCLOSURE';
  if (['summary', 'details'].includes(tag)) return 'DISCLOSURE';
  if (['button', 'input', 'select', 'textarea'].includes(tag) || ['button', 'menuitem', 'tab'].includes(attrValue(attrs, 'role'))) return 'CONTROL';
  if (tag === 'a' && (attrs.inNavigation || attrs['data-qa-role'] === 'control')) return 'CONTROL';
  if (['small', 'time', 'figcaption'].includes(tag)) return 'METADATA';
  if (['p', 'li', 'label', 'blockquote', 'dt', 'dd'].includes(tag)) return 'BODY';
  return null;
}

export function typographyFloor(role) {
  return TYPOGRAPHY_FLOORS[role] ?? null;
}

export function parseCssColor(input) {
  if (typeof input !== 'string') return null;
  const value = input.trim().toLowerCase();
  const hex = value.match(/^#([0-9a-f]{3,8})$/i);
  if (hex) {
    let digits = hex[1];
    if (digits.length === 3 || digits.length === 4) digits = [...digits].map((part) => part + part).join('');
    if (digits.length !== 6 && digits.length !== 8) return null;
    return [parseInt(digits.slice(0, 2), 16), parseInt(digits.slice(2, 4), 16), parseInt(digits.slice(4, 6), 16), digits.length === 8 ? parseInt(digits.slice(6, 8), 16) / 255 : 1];
  }
  const match = value.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+%?))?\s*\)$/i);
  if (!match) return null;
  const alpha = match[4] === undefined ? 1 : match[4].endsWith('%') ? Number.parseFloat(match[4]) / 100 : Number.parseFloat(match[4]);
  return [Number(match[1]), Number(match[2]), Number(match[3]), Math.min(1, Math.max(0, alpha))];
}

export function composite(foreground, background) {
  const alpha = foreground[3];
  const outAlpha = alpha + background[3] * (1 - alpha);
  if (!outAlpha) return [0, 0, 0, 0];
  return [0, 1, 2].map((index) => (foreground[index] * alpha + background[index] * background[3] * (1 - alpha)) / outAlpha).concat(outAlpha);
}

function luminance(color) {
  const channels = color.slice(0, 3).map((value) => {
    const channel = value / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

export function contrastRatio(first, second) {
  const a = luminance(first);
  const b = luminance(second);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

export function contrastFloor(fontSize, fontWeight) {
  const bold = Number.parseInt(fontWeight, 10) >= 700;
  return Number(fontSize) >= 24 || (Number(fontSize) >= 18.66 && bold) ? 3 : 4.5;
}

export function classifySurface({ backgroundImage = false, imageBacking = false } = {}) {
  if (backgroundImage) return { measurable: false, reason: 'gradient or CSS background image; manual screenshot review required' };
  if (imageBacking) return { measurable: false, reason: 'photo or image-backed surface; manual screenshot review required' };
  return { measurable: true, reason: null };
}

const CATEGORIES = new Set(['testimonial', 'customer-story', 'review-rating', 'review-total', 'customer-count', 'award-certification', 'completed-work', 'business-performance']);
const REQUIRED = {
  version: 1,
  humanReviewRequired: true,
  items: [],
};

export function validateEvidenceManifest(manifest) {
  const errors = [];
  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) return { valid: false, errors: ['manifest must be a JSON object'] };
  if (manifest.version !== REQUIRED.version) errors.push('version must equal 1');
  if (manifest.humanReviewRequired !== true) errors.push('humanReviewRequired must be true');
  if (!Array.isArray(manifest.items)) errors.push('items must be an array');
  const seen = new Set();
  for (const [index, item] of (Array.isArray(manifest.items) ? manifest.items : []).entries()) {
    const label = 'items[' + index + ']';
    if (!item || typeof item !== 'object' || Array.isArray(item)) { errors.push(label + ' must be an object'); continue; }
    if (!item.id || typeof item.id !== 'string') errors.push(label + '.id is required');
    if (item.id && seen.has(item.id)) errors.push(label + '.id must be unique');
    if (item.id) seen.add(item.id);
    if (!CATEGORIES.has(item.category)) errors.push(label + '.category is not supported');
    if (typeof item.item !== 'string' || !item.item.trim()) errors.push(label + '.item must contain the exact proposed item');
    const match = item.match;
    const hasLocator = typeof match?.locator === 'string' && match.locator.trim();
    const hasExact = typeof match?.exactText === 'string' && match.exactText.trim();
    if (Number(Boolean(hasLocator)) + Number(Boolean(hasExact)) !== 1) errors.push(label + '.match must contain exactly one of locator or exactText');
    if (typeof item.source?.reference !== 'string' || !item.source.reference.trim()) errors.push(label + '.source.reference is required');
    if (typeof item.source?.dateOrScope !== 'string' || !item.source.dateOrScope.trim()) errors.push(label + '.source.dateOrScope is required');
    if (item.publicationPermission?.granted !== true || typeof item.publicationPermission?.scope !== 'string' || !item.publicationPermission.scope.trim()) errors.push(label + '.publicationPermission must record granted true and its scope');
    if (item.accuracyVerification?.verified !== true || typeof item.accuracyVerification?.verifier !== 'string' || !item.accuracyVerification.verifier.trim() || typeof item.accuracyVerification?.checkedOn !== 'string' || !item.accuracyVerification.checkedOn.trim() || item.accuracyVerification?.contextRetained !== true) errors.push(label + '.accuracyVerification must record verified true, verifier, and checkedOn');
    if (item.ownerApproval?.approved !== true || typeof item.ownerApproval?.owner !== 'string' || !item.ownerApproval.owner.trim() || typeof item.ownerApproval?.approvedOn !== 'string' || !item.ownerApproval.approvedOn.trim() || normalize(item.ownerApproval?.approvedWording) !== normalize(item.item) || typeof item.ownerApproval?.approvedPlacement !== 'string' || !item.ownerApproval.approvedPlacement.trim()) errors.push(label + '.ownerApproval must record approved true, owner, and approvedOn');
    if (item.status !== 'VERIFIED') errors.push(label + '.status must be VERIFIED; BLOCKED or EXPIRED evidence cannot pass');
  }
  return { valid: errors.length === 0, errors };
}

export function evaluateEvidenceCandidates(candidates, manifest) {
  const validation = validateEvidenceManifest(manifest);
  const errors = [...validation.errors];
  const matched = [];
  for (const candidate of candidates) {
    const record = (manifest?.items || []).find((item) => {
      if (candidate.proofId && item.id === candidate.proofId) return true;
      if (item.match?.exactText && normalize(item.match.exactText) === normalize(candidate.text)) return true;
      return Boolean(candidate.locator && item.match?.locator === candidate.locator);
    });
    if (!record) errors.push('visible ' + candidate.category + ' has no evidence record: ' + candidate.text.slice(0, 120));
    else {
      matched.push(record.id);
      if (record.status !== 'VERIFIED') errors.push('visible evidence record ' + record.id + ' is ' + record.status);
    }
  }
  return { valid: errors.length === 0, errors, matchedRecordIds: [...new Set(matched)], humanReviewRequired: true };
}

export function evaluateContrastSample({
  text = '',
  foreground,
  backgroundLayers = [],
  fontSize,
  fontWeight,
  visible = true,
  inViewport = true,
  imageBackground = false,
  gradientBackground = false,
  generatedBackground = false,
} = {}) {
  if (!visible || !inViewport) return { status: 'NOT_VISIBLE', measured: false, text };
  if (imageBackground || gradientBackground || generatedBackground) {
    const surfaceType = gradientBackground ? 'GRADIENT' : imageBackground ? 'PHOTO_OR_IMAGE' : 'GENERATED_BACKGROUND';
    const reason = gradientBackground
      ? 'gradient background requires manual screenshot review'
      : imageBackground
        ? 'photographic or image-backed background requires manual screenshot review'
        : 'generated background layer cannot be resolved reliably; manual screenshot review required';
    return { status: 'MANUAL REVIEW', measured: false, text, surfaceType, reason };
  }
  const foregroundColor = parseCssColor(foreground);
  if (!foregroundColor) return { status: 'MANUAL REVIEW', measured: false, text, reason: 'computed foreground color could not be parsed' };
  let background = [255, 255, 255, 1];
  let groupOpacity = 1;
  for (const layer of backgroundLayers) {
    groupOpacity *= Math.min(1, Math.max(0, Number(layer.opacity ?? 1)));
    const color = parseCssColor(layer.color);
    if (!color || color[3] === 0) continue;
    color[3] *= groupOpacity;
    background = composite(color, background);
  }
  foregroundColor[3] *= groupOpacity;
  const renderedForeground = composite(foregroundColor, background);
  const ratio = contrastRatio(renderedForeground, background);
  const required = contrastFloor(fontSize, fontWeight);
  return {
    status: ratio + 0.01 >= required ? 'PASS' : 'FAIL',
    measured: true,
    text,
    foreground: 'rgb(' + renderedForeground.slice(0, 3).map(Math.round).join(', ') + ')',
    background: 'rgb(' + background.slice(0, 3).map(Math.round).join(', ') + ')',
    fontSize: Number(fontSize),
    fontWeight: Number.parseInt(fontWeight, 10),
    contrast: Number(ratio.toFixed(3)),
    required,
  };
}

function isBusinessPerformanceClaim(text) {
  const claim = normalize(text).toLowerCase();
  const performanceAction = /\b(?:increas(?:e|ed|es|ing)|grow|grows|grew|grown|growth|improv(?:e|ed|es|ing)|reduc(?:e|ed|es|ing)|sav(?:e|ed|es|ing)|boost(?:s|ed|ing)?|rais(?:e|ed|es|ing)|lower(?:s|ed|ing)|cut|cuts|cutting)\b/i.test(claim);
  const businessMetric = /\b(?:sales?|revenue|conversion(?:\s+rates?)?|retention(?:\s+rates?)?|repeat\s+(?:bookings?|customers?)|bookings?|profits?|operating\s+costs?|customer\s+satisfaction(?:\s+scores?)?|customer\s+acquisition|turnaround\s+time|response\s+time|productivity|downtime|waste|churn|performance)\b/i.test(claim);
  const quantifiedValue = /\b\d[\d,.]*\s*(?:%|\bpercent(?:age)?\b|\bpercentage\s+points?\b|\bx\b|\btimes?\b)/i.test(claim);
  const explicitOutcome = /\b(?:results?|outcomes?)\s+(?:(?:have|has|were|are)\s+)?(?:improv(?:e|ed|ing)|increas(?:e|ed|ing)|grew|reduc(?:e|ed|ing)|better|stronger|higher|lower|measurable|proven|guaranteed)\b/i.test(claim)
    || /\b(?:improved|better|stronger|higher|lower|measurable|proven|guaranteed)\s+(?:business\s+)?(?:results?|outcomes?)\b/i.test(claim)
    || /\b(?:deliver(?:s|ed)?|produce(?:s|d)?|generate(?:s|d)?|achieve(?:s|d)?|drive(?:s|n)?|yield(?:s|ed)?)\s+(?:(?:measurable|better|stronger|improved|increased|proven|guaranteed)\s+){0,2}(?:business\s+)?(?:results?|outcomes?)\b/i.test(claim);
  return (performanceAction && businessMetric) || (quantifiedValue && businessMetric) || explicitOutcome;
}
function normalize(value) { return String(value ?? '').replace(/\s+/g, ' ').trim(); }

export function detectEvidenceCandidate({ text, tagName = '', attrs = {}, locator = null } = {}) {
  const contentKind = String(attrs['data-qa-content-kind'] ?? '').trim().toLowerCase();
  const proofType = String(attrs['data-qa-proof-type'] ?? '').trim().toLowerCase();
  const proofMarker = String(attrs['data-qa-proof'] ?? '').trim().toLowerCase();
  const proofId = String(attrs['data-qa-proof-id'] ?? '').trim();
  const markerCategory = CATEGORIES.has(proofMarker) ? proofMarker : null;
  const explicitProof = Boolean(markerCategory || proofId || (proofType && CATEGORIES.has(proofType)));
  const body = normalize(text || '');
  if (!body || ['policy', 'non-proof'].includes(contentKind)) return null;
  const classificationText = removeExplicitDisclaimerSentences(body);
  if (!classificationText) return null;
  if (markerCategory) return { category: markerCategory, text: body, proofId: proofId || null, locator };
  if (proofType && CATEGORIES.has(proofType)) return { category: proofType, text: body, proofId: proofId || null, locator };
  const classAndRole = [attrs.class, attrs.role, attrs['aria-label'], tagName]
    .filter(Boolean)
    .join(' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .toLowerCase();
  const hasRatingClaim = /\b(?:\d+(?:\.\d+)?\s*(?:\/\s*\d+(?:\.\d+)?|out of\s+\d+(?:\.\d+)?)|\d+(?:\.\d+)?\s*stars?|\brated?\s+\d+(?:\.\d+)?)\b/i.test(classificationText)
    || /\b(?:review[- ]?rating|rating[- ]?score|star[- ]?rating)\b/i.test(classAndRole);
  const hasReviewTotal = /\b\d[\d,.]*\s*\+?\s+(?:(?:customer|client)\s+)?(?:reviews?|ratings?|responses?)\b/i.test(classificationText)
    || /\b(?:review[- ]?(?:total|count)|rating[- ]?(?:total|count)|response[- ]?count)\b/i.test(classAndRole);
  const hasTestimonial = /\btestimonials?\b|\breviews?\b/.test(classAndRole)
    || /\b(testimonial|customer review)\b/i.test(classificationText);
  let category = null;
  if (hasRatingClaim) category = 'review-rating';
  else if (hasReviewTotal) category = 'review-total';
  else if (hasTestimonial || /(?:^|\s)star(?:\s|$)/i.test(classAndRole)) category = 'testimonial';
  else if (/customer.?stor(y|ies)/.test(classAndRole) || /\b(case study|customer story)\b/i.test(classificationText)) category = 'customer-story';
  else if (/award|certif|ranking|partner endorsement/.test(classAndRole) || /\b(award|certified|certification|ranked|partner endorsement|featured in)\b/i.test(classificationText)) category = 'award-certification';
  else if (/\b(before and after|before\/after|completed work|project result)\b/i.test(classificationText)) category = 'completed-work';
  else if (/\b\d[\d,.]*\s*\+?\s*(customers?|clients?|jobs?|vehicles?|projects?)\b/i.test(classificationText)) category = /\b(job|project|vehicle)s?\b/i.test(classificationText) ? 'completed-work' : 'customer-count';
  else if (isBusinessPerformanceClaim(classificationText)) category = 'business-performance';
  if (!category && explicitProof) category = 'testimonial';
  if (!category) return null;
  return { category, text: body, proofId: proofId || null, locator };
}

function removeExplicitDisclaimerSentences(text) {
  return normalize(text.split(/(?<=[.!?;])\s+/).filter((sentence) => !isExplicitDisclaimerSentence(sentence)).join(' '));
}

function isExplicitDisclaimerSentence(sentence) {
  const clause = normalize(sentence).replace(/^[“"']|[”"']$/g, '').replace(/[.!?;]+$/g, '').trim();
  if (/^(?:(?:this|that)\s+)?(?:(?:is|was)\s+)?not\s+(?:a|an|the)\s+(?:(?:real|actual)\s+)?(?:(?:customer|business)\s+)?(?:testimonial|review|endorsement|performance claim)(?:\s+or\s+(?:(?:a|an|the)\s+)?(?:(?:customer|business)\s+)?(?:testimonial|review|endorsement|performance claim))?$/i.test(clause)) return true;
  if (/^(?:we|this page|this site|the business)\s+do(?:es)?\s+not\s+(?:publish|include|display|show|present|claim)\s+(?:any\s+)?(?:(?:customer|business)\s+)?(?:testimonials?|reviews?|endorsements?|performance claims?)(?:\s+or\s+(?:(?:customer|business)\s+)?(?:testimonials?|reviews?|performance claims?))*$/i.test(clause)) return true;
  if (/^no\s+(?:customer\s+)?reviews?\s+(?:are|is)\s+(?:shown|included|displayed)$/i.test(clause)) return true;
  if (/^concept imagery only\s*[—–-]\s*not a claim of completed customer work$/i.test(clause)) return true;
  if (/^(?:illustration only|policy statement|sample layout only)$/i.test(clause)) return true;
  return false;
}

export async function waitForPreview(child, url, {
  fetchImpl = fetch,
  timeoutMs = 60_000,
  pollIntervalMs = 500,
  requestTimeoutMs = 2_500,
  now = Date.now,
  sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds)),
} = {}) {
  const deadline = now() + timeoutMs;
  let lastStatus = null;
  let lastContentType = null;
  let lastNetworkError = null;
  const processFailure = child?.once
    ? new Promise((resolve) => {
      child.once('exit', (code, signal) => resolve({ kind: 'exit', code, signal }));
      child.once('error', (error) => resolve({ kind: 'error', error }));
    })
    : new Promise(() => {});
  const childExit = () => {
    if (child.previewStartError) return 'Preview command failed to start: ' + child.previewStartError.message;
    if (child.exitCode !== null && child.exitCode !== undefined) {
      return 'Preview command exited with code ' + child.exitCode;
    }
    if (child.signalCode) return 'Preview command exited from signal ' + child.signalCode;
    return null;
  };

  while (now() < deadline) {
    const earlyExit = childExit();
    if (earlyExit) throw new Error(earlyExit + ' before a valid HTTP 200 HTML response was received from ' + url + '.');

    let response;
    let requestTimer;
    let bodyTimer;
    let requestTimedOut = false;
    const controller = new AbortController();
    const requestBudget = Math.max(1, Math.min(requestTimeoutMs, deadline - now()));
    try {
      const fetchPromise = Promise.resolve().then(() => fetchImpl(url, { signal: controller.signal }));
      fetchPromise.then((lateResponse) => {
        if (!requestTimedOut || !lateResponse?.body || lateResponse.body.locked) return;
        try { Promise.resolve(lateResponse.body.cancel()).catch(() => {}); } catch {}
      }, () => {});
      const requestTimeout = new Promise((_, reject) => {
        requestTimer = setTimeout(() => {
          requestTimedOut = true;
          controller.abort();
          reject(Object.assign(new Error('Preview readiness request timed out after ' + requestBudget + 'ms.'), { code: 'SWQG_REQUEST_TIMEOUT' }));
        }, requestBudget);
      });
      const requestResult = await Promise.race([
        fetchPromise.then((value) => ({ kind: 'response', response: value })),
        processFailure,
        requestTimeout,
      ]);
      if (requestResult.kind === 'exit') {
        controller.abort();
        const detail = requestResult.signal ? 'signal ' + requestResult.signal : 'code ' + requestResult.code;
        throw Object.assign(new Error('Preview command exited from ' + detail + ' before readiness for ' + url + '.'), { code: 'SWQG_PREVIEW_PROCESS_FAILURE' });
      }
      if (requestResult.kind === 'error') {
        controller.abort();
        throw Object.assign(new Error('Preview command failed to start: ' + requestResult.error.message), { code: 'SWQG_PREVIEW_PROCESS_FAILURE' });
      }
      response = requestResult.response;
      lastStatus = response.status;
      lastContentType = response.headers?.get('content-type') || null;
    } catch (error) {
      if (error?.code === 'SWQG_PREVIEW_PROCESS_FAILURE') throw error;
      lastNetworkError = error?.message || String(error);
      if (error?.code === 'SWQG_REQUEST_TIMEOUT') {
        throw new Error([
          'Preview readiness request to ' + url + ' timed out.',
          'Last observed HTTP status: ' + (lastStatus ?? 'none') + '.',
          'Last observed content type: ' + (lastContentType ?? 'none') + '.',
          'Last network error: ' + lastNetworkError + '.',
        ].join(' '));
      }
    } finally {
      if (requestTimer) clearTimeout(requestTimer);
    }

    if (response) {
      let bodyReleased = true;
      try {
        if (response.body?.locked) throw new Error('response body is already locked and cannot be safely released');
        if (response.body) {
          const remaining = Math.max(1, deadline - now());
          const bodyTimeout = new Promise((_, reject) => {
            bodyTimer = setTimeout(() => {
              controller.abort();
              reject(new Error('Preview response body release timed out.'));
            }, remaining);
          });
          const release = Promise.resolve().then(() => response.body.cancel()).then(() => ({ kind: 'released' }));
          const bodyResult = await Promise.race([
            release,
            processFailure.then((failure) => ({ kind: 'process', failure })),
            bodyTimeout,
          ]);
          if (bodyResult.kind === 'process') {
            controller.abort();
            const failure = bodyResult.failure;
            const detail = failure.kind === 'error'
              ? 'Preview command failed to start: ' + failure.error.message
              : 'Preview command exited from ' + (failure.signal ? 'signal ' + failure.signal : 'code ' + failure.code) + ' before readiness for ' + url + '.';
            throw Object.assign(new Error(detail), { code: 'SWQG_PREVIEW_PROCESS_FAILURE' });
          }
        }
      } catch (error) {
        if (error?.code === 'SWQG_PREVIEW_PROCESS_FAILURE') throw error;
        bodyReleased = false;
        lastNetworkError = 'Could not release preview response body: ' + (error?.message || String(error));
      } finally {
        if (bodyTimer) clearTimeout(bodyTimer);
      }
      if (!bodyReleased) {
        throw new Error('Preview readiness could not safely release the HTTP ' + response.status + ' response body from ' + url + '. ' + lastNetworkError);
      }
      const exitedAfterRequest = childExit();
      if (exitedAfterRequest) {
        throw new Error(exitedAfterRequest + ' before a valid HTTP 200 HTML response was received from ' + url + '.');
      }
      const mediaType = lastContentType?.split(';', 1)[0].trim().toLowerCase();
      if (bodyReleased && response.status === 200 && mediaType === 'text/html') return;
    }

    const remaining = deadline - now();
    if (remaining > 0) await sleep(Math.min(pollIntervalMs, remaining));
  }
  const diagnostics = [
    'Preview readiness timed out for ' + url + ': no valid HTTP 200 HTML response was received within ' + timeoutMs + 'ms.',
    'Last observed HTTP status: ' + (lastStatus ?? 'none') + '.',
    'Last observed content type: ' + (lastContentType ?? 'none') + '.',
  ];
  if (lastNetworkError) diagnostics.push('Last network error: ' + lastNetworkError + '.');
  throw new Error(diagnostics.join(' '));
}

export function detectOverflow(dimensions) {
  return Number(dimensions.documentWidth) > Number(dimensions.viewportWidth) + 1;
}

export async function writeArtifacts(directory, report, diagnostics = '') {
  const fs = await import('node:fs/promises');
  const path = await import('node:path');
  await fs.mkdir(directory, { recursive: true });
  await fs.writeFile(path.join(directory, 'report.json'), JSON.stringify(report, null, 2) + '\n', 'utf8');
  await fs.writeFile(path.join(directory, 'diagnostics.log'), String(diagnostics), 'utf8');
  return { report: path.join(directory, 'report.json'), diagnostics: path.join(directory, 'diagnostics.log') };
}
