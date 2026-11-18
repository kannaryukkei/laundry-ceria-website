# Experiment 06 — Visual Refinement Log

**Project:** LC-TRAINING-001 — Laundry Ceria (fictional training fixture)  
**Canonical stage:** Stage 6 — Refinement  
**Status:** VIS-001/VIS-003 fixed; exact-head canonical run #44345925226 reports 0 typography/contrast/responsive failures and valid evidence, with 205 generated Hero-art surfaces retained for manual review. A11Y-001/A11Y-002 and COPY-001 pass on PR #3 head `43072ca`. Literal 200% browser zoom, assistive-tech review and Stage 7 remain open  
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
- diagnostics.log SHA-256: `b35205967715db4daff62a9d3fd3c52de62e322beb4e03cb27389d4ef404f27a`

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

**Pinned before baseline:** `ff29c739ed23441ed76a3b781d784d66552e6ea0`  
**Capture checkout SHA:** `b469627523eea16f6259d236545d3cd2318777b9` (the archive manifest calls this `baseline_commit_sha`; it is the capture checkout/head, not the original before-baseline SHA)  
**Implementation source checkpoint:** `ed77b9cdbf7f5fed810a9b0aabe1b8f3c75b0adc`  
**After-capture branch:** `fix/experiment-06-stage6-remediation`  
**After archive:** `experiment-06-after-slice-a.zip` — SHA-256 `7e96ba4ba383e6010d9533411f49ffff732db0be4ae7e0210757892754438770`  
**Report SHA-256:** `ed4b378757ff9739f29376f8383af06db6f0450d4a0e1cf0087c62a92025504e`  
**Diagnostics SHA-256:** `00bdfebf398cdb467fe59933e636ef080cad468f4e6de44e7938b6dc6a1ff072`  
**Report generated:** `2026-11-18T10:40:39.260Z` (UTC)  
**Capture source:** `http://127.0.0.1:4174`  
**Changed implementation files in Slice A:** `src/App.tsx`, `src/styles.css`

### Implemented changes

- Added explicit semantic QA roles for metadata, body, controls and disclosures. Shared typography thresholds remain unchanged.
- Eyebrows and section/category labels are assigned METADATA; simulation, price, turnaround, pickup, schedule, fictional-address and unavailable-state notes are assigned DISCLOSURE.
- Raised decision-relevant body text, price labels/units, turnaround terms, process descriptions, pickup conditions, hours, contact explanations, fictional-address label, status pills and footer disclosures.
- Replaced measured low-contrast muted colors with the existing `--color-muted` token where appropriate; improved white/paper text on teal and footer disclosure opacity.
- Kept all factual values, prices, qualifiers, CTA destinations, disabled WhatsApp behavior, approved direction and shared typography floors unchanged.

### After-capture results

| Measure | Before baseline | After Slice A | Interpretation |
|---|---:|---:|---|
| Typography failure observations | 423 | **0** | All nine sampled widths report zero typography failures |
| Contrast failure observations | 1,839 | 197 | Remaining 197 rows reduce to five signatures, all aria-hidden/decorative |
| Contrast excluded-surface rows | 216 | 205 | Manual-review surfaces; not automatically content failures |
| Contrast not-visible samples | 500 | 520 | Not observed failures |
| Page-level responsive failures | 0 | **0** | `documentWidth` equals viewport width at all nine sampled widths |
| Nested overflow candidates | 58 | 58 | Still require visual/manual triage |
| Evidence manifest | valid; 0 candidates/failures | valid; 0 candidates/failures | Human review still required; `matchedRecordIds=[]` |

The five remaining contrast signatures are: the decorative `↗` inside the disabled WhatsApp label; the `JAKARTA` and `DEMO / 001` address watermark; the `/ 06` contact index; and the static process `↗` marker. Their parent/element semantics are `aria-hidden`; the gate nevertheless measures these visuals. They are not the substantive content contrast pairs fixed in this slice. The rendered gate status remains **FAIL** because those measured decorative signatures remain and manual review is still required.

### Visual review

Opened and compared the report-linked before/after screenshots at the same viewports/states:
- Mobile 390px: hero, services/pricing, turnaround, process, pickup/delivery, hours/location and contact.
- Tablet 768px: initial viewport.
- Desktop 1440px: all seven section captures, including turnaround.
- Report coverage: 3 viewport screenshots and 14 section screenshots; 20 report-linked captures in total.

