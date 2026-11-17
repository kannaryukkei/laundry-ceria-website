# Stage 3 — Design Direction
## Project: Laundry Ceria (Fictional Training Fixture)

**Stage status:** PASS — READY FOR STAGE 4 (PREVIEW ONLY)  
**Evidence status:** DEMO-ONLY  
**Publication status:** NOT_APPROVED  
**Design concept:** Fresh & Orderly  
**Website format:** Responsive single-page website

> This document translates the approved Stage 1 strategy and Stage 2 website plan into a visual direction and implementation-ready design system. Business facts remain fictional and DEMO-ONLY. Visual choices are studio recommendations, not additional business facts. This is a design specification, not an implemented website or publication approval.

## 1. Stage objective

Define the visual language, temporary identity treatment, color and typography systems, layout rules, component states, section-level art direction, responsive behavior, and visual quality checks needed to implement the Laundry Ceria preview website.

Stage 3 does not:
- create or claim an official logo or owner-approved brand identity;
- introduce new business claims, services, pricing, operational terms, or contact details;
- use the three described business photos (actual files absent; written permission pending);
- create fabricated shop, staff, machine or customer photography;
- authorize publication or change `DEMO-ONLY` / `NOT_APPROVED`;
- implement the frontend (Stage 4).

## 2. Inputs and non-negotiable safeguards

Inputs: Stage 0 fixture, Stage 1 strategy and Stage 2 plan. Stage 2 governs section sequence, content, interactions, responsiveness, accessibility, and REQ-001 through REQ-015. Stage 0 governs business facts and publication constraints.

Safeguards:
- Persistent preview notice: `PREVIEW ONLY` / `DEMO-ONLY` / `NOT_APPROVED`.
- `Jl. Melati No. 12, Jakarta` must always be labelled fictional wherever shown.
- WhatsApp remains `NOT_CONFIGURED`: no number, deep link, QR code or active contact action.
- Business photos excluded until actual files and written permission exist.
- No supplied logo; use plain text wordmark placeholder only.
- No testimonials, ratings, awards, customer counts or fabricated trust signals.
- Do not convert owner's no-mix-up claim into a verified guarantee.
- No invented payment methods, service terms, express eligibility, or missing operational facts.

## 3. Visual concept — Fresh & Orderly

**Core idea:** A clear, orderly neighborhood service presented with a fresh, calm, friendly visual language.

- Freshness: deep teal, soft mint, generous light backgrounds.
- Order: tidy alignment, visible price hierarchy, consistent spacing and structured groups.
- Approachability: rounded surfaces, warm neutral canvas and restrained amber accents.
- Practicality: clear labels, short information blocks and useful navigation rather than decorative complexity.

This supports the Stage 1 tone: friendly, straightforward, practical and clear. It must not imply premium garment care, special technology, eco-friendly processes or unsupported benefits.

Art-direction keywords: `clean`, `fresh`, `neighborhood`, `organized`, `human`, `clear`.

Avoid childish cartoon styling, generic luxury branding, excessive gradients/glassmorphism/neon/heavy shadows, fake photography, fake trust signals, and dense decoration competing with prices/hours.

## 4. Temporary identity and iconography

- Use text `Laundry Ceria` as a temporary text-only wordmark, weight 750–800, ink/primary color.
- No invented slogan, logo, monogram, crest or seal.
- Optional `DEMO PREVIEW` marker does not replace full preview notice.
- Use a consistent outline icon family for supporting UI only (washing, clock, location, delivery, package, message status).
- Icons never carry meaning alone.
- Do not use a WhatsApp brand mark suggesting a functioning integration.
- No certification/review-platform-looking marks.

## 5. Color system

| Token | Hex | Role |
|---|---|---|
| `color.primary` | `#0F6B68` | Primary teal for in-page actions and selected accents |
| `color.ink` | `#172B3A` | Deep blue-charcoal headings/body text |
| `color.paper` | `#F6F7F2` | Warm off-white canvas |
| `color.white` | `#FFFFFF` | White cards and text on dark surfaces |
| `color.mint` | `#DDEFEA` | Soft panels and icon backgrounds |
| `color.muted` | `#52636C` | Secondary text/metadata |
| `color.amber` | `#F0B54A` | Small highlights; pair with ink text |
| `color.disabled.surface` | `#E9EFEB` | WhatsApp disabled state |
| `color.disabled.text` | `#52636C` | Disabled explanatory text |
| `color.border` | `#DCE4DF` | Borders and dividers |

