# Experiment 06 — Selector-Level Remediation Map

**Status:** Audit and patch plan prepared; source/CSS changes not applied  
**Project:** Laundry Ceria — fictional training fixture  
**Website branch:** \`feat/stage-4-website-production\`  
**Audited baseline:** \`f79c2978e11dea653bbcc86f6a1832d3bd96ee8f\`  
**Reviewed source blobs:** \`src/App.tsx\` 278ce146ca7457136e52457bdd81aa32b55102d5; \`src/styles.css\` bed7e8204e72357ec9264671f324bfede4ac95a5  
**Rendered evidence:** \`SRC-0006\` — \`experiment-06-after-qa001.zip\`, generated 2026-11-17T23:39:49.068Z at preview URL \`http://127.0.0.1:4174\`.

> All Laundry Ceria data is fictional and remains DEMO-ONLY / NOT_APPROVED. This map authorizes no publication, new business behavior, asset use or visual-direction change. It prepares bounded corrections only. Formal Stage 6 remains blocked until the WRP/G1/G2 entry conditions are genuinely satisfied.

## 1. Evidence correction and interpretation

The after-QA-001 report records:

| Area | Report result | How to interpret it |
|---|---:|---|
| Typography | 423 observation rows / 59 distinct text-role-size signatures | Repeated viewport observations; not 423 independent defects |
| Contrast | 1,836 observation rows / 57 distinct text/foreground/background signatures | Repeated viewport/state observations; not 1,836 independent defects |
| Contrast excluded surfaces | 217 rows / 5 signatures | Manual review bucket; mostly abstract hero decoration, not automatically content failures |
| Not visible | 502 | Not observed failures |
| Responsive document overflow | 0 failures | No page-level horizontal overflow at the nine diagnostic widths |
| Nested overflow candidates | 58 rows / 7 signatures | Candidate internal clipping; manual visual disposition required |

Diagnostic widths in this runner were 320, 360, 390, 640, 768, 900, 1024, 1280 and 1440 px. Project acceptance widths remain 320, 360, 390, 768, 1024 and 1440 px.

**Correction to the earlier issue ledger:** the 3.71:1 contrast result belongs to the hero footnote text “Informasi ini merupakan materi simulasi…”, not the top preview notice. The footer disclosure “PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED” measured 4.27:1. The top notice text was not one of the 57 unique contrast-failure signatures, but its mobile CSS size is still only 9px and warrants a readability correction.

The reviewed mobile section screenshots confirm these rendered examples at 390px:
- Services & Prices: service subtitle 9px, price units 10px, price-card footnote 9px.
- Turnaround: category label 7px, supporting detail 9px, timing rule 8px, express cost note 8px.
- Process: step descriptions 10px; explanatory aside 11px.
- Pickup & Delivery: “Berat pesanan” 9px, fee label 8px, caveat 8px.
- Hours & Location: operating-hours rows 11px, card heading 9px, schedule note 9px; fictional-address label 7px.
- Contact: route labels 8px, explanatory paragraphs 11px, state badges 8px.

These sizes are visibly subordinate to the main headings and prices, but several of them communicate conditions, availability or demo safeguards and cannot be treated as decorative microcopy.

## 2. Typography role correction — prevent category errors without lowering standards

The local Laundry Ceria quality gate (vendored from the previously used Studio implementation) defines floors:
- BODY: 15px
- CONTROL: 13px
- METADATA: 11px
- DISCLOSURE: 13px

Its \`classifyTypographyRole()\` supports explicit \`data-qa-role\` overrides before falling back to tag semantics. A plain \`p\` is classified as BODY. In Laundry Ceria, \`<p class="eyebrow">\` is therefore reported as BODY even though Stage 3 explicitly defines eyebrow/metadata as a separate typography role.

**Correct fix:** add explicit QA role attributes to semantically distinct rendered elements; do not lower the BODY floor and do not label all short copy as metadata.

| Element / selector | Semantic QA role | Proposed explicit attribute | Required size |
|---|---|---|---:|
| \`.eyebrow\` paragraphs in Hero, section headings and Pickup | METADATA | \`data-qa-role="metadata"\` | 12px |
| \`.section-topline\` labels | METADATA | \`data-qa-role="metadata"\` | 12px |
| \`.timing-card-top\` labels | METADATA | \`data-qa-role="metadata"\` | 12px |
| \`.info-card-head\`, \`.contact-card-top\` labels | METADATA | \`data-qa-role="metadata"\` | 12px |
| \`.status-pill\`, \`.wordmark-tag\`, \`.card-index\` when retained | METADATA | \`data-qa-role="metadata"\` | 11–12px |
| \`.hero-footnote\`, \`.pricing-note p\`, \`.price-card-foot\` | DISCLOSURE | \`data-qa-role="disclosure"\` | 13px minimum |
| \`.pickup-footnote\`, \`.card-footnote\`, \`.timing-rule\`, \`.express-foot\` | DISCLOSURE | \`data-qa-role="disclosure"\` | 13px minimum |
| \`.fictional-label\`, preview notice status and footer preview status | DISCLOSURE | \`data-qa-role="disclosure"\` | 13px minimum |
| Main explanatory copy and process descriptions | BODY | \`data-qa-role="body"\` where needed for non-standard tags | 15px minimum |
| CTA links/buttons and footer navigation | CONTROL | \`data-qa-role="control"\` where not inferred as navigation | 13px minimum; primary CTA target 16px |

The metadata role must not become a loophole. Important status, price units, operating hours, weight thresholds, unavailable-state explanations and fictional-address warnings must be treated as BODY or DISCLOSURE and remain at least 13–15px.

## 3. Bounded typography remediation map

The values below are from the reviewed CSS and/or computed report. The patch should use one consistent role scale, not many one-off values. Stage 3 target is Body 16px, Small 14px and Micro 12px; the quality-gate minimums are hard floors, not ideal design targets.

| Priority | JSX area / CSS selector | Observed size | Proposed target | Reason / acceptance |
|---|---|---:|---:|---|
| P1 | \`.notice-inner\`, \`.notice-inner strong\` | 9px on mobile | 13–14px / 12–13px | Persistent PREVIEW ONLY notice must be comfortably readable at 320–390px; no wrap/clipping |
| P1 | \`.fictional-label\` | 7px mobile, 8px base | 13px | Fictional address safeguard must be prominent beside the address |
| P1 | \`.footer-bottom\` | 7px mobile, 8px base | 13px | Repeated PREVIEW ONLY / DEMO-ONLY / NOT_APPROVED is a disclosure, not footer decoration |
| P1 | \`.status-pill\` (\`ALAMAT DEMO\`, \`NOT_CONFIGURED\`, \`BELUM TERSEDIA\`) | 8px | 12–13px | These labels communicate real unavailable/demo states |
| P1 | \`.disabled-action\` | 10px | 13px | Explanation of the disabled WhatsApp state must remain readable; retain non-interactive semantics |
| P1 | \`.pickup-footnote\` | 8–9px | 13–14px | Demo-only service coverage/fee caveat |
| P1 | \`.express-foot\` | 8–9px | 13–14px | Express +50% cost condition |
| P1 | \`.card-footnote\` | 9px | 13px | Operating-hours fixture disclaimer |
| P1 | \`.pricing-note p\` | 10–11px | 13–14px | Price/condition disclosure |
| P1 | \`.contact-card>p\`, \`.address-card>p\` | 11px | 15px | Contact and fictional-address explanation is important visitor content |
| P1 | \`.process-item p\`, \`.process-aside p\` | 10–11px | 15px | Six process steps and the weighing/recording explanation are core information |
| P1 | \`.hours-row\` and child labels/values | 11px | 14–15px | Opening hours are decision-critical information; report did not flag every div-based instance |
| P1 | \`.rule-bottom span\` | 8–9px | 13px | Explains what the pickup fee applies to |
| P1 | \`.pickup-rule>p\` | 9–10px | 12–13px | “Berat pesanan” is a meaningful label, not decoration |
| P1 | \`.express-result\`, \`.express-intro\` | 9–10px mobile | 14px | Express cutoff/completion meaning remains legible beside the large time numerals |
| P1 | \`.timing-detail\`, \`.timing-rule\` | 8–11px | 13–15px | Turnaround condition and explanation |
| P2 | \`.price-card-head p\` | 9px mobile, 10px base | 14px | Clarifies /kg vs /piece pricing |
| P2 | \`.price-card-foot\` | 9px | 13px | Fixture-data note under price rows |
| P2 | \`.price-row\` labels and \`.price-row strong small\` units | 12px / 10px | 14px / 12–13px | Service names, price and unit must remain legible and associated |
| P2 | \`.eyebrow\` | 10px | 12px | Correctly classified metadata; matches Stage 3 micro floor |
| P2 | \`.section-topline\` | 7px mobile, 9px base | 12px | Section index/descriptor; currently too small and low contrast |
| P2 | \`.timing-card-top\`, \`.info-card-head\`, \`.contact-card-top\` | 7–9px | 12px | Category and section labels |
| P2 | \`.radius-display small\` | 8px | 12px | Label for the 2km coverage statement |
| P2 | \`.hero-footnote\` | 9px mobile, 10px base | 13px | Simulation disclaimer; contrast also fails |
| P2 | \`.footer-main p\`, \`.footer-nav a\`, \`.contact-card-bottom a\` | 9–10px | 13–14px | Footer copy and navigation/action labels |
| P2 | \`.button\`, \`.text-link\`, \`.primary-nav a\` | 11–12px | 14–16px | Controls should meet the 13px shared floor; Stage 3 specifies 16px primary action text |

**Computed-size note:** the report recorded primary-nav labels at 9px for widths 320–640px and 12px at wider widths, while the base \`.primary-nav a\` declaration in the reviewed stylesheet is 12px. Re-check computed styles in the exact browser render and identify the responsive cascade/state responsible before assuming a source declaration. Acceptance is a minimum 13px at all required widths.

## 4. Bounded contrast remediation map

Contrast measurements below are unique signatures from \`report.json\`; rows are repeated across widths/states. The suggested \`#52636C\` is the existing \`--color-muted\` token. Calculated WCAG ratios for that token are:

| Text color / surface | Contrast |
|---|---:|
| \`#52636C\` on paper \`#F6F7F2\` | 5.80:1 |
| \`#52636C\` on white \`#FFFFFF\` | 6.25:1 |
| \`#52636C\` on pickup mint \`#E6F0EA\` | 5.36:1 |
| \`#52636C\` on address mint \`#EAF3EE\` | 5.52:1 |
| \`#52636C\` on disabled surface \`#E2E8E4\` | 5.03:1 |
| \`#52636C\` on price tint \`#F8FBF8\` | 6.00:1 |
| \`#52636C\` on price tint \`#FDFBF5\` | 6.04:1 |
| White \`#FFFFFF\` on teal \`#0F6B68\` | 6.32:1 |
| Paper \`#F6F7F2\` on teal \`#0F6B68\` | 5.87:1 |
| \`rgba(255,255,255,.55)\` composited on ink \`#172B3A\` | 5.47:1 |

| Priority | Selector / visible text | Measured pair | Proposed correction |
|---|---|---:|---|
| P1 | \`.hero-footnote\` — simulation disclaimer | 3.71:1 on paper | Set text to \`var(--color-muted)\`; target 13px |
| P1 | \`.pickup-footnote\` — pickup demo caveat | 3.74:1 on pickup mint | Set to \`var(--color-muted)\`; target 13–14px |
| P1 | \`.timing-rule\` — regular timing caveat | 3.80:1 on white | Set to \`var(--color-muted)\`; target 13px |
| P1 | \`.card-footnote\` — schedule fixture note | 2.96:1 on paper | Set to \`var(--color-muted)\`; target 13px |
| P1 | \`.price-card-foot\` — price fixture note | 2.97–2.99:1 on card tints | Set to \`var(--color-muted)\`; target 13px |
| P1 | \`.footer-bottom\` — repeated preview/legal disclosure | 4.27:1 on ink | Increase white opacity from .46 to at least .55; target 13px |
| P1 | \`.pickup-rule>p\`, \`.rule-bottom span\` — “Berat pesanan” / “Biaya antar-jemput” on free teal card | 3.65:1 | Use white or paper text; target 13px |
| P1 | \`.rule-meta\` on free teal card | 3.39:1 | Use paper/white text; retain teal card and amber accent |
| P1 | \`.status-muted\` — “BELUM TERSEDIA” | 3.94:1 on disabled surface | Use \`var(--color-muted)\`; retain neutral disabled surface |
| P2 | \`.section-topline\` | 2.99:1 on paper; 3.22:1 on white | Use \`var(--color-muted)\`; target 12px |
| P2 | \`.info-card-head\` | 3.40:1 on paper | Use \`var(--color-muted)\`; target 12px |
| P2 | \`.contact-card-top\` | 3.23:1 on tinted cards | Use \`var(--color-muted)\`; target 12px |
| P2 | \`.timing-card-top\` on regular white card | 3.81:1 | Use \`var(--color-muted)\`; target 12px |
| P2 | \`.contact-index span\` and \`.card-corner\` numbers | 2.24:1 / 2.04–2.15:1 | If meaningful, use \`var(--color-muted)\`; if purely decorative, mark decorative and avoid relying on them |
| P2 | \`.hero-bottom\` | 2.91:1 | Decorative parent is \`aria-hidden\`; either treat explicitly as non-content decoration or use \`var(--color-muted)\` for consistency |

**Do not promote all 57 contrast signatures to content defects.** The very low contrast address watermark \`.address-decoration\` (“JAKARTA”, “DEMO / 001”) is already \`aria-hidden\` and decorative. The hero sparkles and abstract artwork are also decorative/manual-review surfaces. The \`.process-mark\` ↗ arrows are hidden from assistive technology but create a separate visual-affordance concern below.

## 5. Additional interface and accessibility findings from source inspection

These are source observations, not completed browser acceptance tests:

1. **Skip link absent.** \`App.tsx\` contains a \`<main>\` landmark but no skip link and no \`id\` on the main target. Add a first keyboard-stop skip link and a programmatically focusable main target; verify activation and focus placement.
2. **Mobile menu Escape behavior absent in source.** The menu is controlled by \`useState\`, has \`aria-expanded\` and \`aria-controls\`, and closes when a nav link is clicked. No Escape-key handler or explicit focus-return behavior exists. Add Escape close and focus restoration only after a keyboard-only journey confirms behavior.
3. **Focus CSS exists.** \`button:focus-visible,a:focus-visible\` currently defines a 3px outline with 4px offset. Do not report this as missing; test actual visible/obscured states.
4. **Reduced-motion CSS exists.** The stylesheet has a \`prefers-reduced-motion: reduce\` rule that disables smooth scrolling and reduces animation/transition durations. Do not report it as missing; verify rendered behavior.
5. **Static process arrows.** Each \`.process-item\` contains a decorative ↗ marker even though the list item has no navigation/action. Stage 3 explicitly warns against arrows on static information rows. Remove the marker or replace it with a non-directional sequence treatment in a bounded design correction.
6. **Heading copy.** Contact heading “Pilih cara yang ingin dikenali.” is semantically awkward. Candidate correction should clearly describe contact/next steps without implying a working WhatsApp destination.

## 6. Bounded execution sequence after the entry gate

Do not edit CSS until WRP/G1/G2 and canonical Stage 6 entry conditions are satisfied. Once they are:

**Slice A — safeguard readability and contrast (VIS-001 / VIS-002).** Preview notice, fictional-address label, unavailable-state badges, footer status, express surcharge, schedule/price/pickup caveats. Acceptance: all disclosures readable at 320/360/390/768/1024/1440px and every sampled normal-text pair >=4.5:1.

**Slice B — core body and price information.** Services, price units, regular/express terms, process steps, pickup thresholds, hours, contact/address descriptions. Acceptance: body copy >=15px, important conditions/disclosures >=13px, no clipping or price/unit separation.

**Slice C — metadata and controls.** Eyebrows, section toplines, category labels, navigation and CTA sizes; add \`data-qa-role\` attributes where semantic tag fallback is wrong. Acceptance: metadata >=11px (target12), controls >=13px (primary CTA target16px), role assignments match semantics.

**Slice D — confirmed layout/accessibility corrections.** Nested overflow, skip-link, Escape/focus continuity, process arrows and contact-heading copy. Acceptance: keyboard-only journey, reduced-motion check, 200% zoom and same-state screenshots pass.

For every slice preserve the original baseline, use a checkpoint, change only the selectors tied to the issue IDs, run build/typecheck and relevant checks, then recapture the exact same viewport/state. Maximum two correction cycles per material slice.

## 7. Current decision

- VIS-001 and VIS-002 have selector-level remediation paths.
- Typography role classification needs explicit \`data-qa-role\` for paragraph-based eyebrows; the shared thresholds must remain unchanged.
- Contrast corrections can use the existing muted/ink/paper tokens; no palette redesign is required.
- Reduced-motion and focus CSS are already present; keyboard behavior and 200% zoom remain untested.
- No Laundry Ceria application source or CSS has been modified by this audit.

**Formal Stage 6 remains BLOCKED** pending operator review of SNAP-LC-0001/WRP-LC-001 and genuine Studio-owner G1/G2 decisions. This file is an implementation-ready preparation artifact, not permission to bypass that gate.