The mobile price, process, hours, contact and disclosure copy is substantially more legible. The turnaround cards remain side-by-side at 390px and still feel dense; this remains VIS-005, not a hidden pass. The process arrows remain visible and potentially imply navigation; VIS-004 remains open.

**Tablet regression found:** at 768px the 16px primary hero CTA and its adjacent text link shrink/wrap into multiple lines. This is recorded as VIS-006. A tablet-only CSS follow-up was committed at `1778d1fa6e27a7be91e02e7d8cfa5b7382fb08a8` to allow clean wrapping between the controls while keeping each label unbroken. That follow-up has **not yet been rendered or verified**.

### Evidence and validation caveats

- The after archive contains 109 PNG files, but only 20 are referenced by `report.json` (3 viewport + 14 section + 3 full-page captures). The other 89 PNGs are in an unreferenced `Screenshots 1/` directory and were not treated as quality-gate evidence.
- The manifest's `baseline_commit_sha` value is `b469627523eea16f6259d236545d3cd2318777b9`, matching the GitHub PR branch head at capture time. The true pre-change baseline remains `ff29c739ed23441ed76a3b781d784d66552e6ea0`; `implementation_commit_sha` is `ed77b9cdbf7f5fed810a9b0aabe1b8f3c75b0adc`. Future manifests should use separate `before_baseline_sha` and `capture_commit_sha` keys to avoid this ambiguity.
- The archive includes report and diagnostics, but no production-build transcript. GitHub returned no Actions run or combined status for the captured head. Build success is therefore **not independently evidenced by this archive** and must be confirmed on the current follow-up head.
- Keyboard-only navigation, menu Escape/focus restoration, focus obstruction, reduced-motion behavior and 200% zoom remain NOT_TESTED.
- No claim of Stage 7 QA, production readiness, deployment or release is made.

### Current disposition

- VIS-001: FIXED in the rendered report (0 typography failures).
- GATE-003: FIXED for this Laundry Ceria implementation (explicit QA roles; all sampled role floors pass).
- VIS-002: FIXED for substantive content text/surface pairs; remaining gate failures are aria-hidden/decorative signatures described above.
- VIS-006: tablet CTA wrapping follow-up CSS patch has now been recaptured at 768px; see Section 7. No dedicated 900px screenshot was captured, although the report responsive diagnostic included 900px.
- VIS-003, VIS-004, VIS-005 and A11Y-001 remain open.
- The draft PR remains unmerged.

## 7. Follow-up verification and Slice B implementation — 2026-11-18

### 7.1 Follow-up capture for VIS-006

**Capture checkout SHA:** `b3f0fa0a9929ce81fff8e2e0ffcaa5ac76abbca3`  
**Before baseline SHA:** `ff29c739ed23441ed76a3b781d784d66552e6ea0`  
**Implementation commit tested:** `1778d1fa6e27a7be91e02e7d8cfa5b7382fb08a8`  
**Archive:** `experiment-06-after-slice-a-followup.zip`  
**Archive SHA-256:** `93dabb5d744bb8f0ed982ae5199c9134c98ea2b847a41433a092dfdb82cfd767`  
**Report SHA-256:** `ed4b378757ff9739f29376f8383af06db6f0450d4a0e1cf0087c62a92025504e`  
**Diagnostics SHA-256:** `00bdfebf398cdb467fe59933e636ef080cad468f4e6de44e7938b6dc6a1ff072`  
**Manifest captured_at:** `2026-11-18T18:10:55.3038681+07:00`  
**Report generatedAt:** `2026-11-18T11:10:47.425Z`

The supplied terminal transcript confirms:
- Fast-forward from `b469627` to `b3f0fa0` completed.
- Target SHA check passed; `git diff --quiet` passed.
- `npm.cmd --prefix $siteRoot run build` passed: TypeScript check and Vite 6.4.6 production build, 30 modules transformed.
- Shared rendered quality gate completed all captures and wrote report/diagnostics; its exit code was 1 because status was **FAIL**, not because capture failed.
- ZIP contains 20 report-linked PNG screenshots, report.json, diagnostics.log and followup-manifest.json.

