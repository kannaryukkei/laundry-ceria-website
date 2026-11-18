# Experiment 06 — Visual Refinement Log

**Project:** LC-TRAINING-001 — Laundry Ceria (fictional training fixture)  
**Canonical stage:** Stage 6 — Refinement  
**Status:** BASELINE CAPTURE RECEIVED — SOURCE-TREE INTEGRITY CONFIRMATION PENDING  
**Target baseline commit:** ff29c739ed23441ed76a3b781d784d66552e6ea0  
**WRP:** WRP-LC-001 v0.2 — APPROVED_FOR_DESIGN, internal training only  
**Decision record:** TDR-LC-2026-11-18-01  
**Working branch:** feat/stage-4-website-production

## 1. Entry checklist

| Entry condition | Evidence | Status |
|---|---|---|
| WRP APPROVED_FOR_DESIGN and G2 recorded | WRP-LC-001 v0.2 and TDR-LC-2026-11-18-01 | PASS — training only |
| Approved design direction, scope, copy and asset limits available | Stage 3 Design Direction; WRP v0.2; canonical SNAP-LC-0001 | PASS — internal preview only |
| Working website candidate and initial production build pass | PR #1 candidate commit ff29c739ed23441ed76a3b781d784d66552e6ea0; Web Preview CI #94 passed on this exact documentation-only head | PASS — install/typecheck/build only |
| Exact repo, branch and baseline commit identified | kannaryukkei/laundry-ceria-website; feat/stage-4-website-production; candidate head recorded above | PASS — candidate identified |
| Fresh browser-rendered baseline captured and retained for that exact commit | experiment-06-sha-pinned-baseline.zip; companion manifest records target SHA ff29c739ed23441ed76a3b781d784d66552e6ea0 | CAPTURED — local working-tree cleanliness still needs confirmation |

## 2. Known baseline findings

- Shared rendered quality gate for the new capture: **FAIL**.
- Typography: 423 observations / 59 unique role-text-size signatures.
- Contrast: 1,839 observations / 57 unique text/foreground/background signatures.
- Excluded contrast surfaces: 216 observations / 5 signatures; manual review is required and these must not be represented as proven content failures.
- Contrast samples marked not visible: 500; these are not failures.
- Page-level responsive failures: 0 across the nine diagnostic widths.
- Nested overflow candidates: 58 viewport-level offender rows across the nine diagnostic widths; these are candidates for visual triage, not 58 confirmed defects.
- Evidence validation: valid; 0 candidates / 0 failures, with human review still required and no matched canonical evidence record IDs.
- Capture coverage: 3 full-page screenshots, 3 initial viewport screenshots, and 14 section screenshots (7 mobile at 390px and 7 desktop at 1440px) — 20 PNGs total.
- The 390px mobile section capture visibly shows the regular/express turnaround cards compressed side by side, with several explanatory labels/details difficult to read. Evaluate a mobile stacked layout as part of VIS-001/VIS-005; retain the paired presentation on wider screens if appropriate.
- Known accessibility/interaction gaps: no skip link/main target, mobile menu has no Escape-key handling/focus-return verification, keyboard and 200% zoom checks are not recorded as complete. Existing focus-visible and reduced-motion CSS must be preserved and tested.

### Baseline archive and integrity metadata

- Archive: `experiment-06-sha-pinned-baseline.zip`
- Manifest SHA: `ff29c739ed23441ed76a3b781d784d66552e6ea0`
- Manifest capture timestamp: `2026-11-18T15:51:13.6220511+07:00`
- Report timestamp: `2026-11-18T08:51:05.818Z`
- Archive SHA-256: `fa74efef3cf0b6035f24891e7210bd17286ffcaadf921de7aee34453100b0dd7`
- report.json SHA-256: `e609df8d49e91f9bd306f242a0880bb265db5e80bc98d03e53d776058348850a`
- diagnostics.log SHA-256: `b35208967715db4daff62a9d3fd3c52de62e322beb4e03cb27389d4ef404f27a`

The website `npm ci` and `npm run build` completed successfully on the checked-out HEAD. npm reported four high-severity dependency advisories during installation; no automatic dependency changes were made. This is a separate dependency-security item for review, not a reason to modify the pinned baseline.

**Important integrity caveat:** the operator's pre-checkout `git status --porcelain` was non-empty and raised an error. Checkout to the target SHA then succeeded, but a post-checkout `git status` / tracked-source diff was not captured in the supplied transcript. The manifest records the checked-out HEAD SHA, but does not independently prove the working tree was clean when the build and screenshots were produced. Preserve the archive and do not alter it; verify current tracked and untracked source state non-destructively before treating this as a fully SHA-bound baseline.

## 3. Required baseline capture

Capture the exact candidate branch and SHA ff29c739ed23441ed76a3b781d784d66552e6ea0 (or a later explicitly re-pinned commit if the website source changes) with the existing Shared Website Quality Gate from the Studio repository. Retain:
- Full-page screenshots at 390, 768 and 1440.
- Initial viewport screenshots at 390, 768 and 1440.
- Section screenshots at mobile 390 and desktop 1440.
- report.json, diagnostics.log, runner version and actual commands.
- A small manifest recording repository, branch, exact website commit SHA, preview URL, capture time and the artifact archive name.

The report and images have now been inspected and the archive includes a companion manifest plus SHA-256 values recorded above. Before source/CSS edits, confirm the post-checkout working tree did not retain tracked modifications from the pre-checkout dirty state. Do not reset, clean or overwrite local work merely to make this check pass.

## 4. Planned bounded slices — not yet started

1. Typography role corrections and type floors; preserve shared quality-gate thresholds.
2. Contrast corrections using existing tokens and verified foreground/background pairs.
3. Static-arrow affordance and other misleading interaction cues.
4. Skip link, main landmark target, mobile-menu Escape/focus behavior, and keyboard/reduced-motion verification.
5. Nested overflow candidates, only after actual browser triage.

No source/CSS change has been made as part of this entry preparation. Once source-tree integrity is confirmed, start with bounded typography and contrast corrections, then mobile turnaround layout and keyboard affordances. Keep each correction tied to the Experiment 06 issue ledger and selector remediation map.

## 5. Exit boundary

Stage 6 is not passed by this log. It will require before/after evidence, bounded fixes, actual builds and affected tests, separate aesthetic and visual-fidelity verdicts, explicit unresolved findings, and a distinct Stage 7 independent QA pass. This exercise remains PREVIEW ONLY; G0 publication, G4, G5, G6 and G7 are not approved or passed.
