# Experiment 06 — Laundry Ceria Issue Ledger

**Status:** VIS-001/VIS-002 and VIS-004–VIS-006 verified or partially resolved as recorded below; VIS-003 remains OPEN. The supplied 640px screenshot shows the Hero artwork crossing the disclosure area, but the archive has no commit-bound manifest, so it cannot verify whether the current orbit-containment patch was rendered. Independent accessibility testing and Stage 7 QA remain open.
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
| PROC-001 | HIGH | IMPLEMENTATION_QA | User transcript confirms current capture checkout SHA `625e3daec64ed749b5e64a49fde2be9f39fc4d36` and local production build PASS (TypeScript + Vite 6.4.6, 30 modules, 906ms). The same SHA has a valid rendered report and 20 report-linked screenshots. No GitHub Actions run or combined status is associated with the head. An untracked package-lock was used and is absent from Git; npm previously reported four high-severity advisories. | Keep dependency reproducibility/advisory review separate; do not claim CI PASS. Shared rendered gate remains FAIL on contrast signatures and manual review. | RESOLVED — local build + capture evidence verified; GH Actions not run and quality gate remains FAIL |
| VIS-001 | HIGH | IMPLEMENTATION_QA | Before: 423 typography failures across nine widths. After Slice A: `typography.failures=[]` at all nine diagnostic widths; role counts include BODY, CONTROL, METADATA and DISCLOSURE. Mobile 390 and tablet 768/desktop 1440 screenshots were inspected. | Preserve role-accurate `data-qa-role` attributes and unchanged shared floors. Recheck tablet hero CTA wrapping after follow-up patch; do not lower thresholds. | FIXED — rendered gate reports zero typography failures; tablet CTA regression separately tracked as VIS-006 |
| VIS-002 | HIGH | IMPLEMENTATION_QA | Slice B report: 185 contrast failure rows / 4 signatures: `JAKARTA` (50), `DEMO / 001` (50), disabled WhatsApp arrow (50), contact `/06` index (35). The `.process-mark` arrow signature no longer appears after VIS-004 markup removal. Remaining signatures are aria-hidden decorative marks; 205 excluded surfaces and 232 not-visible samples. | Keep shared contrast thresholds unchanged. Continue manual review/disposition of remaining decorative signatures; no substantive text/surface contrast failures are indicated by these residual signatures. | PARTIALLY RESOLVED — process-arrow signature removed; four decorative residual signatures keep gate FAIL |
| VIS-003 | MEDIUM | IMPLEMENTATION_QA | The six-width archive confirms `documentWidth` equals `viewportWidth` at 320/360/640/900/1024/1280. Closer review of `hero-640.png` shows the orbit artwork crosses the Hero disclosure area. The archive has no manifest or website commit SHA, so it is not proven to be a render of the current patch head. | The current targeted CSS patch constrains `.orbit-one` / `.orbit-two` and raises `.hero-art` min-height at 600–767px (commit `472fdc4c94d8abd9fd033be1294a204a4265bb36`). Rebuild the exact current head and capture Hero at 640px and a second width near 700–767px; confirm clear separation before closing. Keep intentional clipping; no blanket overflow suppression or removal of `.sr-only`. | OPEN — current-head after-render verification pending |
| A11Y-001 | HIGH | IMPLEMENTATION_QA | Source inspection confirms no skip link or main-target ID and no Escape-key handling in the mobile nav. Existing `:focus-visible` CSS (3px outline/4px offset) and `prefers-reduced-motion: reduce` CSS are present. Keyboard-only journeys, focus continuity and 200% zoom remain NOT TESTED. | Add a skip link and programmatically focusable main target; test menu open/close, Escape and focus return. Preserve existing focus/reduced-motion CSS and verify them in a browser; record 200% zoom evidence. | OPEN — NOT TESTED |
| COPY-001 | LOW | MASTER_SKILL_REASONING | Contact heading “Pilih cara yang ingin dikenali.” is awkward and may not clearly communicate contact options. | Make a bounded Bahasa Indonesia copy correction only after the relevant WRP/scope gate is resolved; verify no conversion behavior is implied. | OPEN |
| DES-001 | MEDIUM | MASTER_SKILL_REASONING | Preliminary aesthetic verdict: COMPETENT BUT GENERIC. Required comparison against at least two recent relevant Studio projects was not completed. | Compare design fingerprints and rendered references of two projects; document reused/new patterns and whether direction needs redesign. | DEFERRED |
| GATE-003 | MEDIUM | IMPLEMENTATION_QA | `.eyebrow` paragraphs and other role-specific elements now have explicit `data-qa-role` assignments. After report records zero typography failures across all nine sampled widths; BODY / CONTROL / METADATA / DISCLOSURE are present. | Keep roles tied to semantics; do not lower global thresholds. Any future Studio-wide regression test remains separate from this client patch. | FIXED — verified in Laundry Ceria rendered report |
| VIS-004 | MEDIUM | MASTER_SKILL_REASONING | Static `.process-item` arrow implied navigation although each row is informational. | Arrow markup and CSS removed at App commit `ab3a32fe9b24547c543cb0336f66916e7da7b1f2` / CSS commit `c1c6e94d6a1b0002886682485720e948684da9d1`. Slice B mobile 390 and desktop 1440 screenshots show six ordered, non-interactive steps remain clear; process-arrow contrast signature disappeared from report. | FIXED — after-render screenshot and report verified |
| VIS-005 | MEDIUM | IMPLEMENTATION_QA | Previous 390px screenshot showed regular/express timing cards side-by-side and dense. | Mobile CSS now stacks timing cards under 768px with natural height and 12px gap; desktop retains two columns. Slice B 390 screenshot confirms stacked cards; 1440 screenshot confirms desktop pair; responsive diagnostics have zero page-level failures at all nine widths (320–1440). | FIXED — mobile/desktop screenshots and nine-width responsive report verified |
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

