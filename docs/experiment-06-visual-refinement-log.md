# Experiment 06 — Visual Refinement Log

**Project:** LC-TRAINING-001 — Laundry Ceria (fictional training fixture)  
**Canonical stage:** Stage 6 — Refinement  
**Status:** SLICE A IMPLEMENTED — LOCAL BUILD AND RENDERED RECAPTURE PENDING  
**Target baseline commit:** ff29c739ed23441ed76a3b781d784d66552e6ea0  
**Stage 6 branch:** fix/experiment-06-stage6-remediation  
**Slice A implementation checkpoint:** ed77b9cdbf7f5fed810a9b0aabe1b8f3c75b0adc  
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

**Integrity verification from the follow-up transcript:** HEAD equals `ff29c739ed23441ed76a3b781d784d66552e6ea0`; both unstaged and staged tracked-source diffs are empty; `git ls-files --others --exclude-standard -- src public` returns no files. The remaining untracked entries are generated QA archives, `dist/`, `node_modules/`, the baseline ZIP and `package-lock.json`. No local file was deleted or reset.

**Dependency reproducibility caveat:** `package-lock.json` is absent from the pinned Git tree but existed locally and was used by `npm ci`. Thus the tracked app source matches the pinned SHA, but the exact local dependency resolution is not fully represented by the repository commit. The install also reported four high-severity advisories; no automatic dependency changes were made. Preserve the before archive unchanged.

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


## 6. Slice A — typography roles, readable type and contrast

**Branch:** `fix/experiment-06-stage6-remediation`  
**Implementation checkpoint:** `ed77b9cdbf7f5fed810a9b0aabe1b8f3c75b0adc`  
**Changed files:** `src/App.tsx`, `src/styles.css`  
**Scope:** VIS-001, VIS-002, GATE-003.

### Implemented changes

- Added explicit semantic QA roles for metadata, body, controls and disclosures. Shared typography thresholds remain unchanged.
- Eyebrows and section/category labels are assigned METADATA; key simulation, price, turnaround, pickup, schedule, fictional-address and unavailable-state notes are assigned DISCLOSURE; body and control elements are explicitly tagged where tag fallback would otherwise be ambiguous.
- Raised small but decision-relevant text including preview notice, body descriptions, price labels/units, turnaround terms, process explanations, pickup conditions, hours, contact explanations, fictional-address label, status pills and footer disclosures.
- Replaced measured low-contrast muted colors with the existing `--color-muted` token where appropriate; white on teal and footer disclosure opacity were increased for the relevant content pairs.
- Increased the express surcharge label to 13px and marked it as a disclosure.
- Marked decorative card numbering and contact index as hidden from assistive technology.

### Verification status

The GitHub diff confirms only `src/App.tsx` and `src/styles.css` changed in this code slice. No dependencies, business facts, CTA destinations, links, backend, external services or transaction behavior were added.

**Not yet verified:** no production build has been run on the Stage 6 branch head, and no after-slice browser screenshots have been captured. Therefore VIS-001, VIS-002 and GATE-003 remain OPEN. The shared rendered gate result for this patch is unknown; no PASS is claimed.

### Required next check

On the local machine, switch to this branch without cleaning the working tree, run the existing production build, then capture a new Shared Website Quality Gate archive at 390/768/1440 with the same seven mobile and seven desktop section captures. Inspect typography, color pairs, line wrapping, clipping and price/unit association. Keep the original baseline ZIP untouched and store the after-slice evidence separately.
