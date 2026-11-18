# Stage 2 — Website Planning
## Project: Laundry Ceria (Fictional Training Fixture)

**Stage status:** PASS — READY FOR STAGE 3 (PREVIEW ONLY)  
**Evidence status:** DEMO-ONLY  
**Publication status:** NOT_APPROVED  
**Website format:** Responsive single-page website  
**Primary conversion intent:** Walk-in visit + WhatsApp contact  
**Conversion readiness:** Walk-in address is fictional; WhatsApp is NOT_CONFIGURED

> This planning document is based on the Stage 0 Laundry Ceria fixture and the Stage 1 Discovery & Strategy document. All business facts remain fictional and DEMO-ONLY. Recommendations, UX hypotheses, and studio decisions are not additional business facts. This is a planning deliverable, not final website copy, visual design, or implementation.

## 1. Stage objective

Turn the approved Stage 1 strategy into a build-ready website blueprint. This stage defines the information architecture, section sequence, navigation, user journeys, content requirements, component inventory, interaction behavior, responsive behavior, accessibility requirements, and acceptance criteria.

Stage 2 does not create final marketing copy, decide detailed visual styling, implement frontend code, configure a real WhatsApp integration, map, booking flow, payment, backend, or authorize publication.

## 2. Planning inputs and source hierarchy

Inputs: Stage 0 source fixture and Stage 1 strategy.

Source-of-truth rules:
- Stage 0's latest interview lines are authoritative for business facts.
- Source facts retain their NOTE_LINE locators.
- UX hypotheses and studio recommendations must never be represented as customer research or verified facts.
- Missing information remains missing. Do not invent WhatsApp number, real address, payment options, service conditions, or customer proof.
- Every page view and generated build retains its preview-only state.

## 3. Website architecture decision

**Decision:** One responsive page with in-page navigation and distinct information sections.

Rationale: the brief has one primary goal—help prospective customers understand services and how to order—and a finite information set. A single page keeps services, prices, process, operating details, and conversion states accessible without unnecessary pages.

**Exact proposed section sequence:**

| Order | Section ID | Section name | User question answered | Priority |
|---:|---|---|---|---|
| 0 | `preview-notice` | Preview notice | Is this a real, publicly approved business website? | Critical |
| 1 | `site-header` | Header and navigation | What is the business and where can I find key information? | High |
| 2 | `hero` | Introduction / hero | What does Laundry Ceria offer and what can I do here? | Critical |
| 3 | `services-pricing` | Services and prices | What services are available and how much do they cost? | Critical |
| 4 | `turnaround` | Regular and express timing | When will my laundry be ready? What are express terms? | High |
| 5 | `how-it-works` | How the service works | What happens when I hand over my laundry? | High |
| 6 | `pickup-delivery` | Pickup and delivery | Is pickup/delivery available, where, and at what cost? | High |
| 7 | `hours-location` | Opening hours and demo address | When is the shop open and what address is in this fixture? | Critical |
| 8 | `contact` | Conversion options | How can I act next? | Critical |
| 9 | `site-footer` | Footer and final notice | What preview constraints still apply? | Medium |

### 3.1 Header navigation items

- Layanan & Harga → `services-pricing`
- Proses → `how-it-works`
- Antar-Jemput → `pickup-delivery`
- Jam & Lokasi → `hours-location`
- Main CTA treatment may point to `contact`, but must not look like a working WhatsApp link.

Keep navigation compact. On smaller screens, use a keyboard-accessible menu control or simple wrapping navigation; do not introduce a complex mega-menu.

## 4. User journeys

These are planned journeys based on the stated website goal and conversion intent. They are not observed analytics or validated user research.

### 4.1 Journey A — Compare a service, then consider visiting
1. Visitor opens the single-page preview.
2. Sees the preview-only notice and introductory summary.
3. Navigates to Services & Prices.
4. Compares kiloan and piece-based options.
5. Checks regular and express turnaround information.
6. Checks hours and displayed demo address.
7. Sees that the address is fictional and walk-in path is not a real-world direction.

Success: the visitor understands supplied service/operational information and is not led to mistake the fictional address for a real location.

### 4.2 Journey B — Understand pickup/delivery
1. Visitor opens the page.
2. Navigates to Pickup & Delivery.
3. Reads 2 km radius and exact fee threshold.
4. Understands that radius is measured from the fictional shop address in the fixture and cannot verify a real service area.

Success: coverage and fees are understandable without implying coverage beyond 2 km or changing the 5 kg threshold.