**Current decision (after VIS-003 screenshot audit):** QA-001, GATE-001, VIS-001, GATE-003, VIS-004 and VIS-005 are resolved for this training exercise only. VIS-006 is fixed at 768px. VIS-002 substantive content pairs remain corrected, but four aria-hidden decorative signatures keep the shared gate at FAIL. PROC-001 local build/capture evidence is resolved; no GitHub Actions run is recorded. VIS-003 remains OPEN: `hero-640.png` reveals decorative orbit artwork overlaps the disclosure area; targeted orbit containment CSS commit `472fdc4c94d8abd9fd033be1294a204a4265bb36` awaits an exact after-render check. A11Y-001 and COPY-001 remain open; DES-001 deferred. No public release is authorized.

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

## 9. Slice B after-capture review and VIS-003 triage — 2026-11-18

### 9.1 Evidence integrity and build

- Archive: `experiment-06-after-slice-b.zip`; SHA-256 `6c2b619e1880fd1e9c4ba5b34f255934e6580cf8442b2345ec0145e9b755fab7`.
- ZIP integrity: CRC test passed; 24 entries including 20 PNGs, report, diagnostics and manifest.
- Before baseline SHA: `ff29c739ed23441ed76a3b781d784d66552e6ea0`.
- Capture checkout SHA and PR head: `625e3daec64ed749b5e64a49fde2be9f39fc4d36`.
- Branch: `fix/experiment-06-stage6-remediation`.
- Source commits: App `ab3a32fe9b24547c543cb0336f66916e7da7b1f2`; CSS `c1c6e94d6a1b0002886682485720e948684da9d1`.
- User terminal transcript confirms SHA assertion and clean tracked/staged state; local TypeScript + Vite 6.4.6 production build passed (30 modules, 906ms).
- Shared rendered gate captured the report/screenshots but returned exit code 1 because report status is **FAIL**. No GitHub Actions workflow run or combined status is recorded for this head.

### 9.2 Quality report

- Typography failures: **0** across nine widths (320, 360, 390, 640, 768, 900, 1024, 1280, 1440).
- Contrast: **185 rows / 4 signatures** — JAKARTA 50, DEMO / 001 50, disabled WhatsApp helper arrow 50, contact `/06` index 35. The former `.process-mark` signature is absent.
- Contrast excluded surfaces: 205; not-visible samples: 232; manual review remains required.
- Responsive page-level failures: **0**; document width equals viewport width at every diagnostic width.
- Evidence manifest valid, no candidates or evidence failures, but human review required.
- Overall shared gate: **FAIL**. No threshold was lowered.

