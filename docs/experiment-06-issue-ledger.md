# Experiment 06 — Laundry Ceria Issue Ledger

**Status:** Slice A follow-up capture/build verified; VIS-006 visually resolved at 768px; Slice B mobile-turnaround and static-arrow source patches implemented and awaiting after-render verification.
**Project:** Fictional training fixture — PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED
**Website branch:** `feat/stage-4-website-production`
**Original code-audit baseline commit:** `f79c2978e11dea653bbcc86f6a1832d3bd96ee8f`  
**SHA-labelled recapture target:** `ff29c739ed23441ed76a3b781d784d66552e6ea0` — manifest present; HEAD matched, tracked diffs empty, no untracked src/public  
**Recapture archive:** `experiment-06-sha-pinned-baseline.zip` — SHA-256 `fa74efef3cf0b6035f24891e7210bd17286ffcaadf921de7aee34453100b0dd7`
**After-QA-001 archive:** owner-supplied `experiment-06-after-qa001.zip`, registered as `SRC-0006` in `SNAP-LC-0001`.

> Laundry Ceria is fictional. Keep the displayed address labelled fictional, WhatsApp NOT_CONFIGURED and non-interactive, exclude photos without files/written permission, and do not add social proof, unsupported claims or transactional features. Do not deploy or publish.

## 1. Evidence summary

| Check | Result | Interpretation |
|---|---:|---|
| Original post-QA-001 Shared Website Quality Gate | **FAIL** | Historical audit evidence before the SHA-labelled recapture |
| SHA-labelled recapture Shared Website Quality Gate | **FAIL** | Typography and contrast remain unresolved |
| Evidence validity in recapture | **VALID, HUMAN REVIEW REQUIRED** | `evidence.valid=true`; 0 candidates; 0 failures; `matchedRecordIds=[]` |
| Typography | 423 observation rows / 59 signatures | Repeated states/viewports, not 423 independent defects |
| Contrast | 1,839 observation rows / 57 signatures | Repeated text/surface observations |
| Excluded contrast surfaces | 216 rows / 5 signatures | Manual review bucket; not automatically confirmed failures |
| Not-visible samples | 500 | Not observed failures |
| Page-level horizontal overflow | 0 failures | `responsive.failures=[]` at the nine diagnostic widths |
| Nested overflow candidates | 58 viewport-level offender rows | Require visual disposition; not 58 confirmed defects |
| Screenshot coverage | 20 PNGs | 3 full-page, 3 viewport and 14 section captures |

Diagnostic widths: 320, 360, 390, 640, 768, 900, 1024, 1280 and 1440 px. The recapture manifest records SHA `ff29c739ed23441ed76a3b781d784d66552e6ea0`; however, the pre-checkout working tree was dirty and post-checkout cleanliness was not recorded, so source-to-SHA binding remains CONDITIONAL until verified.

## 2. Prioritized issue ledger

