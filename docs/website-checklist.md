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

- [ ] Inspect 320, 360, 390, 640, 768, 900, 1024, 1280, and 1440 px.
- [ ] Confirm no page-level horizontal overflow or clipped substantive content.
- [x] Confirm the Hero illustration does not overlap disclosure text at 640 px and 720 px on an exact-head CI capture; see [run #44336859081](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44336859081).
- [ ] Confirm service prices, turnaround terms, pickup conditions, fictional-address label, disabled contact state, and footer disclosures remain readable.
- [ ] Review spacing, hierarchy, contrast, and visual consistency in rendered screenshots.

## Keyboard and accessibility review

- [x] Confirm the skip link is the first Tab stop and transfers focus to the focusable main-content target (Playwright CI).
- [ ] Navigate every page control from beginning to end without a pointer; the current regression covers the skip link, desktop nav and mobile-menu path, not the entire page.
- [x] Open and close mobile navigation by keyboard; five links are reachable, Escape closes the menu, focus returns to the toggle, and collapsed links leave the tab order (Playwright CI).
- [x] Confirm visible focus indicators on the skip link and menu toggle and sensible navigation order (Playwright CI).
- [x] Check reduced-motion behavior (Playwright CI).
- [ ] Test with the browser's actual 200% zoom control. The current CI passes a 640 CSS-pixel zoom-equivalent reflow proxy, but does not change the browser zoom setting.

## Current known follow-up items

- **VIS-003:** FIXED. Current-head CI captures at 640 px and 720 px show the disclosure/artwork gap is clear.
- **VIS-002:** residual contrast signatures were classified as decorative; preserve the shared threshold and retain manual review rather than weakening the gate.
- **A11Y-001:** automated browser subset PASS in [run #44336859081](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44336859081). Full-page keyboard traversal and literal 200% browser zoom remain manual follow-ups; no assistive-technology certification is claimed.
- **COPY-001:** review the awkward contact-section heading.
- **DES-001:** comparative visual review against other relevant work is deferred.

See the [Experiment 06 issue ledger](./experiment-06-issue-ledger.md) for evidence and status details. Do not infer that an item is closed merely because TypeScript and the production build pass.