### 9.3 Slice B dispositions

**VIS-004 — FIXED.** The `.process-mark` arrow markup and CSS are removed. The mobile 390 and desktop 1440 process screenshots show the six ordered steps remain clear and non-interactive. The process-arrow contrast signature also disappeared from the report.

**VIS-005 — FIXED.** At widths below 768px, timing cards stack vertically with natural height and spacing. The mobile 390 screenshot confirms the stacked layout; the desktop 1440 screenshot confirms the paired layout is retained. Responsive diagnostics show no page-level failures at any of the nine widths. The report has no dedicated 320/360 screenshots, so those widths are covered by DOM diagnostics and the mobile media-query rule, not direct screenshot inspection.

### 9.4 VIS-003 nested-overflow triage

All 58 candidate rows fall into seven recurring element groups:
1. Empty absolutely positioned decorative elements (9 widths).
2. `section#hero` (9 widths), which clips its oversize ring artwork with `overflow:hidden`.
3. `section#turnaround` (9 widths), which clips its intentional decorative ring pseudo-element with `overflow:hidden`.
4. Hero content/grid wrapper (9 widths), whose excess scroll width is attributable to the decorative illustration group.
5. `.hero-art` (9 widths), containing transformed orbit/fabric/stamp decoration.
6. Address card article (9 widths), whose small excess is from the rotated `.address-decoration` watermark; the card has `overflow:hidden` and the watermark is `aria-hidden`.
7. The `.sr-only` “Buka navigasi” text (4 widths), intentionally positioned/clipped to expose the accessible name without visual display.

No candidate group has caused document-level horizontal overflow in the report. The inspected 390, 768 and 1440 screenshots show no substantive text clipping. This is a triage, not a full manual sign-off: direct visual spot checks remain outstanding at 320, 360, 640, 900, 1024 and 1280. Do not globally hide horizontal overflow or remove accessible screen-reader text to silence these candidates.

### 9.5 Remaining work

- Complete VIS-003 visual spot checks at the six widths listed above; inspect the address card and hero illustration in particular.
- A11Y-001: skip link/main target, Escape and focus restoration, full keyboard path, focus visibility and 200% zoom remain not tested.
- Dependency lockfile reproducibility and npm advisory review remain independent of the verified local build.
- Stage 7 independent QA and all release approvals remain separate. No deployment or public release.

## 10. VIS-003 six-width spot-check and 640px overlap finding — 2026-11-18

- User archive `experiment-06-vis003-spotcheck.zip` CRC verified; contains 18 section screenshots (Hero, Turnaround, Location at 320, 360, 640, 900, 1024, 1280) and `metrics.json`.
- At all six widths, `documentWidth` equals `viewportWidth`; no page-level horizontal overflow.
- Visually inspected all three sections at the six widths. Turnaround cards remain legible; address watermark is intentionally clipped inside the card; `.sr-only` nav label is intentionally clipped for accessibility.
- **Actual issue found at 640px:** the oversized `.hero-art:before` / `:after` circles exceed the 315px mobile illustration frame and visually cross over the hero disclosure line. This is content obstruction and cannot be dismissed as decorative overflow.
- CSS commit `9276e1446118af6b0aa5c0bfd22d0ee104216218` caps the mobile decorative circles at 300px and 280px respectively. This is a source fix only; build and after-render capture are pending.
- VIS-003 remains OPEN until the 640px disclosure is visibly unobstructed and remaining candidate groups are confirmed intentional.

## 10. VIS-003 final visual spot-check — 2026-11-18