| ID | Severity | Root cause | Evidence / observation | Bounded action and acceptance check | Status |
|---|---|---|---|---|---|
| GATE-001 | MEDIUM | EXTERNAL_APPROVAL_DEPENDENCY | The user accepted TDR-LC-2026-11-18-01 for the fictional training exercise. G1/G2/G3 are SIMULATED_PASS for this exercise only; WRP-LC-001 v0.2 is APPROVED_FOR_DESIGN for internal preview. Commercial terms are N/A. This is not a real client/business-owner approval and does not retroactively authorize the earlier implementation. | Preserve the exact WRP and decision record; do not reuse it as approval evidence for a real client or infer publication/asset rights. | RESOLVED FOR TRAINING ONLY; NOT APPROVED FOR REAL CLIENT WORK |
| GATE-002 | HIGH | EXTERNAL_APPROVAL_DEPENDENCY | Legacy Laundry stage numbering was inconsistent with Studio Master Skill v1.12 / Canonical Operating Workflow v1.0. | Keep `docs/workflow-stage-reconciliation.md` and README links. Stage 6 refinement and Stage 7 independent QA remain separate. | DOCUMENTED IN BRANCH |
| PROC-001 | HIGH | IMPLEMENTATION_QA | User-supplied transcript confirms the follow-up checkout SHA `b3f0fa0a9929ce81fff8e2e0ffcaa5ac76abbca3` and local `npm.cmd run build` passed (TypeScript + Vite 6.4.6, 30 modules). Rendered gate completed capture but remains FAIL. No GitHub Actions run/status is associated with the head. An untracked package-lock was used and is absent from Git; npm previously reported four high-severity advisories. | Re-run build and rendered capture on the current Slice B head. Keep dependency reproducibility/advisory review separate; complete keyboard, focus, reduced-motion and 200% zoom checks. | OPEN — SLICE B BUILD/RENDER PENDING |
| VIS-001 | HIGH | IMPLEMENTATION_QA | Before: 423 typography failures across nine widths. After Slice A: `typography.failures=[]` at all nine diagnostic widths; role counts include BODY, CONTROL, METADATA and DISCLOSURE. Mobile 390 and tablet 768/desktop 1440 screenshots were inspected. | Preserve role-accurate `data-qa-role` attributes and unchanged shared floors. Recheck tablet hero CTA wrapping after follow-up patch; do not lower thresholds. | FIXED — rendered gate reports zero typography failures; tablet CTA regression separately tracked as VIS-006 |
| VIS-002 | HIGH | IMPLEMENTATION_QA | Latest follow-up: 200 contrast rows / 5 signatures; all are aria-hidden decorative marks: disabled WhatsApp arrow, two address watermarks, contact `/06` index and process-step arrow. 205 excluded surfaces and 517 not-visible samples. Substantive content pairs remain corrected. Gate remains FAIL on decorative signatures/manual review. | Keep shared contrast threshold unchanged. VIS-004 removes the process arrow in Slice B; only the new report can confirm the reduced decorative signature count. | FIXED — substantive content pairs corrected; decorative residuals pending Slice B recapture |
| VIS-003 | MEDIUM | IMPLEMENTATION_QA | The SHA-labelled recapture records 58 nested-overflow candidate rows across nine widths while `responsive.failures=[]` and `documentWidth` equals viewport width at every sampled width. Suspects include hero/turnaround sections, hero wrapper/art, address card and visually hidden nav label. | Inspect visible clipping at 320/360/390/640/768/900/1024/1280/1440px. Separate intentional art clipping and visually hidden text from actual content clipping. No blanket `overflow-x:hidden`. | OPEN — manual confirmation |
| A11Y-001 | HIGH | IMPLEMENTATION_QA | Source inspection confirms no skip link or main-target ID and no Escape-key handling in the mobile nav. Existing `:focus-visible` CSS (3px outline/4px offset) and `prefers-reduced-motion: reduce` CSS are present. Keyboard-only journeys, focus continuity and 200% zoom remain NOT TESTED. | Add a skip link and programmatically focusable main target; test menu open/close, Escape and focus return. Preserve existing focus/reduced-motion CSS and verify them in a browser; record 200% zoom evidence. | OPEN — NOT TESTED |
| COPY-001 | LOW | MASTER_SKILL_REASONING | Contact heading “Pilih cara yang ingin dikenali.” is awkward and may not clearly communicate contact options. | Make a bounded Bahasa Indonesia copy correction only after the relevant WRP/scope gate is resolved; verify no conversion behavior is implied. | OPEN |
| DES-001 | MEDIUM | MASTER_SKILL_REASONING | Preliminary aesthetic verdict: COMPETENT BUT GENERIC. Required comparison against at least two recent relevant Studio projects was not completed. | Compare design fingerprints and rendered references of two projects; document reused/new patterns and whether direction needs redesign. | DEFERRED |
| GATE-003 | MEDIUM | IMPLEMENTATION_QA | `.eyebrow` paragraphs and other role-specific elements now have explicit `data-qa-role` assignments. After report records zero typography failures across all nine sampled widths; BODY / CONTROL / METADATA / DISCLOSURE are present. | Keep roles tied to semantics; do not lower global thresholds. Any future Studio-wide regression test remains separate from this client patch. | FIXED — verified in Laundry Ceria rendered report |
| VIS-004 | MEDIUM | MASTER_SKILL_REASONING | Static `.process-item` arrow implied navigation although each row is informational. | Removed arrow markup and CSS rule at App commit `ab3a32fe9b24547c543cb0336f66916e7da7b1f2` / CSS commit `c1c6e94d6a1b0002886682485720e948684da9d1`. Verify the numbered process list remains clear and non-interactive. | IMPLEMENTED — after-render verification pending |
| VIS-005 | MEDIUM | IMPLEMENTATION_QA | Follow-up mobile 390 screenshot still showed regular/express cards side-by-side and dense. | Changed mobile timing grid to one column with natural card height and 12px gap; paired layout retained at 768px+. CSS commit `c1c6e94d6a1b0002886682485720e948684da9d1`. Re-capture 320/360/390 and wider viewports; preserve all timings and +50% surcharge. | IMPLEMENTED — after-render verification pending |
| VIS-006 | MEDIUM | IMPLEMENTATION_QA | Follow-up capture at 768px shows the primary hero CTA and `Jam operasional` link each on one intact line after the tablet-only wrapping patch. Responsive diagnostics include 900px and report no page-level responsive failures; no dedicated 900px screenshot was captured. | Keep the tablet-only flex-wrap and no-wrap control labels. A later design change must preserve this treatment at 768–1023px. | FIXED — visually verified at 768px; 900px covered by responsive diagnostic only |
| QA-001 | HIGH | IMPLEMENTATION_QA | Testimonial detector matched substring `review` inside `preview`, falsely treating the preview notice as proof. | Word-boundary-aware matching and regression tests merged in Studio PR #48. Post-fix evidence check has 0 candidates and 0 failures; all PNGs unchanged. | FIXED — VERIFIED |

