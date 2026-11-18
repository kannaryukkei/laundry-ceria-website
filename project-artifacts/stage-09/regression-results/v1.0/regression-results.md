# Stage 9 — Original and Regression Test Results

## Final regression run

- Workflow: [Web Preview CI #44261410942](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44261410942)
- Exact tested commit: `0abb0d002979737ed580475f3466ecf72a92d201`
- Actions artifact: [14408755383](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44261410942/artifacts/14408755383)
- Browser QA: 44 / 44 PASS
- Release isolation invariant: PASS
- Build / typecheck: PASS
- Baseline capture: PASS
- Dependency audits captured: PASS (full and runtime-only)

## Browser checks

| Test family | Result |
|---|---|
| Indonesian page metadata, title and noindex | PASS |
| Ten canonical sections present exactly once | PASS |
| Local anchors resolve; no external navigation/contact links | PASS |
| Fictional address disclosure | PASS |
| Exact source-backed services, prices and key terms | PASS |
| WhatsApp NOT_CONFIGURED and non-interactive | PASS |
| Skip link first in keyboard order | PASS |
| Skip link targets main content | PASS |
| Mobile menu keyboard focus / focus ring | PASS |
| Enter opens menu; Tab enters navigation | PASS |
| Escape closes and returns focus to trigger | PASS |
| Seven responsive viewport widths | PASS |
| Sampled supporting-text floor >= 12 px | PASS |
| Reduced-motion preference | PASS |
| Console errors / runtime errors | 0 / 0 |

## Baseline / after result

- Baseline commit: `128050a348ca07afa9657b956250543730838daf`.
- After-cycle comparison commits and evidence are recorded in Stage 6 artifacts.
- Baseline sampled text minimum was 7 px on mobile and 8 px at wider widths.
- After-cycle sampled text minimum is 12 px at all seven tested widths.
- Baseline and after page-level horizontal-overflow failures: 0 / 0.
- Seven identical viewport widths and reduced-motion state have paired screenshots.

## Transient failures retained in history

| Run | Failure observed | Resolution |
|---|---|---|
| #44253476177 | Playwright 1.55 incompatible with Ubuntu 26.04 | Updated Playwright to 1.61.0 |
| #44253644803 | Case-sensitive “biasanya” assertion | Case-insensitive source-copy assertion |
| #44253910315 | 9 px banner wrapper at 320 px | Final mobile override set |
| #44256865922 | 11 px footer at 768 px | Final global 12 px footer floor |
| #44260614770 | Invariant still required Stage 8 can_start after G7 | Updated stage transition assertion; final invariant now supports Stage 8 PASSED / Stage 9 start |
| #44261410942 | No failure | Final current regression run passed |

## Security results

- Runtime audit: 0 vulnerabilities.
- Full development/build dependency audit: 4 high, 0 critical; no remediation performed.
- This full-audit result remains a release-readiness limitation rather than being hidden by the green browser suite.

## Manual checks still not performed

- True 200% browser UI zoom.
- Screen-reader / assistive-technology review.
- Exhaustive computed contrast test across every visible text/background pair.
- Real human independent reviewer sign-off.
