# Website Verification Checklist

This is a human-readable manual checklist. It is not an automated test suite, approval register, or release state machine.

## Content and safety

- [x] Website section order follows the retained one-page plan.
- [x] Displayed prices, units, express cutoff/surcharge, pickup radius/fees, and opening hours match the synthetic source fixture.
- [x] The address is visibly identified as fictional and has no map/directions action.
- [x] WhatsApp is visibly unavailable and has no active link, number, or QR code.
- [x] No unprovided photos, official logo, testimonials, ratings, awards, customer counts, or fabricated trust claims are used.
- [x] Owner-reported process details are not elevated into independently verified guarantees.
- [x] Visible copy is in Bahasa Indonesia and the preview-only notice remains persistent.

## Visual and responsive review

- [x] Review full-page captures at 320, 360, 390, 768, 900, 1024, 1280, and 1440 px; review the exact-head Hero captures at 640 and 720 px. The shared gate independently measures all nine standard widths, including 640 px.
- [x] Canonical shared gate reports zero page-level horizontal-overflow failures at nine diagnostic widths (320–1440 px); nested/intentional clipping is still subject to visual review.
- [x] Confirm the Hero illustration does not overlap disclosure text at 640 px and 720 px on exact-head captures; see [run #44374760430](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44374760430).
- [x] Confirm service prices, turnaround terms, pickup conditions, fictional-address label, disabled contact state, and footer disclosures remain readable across the inspected full-page captures.
- [x] Review spacing, hierarchy, contrast, and visual consistency in rendered screenshots at the inspected widths. Generated Hero surfaces excluded from numeric contrast remain subject to the shared gate's manual-review requirement.

## Keyboard and accessibility review

- [x] Confirm the skip link is the first Tab stop and transfers focus to the focusable main-content target (Playwright CI).
- [x] Playwright A11Y-002 traverses all 16 visible desktop links from beginning to end, verifies accessible names/targets and focus indicators, reverse Shift+Tab order, and the collapsed mobile-nav tab path; see [run #44374760430](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44374760430).
- [x] Open and close mobile navigation by keyboard; five links are reachable, Escape closes the menu, focus returns to the toggle, and collapsed links leave the tab order (Playwright CI).
- [x] Confirm visible focus indicators on the skip link and menu toggle and sensible navigation order (Playwright CI).
- [x] Check reduced-motion behavior (Playwright CI).
- [ ] Test with the browser's actual 200% zoom control. CI passes a 640 CSS-pixel zoom-equivalent reflow proxy, but does not change the browser zoom setting.
- [ ] Review the page with a screen reader/assistive technology; no such conformance test has been performed.

## Current known follow-up items

- **VIS-003:** FIXED. Current-head CI captures at 640 px and 720 px show the disclosure/artwork gap is clear.
- **VIS-002:** exact-head run #44374760430 reports 0 measurable contrast failures and `PASS_WITH_MANUAL_REVIEW_REQUIRED`; 212 generated-background observations across five decorative Hero signatures remain excluded from automated calculation. AI self-review of the exact rendered screenshot and CSS tokens measured: teal `#0F6B68` on paper `#F6F7F2` = 5.87:1; amber spark `#8A5A0A` on paper = 5.50:1; caption `#52636C` on paper = 5.80:1; stamp foreground `#0F6B68` on its 78%-white panel over mint has a worst-case calculated composite contrast of 4.52:1 (actual rendered backing is lighter). The stamp, stars, and caption were visually inspected at mobile/tablet/desktop captures. This is explicitly an AI self-review, not independent human acceptance; the gate remains manual-review-required and thresholds were not changed.
- **A11Y-001 / A11Y-002:** both automated browser regressions PASS in [run #44374760430](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44374760430). Literal 200% browser zoom and assistive-technology review remain open; no WCAG certification is claimed.
- **COPY-001:** FIXED. The contact heading is “Pilihan kunjungan dan kontak.” with explicit synthetic-preview disclosure.
- **Shared evidence manifest:** restored at `.website-quality/evidence-manifest.json`; empty `items` is valid because the site makes no detected proof claims. This is a quality-gate input, not project workflow state.
- **Dependency reproducibility/security:** RESOLVED for this branch. `package.json` and npm lockfile v3 are committed; Playwright is pinned to `1.65.1`; exact-head CI run #44374760430 passed `npm ci`, `npm ls --all`, and `npm audit` with 0 reported vulnerabilities.
- **Latest parent CI:** [run #44374760430](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44374760430) SUCCESS; gate result `PASS_WITH_MANUAL_REVIEW_REQUIRED`.
- **DES-001:** comparative visual review against other relevant work is deferred.

See the [Experiment 06 issue ledger](./experiment-06-issue-ledger.md) for evidence and status details. Do not infer that an item is closed merely because TypeScript and the production build pass.