### 7.2 Follow-up quality results

| Measure | Follow-up result | Interpretation |
|---|---:|---|
| Typography failures | **0** | All nine diagnostic widths have zero role-floor failures |
| Contrast failures | 200 rows / 5 signatures | The five signatures are aria-hidden decorative marks: disabled WhatsApp arrow, two address watermarks, contact `/06` index and process-step arrow |
| Contrast excluded surfaces | 205 | Manual review required; not automatically a content failure |
| Contrast not-visible samples | 517 | Not failures |
| Page-level responsive failures | **0** | Report responsive.failures is empty |
| Evidence manifest | valid; 0 candidates; 0 failures | Human review required; no matched canonical record IDs |

The contrast observation count is 200 in this later capture (the earlier Slice A capture recorded 197); use this latest report as the current number. The overall quality gate remains **FAIL** because the decorative signatures are still measured and manual review remains required. Do not lower thresholds or claim a full PASS.

### 7.3 VIS-006 tablet CTA verification

The 768px initial viewport screenshot was inspected after the tablet-only CSS patch. Both “Lihat layanan & harga” and “Jam operasional” appear on intact, single lines; the previous per-control line wrapping is no longer visible. The report includes 900px in responsive diagnostics with no page-level responsive failure, but no dedicated 900px screenshot is present. VIS-006 is resolved at the visually inspected 768px viewport; the 900px state is covered only by automated page-width diagnostics.

### 7.4 Slice B implementation checkpoint

**Branch:** `fix/experiment-06-stage6-remediation`  
**App commit:** `ab3a32fe9b24547c543cb0336f66916e7da7b1f2`  
**CSS commit:** `c1c6e94d6a1b0002886682485720e948684da9d1`  
**Changed files:** `src/App.tsx`, `src/styles.css`

- **VIS-005:** at `max-width:767px`, regular and express turnaround cards now use one grid column, 12px gap, natural height and 20px horizontal padding. The narrower `max-width:380px` rule no longer imposes a 240px minimum height. Tablet/desktop retain the paired two-column presentation.
- **VIS-004:** removed the upward-arrow marker from static process list items and removed its unused CSS rule. Numbering and list order continue to communicate sequence.
- No content, timing, surcharge, fixture facts, CTA, destination, integration or dependency was changed.

**Not yet verified:** Slice B source patches require production build and a new report-linked capture before VIS-004/VIS-005 can be marked FIXED. The current mobile turnaround screenshot in Section 7.1 is still the pre-Slice-B state and must not be presented as evidence for the new stacked layout.

### 7.5 Remaining open work

- VIS-003 nested overflow candidates still require manual classification.
- A11Y-001 skip link, main landmark target, Escape/focus restoration, keyboard journey, focus visibility and 200% zoom remain untested.
- Keyboard and zoom testing are not replaced by the responsive diagnostic.
- Stage 7 independent QA remains separate.

## 8. Slice B after-capture review and VIS-003 triage — 2026-11-18

**Archive:** `experiment-06-after-slice-b.zip`  
**Archive SHA-256:** `6c2b619e1880fd1e9c4ba5b34f255934e6580cf8442b2345ec0145e9b755fab7`  
**Capture / PR head SHA:** `625e3daec64ed749b5e64a49fde2be9f39fc4d36`  
**Baseline SHA:** `ff29c739ed23441ed76a3b781d784d66552e6ea0`  
**App commit:** `ab3a32fe9b24547c543cb0336f66916e7da7b1f2`  
**CSS commit:** `c1c6e94d6a1b0002886682485720e948684da9d1`

### Build and capture verification

User-supplied terminal transcript confirms the expected SHA and clean tracked/staged state. TypeScript and Vite 6.4.6 production build passed (30 modules transformed, 906ms). The shared quality runner completed the captures but returned exit code 1 because its report status is **FAIL**. This is not a build failure. No GitHub Actions workflow run or combined status is associated with the commit.

### Slice B results

| Measure | Result |
|---|---:|
| Typography failures | **0** across nine widths |
| Contrast failure rows | 185 / 4 signatures |
| Contrast excluded surfaces | 205 |
| Contrast not-visible samples | 232 |
| Responsive page-level failures | **0** |
| Evidence manifest | Valid; no candidates/failures; human review required |

