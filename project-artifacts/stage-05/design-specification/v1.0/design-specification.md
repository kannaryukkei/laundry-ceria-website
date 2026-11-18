# Stage 5 — Versioned Design Specification

**Specification:** LC-DESIGN-001 v1.0  
**Based on:** Fresh & Orderly fingerprint LC-FINGERPRINT-001  
**Status:** Design spec for internal development simulation

## Tokens

| Token | Value | Usage |
|---|---|---|
| Primary | #0F6B68 | Primary in-page actions and key accents |
| Ink | #172B3A | Headings, body text, dark surfaces |
| Paper | #F6F7F2 | Main canvas |
| White | #FFFFFF | Card surfaces and reverse text |
| Mint | #DDEFEA | Supporting panels and icon backgrounds |
| Muted | #52636C | Secondary text |
| Amber | #F0B54A | Small highlights; dark text only |
| Disabled surface | #E9EFEB | WhatsApp disabled panel |
| Border | #DCE4DF | Dividers and outlines |

Stage 3's planned contrast pairings: primary/white 6.32:1; primary/paper 5.87:1; ink/white 14.55:1; ink/paper 13.52:1; muted/white 6.25:1; muted/paper 5.80:1; ink/mint 12.20:1; ink/amber 7.91:1; muted/disabled 5.36:1. These are token-pair calculations in the design handoff, not proof of every rendered component's contrast.

## Typography

- Display/headings: Plus Jakarta Sans, fallback Inter, fallback system sans-serif.
- Body/interface: Inter, fallback Plus Jakarta Sans, fallback system sans-serif.
- Display 64 px desktop / 42 px mobile; H2 44 px / 32 px; H3 26 px / 22 px; lead 19 px / 18 px; body 16 px; small 14 px; micro 12 px.
- Critical notices, prices, units, hours and disabled explanations must not be reduced to micro text.

## Layout

- Maximum content width 1200 px; reading width 680 px.
- Gutters 20 px mobile, 32 px from 768 px, 48 px from 1024 px.
- Single column below 640 px; tablet uses two columns only when readable; desktop may use split hero and paired cards.
- Radius scale: 10 / 16 / 24 px and full pill.
- Motion limited to small transitions and must respect reduced-motion settings.

## Component requirements

1. Preview notice: persistent, high-contrast and not dismissible.
2. Header: text-only identity, in-page anchors, simple accessible mobile menu.
3. Hero: one H1, clear primary anchor, abstract art labelled decorative.
4. Services: two groups with five exact entries and aligned units/prices.
5. Turnaround: preserve “biasanya”; express has separate cutoff, same-day completion and surcharge.
6. Process: numbered sequence with no guaranteed no-mix-up claim.
7. Pickup/delivery: 2 km and exact threshold separated visually.
8. Hours/location: exact hours; address with prominent fictional label.
9. Contact: walk-in demo text and disabled WhatsApp NOT_CONFIGURED.
10. Footer: repeat status; local anchors only.

## Accessibility and quality

- No horizontal overflow at 320, 360, 390, 768, 1024 and 1440 px.
- Keyboard-accessible nav; visible focus outline; disabled WhatsApp has no focus target.
- At 200% zoom, content remains readable and operable.
- Respect prefers-reduced-motion.
- Text and labels retain meaning without color alone.
- Verify contrast after rendering; computed token ratios do not replace UI inspection.

## Content constraints

All visible content is in Bahasa Indonesia. All business facts remain DEMO-ONLY / NOT_APPROVED. No photo, official logo, live WhatsApp, map, testimonial, rating, award or customer count.