Selector-level sizes, proposed role assignments, measured color pairs and acceptance checks are documented in [Experiment 06 Selector Remediation Map](./experiment-06-selector-remediation-map.md).

## 3. Contrast exclusion disposition

The 216 excluded rows reduce to five signatures from abstract hero art: decorative `✳` symbols, the illustration badge `RAPI TERATUR`, and caption `ILUSTRASI DEKORATIF`. The star symbols are decorative. The text-bearing badge/caption require a deliberate decision: if meaningful, make them legible; if decorative, they must not carry essential claims. Do not count all 217 as proven contrast failures.

## 4. Preserved elements and project safeguards

- Preserve the abstract CSS folded-fabric hero illustration; no approved business photos exist.
- Preserve separate kiloan/satuan pricing, all five demo prices and units, regular/express conditions, six-step process and exact pickup thresholds.
- Keep `Jl. Melati No. 12, Jakarta` visibly labelled as fictional; no maps/directions.
- Keep WhatsApp `NOT_CONFIGURED`, disabled and non-interactive.
- Do not add testimonials, ratings, awards, customer counts, invented guarantees, official logo, bookings, payments, tracking or other unsupported features.
- No deployment or public publication.

## 5. Current gate and next execution

Current records: WRP-LC-001 v0.2 = APPROVED_FOR_DESIGN for internal training only; TDR-LC-2026-11-18-01 records simulated G1/G2/G3 decisions; commercial terms are N/A. All fixture facts remain DEMO-ONLY / NOT_APPROVED, and G0 publication plus G4–G7 remain unpassed. The new browser archive is attached to the experiment record and carries a companion SHA manifest; exact source-to-SHA binding remains CONDITIONAL until post-checkout working-tree cleanliness is verified.

Proceed in this order:
1. Confirm current local checkout SHA and inspect tracked/untracked source changes non-destructively; do not run `reset --hard` or `git clean`.
2. Once source cleanliness is confirmed, record the SHA-labelled archive as the pinned baseline and begin bounded training-only Stage 6 changes tied to finding IDs.
3. Prioritize VIS-001/GATE-003 typography role/floor fixes and VIS-002 contrast pairs; then VIS-005 mobile turnaround density, VIS-004 static arrows, VIS-003 overflow triage and A11Y-001 keyboard/focus behavior.
4. Re-capture the same viewports/sections, retain before/after screenshots, build/test outputs and exact SHA.
5. Stage 7 independent QA remains separate. No preview pass authorizes production or release.