The four remaining contrast signatures are JAKARTA, DEMO / 001, the disabled WhatsApp helper arrow and contact `/06` index; all are decorative aria-hidden marks. The former process-step arrow signature is no longer present. The gate remains **FAIL**, with no threshold reduction.

- **VIS-004: FIXED.** Mobile 390 and desktop 1440 screenshots show all six numbered process steps remain clear after removing the static arrows.
- **VIS-005: FIXED.** Mobile 390 screenshot shows the regular/express cards stacked vertically; desktop 1440 keeps both cards side-by-side. All nine diagnostic widths report no page-level responsive failure. 320/360 were covered by DOM diagnostics and CSS media-query behavior, not separate visual screenshots.

### VIS-003 triage

The 58 nested-overflow candidates map to intentional clipped decorative rings/illustration, a rotated aria-hidden watermark within the clipped address card, and the visually hidden accessible navigation name. `documentWidth` equals `viewportWidth` at all nine tested widths, and inspected screenshots at 390, 768 and 1440 show no substantive content clipping.

Do not use blanket horizontal overflow suppression or remove the `.sr-only` label. Direct visual spot checks are still required at 320, 360, 640, 900, 1024 and 1280 before VIS-003 can be closed.

## 9. VIS-003 six-width visual spot-check — 2026-11-18

The supplied spot-check archive was CRC-valid and contained section screenshots for Hero, Turnaround and Location at 320, 360, 640, 900, 1024 and 1280px, plus DOM metrics. At all six widths, document width matched viewport width. The 320/360/640 mobile and 900/1024/1280 desktop/tablet section screenshots were inspected.

A genuine issue was found at 640px: the decorative Hero circles exceed the mobile illustration frame and overlap the disclosure text. The circles are decorative, but the disclosure is meaningful content, so this is not an acceptable intentional clip. CSS commit `9276e1446118af6b0aa5c0bfd22d0ee104216218` caps the mobile circle sizes at 300px and 280px. Rebuild and recapture before calling this resolved. Address-card watermark and `.sr-only` nav label clipping remain intentional; no blanket overflow suppression is warranted.

## 9. VIS-003 final visual spot-check — 2026-11-18

**Archive:** `experiment-06-vis003-spotcheck.zip`  
**Archive SHA-256:** `f9d9bfe5b867296a17280a34718d4cfc514d153bfc44d6a3919e4db32da862ca`  
**Contents:** 18 section screenshots and `metrics.json`; ZIP CRC valid.

The supplied spot-check contains Hero, Turnaround and Location screenshots at 320, 360, 640, 900, 1024 and 1280px. Combined with prior captures at 390, 768 and 1440px, all nine diagnostic widths have direct visual evidence.

### Findings

- No visible clipping of substantive text, headings, service/timing cards, address content, prices, CTAs or section layout at the six new widths.
- Document width equals viewport width at all six new widths.
- Nested candidates remain intentional: clipped decorative pseudo-rings on Hero/Turnaround, transformed Hero illustration geometry, rotated aria-hidden address watermark inside the clipped address card, and the 1px clipped screen-reader-only accessible navigation label.
- Hero illustration is contained within its section; Turnaround cards remain legible and vertically stacked on narrow mobile; Location/address content remains inside the card.

**Disposition: VIS-003 FIXED.** No source change was necessary. Preserve the intentional decorative clipping and accessible screen-reader-only label. Do not apply blanket overflow suppression.

Stage 6 visual findings VIS-001–VIS-006 are resolved for this internal experiment. The shared quality gate remains **FAIL** on four decorative aria-hidden contrast signatures/manual review; this spot-check does not change that status. A11Y-001 and independent Stage 7 QA remain open. No release or deployment is authorized.

## 10. VIS-003 correction and targeted orbit-containment patch — 2026-11-18

The initial final-spot-check conclusion in Section 9 that VIS-003 was fixed was premature. The supplied archive (`experiment-06-vis003-spotcheck.zip`, SHA-256 `f9d9bfe5b867296a17280a34718d4cfc514d153bfc44d6a3919e4db32da862ca`) contains 18 section screenshots and metrics for 320/360/640/900/1024/1280. Document width equals viewport at every new width. Turnaround and Location content remain in bounds. Hero screenshots at 320/360/900/1024/1280 look clear. The 640px Hero screenshot, however, shows the wide rotated orbit illustration extending behind the disclosure's background area. The text is still visible, but the visual separation is insufficient.