### 4.3 Journey C — Try to contact through WhatsApp
1. Visitor reaches contact section or WhatsApp CTA treatment.
2. CTA is visibly disabled / not configured.
3. Supporting text explains that no business number was supplied for this preview.
4. No click opens WhatsApp, chat URL, fabricated phone number, or fallback channel.

Success: intended channel is recognizable, but no message can be sent to an invented contact.

### 4.4 Journey D — Understand handover process
1. Visitor navigates to How It Works.
2. Reads receive → weigh in front of customer → record per customer → wash → dry → fold or iron according to selected service → notify via WhatsApp.
3. Copy remains descriptive and does not turn owner's claim into an independently verified guarantee.

Success: documented process is clear, and WhatsApp notification is not shown as a live integration.

## 5. Section-level content requirements

### 5.1 Preview notice — `preview-notice`
- Persistent and clear notice that this is a fictional training preview.
- Explicit `DEMO-ONLY` and `NOT_APPROVED` wording.
- Visible without scrolling and repeated in footer.
- Never style as normal business promotion; no publish action.

Traceability: fixture notice lines 7–11.

### 5.2 Header — `site-header`
- Temporary text-only “Laundry Ceria” identity.
- In-page navigation links.
- Optional compact preview marker.
- No logo asset exists; do not imply text wordmark is an owner-approved logo.
- No clickable WhatsApp header button. Neutral anchor to contact section is acceptable.

Traceability: NOTE_LINE [19], [31].

### 5.3 Hero — `hero`
- Business name.
- Concise explanation this is a laundry service and page explains services/order information.
- One primary in-page action to services/prices.
- Optional secondary action to hours/location.
- No invented slogan, location claim, unsupported turnaround promise or differentiator.
- No business photography; photos absent and written permission pending.
- Typography, CSS shapes or generic decorative elements only.

Traceability: NOTE_LINE [2]–[5], [20]; fixture asset notice lines 20–22.

### 5.4 Services and prices — `services-pricing`

| Category | Service | Supplied price | Source |
|---|---|---:|---|
| Kiloan | Cuci lipat | Rp8.000/kg | NOTE_LINE [23] |
| Kiloan | Cuci setrika | Rp12.000/kg | NOTE_LINE [23] |
| Kiloan | Setrika saja | Rp7.000/kg | NOTE_LINE [23] |
| Satuan | Bed cover | Rp25.000/potong | NOTE_LINE [24] |
| Satuan | Selimut | Rp20.000/potong | NOTE_LINE [24] |

Preserve exact amounts and units. Do not add minimum order, weight rounding, add-on fees, stain fee or any other price condition. Do not calculate express totals. Keep kiloan and satuan distinct.

### 5.5 Turnaround — `turnaround`
- Regular kiloan usually takes 2 days.
- Express: items received before 10.00 are completed same day at 20.00.
- Express surcharge: 50% above normal price.
- Preserve “biasanya” for regular time.
- Do not imply express eligibility for every service/item; no unsupported capacity or exceptions.

Traceability: NOTE_LINE [10], [25].

### 5.6 How it works — `how-it-works`
- Describe the sourced sequence: receive → weigh in front of customer → record per customer → wash → after drying, fold or iron according to selected service → notify via WhatsApp.
- Do not guarantee laundry never gets mixed up.
- Mention free plastic wrapping after completion.
- The WhatsApp notification description is not a live integration.

Traceability: NOTE_LINE [7], [8], [16], [29].

### 5.7 Pickup and delivery — `pickup-delivery`
- Radius 2 km from shop.
- Above 5 kg: free.
- 5 kg or less: Rp5.000.
- Exactly 5 kg belongs to paid bracket.
- No map, real route, delivery schedule, or booking interaction.

Traceability: NOTE_LINE [27].

### 5.8 Hours and location — `hours-location`
- Monday–Saturday 08.00–20.00.
- Sunday 09.00–15.00.
- Address: Jl. Melati No. 12, Jakarta, prominently labelled `ALAMAT FIKTIF — DATA DEMO`.
- No maps, geolocation, directions, or public-holiday inference.

Traceability: NOTE_LINE [12], [26], [28].

### 5.9 Contact and conversion — `contact`
- Two intent paths: visit the shop and WhatsApp.
- Walk-in panel repeats that displayed address is fictional; no directions action.
- WhatsApp truly disabled / non-interactive with `NOT_CONFIGURED` and explanation that no number was supplied.
- Disabled state is not focusable as active action and has no URL.
- No form, email, phone, QR code, social handle or fake “chat now” flow.

Traceability: NOTE_LINE [9], [21], [28], [30].

### 5.10 Footer — `site-footer`
- Repeat `PREVIEW ONLY`, `DEMO-ONLY`, `NOT_APPROVED`.
- Only anchor links that exist.
- No invented copyright year, legal business name, social links or real contact details.

