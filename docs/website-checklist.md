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
- [ ] Confirm the Hero illustration does not overlap disclosure text at 640 px and at one width between 700–767 px.
- [ ] Confirm service prices, turnaround terms, pickup conditions, fictional-address label, disabled contact state, and footer disclosures remain readable.
- [ ] Review spacing, hierarchy, contrast, and visual consistency in rendered screenshots.

## Keyboard and accessibility review

- [ ] Confirm a working skip link and focusable main-content target.
- [ ] Navigate the complete page without a pointer.
- [ ] Open and close the mobile navigation; Escape closes it and focus returns to the menu toggle.
- [ ] Confirm focus indicators remain visible and tab order is sensible.
- [ ] Check reduced-motion behavior.
- [ ] Check layout and functionality at 200% zoom.

## Current known follow-up items

- **VIS-003:** the 600–767 px Hero orbit-containment patch needs after-render verification at 640 px and a second width in the 700–767 px range.
- **VIS-002:** residual contrast signatures were classified as decorative; preserve the shared threshold and retain manual review rather than weakening the gate.
- **A11Y-001:** full skip-link, keyboard, Escape/focus-return, reduced-motion, and 200% zoom browser verification remains open.
- **COPY-001:** review the awkward contact-section heading.
- **DES-001:** comparative visual review against other relevant work is deferred.

See the [Experiment 06 issue ledger](./experiment-06-issue-ledger.md) for evidence and status details. Do not infer that an item is closed merely because TypeScript and the production build pass.