### Targeted source patch

- Commit: `472fdc4c94d8abd9fd033be1294a204a4265bb36`.
- Scope: `@media (min-width:600px) and (max-width:767px)` only.
- Set `.hero-art` min-height to 340px and bound the rotated `.orbit-one` / `.orbit-two` dimensions so they stay within the illustration block.
- No page-wide overflow suppression, content changes, or accessibility-label removal.

**VIS-003 remains OPEN until re-rendered evidence confirms disclosure/artwork separation at 640px and a second width between 700–767px.** This correction supersedes the earlier Section 9 disposition.

### 10.1 Review of the supplied spot-check archive — 2026-11-18

- Re-materialized archive: `experiment-06-vis003-spotcheck.zip`.
- SHA-256: `f9d9bfe5b867296a17280a34718d4cfc514d153bfc44d6a3919e4db32da862ca`; ZIP CRC validation passed.
- The archive contains 18 section screenshots and `metrics.json`; its width set is 320, 360, 640, 900, 1024 and 1280px. It contains no manifest, capture commit SHA or preview-build identifier.
- Direct review of `hero-640.png` confirms the illustration overlaps the disclosure text area. The 900px Hero image is clear. The metrics report no page-level horizontal overflow at any of the six recorded widths; this does not negate the visual overlap.
- Because the archive is not bound to a website commit, it cannot establish whether it was captured before or after CSS patch `472fdc4c94d8abd9fd033be1294a204a4265bb36`. It therefore cannot validate or invalidate that patch on current PR head `61e005daea25e54be87f24a10c73053ec4fd35fa`.
- There is no screenshot at 700–767px. A screenshot at 900px is outside the requested breakpoint and cannot substitute for one.
- The standalone Website CI workflow now captures 640px and 720px screenshots from the exact pull-request head and uploads them with a commit-bound manifest. This provides reproducible review evidence; it does not perform visual assertions or replace manual inspection. The capture for this documentation update is still pending.

**Disposition at the time of this note:** VIS-003 remained OPEN because the supplied archive was not commit-bound. The subsequent current-head verification is recorded in Section 12 below.

## 11. A11Y-001 keyboard accessibility implementation checkpoint — 2026-11-18

**Status: source patch committed; browser verification pending.**