- Archive: `experiment-06-vis003-spotcheck.zip`.
- Archive SHA-256: `f9d9bfe5b867296a17280a34718d4cfc514d153bfc44d6a3919e4db32da862ca`.
- ZIP CRC validation passed; 19 entries: 18 section screenshots (Hero, Turnaround, Location × six widths) and `metrics.json`.
- New screenshot widths: 320, 360, 640, 900, 1024, 1280.
- Combined with the previously inspected Slice B screenshots at 390, 768 and 1440, all nine diagnostic widths now have visual evidence for the relevant sections.
- All six newly supplied widths were visually reviewed. No substantive content, heading, service/timing card, address, price, CTA or section layout is visibly clipped. At 320/360 the Hero illustration remains decorative and contained by its section; Turnaround cards remain legible and stacked; Location/address text remains inside its card. At 640/900/1024/1280 the same content remains within the visible layout.
- Metrics confirm document width equals viewport width at all six new widths. Nested candidates are localized to the intentionally clipped Hero and Turnaround decorative rings, transformed Hero illustration geometry, the rotated aria-hidden address watermark within the clipped address card, and the 1px clipped screen-reader-only accessible navigation label.
- Disposition: **VIS-003 FIXED**. Preserve intentional clipping. Do not remove accessible screen-reader text or add global overflow suppression.

Stage 6 visual refinement findings VIS-001 through VIS-006 are now resolved for this internal experiment. The shared quality gate still reports contrast FAIL on four decorative aria-hidden signatures and requires manual review; closing VIS-003 does not make the gate PASS. Accessibility work A11Y-001 and independent Stage 7 QA remain separate and open. No release/deployment is authorized.

## 11. VIS-003 correction after closer screenshot audit — 2026-11-18

The initial final-spot-check disposition in Section 10 was premature. The supplied archive is valid (SHA-256 `f9d9bfe5b867296a17280a34718d4cfc514d153bfc44d6a3919e4db32da862ca`; ZIP CRC passed; 18 screenshots plus metrics). Document width equals viewport at all six new widths. Turnaround and Location content remain inside their layout; 320/360 Hero screenshots are clean; 900/1024/1280 Hero screenshots are clean.

A closer review of `hero-640.png` shows the large rotated decorative orbit geometry extending upward behind the Hero disclosure. The disclosure characters are still present, but the illustration intrudes into the text's background area and makes the spacing feel broken. Do not close VIS-003 on the basis of document width alone.

A targeted CSS patch has now been committed:
- Commit: `472fdc4c94d8abd9fd033be1294a204a4265bb36`.
- At 600–767px only, set Hero art min-height to 340px and constrain the two rotated orbits to bounded widths/heights so their painted bounds fit within the illustration block.
- Existing 320–599px and 768px+ layouts are not changed by this rule.

**Pending verification:** run the local build and capture Hero at 640px plus a width between 700 and 767px on the current branch head. Confirm disclosure and illustration have visible separation. Until that capture is inspected, VIS-003 remains OPEN. Earlier Section 10 text saying no substantive overlap and VIS-003 FIXED is superseded by this correction.

## 12. A11Y-001 source implementation checkpoint — 2026-11-18

**Status: IMPLEMENTED IN SOURCE; MANUAL VERIFICATION PENDING.**

- src/App.tsx adds a keyboard-reachable “Lewati ke konten utama” skip link before the site notice. Its destination is the primary main landmark, #main-content, with tabIndex={-1}.
- The mobile navigation now listens for Escape while open, closes the menu, and returns focus to the menu toggle button. The existing aria-expanded and aria-controls relationship is retained.
- src/styles.css styles the skip link off-screen by default and reveals it when focused. Existing global :focus-visible treatment and prefers-reduced-motion: reduce override remain in place.
- App source commit: d757f14e9f18584f18190ab3ef704f74c5cc7033. The latest CSS also retains the independent VIS-003 orbit-containment patch.
- No claim of A11Y-001 closure is made. Still required: verify the skip link is the first Tab stop and moves focus/viewport to main; keyboard navigation through the full page; open the mobile menu, Tab into it, press Escape and verify the menu closes and focus returns to its toggle; verify collapsed links are absent from the tab sequence; inspect visible focus indicators; emulate reduced motion; and manually test browser zoom at 200%.
- A browser run/build has not yet been supplied for the A11Y source commits. No GitHub Actions workflow run or combined status has been reported for the latest PR head.
- PR #3 remains open, draft and unmerged. Stage 7 independent QA, contrast gate disposition, reproducibility/advisory review and release approvals remain separate. No deployment/public release is authorized.