**Current decision (updated after Slice A follow-up and Slice B implementation):** QA-001 and GATE-001 are resolved for this training exercise only. VIS-001 and GATE-003 are FIXED; VIS-002 substantive content pairs are FIXED, while five aria-hidden decorative signatures keep the shared report at FAIL. VIS-006 is FIXED at 768px. VIS-004 and VIS-005 source patches are implemented but await rendered verification. PROC-001 requires a new build/capture on the current Slice B head. VIS-003, A11Y-001 and COPY-001 remain open; DES-001 deferred. No public release is authorized.

## 6. Stage 6 Slice A implementation checkpoint — 2026-11-18

Branch `fix/experiment-06-stage6-remediation`, source checkpoint `ed77b9cdbf7f5fed810a9b0aabe1b8f3c75b0adc`.

- `src/App.tsx`: explicit QA role attributes for metadata, disclosure, body and control text; express surcharge disclosure tagged; non-semantic numbering marked decorative.
- `src/styles.css`: readability and contrast updates for preview notice, body copy, pricing, turnaround, process, pickup/delivery, hours/location, contact states, controls and footer.
- Existing design tokens reused; no typography thresholds lowered, palette redesign, dependency or new feature added.
- **Build and after-render checks remain NOT TESTED.** VIS-001, VIS-002 and GATE-003 remain OPEN until exact after screenshots/report verify the change.


## 7. Slice A after-capture review — 2026-11-18

- Archive: `experiment-06-after-slice-a.zip`; SHA-256 `7e96ba4ba383e6010d9533411f49ffff732db0be4ae7e0210757892754438770`.
- Capture checkout SHA from archive manifest: `b469627523eea16f6259d236545d3cd2318777b9`; implementation source checkpoint: `ed77b9cdbf7f5fed810a9b0aabe1b8f3c75b0adc`; pre-change baseline: `ff29c739ed23441ed76a3b781d784d66552e6ea0`.
- Typography failures: 423 -> 0. Contrast failures: 1,839 -> 197 rows / five signatures, all aria-hidden/decorative. Page responsive failures: 0 -> 0; nested overflow candidates: 58 -> 58.
- Evidence manifest valid with zero candidates/failures and human review required. The rendered gate remains FAIL.
- 20 PNGs are registered in report.json; 89 extra PNGs in `Screenshots 1/` are not report-linked and were excluded from visual evidence review.
- Visual inspection confirmed improved copy readability on mobile, tablet and desktop, but also identified a tablet hero CTA wrapping regression (VIS-006). A tablet-only CSS patch has since been committed at `1778d1fa6e27a7be91e02e7d8cfa5b7382fb08a8`, pending recapture.
- The archive does not contain a build transcript; no GitHub Actions run/status is associated with capture head. Current follow-up head requires explicit build verification.


## 8. Slice A follow-up and Slice B implementation — 2026-11-18

### Follow-up archive
- Archive: `experiment-06-after-slice-a-followup.zip`; SHA-256 `93dabb5d744bb8f0ed982ae5199c9134c98ea2b847a41433a092dfdb82cfd767`.
- Before baseline SHA: `ff29c739ed23441ed76a3b781d784d66552e6ea0`.
- Capture checkout SHA: `b3f0fa0a9929ce81fff8e2e0ffcaa5ac76abbca3`.
- Implementation commit: `1778d1fa6e27a7be91e02e7d8cfa5b7382fb08a8`.
- Production build: **PASS**, confirmed by user terminal transcript; TypeScript and Vite 6.4.6 completed.
- Rendered gate: **FAIL**; typography failures 0; contrast 200 rows / five decorative signatures; excluded surfaces 205; not-visible 517; responsive failures 0; evidence manifest valid with human review required.
- 20 report-linked screenshots retained and inspected. Tablet hero CTA labels are intact on one line at 768px. The report includes 900px responsive diagnostics but no dedicated 900px screenshot.

### Slice B implementation — not yet rendered
- Branch `fix/experiment-06-stage6-remediation`.
- App commit `ab3a32fe9b24547c543cb0336f66916e7da7b1f2`: remove misleading static process arrows.
- CSS commit `c1c6e94d6a1b0002886682485720e948684da9d1`: stack turnaround cards on mobile, retain paired layout at tablet/desktop, remove 240px minimum height at max-width 380px.
- **No build or after-render evidence is claimed for Slice B.** VIS-004 and VIS-005 remain pending until current-head build and report-linked screenshot inspection.