- Added the “Lewati ke konten utama” skip link before the preview notice and a focusable main-landmark target (#main-content).
- Added Escape handling for the open mobile navigation. Escape closes the menu and restores focus to the menu toggle. Existing aria-expanded / aria-controls semantics are preserved.
- Added focused-state presentation for the skip link. Existing :focus-visible styles and reduced-motion media override remain unchanged.
- App commit: d757f14e9f18584f18190ab3ef704f74c5cc7033.
- This is an implementation checkpoint only, not an accessibility pass. Local build and browser evidence are still required for the first-Tab skip-link journey, complete keyboard path, Escape/focus restoration, hidden-menu tab order, focus visibility, reduced-motion behavior and manual 200% zoom review.


## 12. VIS-003 current-head verification — 2026-11-18

- Exact website source: PR #3 head `bba7c70e8523c0b0e43e4f13ad00eb9e853274a4` on `fix/experiment-06-stage6-remediation`.
- GitHub Actions: Website CI run [#44330232724](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44330232724) completed successfully. Install, TypeScript check, production build, Chromium installation, both screenshot captures and artifact upload all passed.
- Artifact: `laundry-ceria-hero-breakpoint-evidence-44330232724` (artifact ID `14438013686`). The embedded `capture-manifest.json` records repository, PR ref, exact source SHA, run ID, preview URL, capture time and viewport widths.
- Reviewed screenshots: `hero-640.png` and `hero-720.png`. At both widths, the Hero disclosure sits clearly above the illustration; the decorative artwork no longer intrudes into the disclosure area.
- The 640/720 captures are bound to PR #3 head `bba7c70e8523c0b0e43e4f13ad00eb9e853274a4`. They supersede the earlier unpinned archive as evidence for this breakpoint. The old archive remains useful as the original bug evidence, not as proof of the current source output.

**Disposition: VIS-003 FIXED for the 600–767px Hero overlap.** Keep the responsive spot-check conclusions for the other inspected widths and intentional overflow candidates as previously recorded. This does not close A11Y-001, the shared contrast gate, or independent Stage 7 QA. No deployment or public release is authorized.


## 13. A11Y-001 automated browser verification — 2026-11-18

**Source:** PR #3 head `b415bfc7fb152afbb44dee16f2b3cabfabbae9bf`  
**Workflow:** [Website CI run #44336859081](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44336859081) — **SUCCESS**  
**Artifact:** `laundry-ceria-hero-breakpoint-evidence-44336859081`, ID `14441008622`, SHA-256 `7c9d43cdd014b8d8cfff97307a62dede14693aeb5bc809e8a82c14c52428e0d0`.

The browser regression completed these checks:
- Skip link is the first Tab stop; Enter moves focus to the focusable `#main-content` target.
- Skip-link and mobile-menu-toggle focus indicators are visible.
- Five mobile navigation destinations are reachable in DOM/keyboard order.
- Escape closes the mobile menu and returns focus to the toggle; collapsed links are removed from the tab sequence.
- Desktop navigation is keyboard reachable in logical order.
- `prefers-reduced-motion: reduce` changes root scrolling to `auto` and reduces meaningful transition durations to effectively zero.
- At 640 CSS px viewport width, the document and body reflow without page-level horizontal overflow. This is the CSS layout-width equivalent of a 1280px viewport at 200% zoom, not a literal browser-zoom control test.

CI output explicitly states: `A11Y-001 PASS: skip link, keyboard order, focus visibility, mobile Escape/focus return, reduced motion, and 200% zoom-equivalent reflow.`

The same exact-head run captured `hero-640.png` and `hero-720.png`; `capture-manifest.json` records the repository, PR ref, source SHA, run ID, capture time and viewports. Both screenshots were inspected and show clear separation between the Hero disclosure and decorative illustration.

**Disposition:** the automated A11Y-001 subset passes. Manual whole-page keyboard traversal, literal 200% browser zoom and assistive-technology testing remain separate tasks. This is not a WCAG certification or release approval.


## 15. Remove decorative contrast signatures and expand keyboard traversal — 2026-11-18

The four residual contrast signatures from the previous Slice B report were non-informational decorations, not content that needed a color or contrast-threshold workaround. The PR #3 implementation removes them at source:

- The rotated address-card watermark `JAKARTA / DEMO / 001` was removed. The fictional address remains explicitly labelled in the visible disclosure and explanatory copy.
- The arrow glyph beside the disabled WhatsApp status was removed. The status remains visible as text, with WhatsApp still NOT_CONFIGURED and non-interactive.
- The decorative `06/06` contact index was removed.
- Unused CSS rules for these three treatments were removed.

No WCAG/contrast threshold was lowered, no substantive content was recolored, and no fictional business claim was added.

A new automated regression, `tests/a11y-002-full-keyboard.mjs`, was added on PR #3. It verifies all 16 visible desktop links, their accessible names and in-page targets, the complete expected forward Tab order, visible focus treatment for every link, reverse Shift+Tab order, and the mobile collapsed-navigation tab sequence. The script is wired into the PR #1 feature-branch CI workflow.

That workflow now also invokes the canonical Shared Website Quality Gate from `kannaryukkei/ai-operated-web-studio`, pinned to commit `44d52586a2179a5f91d46049b139c823eaf1afa2`. The Laundry Ceria repository consumes the shared action rather than maintaining a copied gate. Exact-head CI execution of these new steps remains pending.

Literal browser zoom at 200%, assistive-technology/screen-reader review and independent Stage 7 acceptance remain separate manual checks. This is not a WCAG conformance or production-release claim.


## 17. Canonical shared gate and full desktop keyboard path — 2026-11-18

The exact-head candidate `49b4a8e2b5ab6fb260e9c62573b9121d5c68e12a` passed [Website CI run #44343672779](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44343672779). The run included TypeScript checking, Vite production build, exact-head 640px/720px captures, A11Y-001, A11Y-002 and the canonical AWOS Shared Website Quality Gate.

Canonical report outcome: **PASS_WITH_MANUAL_REVIEW_REQUIRED**:
- Typography failures: 0 over 320/360/390/640/768/900/1024/1280/1440px.
- Contrast failures: 0 across the nine widths and 53 sampled render states.
- Page-level responsive failures: 0; document width equals viewport width at all nine diagnostic widths.
- Evidence: valid; zero proof candidates and zero evidence failures.
- 205 contrast samples remain excluded because the shared renderer cannot reliably resolve generated image/background layers in the decorative Hero illustration. They resolve to decorative spark marks and illustration-only badge/caption, not required content or business proof. The gate's manual-review designation remains and thresholds were not changed.

The exact-head screenshot manifest and artifacts are tied to run #44343672779 and source SHA `49b4a8e2b5ab6fb260e9c62573b9121d5c68e12a`. The 390px, 768px and 1440px shared-gate full-page screenshots, plus the Hero captures at 640px and 720px, were visually inspected. The Hero notice is separated from the artwork and all substantive content remains clear at those inspected widths. Other diagnostic widths have automated responsive measurements; full visual spot-check at every width remains on the checklist.

A11Y-002 confirms every visible desktop link (16 total) is in the expected Tab order, has a discernible accessible name and existing in-page target, and has a visible focus style; Shift+Tab reverses correctly and collapsed mobile navigation is skipped. A11Y-001 continues to cover skip link, mobile-nav Escape/focus return, reduced motion and zoom-equivalent reflow.

COPY-001 was subsequently corrected to “Pilihan kunjungan dan kontak.” with explicit demo-only supporting copy; that copy-only follow-up requires the next exact-head run before closing the latest source candidate.

Literal browser zoom at 200%, assistive-technology/screen-reader review, lockfile/advisory review and independent Stage 7 acceptance remain open. This is not WCAG certification or release approval.


## 18. Exact-head final verification after copy refinement — 2026-11-18

PR #3 head `901fe9800d3209b213786b8443a4b47934c8b3ed` passed [Website CI run #44345925226](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44345925226). This run executed the A11Y-001 and A11Y-002 regressions and invoked the canonical Shared Website Quality Gate from AWOS.

The report is **PASS_WITH_MANUAL_REVIEW_REQUIRED**:
- 0 typography failures across nine widths (320–1440px).
- 0 measurable contrast failures.
- 0 page-level responsive failures; viewport/document widths match across all nine widths.
- valid evidence manifest; zero proof candidates and zero evidence failures.
- 205 text/surface samples excluded because generated Hero-art backgrounds cannot be resolved reliably. These are decorative spark marks and illustration-only badge/caption surfaces, not required business content or actionable controls. They remain a manual image-surface review item and are not silently counted as passes.

A11Y-001 passes the skip-link, navigation, reduced-motion and zoom-equivalent reflow checks. A11Y-002 passes the full 16-link desktop keyboard sequence, accessible name/target checks, focus visibility, reverse traversal and collapsed mobile-nav tab path.

COPY-001 now reads “Pilihan kunjungan dan kontak.” and clarifies that the displayed visit address and WhatsApp contact are simulated data. The channel remains non-interactive and NOT_CONFIGURED.

The 390px, 768px and 1440px shared-gate full-page screenshots and 640px/720px Hero captures were visually inspected. Diagnostic measurement also covers 320/360/900/1024/1280px, but full human visual inspection at each of those widths is still outstanding. Literal browser zoom at 200%, screen-reader/assistive technology and independent Stage 7 acceptance remain manual. No WCAG certification or public release is implied.


## 19. Final branch relationship — 2026-11-18

The latest tested PR #3 candidate is head `43072ca0c9d46a88d3b9df06052eb684a3a7f08c`, targeting PR #1 feature branch head `6d9f21d57e65227894ad70005998b1a242757c3e`. It passes exact-head [run #44345925226](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44345925226), including the canonical Shared Website Quality Gate (`PASS_WITH_MANUAL_REVIEW_REQUIRED`), A11Y-001 and A11Y-002.

The PR #1 baseline head `6d9f21d57e65227894ad70005998b1a242757c3e` has its own [run #44345945442](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44345945442), where the build and screenshots pass but the canonical gate fails because the child refinement has not yet been integrated. Keep the child-before-parent merge order; do not merge PR #1 to main from this baseline.