Planned contrast ratios:
- #0F6B68 / #FFFFFF: 6.32:1
- #0F6B68 / #F6F7F2: 5.87:1
- #172B3A / #FFFFFF: 14.55:1
- #172B3A / #F6F7F2: 13.52:1
- #52636C / #FFFFFF: 6.25:1
- #52636C / #F6F7F2: 5.80:1
- #172B3A / #DDEFEA: 12.20:1
- #172B3A / #F0B54A: 7.91:1
- #52636C / #E9EFEB: 5.36:1

These listed pairings exceed WCAG AA 4.5:1 for normal text. Rendered UI still needs verification, including focus indicators and borders.

Usage:
- Teal is primary interactive color; white text on primary is permitted.
- Ink is default text; avoid pale gray for important information.
- Paper is main canvas; white cards create separation.
- Amber is accent, not general body text; use ink on amber.
- Mint panels use ink or teal text.
- Never rely on color alone for preview status, thresholds or disabled status.
- No red/green success semantics are needed.

## 6. Typography

- Display/headings: `Plus Jakarta Sans`, fallback `Inter`, then system sans-serif.
- Body/interface: `Inter`, fallback `Plus Jakarta Sans`, then system sans-serif.
- External font loading must not block rendering; fallbacks always work.

| Role | Weight |
|---|---:|
| Display / hero | 750–800 |
| Section heading | 700–750 |
| Card title | 650–700 |
| Body | 400–450 |
| Navigation / button | 600–650 |
| Eyebrow / metadata | 600–700 |

| Token | Desktop | Mobile | Line height |
|---|---:|---:|---:|
| Display | 64 px | 42 px | 1.05–1.10 |
| H2 | 44 px | 32 px | 1.10–1.18 |
| H3 | 26 px | 22 px | 1.20 |
| Lead | 19 px | 18 px | 1.50–1.60 |
| Body | 16 px | 16 px | 1.55–1.70 |
| Small | 14 px | 14 px | 1.45–1.55 |
| Micro | 12 px | 12 px | 1.40–1.50 |

Use fluid sizing. Critical notices, prices, units, hours and disabled explanations must not be reduced to micro text. Body paragraphs short; service labels and units stay associated.

## 7. Layout, grid and spacing

- Max content width: 1200 px.
- Reading width: 680 px.
- Page gutters: 20 px mobile, 32 px from 768 px, 48 px from 1024 px.
- Desktop uses 12-column composition with generous whitespace.
- Radius: 10 px small, 16 px medium, 24 px large, pill 999 px.
- Card shadow: `0 10px 30px rgba(23, 43, 58, 0.06)`; hover `0 14px 36px rgba(23, 43, 58, 0.10)`.
- Mobile below 640 px: single column; at least 16 px card internal padding.
- Tablet 640–1023 px: 2 columns only when readable; hero split from 768 px.
- Desktop 1024 px+: hero 7/5, service panels, clear 3×2 process sequence, hours/location and contact two columns.
- No horizontal overflow at 320, 360, 390, 768, 1024 and 1440 px.

## 8. Component and section direction

### CMP-01 — Preview notice / `preview-notice`
Full-width dark notice before business content, amber marker, high-contrast readable `PREVIEW ONLY`, `DEMO-ONLY`, `NOT_APPROVED`; persistent and not dismissible; repeat in footer.

### CMP-02 — Header / `site-header`
Light paper/white, temporary text wordmark. Desktop horizontal anchors; mobile wrapping navigation or simple accessible menu. Header action only to contact section, never WhatsApp. Visible focus state.

### CMP-03 — Hero / `hero`
Desktop two columns about 55/45; mobile text and action first, abstract visual second. One H1, concise description, primary in-page action to services, optional secondary to hours. Use unmistakably abstract folded-fabric CSS/SVG shapes; caption `ILUSTRASI DEKORATIF` when needed. Never resemble real shop/staff/machine photos.

### CMP-04 — Services & prices / `services-pricing`
Heading and intro then two distinct service groups. Kiloan three rows, satuan two. White cards on paper; aligned labels/prices, tabular numerals; no best-seller promotion. Stack on mobile.

### CMP-05 — Turnaround / `turnaround`
Paired regular and express blocks. Preserve `biasanya 2 hari`; express displays before 10.00, same-day 20.00 and +50% as separate facts. Amber small accent with dark text. No countdown, capacity claim, eligibility list or calculated total.

### CMP-06 — How it works / `how-it-works`
Six ordered process steps. Desktop 3×2 or clear sequence; mobile vertical list. Mint number/icon surface. WhatsApp notification is descriptive only, not integration. Mention free plastic wrapping. No no-mix-up guarantee.

