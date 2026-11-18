# Stage 6 — Baseline and After-cycle Screenshot Evidence

**Evidence workflow:** Web Preview CI run [#44258071683](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44258071683)  
**GitHub Actions artifact:** [laundry-ceria-browser-qa-54e894a1c0c7f63e841a8b9c5011e37d96e96647](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44258071683/artifacts/14407200762)  
**Artifact ID:** 14407200762  
**Artifact SHA-256:** 26b2ddd497b283c9e70a0dad2489585788ec569a40ae9567b6a2d1e06ab5f17b

## Exact comparison endpoints

| Side | Commit | Capture method |
|---|---|---|
| Baseline | `128050a348ca07afa9657b956250543730838daf` | Git worktree at exact pre-refinement commit, separately installed and built in the same CI job |
| After | `54e894a1c0c7f63e841a8b9c5011e37d96e96647` | Current candidate, production build served by Vite preview |

Both sets were captured in the same job using the same Playwright/Chromium installation and identical viewport dimensions. Full-page screenshots are included for each viewport and reduced-motion state.

## Paired viewport set

320, 360, 390, 640, 768, 1024 and 1440 CSS px, plus reduced-motion at 390 px. Eight baseline screenshots and eight after screenshots are included, together with both JSON reports.

## Quantitative comparison

| Measure | Baseline | After |
|---|---:|---:|
| Minimum sampled supporting-text size at 320–640 px | 7 px | 12 px |
| Minimum sampled supporting-text size at 768–1440 px | 8 px | 12 px |
| Page-level horizontal-overflow failures | 0 / 7 | 0 / 7 |
| Browser QA checks | Baseline capture only | 44 / 44 PASS |
| Browser console errors in QA run | Not instrumented in baseline capture | 0 |
| Page runtime errors in QA run | Not instrumented in baseline capture | 0 |

The typography values are computed CSS font sizes for the selectors listed by the browser QA scripts, not a claim about every rendered text node. The after run also tested content, local links, demo safeguards, disabled WhatsApp state, mobile menu, keyboard behavior, reduced motion and viewport overflow.

## Remaining limitations

- No real browser UI zoom at 200% was performed; 640 px is an additional narrow-layout proxy, not equivalent proof.
- No screen-reader review was performed.
- No full independent human visual/accessibility approval is implied.
- The baseline capture checks layout width and samples typography, but does not run the full interactive test suite that the after run runs.

## Conclusion

The pair establishes a traceable before/after visual baseline at identical viewport sizes. The most clearly measured change is the increase in sampled support-text floor from 7–8 px to 12 px without introducing page-level horizontal overflow.
