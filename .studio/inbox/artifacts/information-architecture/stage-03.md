# Stage 3 — Information Architecture

**Decision:** One responsive page, Bahasa Indonesia, with stable in-page section IDs.

## Page structure (canonical order)

| Order | Section ID | Section title / purpose | Priority | Navigation |
|---:|---|---|---|---|
| 0 | preview-notice | Disclose preview/demo/not-approved status before business content | Critical | Persistent, not dismissible |
| 1 | site-header | Temporary text identity and navigation | High | Site shell |
| 2 | hero | Introduce the training fixture and direct to services | Critical | Primary in-page action |
| 3 | services-pricing | Show three kiloan and two per-piece services with exact units | Critical | Layanan & Harga |
| 4 | turnaround | Explain regular and express timing | High | Linked from content if needed |
| 5 | how-it-works | Explain handover and completion process | High | Proses |
| 6 | pickup-delivery | State radius and exact fee rules | High | Antar-Jemput |
| 7 | hours-location | Opening hours and clearly fictional address | Critical | Jam & Lokasi |
| 8 | contact | Explain walk-in intent and disabled WhatsApp state | Critical | Contact anchor |
| 9 | site-footer | Repeat preview notice and valid page navigation | Medium | Footer anchors |

## Navigation model

- Layanan & Harga → services-pricing
- Proses → how-it-works
- Antar-Jemput → pickup-delivery
- Jam & Lokasi → hours-location
- Info Kontak → contact
- Brand link → hero
- Footer back-to-top → hero

## Responsive behavior

- Mobile: single column; menu button with accessible name and aria-expanded; no horizontal overflow.
- Tablet: use two columns only where labels and content remain readable.
- Desktop: split hero, paired service cards, grouped timing/process information, two-column hours/location and contact.
- At 320, 360, 390, 768, 1024 and 1440 px, text, pricing and notice must remain visible without horizontal scrolling.
- At 200% zoom, core text and actions must remain usable.

## IA exclusions

No additional pages, booking route, payment screen, map page, customer portal, admin panel, order tracking, or live contact destination.