### CMP-07 — Pickup/delivery / `pickup-delivery`
Clear radius 2 km and two explicit fee rules: above 5 kg free; 5 kg or less Rp5.000. Exactly 5 kg belongs to paid state. No map or calculator.

### CMP-08 / CMP-09 — Hours and location / `hours-location`
Two cards desktop, stacked mobile. Seven-day schedule exact. Address adjacent to prominent `ALAMAT FIKTIF — DATA DEMO`. No directions, map, geolocation or open-now inference.

### CMP-10 — Contact / `contact`
Two intent paths, walk-in and WhatsApp. Address clearly fictional; no directions. WhatsApp neutral disabled state with `NOT_CONFIGURED`; no href, click, focus, number or QR.

### CMP-11 — Footer / `site-footer`
Repeat preview status clearly, only valid in-page anchors, temporary text identity. No invented copyright year, legal name or socials.

## 9. Interaction, focus and motion

- Primary in-page action: teal fill, white label, 16 px minimum text, adequate padding.
- Secondary action: transparent/white with teal border/text.
- Nav: ink, teal hover/focus, visible outline.
- Disabled WhatsApp: neutral surface, muted but readable text, explicit status, no hover lift, pointer, focus or handler.
- Focus outline 2–3 px with offset and sufficient contrast; never remove without equivalent.
- Motion 150–220 ms only for small transitions; no autoplay, carousel, parallax or delayed entrance; respect `prefers-reduced-motion`.

## 10. Requirement traceability

| Requirement | Design response | Stage 4/5 validation |
|---|---|---|
| REQ-001 | Persistent dark notice + footer reminder | Visible initial load/page end; not dismissible |
| REQ-002 | Separate kiloan and satuan panels | All five supplied services |
| REQ-003 | Aligned price rows, tabular numerals | Exact values and units |
| REQ-004 | Regular panel says “biasanya 2 hari” | Qualifier preserved |
| REQ-005 | Express cutoff/completion/surcharge hierarchy | Before 10.00; same day 20.00; +50%; no calculations |
| REQ-006 | Numbered handover steps | Weigh in front of customer and record per customer |
| REQ-007 | Fold/iron, WhatsApp notification, free wrapping | Descriptive; no live integration |
| REQ-008 | Radius and threshold cards | 2 km; >5 kg free; ≤5 kg Rp5.000 |
| REQ-009 | Seven-day schedule | Exact hours |
| REQ-010 | Fictional address label | No map/direction link |
| REQ-011 | Walk-in and WhatsApp panels | Preview intent only |
| REQ-012 | Neutral disabled WhatsApp | No URL, number, QR, handler, focus |
| REQ-013 | Abstract illustration | No unapproved business photo |
| REQ-014 | No social proof sections | No testimonials, ratings, awards, customer counts |
| REQ-015 | Descriptive process only | No absolute no-mix-up guarantee |

## 11. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Abstract hero mistaken for actual photo | Geometric illustration and optional decorative caption |
| Amber low contrast on white | Ink text on amber |
| Preview warning ignored | Persistent top notice and footer repetition |
| Mobile price rows cramped | Stack groups; preserve label/value |
| Disabled WhatsApp looks clickable | No link semantics or hover behavior |
| Fictional address seems operational | Adjacent fictional label; no directions |
| Font loading shifts/blocks | Fallback stack; no blocking font request |
| Motion barrier | Minimal motion, reduced-motion support |
| Wordmark appears official | Explicit temporary text-only identity |

## 12. Stage 3 exit gate

**PASS — READY FOR STAGE 4, PREVIEW ONLY.**

The visual concept, temporary identity, tokens, typography, grid, component states, section directions, responsive behavior, focus/reduced-motion behavior, and REQ-001 through REQ-015 traceability are defined. This does not mean implementation is complete, assets are cleared, facts are real, or publication is authorized.

## 13. Stage 4 handoff

1. Preserve Stage 2 section IDs and order exactly.
2. Implement persistent preview notice before all business content.
3. Build mobile-first using these tokens.
4. Use abstract CSS/SVG illustration only.
5. Centralize business data in one structured source.
6. Make in-page anchors accessible; WhatsApp truly disabled.
7. Preserve source facts, qualifiers, units, thresholds and demo labels.
8. Add no unsupported sections or interactions.
9. Run production build and responsive checks before Stage 5.

**Next stage:** Stage 4 — Website Production / Frontend Implementation.
