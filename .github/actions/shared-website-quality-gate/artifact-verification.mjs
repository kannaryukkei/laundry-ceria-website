const TRANSIENT_HTTP_STATUSES = new Set([429, 500, 502, 503, 504]);

const defaultSleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

/**
 * GitHub's Actions artifact listing can briefly lag a successful v4 upload.
 * Poll the run-scoped endpoint for a bounded period before declaring an upload missing.
 */
export async function findRunArtifact({
  apiBaseUrl = 'https://api.github.com',
  repository,
  runId,
  token,
  artifactName,
  fetchImpl = fetch,
  attempts = 8,
  retryDelayMs = 2_000,
  sleep = defaultSleep,
} = {}) {
  if (!repository || !runId || !token || !artifactName) {
    throw new TypeError('repository, runId, token, and artifactName are required.');
  }

  const normalizedAttempts = Number.isInteger(attempts) && attempts > 0 ? attempts : 1;
  const endpoint = new URL(
    `/repos/${repository}/actions/runs/${runId}/artifacts?per_page=100`,
    apiBaseUrl,
  ).toString();
  const headers = {
    accept: 'application/vnd.github+json',
    authorization: `Bearer ${token}`,
    'x-github-api-version': '2022-11-28',
  };

  for (let attempt = 1; attempt <= normalizedAttempts; attempt += 1) {
    let response;
    try {
      response = await fetchImpl(endpoint, { headers });
    } catch (error) {
      if (attempt === normalizedAttempts) break;
      await sleep(retryDelayMs);
      continue;
    }

    if (!response.ok) {
      if (!TRANSIENT_HTTP_STATUSES.has(response.status) || attempt === normalizedAttempts) {
        throw new Error(`artifact listing returned HTTP ${response.status}`);
      }
      await sleep(retryDelayMs);
      continue;
    }

    const payload = await response.json();
    const artifact = (payload.artifacts ?? []).find((item) =>
      item.name === artifactName && !item.expired && Number(item.size_in_bytes) > 0
    );
    if (artifact) return artifact;

    if (attempt < normalizedAttempts) await sleep(retryDelayMs);
  }

  return null;
}