## 6. Functional scope and exclusions

In-scope:
- Responsive single-page presentation.
- Supplied service and price information.
- Regular/express details.
- Pickup/delivery rules.
- Handover workflow.
- Hours and fictional address with visible label.
- Disabled WhatsApp preview state.
- Persistent preview-only safeguards.

Out of scope:
- Checkout, payments, live order status, accounts, tracking, WhatsApp automation/integration, booking engine, admin dashboard, social proof, map navigation, and use of pending photos.

## 7. Component inventory

The 11 component IDs are:
- CMP-01 PreviewNotice
- CMP-02 SiteHeader
- CMP-03 Hero
- CMP-04 ServicesPricing
- CMP-05 Turnaround
- CMP-06 HowItWorks
- CMP-07 PickupDelivery
- CMP-08 OpeningHours
- CMP-09 DemoAddress
- CMP-10 ContactOptions
- CMP-11 SiteFooter

Each component must preserve its corresponding section ID and source constraints above.

## 8. Responsive requirements

### Mobile: below 640 px
- Single-column, stacked cards; 20 px page gutters; at least 16 px card padding.
- Hero text and primary action first, illustration second.
- Service categories stacked; prices/units remain associated.
- Process is a vertical ordered list.
- Pickup threshold cards stacked.
- Hours and address stacked with fictional label adjacent.
- Contact paths stacked; disabled WhatsApp explanation fully readable.
- No horizontal scrolling at 320–359 px.

### Tablet: 640–1023 px
- Two columns only when text remains comfortably readable.
- Hero split from 768 px upward; otherwise stacked.
- Services and hours/location may be side-by-side where they fit.
- Process may use two columns if sequence remains clear.

### Desktop: 1024 px+
- Max content width 1200 px, 12-column composition.
- Hero split approximately 7/5.
- Services in two panels.
- Process as clear 3×2 or ordered sequence.
- Hours/location and contact in two columns.

Acceptance widths: 320, 360, 390, 768, 1024 and 1440 px. No horizontal overflow/clipping. Logical reading order, accessible touch targets (44×44 px where practicable), usable at 200% zoom.

## 9. Interaction, accessibility and motion

- In-page anchors only. No external links or fake conversion controls.
- Disabled WhatsApp has no href, click handler, pointer cursor or active focus.
- Visible keyboard focus, 2–3 px outline with offset; focus order follows reading order.
- Semantic headings, landmarks, link names and ordered process list.
- Do not rely on color/icons alone to convey meaning.
- Restrained 150–220 ms hover/focus transitions only.
- No autoplay, carousel, parallax or entrance animation that delays content.
- Respect `prefers-reduced-motion`; no hover-only disclosure.

## 10. Stage 2 requirement IDs

| Requirement | Required behavior |
|---|---|
| REQ-001 | Persistent fictional preview notice; `PREVIEW ONLY`, `DEMO-ONLY`, `NOT_APPROVED`; repeat in footer |
| REQ-002 | All supplied services shown |
| REQ-003 | Exact prices and units preserved |
| REQ-004 | “biasanya 2 hari” retained |
| REQ-005 | Before 10.00; same day 20.00; +50%; no express total calculation |
| REQ-006 | Weigh in front of customer and record per customer |
| REQ-007 | Fold/iron, WhatsApp notification description, free wrapping; no live integration implication |
| REQ-008 | 2 km; above 5 kg free; 5 kg or less Rp5.000 |
| REQ-009 | Mon–Sat and Sunday hours exact |
| REQ-010 | Fictional address clearly labelled; no directions |
| REQ-011 | Walk-in and WhatsApp intent paths represented as preview-only |
| REQ-012 | WhatsApp `NOT_CONFIGURED`, no URL/number/QR/click handler |
| REQ-013 | No business photos until actual assets and written permission exist |
| REQ-014 | No testimonials, ratings, awards, customer counts |
| REQ-015 | Describe process only; no absolute no-mix-up guarantee |

## 11. Stage 2 exit gate

**PASS — READY FOR STAGE 3, PREVIEW ONLY.**

The information architecture, journeys, content requirements, component inventory, interactions, responsiveness, accessibility and 15 requirement IDs are defined. This does not mean design, implementation, publication approval, or asset clearance is complete.

## 12. Stage 3 handoff

Stage 3 must define visual concept, temporary text identity, colors, typography, spacing/grid, components, section art direction, icon/illustration approach, responsive specifications, contrast/focus states, and design QA tied to REQ-001 through REQ-015. Do not implement before the design gate passes.
