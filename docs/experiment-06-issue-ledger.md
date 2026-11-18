# Experiment 06 — Laundry Ceria Issue Ledger

**Current status (post-PR #1 merge):** GitHub records parent PR #1 as merged into `main` at merge commit `4c80f7cd4b5e2c0d82adfe58805c94b9446751c2` on 2026-11-18 16:58:25 UTC. The exact-main-head push run [#44353365204](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44353365204) completed SUCCESS. Its canonical gate reports `PASS_WITH_MANUAL_REVIEW_REQUIRED`: 0 typography failures, 0 measurable contrast failures, 0 responsive failures, valid evidence manifest, and 207 generated Hero-art observations excluded for manual review. PR merge and CI success do not close manual accessibility, visual, dependency or independent Stage 7 acceptance work.
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
| VIS-002 | HIGH | IMPLEMENTATION_QA | Earlier contrast signatures were all decorative text/index treatments and have been removed without changing meaningful content or global thresholds. Exact-head canonical run [#44345925226](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44345925226) reports 0 measurable contrast failures; 205 Hero illustration observations remain excluded because generated background layers cannot be resolved reliably. | Preserve thresholds; manually review image-backed Hero surfaces and keep the gate's manual-review designation. | MEASURED CONTRAST PASS — MANUAL IMAGE REVIEW REQUIRED |
| VIS-003 | MEDIUM | IMPLEMENTATION_QA | The earlier six-width archive showed overlap at 640px but was not SHA-bound. Current PR #3 head `bba7c70e8523c0b0e43e4f13ad00eb9e853274a4` was captured and visually reviewed at 640px and 720px with an exact-head manifest; the disclosure/artwork gap is clear at both. | Keep the breakpoint-specific orbit bounds and `.hero-art` sizing at 600–767px. CI now provides exact-head screenshot evidence at 640px and 720px; manually inspect the artifacts. Do not use blanket overflow suppression or remove `.sr-only`. | FIXED — current-head capture verified; see Section 13 |
| A11Y-001 | HIGH | IMPLEMENTATION_QA | Exact-head run [#44345925226](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44345925226) passed skip-link first Tab/focus transfer, visible focus, mobile keyboard order, Escape close/focus return, collapsed-nav exclusion, desktop navigation reachability, reduced motion and 640 CSS-pixel zoom-equivalent reflow. This is not a literal browser-zoom test or full WCAG claim. | Keep regression in CI; complete literal browser zoom at 200% and assistive-technology review separately. | AUTOMATED REGRESSION PASS — MANUAL CHECKS OPEN |
| A11Y-002 | HIGH | IMPLEMENTATION_QA | Exact-head run [#44345925226](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44345925226) passed all 16 visible desktop links in expected Tab order, discernible names and in-page targets, visible focus on every link, Shift+Tab reversal, and collapsed mobile-nav tab order. | Keep the regression in CI; literal browser zoom and screen-reader testing remain separate. | AUTOMATED FULL LINK-TRAVERSAL REGRESSION PASS |
| COPY-001 | LOW | MASTER_SKILL_REASONING | The former heading “Pilih cara yang ingin dikenali.” was unnatural and unclear for the two visit/contact options. | Replaced with “Pilihan kunjungan dan kontak.” and clarified that both the displayed visit address and WhatsApp contact are synthetic preview data. No channel or real-world action was activated. | FIXED — exact-head CI passed in run #44345925226 |
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


## 13. VIS-003 current-head verification — 2026-11-18

- Exact website source: PR #3 head `bba7c70e8523c0b0e43e4f13ad00eb9e853274a4` on `fix/experiment-06-stage6-remediation`.
- GitHub Actions: Website CI run [#44330232724](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44330232724) completed successfully. Install, TypeScript check, production build, Chromium installation, both screenshot captures and artifact upload all passed.
- Artifact: `laundry-ceria-hero-breakpoint-evidence-44330232724` (artifact ID `14438013686`). The embedded `capture-manifest.json` records repository, PR ref, exact source SHA, run ID, preview URL, capture time and viewport widths.
- Reviewed screenshots: `hero-640.png` and `hero-720.png`. At both widths, the Hero disclosure sits clearly above the illustration; the decorative artwork no longer intrudes into the disclosure area.
- The 640/720 captures are bound to PR #3 head `bba7c70e8523c0b0e43e4f13ad00eb9e853274a4`. They supersede the earlier unpinned archive as evidence for this breakpoint. The old archive remains useful as the original bug evidence, not as proof of the current source output.

**Disposition: VIS-003 FIXED for the 600–767px Hero overlap.** Keep the responsive spot-check conclusions for the other inspected widths and intentional overflow candidates as previously recorded. This does not close A11Y-001, the shared contrast gate, or independent Stage 7 QA. No deployment or public release is authorized.


## 14. A11Y-001 automated browser verification — 2026-11-18

- Exact PR source: `fix/experiment-06-stage6-remediation` at `b415bfc7fb152afbb44dee16f2b3cabfabbae9bf`.
- GitHub Actions [Website CI run #44336859081](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44336859081) completed **SUCCESS**. TypeScript check and Vite production build passed; the Playwright/Chromium browser step completed successfully.
- The job log explicitly reports: `A11Y-001 PASS: skip link, keyboard order, focus visibility, mobile Escape/focus return, reduced motion, and 200% zoom-equivalent reflow.`
- Assertions cover the skip link as the first Tab stop and focus transfer to `#main-content`; visible focus treatment on skip link and menu toggle; five mobile navigation destinations in keyboard order; Escape closes the menu and returns focus; collapsed nav links are not tab stops; desktop primary navigation is reachable; reduced-motion disables meaningful transitions/smooth scrolling; and page reflow at 640 CSS px has no horizontal overflow.
- The 640 CSS px viewport is an explicit **zoom-equivalent reflow proxy**, not a literal browser zoom setting. Manual browser zoom at 200%, complete keyboard traversal through every page control, and assistive-technology testing remain outstanding.
- The same run captured Hero screenshots at 640px and 720px with a manifest binding the artifact to this exact commit and run. Both images were reviewed; disclosure and artwork are visibly separated at both widths.

**Disposition:** A11Y-001 automated browser subset **PASS**. Keep the issue partially open for literal 200% browser zoom, complete manual keyboard traversal and any assistive-technology review. This is not a WCAG conformance claim. Laundry Ceria remains fictional, internal-only and NOT_APPROVED for public release.


## 15. Contrast-signature cleanup and expanded keyboard regression — 2026-11-18

- Source change on PR #3 branch `fix/experiment-06-stage6-remediation`:
  - Removed the aria-hidden address watermark text `JAKARTA` and `DEMO / 001`; the address remains explicitly labelled as fictional in meaningful content.
  - Removed the decorative arrow glyph from the non-interactive `WhatsApp belum dikonfigurasi` status. WhatsApp remains NOT_CONFIGURED and non-interactive.
  - Removed the decorative `06/06` contact heading index.
  - Removed the now-unused CSS rules for those decorative text treatments.
- The four prior residual contrast signatures were not fixed by lowering any threshold or recoloring meaningful content; their non-informational text nodes were removed.
- Added `tests/a11y-002-full-keyboard.mjs`: checks all 16 visible desktop links, discernible names, in-page targets, sequential Tab order, focus indicators, Shift+Tab reversal, and collapsed mobile-nav tab order.
- Updated the canonical Studio workflow on PR #1's feature branch to invoke the AWOS shared website-quality action by pinned commit and run A11Y-002. The website repository does not copy the shared gate implementation.
- First run after the source change, [#44342280294](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44342280294), passed the existing build/A11Y-001/screenshot workflow but did not yet contain the new A11Y-002 or remote shared-gate steps. A subsequent exact-head run is required to verify the refreshed workflow.
- Still unverified: literal browser zoom controls at 200%, assistive-technology/screen-reader review, and independent Stage 7 acceptance. No WCAG conformance or public-release approval is claimed.


## 16. Follow-up contrast signature surfaced by canonical gate — 2026-11-18

The first run of the canonical AWOS shared gate on the revised candidate, [run #44342879459](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44342879459), confirmed zero typography failures, zero responsive failures and valid evidence, while both A11Y-001 and A11Y-002 browser tests passed. It isolated 37 remaining contrast observations to the low-contrast decorative suffix `/ 06` in the turnaround section's non-semantic `02 / 06` index (12px, 3.38:1 against the dark section; required 4.5:1).

The suffix is not meaningful content, so it was removed rather than changing global thresholds or recoloring meaningful text. The higher-contrast decorative `02` remains. Its unused suffix CSS was removed. The latest candidate must pass the canonical gate before VIS-002 can be marked resolved.


## 17. Final canonical quality-gate and keyboard verification — 2026-11-18

The exact-head candidate `49b4a8e2b5ab6fb260e9c62573b9121d5c68e12a` passed [Website CI run #44343672779](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44343672779), including:
- dependency installation, TypeScript check and Vite production build;
- fresh 640px/720px Hero captures;
- A11Y-001 automated regression;
- **A11Y-002 PASS**: all 16 visible desktop links in expected Tab order, discernible accessible names and in-page targets, visible focus on every link, Shift+Tab reversal, and mobile collapsed-nav tab order;
- canonical AWOS Shared Website Quality Gate result **PASS_WITH_MANUAL_REVIEW_REQUIRED**.

The exact-head report records:
- typography failures: 0 across all nine diagnostic widths (320–1440px);
- contrast failures: 0 across 53 sampled viewport/state combinations;
- responsive failures: 0;
- evidence manifest: valid, 0 detected proof candidates, 0 evidence failures;
- 205 contrast observations excluded because the renderer cannot reliably calculate text against generated Hero illustration backgrounds. These observations reduce to decorative marks and illustration-only labels, not business facts, prices, contact actions or required disclosure copy. The 390px/768px/1440px shared-gate screenshots and the 640px/720px Hero captures were visually inspected; the illustration remains contained and does not obstruct content.

The report remains `PASS_WITH_MANUAL_REVIEW_REQUIRED` by design: manual image-surface review is still required by the shared gate. Do not convert this to a full PASS by weakening thresholds or mislabelling text. No WCAG certification is claimed.

Literal browser zoom at 200%, assistive-technology/screen-reader testing, dependency lockfile/advisory review and independent Stage 7 acceptance remain separate follow-ups.


## 18. Latest source refinement and exact-head CI verification — 2026-11-18

After the contrast and keyboard candidate passed, COPY-001 was corrected in `src/App.tsx`:
- Heading changed from the unnatural “Pilih cara yang ingin dikenali.” to “Pilihan kunjungan dan kontak.”
- Supporting copy now explicitly says the visit address and WhatsApp contact on the page are synthetic demo data.
- The change does not create a real address, phone number, WhatsApp link, active CTA, or contact integration.

The current source head contains this copy refinement. A fresh exact-head CI run is required before considering the latest PR candidate ready. Previous exact-head run #44343672779 passed the canonical gate and A11Y-001/A11Y-002 on the immediately prior code candidate.


## 19. Exact-head verification after COPY-001 refinement — 2026-11-18

The latest PR #3 candidate head `901fe9800d3209b213786b8443a4b47934c8b3ed` passed [Website CI run #44345925226](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44345925226):
- TypeScript check and Vite production build: PASS.
- Exact-head Hero captures at 640px and 720px: captured and uploaded.
- A11Y-001: PASS (skip link, focus transfer, mobile navigation/escape, reduced motion, 640 CSS-pixel zoom-equivalent reflow).
- A11Y-002: PASS (all 16 visible desktop links, accessible names/targets, sequential Tab and reverse Shift+Tab, focus styling, collapsed mobile-nav tab order).
- Canonical AWOS Shared Website Quality Gate: `PASS_WITH_MANUAL_REVIEW_REQUIRED`.
- Exact report: 0 typography failures; 0 contrast failures; 0 responsive failures; evidence valid with 0 candidates and 0 evidence failures.
- 205 contrast observations are excluded solely due to generated Hero-art backgrounds that the renderer cannot resolve. They correspond to decorative spark marks and an illustration badge/caption; the shared gate correctly retains its manual-review status. No thresholds were reduced.

The latest source also includes COPY-001's clarified heading and preview-only description. Literal browser zoom at 200%, assistive technology/screen-reader review and independent Stage 7 acceptance remain manual follow-ups. This is not full WCAG certification or release approval.


## 20. Current PR branch status and integration order — 2026-11-18

- PR #3 head `43072ca0c9d46a88d3b9df06052eb684a3a7f08c`, targeting PR #1's branch at `6d9f21d57e65227894ad70005998b1a242757c3e`, passes exact-head [run #44345925226](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44345925226).
- PR #1 baseline head `6d9f21d57e65227894ad70005998b1a242757c3e`, targeting `main`, still fails its exact-head [run #44345945442](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44345945442) at the canonical shared quality gate; install, typecheck, build and screenshot capture passed.
- No merge has been performed. PR #3 must be integrated into PR #1's feature branch first; then the combined PR #1 branch must receive a fresh successful shared-gate run before it is considered for `main`.
- Both PRs remain Draft. No public deployment or release is authorized.


## 21. Post-merge PR #1 CI failure — evidence manifest restored — 2026-11-18

### Failure diagnosis

After child PR #3 was merged into PR #1's feature branch at merge commit `e9f8e50a6e7f7781a41fc76fc19bd2568ad159fd`, exact-head CI run [#44348190890](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44348190890) completed with **FAIL** in the canonical Shared Website Quality Gate.

The report was unambiguous:
- Typography failures: 0 across nine diagnostic widths.
- Contrast failures: 0.
- Responsive failures: 0.
- A11Y-001: PASS.
- A11Y-002: PASS.
- Evidence validation: **FAIL** with `manifest must be a JSON object`.

Root cause: the earlier PR #1 standalone cleanup intentionally removed the then-empty `.website-quality/evidence-manifest.json`. The feature-branch workflow later began invoking the canonical shared gate, which requires a valid manifest file even when the site has no proof-like claims. The missing manifest—not website code, contrast, or accessibility—was the only gate failure.

### Fix

Restored `.website-quality/evidence-manifest.json` on the parent feature branch with:
```json
{
  "version": 1,
  "humanReviewRequired": true,
  "items": []
}
```

This is the canonical minimal manifest shape. The empty `items` array is appropriate because Laundry Ceria has no testimonials, reviews, awards, customer counts or performance proof claims. Human review remains required. The file is only a Shared Website Quality Gate input; it does not create a workflow engine, project state, approval register or release permission.

### Exact-head verification

The restored-manifest commit is `b0dad79febba1d14cbe6df11db2f8c7462df7ec0`. Exact-head [run #44349337688](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44349337688) completed **SUCCESS**:
- TypeScript check and Vite production build: PASS.
- Hero 640px/720px screenshots: captured and uploaded.
- A11Y-001: PASS.
- A11Y-002: PASS.
- Evidence manifest: valid; `humanReviewRequired=true`; zero proof candidates; zero evidence failures.
- Typography failures: 0.
- Contrast failures: 0 across 53 sampled viewport/state combinations.
- Responsive failures: 0.
- 216 generated/image-backed Hero observations remain excluded for manual review; therefore the correct gate result is `PASS_WITH_MANUAL_REVIEW_REQUIRED`, not an unqualified PASS.

At the time of this exact-head run, PR #1 remained Draft and unmerged. Its later merge and post-merge verification are recorded in Section 22. This CI result did not authorize deployment or public release.

## 22. Parent PR #1 merged; post-merge evidence and bounded self-review — 2026-11-18

### Integration and exact-main verification

GitHub records parent PR #1 as merged into `main` at merge commit `4c80f7cd4b5e2c0d82adfe58805c94b9446751c2` on 2026-11-18 at 16:58:25 UTC. The current `main` branch points to that merge commit.

The subsequent push workflow [#44353365204](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44353365204) ran on the exact main commit and completed **SUCCESS**. All workflow steps passed: dependency installation, TypeScript check, Vite production build, Playwright/Chromium setup, 640px/720px Hero captures, A11Y-001, A11Y-002 and the canonical shared quality gate.

The post-merge shared-gate artifact `14450420315` records:
- Gate status: **PASS_WITH_MANUAL_REVIEW_REQUIRED**.
- Typography failures: **0** across nine diagnostic widths (320–1440px).
- Measurable contrast failures: **0** across 53 sampled viewport/state combinations.
- Responsive page-level failures: **0** across nine diagnostic widths.
- Evidence manifest: valid; `humanReviewRequired=true`; 0 proof candidates; 0 evidence failures.
- Generated/image-backed Hero observations excluded from numeric contrast measurement: **207**. The gate correctly retains manual-review status; no thresholds were lowered.

The post-merge screenshot artifact `14450420315` contains full-page captures at 390px, 768px and 1440px. The companion Hero artifact `14448763356` contains exact-main-head captures at 640px and 720px. A bounded assistant self-review inspected these five screenshots: no obvious disclosure/illustration overlap appeared in the 640px/720px Hero captures, and the 390px/768px/1440px page captures showed no obvious major layout break. This is a self-review of selected evidence, not an independent Stage 7 acceptance and not a complete nine-width visual inspection.

### Acceptance disposition

| Criterion | Result | Scope / limitation |
|---|---|---|
| TypeScript and production build | PASS | Exact-main push run #44353365204 |
| A11Y-001 keyboard/focus/reduced-motion regression | PASS | Automated Playwright only |
| A11Y-002 full link keyboard traversal | PASS | Automated Playwright only |
| Typography and measurable contrast | PASS | 0 reported failures; 207 generated Hero-art observations remain excluded |
| Responsive page-level overflow | PASS | 0 failures at nine diagnostic widths; this does not replace visual review of every width |
| Selected screenshot self-review | PASS WITH CONCERNS | 390/768/1440 full page and 640/720 Hero inspected; not independent |
| Literal browser zoom at 200% | NOT TESTED | Zoom-equivalent 640 CSS-pixel proxy is not the actual browser zoom control |
| Screen reader / assistive technology | NOT TESTED | No manual AT session was performed |
| Full visual spot-check at all nine widths | NOT COMPLETE | 320/360/900/1024/1280px still lack manual screenshot inspection |
| Manual review of excluded Hero image surfaces | OPEN | 207 observations remain excluded by the renderer |
| Dependency lockfile and advisory review | OPEN | No committed `package-lock.json`; CI still uses `npm install`. A local lockfile-generation attempt timed out before writing a lockfile; `npm ci` and `npm audit` were therefore not run |
| Independent Stage 7 acceptance | NOT COMPLETED | This work is a post-merge evidence audit and assistant self-review, not independent acceptance |

No full WCAG conformance, security clearance, production readiness, business-owner approval or public release is claimed. The repository remains `studio_development`, private and demo-only. No deployment, publication, outreach, DNS, real WhatsApp integration or production release is authorized.



## 23. PR #5 dependency reproducibility, rendered review and current branch checkpoint — 2026-11-18

### Dependency and exact-head CI

PR #5, `chore/experiment-06-lockfile-security-review`, adds a committed dependency manifest/lockfile and changes the canonical website CI to use `npm ci` rather than a floating `npm install`.

- `package-lock.json`: npm lockfile v3, 122 package entries, 62,228 bytes.
- Playwright: exact development dependency `1.65.1`.
- Lockfile SHA-256: `f48b2932d85e610e1c0b91cbe2a4d5593d6dc45f014a7f246e9227dc48db0896`.
- Exact-head code verification [run #44374760430](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44374760430) passed on `4705af6ef2a26a96b17c6f1271735c478647fc85`.
- Latest branch-head verification [run #44375371695](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44375371695) completed SUCCESS on `546b3824e0f281c1e54cf5693c50277d5217e2c9`; the commits after the code-verification SHA were README/checklist documentation updates only.
- Both exact-head runs passed `npm ci`, TypeScript, Vite production build, Playwright/Chromium setup, A11Y-001, A11Y-002, breakpoint capture/upload and the canonical shared quality gate.
- `npm ls --all` and `npm audit` exited 0. The audit reports 0 info, low, moderate, high or critical vulnerabilities at the time of the run.

### Responsive and visual evidence

The exact-head capture manifests bind the artifacts to their website source commit and workflow run. Full-page captures are available at 320, 360, 900, 1024 and 1280px; the canonical shared gate captures 390, 768 and 1440px; Hero-specific captures cover 640 and 720px.

Across the nine diagnostic widths (320/360/390/640/768/900/1024/1280/1440):
- Responsive failures: 0; document width equals viewport width at every sampled size.
- Typography failures: 0.
- Evidence manifest: valid, with 0 proof candidates and 0 evidence failures.
- Canonical shared-gate status remains `PASS_WITH_MANUAL_REVIEW_REQUIRED`.

The full-page screenshots and selected sections were visually inspected. No page-level horizontal overflow, overlap of the Hero disclosure, or clipping of substantive pricing, turnaround, pickup, fictional-address or disabled-contact information was observed. Nested decorative overflow is intentional and contained by its sections; the global width checks remain clean.

### Contrast disposition and targeted refinement

The final code candidate retains 0 measurable contrast failures across 53 viewport/state samples. The renderer excludes 212 observations across five Hero illustration signatures because it cannot reliably resolve their generated/layered backgrounds. The signatures are:
- Teal star mark `#0F6B68` on paper `#F6F7F2`.
- Teal stamp star `#0F6B68` on the translucent white stamp.
- Amber spark `#8A5A0A` on paper `#F6F7F2`.
- Stamp label `RAPI TERATUR` in `#0F6B68`.
- Hero caption `ILUSTRASI DEKORATIF` in `#52636C`.

Source refinements raised the caption from `#82918E` / 8px to `var(--color-muted)` / 10px, enlarged the stamp label from 8px to 9px, and darkened the amber spark from `#D39A34` to `#8A5A0A`.

A bounded AI self-review of the exact rendered screenshots and corresponding CSS token pairs calculated:
- `#0F6B68` on `#F6F7F2`: **5.87:1**.
- `#8A5A0A` on `#F6F7F2`: **5.50:1**.
- `#52636C` on `#F6F7F2`: **5.80:1**.
- Stamp text/icon `#0F6B68` on the 78%-white panel: **4.52:1** in a conservative composite over the darkest plausible teal backing; the actual rendered backing is lighter.

The manual inspection and calculations are a self-review by the implementation assistant, not independent human acceptance. The gate's manual-review status is retained; no thresholds were lowered and `humanReviewRequired=true` remains.

### Accessibility and acceptance disposition

| Criterion | Result | Scope / limitation |
|---|---|---|
| TypeScript and production build | PASS | Exact-head CI |
| `npm ci`, dependency tree and advisory audit | PASS | Committed npm lockfile; 0 reported vulnerabilities |
| A11Y-001 keyboard/focus/reduced-motion regression | PASS | Automated Playwright subset |
| A11Y-002 full desktop link keyboard traversal | PASS | 16 links, names/targets/focus, Shift+Tab, collapsed mobile navigation |
| Responsive document width | PASS | 0 failures at nine diagnostic widths |
| Typography and measurable contrast | PASS | 0 reported failures; 212 generated-background observations excluded for manual review |
| Selected responsive screenshot self-review | PASS WITH CONCERNS | AI self-review, not independent |
| Literal browser zoom at 200% | NOT TESTED | 640 CSS-pixel viewport is only a zoom-equivalent reflow proxy |
| Screen reader / assistive technology | NOT TESTED | No manual AT session performed |
| Comparative visual review | PARTIAL | Laundry Ceria and source-level ZACKS/ACFIX directions were compared; a full side-by-side screenshot comparison with prior rendered projects is unavailable |
| Independent Stage 7 acceptance | NOT COMPLETED | Must be performed by a reviewer who did not implement the site |

PR #5 is **Ready for review**, open and unmerged. It changes the CI workflow, README, website checklist, package manifest, lockfile and the scoped Hero-label contrast styles. No merge or release is implied by the successful CI runs.

The project remains private, synthetic, `studio_development`, PREVIEW ONLY / DEMO-ONLY / NOT_APPROVED. No deployment, publication, outreach, DNS change, real WhatsApp integration or production release is authorized.
