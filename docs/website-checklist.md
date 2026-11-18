# Website Verification Checklist

This is a human-readable manual checklist. It is not an automated test suite, approval register, or release state machine.

**Post-merge status (2026-11-18):** PR #1 is merged into `main` at `4c80f7cd4b5e2c0d82adfe58805c94b9446751c2`. Exact-main CI [run #44353365204](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44353365204) completed SUCCESS; the canonical gate remains `PASS_WITH_MANUAL_REVIEW_REQUIRED`.

## Content and safety

- [x] Website section order follows the retained one-page plan.
- [x] Displayed prices, units, express cutoff/surcharge, pickup radius/fees, and opening hours match the synthetic source fixture.
- [x] The address is visibly identified as fictional and has no map/directions action.
- [x] WhatsApp is visibly unavailable and has no active link, number, or QR code.
- [x] No unprovided photos, official logo, testimonials, ratings, awards, customer counts, or fabricated trust claims are used.
- [x] Owner-reported process details are not elevated into independently verified guarantees.
- [x] Visible copy is in Bahasa Indonesia and the preview-only notice remains persistent.

## Visual and responsive review

- [ ] Inspect 320, 360, 390, 640, 768, 900, 1024, 1280, and 1440 px.
- [x] Canonical shared gate reports zero page-level horizontal-overflow failures at nine diagnostic widths (320–1440 px); nested/intentional clipping is still subject to visual review.
- [x] Confirm the Hero illustration does not overlap disclosure text at 640 px and 720 px on exact-main-head captures; see [run #44353365204](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44353365204).
- [ ] Confirm service prices, turnaround terms, pickup conditions, fictional-address label, disabled contact state, and footer disclosures remain readable.
- [ ] Review spacing, hierarchy, contrast, and visual consistency in rendered screenshots.

## Keyboard and accessibility review

- [x] Confirm the skip link is the first Tab stop and transfers focus to the focusable main-content target (Playwright CI).
- [x] Playwright A11Y-002 traverses all 16 visible desktop links from beginning to end, verifies accessible names/targets and focus indicators, reverse Shift+Tab order, and the collapsed mobile-nav tab path; see [run #44353365204](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44353365204).
- [x] Open and close mobile navigation by keyboard; five links are reachable, Escape closes the menu, focus returns to the toggle, and collapsed links leave the tab order (Playwright CI).
- [x] Confirm visible focus indicators on the skip link and menu toggle and sensible navigation order (Playwright CI).
- [x] Check reduced-motion behavior (Playwright CI).
- [ ] Test with the browser's actual 200% zoom control. CI passes a 640 CSS-pixel zoom-equivalent reflow proxy, but does not change the browser zoom setting.
- [ ] Review the page with a screen reader/assistive technology; no such conformance test has been performed.

## Current known follow-up items

- **VIS-003:** FIXED. Current-head CI captures at 640 px and 720 px show the disclosure/artwork gap is clear.
- **VIS-002:** canonical gate has 0 measurable contrast failures. It reports `PASS_WITH_MANUAL_REVIEW_REQUIRED` because 207 generated/image-backed Hero observations are excluded because the automated renderer cannot resolve those surfaces reliably; manual image-surface review remains required. Preserve thresholds; manual visual review remains required.
- **A11Y-001 / A11Y-002:** both automated browser regressions PASS in [run #44353365204](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44353365204). Literal 200% browser zoom and assistive-technology review remain open; no WCAG certification is claimed.
- **COPY-001:** FIXED. The contact heading is “Pilihan kunjungan dan kontak.” with explicit synthetic-preview disclosure.
- **Shared evidence manifest:** restored at `.website-quality/evidence-manifest.json`; empty `items` is valid because the site makes no detected proof claims. This is a quality-gate input, not project workflow state.
- **Latest post-merge main CI:** [run #44353365204](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44353365204) SUCCESS on merge commit `4c80f7cd4b5e2c0d82adfe58805c94b9446751c2`; gate result `PASS_WITH_MANUAL_REVIEW_REQUIRED`.
- **DES-001:** comparative visual review against other relevant work is deferred.

See the [Experiment 06 issue ledger](./experiment-06-issue-ledger.md) for evidence and status details. Do not infer that an item is closed merely because TypeScript and the production build pass.


## Post-merge evidence review — 2026-11-18

- [x] Review the post-merge exact-main full-page screenshots at 390px, 768px and 1440px as a bounded assistant self-review.
- [x] Review the post-merge exact-main Hero screenshots at 640px and 720px; no obvious overlap between the illustration and disclosure was observed.
- [ ] Complete manual visual inspection at all nine diagnostic widths. The 320px, 360px, 900px, 1024px and 1280px sizes were not part of the five-screenshot self-review.
- [ ] Manually inspect the 207 generated/image-backed Hero observations excluded from numeric contrast measurement.
- [ ] Test actual browser zoom at 200%; the 640 CSS-pixel regression remains a proxy only.
- [ ] Perform a screen-reader/assistive-technology review.
- [ ] Add and verify a committed dependency lockfile; migrate CI from `npm install` to `npm ci` only after the lockfile is reviewed and exact-head CI passes.
- [ ] Run and disposition a current dependency advisory audit.
- [ ] Obtain independent Stage 7 acceptance. The screenshot review above is not independent acceptance.

The merge and exact-main CI success do not authorize deployment or public release. The site remains a private synthetic `studio_development` preview with `PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED`.
