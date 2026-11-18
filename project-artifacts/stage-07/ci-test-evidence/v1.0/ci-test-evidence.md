# Stage 7 — CI and Automated Test Evidence

**Exact tested commit:** `2aa97b6a50c0bb2009517e34a9fe9dfc3ec4a78f`  
**Run:** [Web Preview CI #44258897911](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44258897911)  
**Artifact:** [Browser, baseline, after-cycle and npm audit evidence](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44258897911/artifacts/14407785947)

## CI steps

| Step | Result |
|---|---|
| Checkout | PASS |
| Setup Node 22 | PASS |
| npm install | PASS |
| npm run typecheck | PASS |
| npm run build | PASS |
| Install Chromium for Playwright | PASS |
| Capture exact pre-refinement baseline | PASS |
| Full dependency audit JSON | CAPTURED |
| Runtime-only dependency audit JSON | CAPTURED |
| Browser QA | PASS — 44 / 44 |
| Upload evidence artifact | PASS |

## Dependency security audit

| Audit scope | Info | Low | Moderate | High | Critical | Total |
|---|---:|---:|---:|---:|---:|---:|
| Full dependency tree | 0 | 0 | 0 | 4 | 0 | 4 |
| Production/runtime only (`--omit=dev`) | 0 | 0 | 0 | 0 | 0 | 0 |

The full dependency findings identify development/build packages:
- `vite`
- `fdir`
- `picomatch`
- `tinyglobby`

The npm audit output indicates a remediation path with a semver-major change. This test deliberately did not run `npm audit fix --force` or downgrade the build system without a compatibility review. Findings remain open for a separate dependency-upgrade task.

## Artifact contents

- Baseline report and eight baseline screenshots.
- After-cycle browser QA report and eight after screenshots.
- Full dependency audit JSON.
- Runtime-only dependency audit JSON.

## Interpretation

The CI job is green because the install, typecheck, build and test scripts completed; the audit step is report-only and intentionally does not suppress or resolve its findings. A green CI workflow is therefore not equivalent to a clean dependency security audit.
