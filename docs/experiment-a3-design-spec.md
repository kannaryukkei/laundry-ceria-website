# A3 — Design Implementation Spec

**Project:** Laundry Ceria — fictional training fixture  
**Code baseline:** 68a95be5856c5d8cd25126a567e5fc7c4c66613b  
**Reference evidence:** Workflow run #44491833897  
**Design authority:** existing Stage 3 direction, *Fresh & Orderly*  
**Status:** internal experiment; PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED

## 1. Evidence inspected

The A3 browser study requested 12 views (four pages × desktop/tablet/mobile). Nine views were captured and measured in workflow run #178:

| Reference | Desktop 1440 | Tablet 768 | Mobile 390 |
|---|---|---|---|
| QnC Laundry home | Captured · HTTP 200 | Captured · HTTP 200 | Captured · HTTP 200 |
| QnC Laundry services/pricing | Captured · HTTP 200 | Captured · HTTP 200 | Captured · HTTP 200 |
| Bloom Laundry price list | Captured · HTTP 200 | Captured · HTTP 200 | Captured · HTTP 200 |
| Yanti Laundry home | Screenshot saved; measurement extraction failed | Screenshot saved; measurement extraction failed | Screenshot saved; measurement extraction failed |

QnC and Bloom produced reliable selector-based measurements. Yanti screenshots were also saved, but the measurement script assumed a semantic page element existed and failed when it encountered a missing element. The extractor was updated to handle missing headings/landmarks safely; a rerun is included in the later CI review.

## 2. Observed reference evidence

### QnC — desktop opening composition

- Header height: **85 px**.
- Home hero section: **557 px** high (the enclosing section measured 585 px).
- Home H1: **64 px**, line-height **76.8 px**; rendered box **430 × 153.6 px**.
- Main hero image: **514 × 477 px**. The opening is a clear text-left / visual-right composition.
- Services/pricing page hero: **571 px** high; H1 **64 / 76.8 px**, width **523 px**; image **600 × 470 px**.
- The desktop composition is spacious and gives the service proposition and primary action a clear first-screen position.

### QnC — tablet/mobile limitation

The source page reported horizontal overflow at the supplied 768 px and 390 px viewports. Its document width expanded to about **1010 px**, and parts of the heading were outside the viewport. These are defects in the reference, not design patterns to reproduce. A3 uses only the desktop composition as inspiration and defines its own responsive behavior.

### Bloom — pricing information hierarchy

- Desktop header: **97.8 px**; price-list title: **51.2 px / 54.6 px**.
- Main pricing container: **1152 px** wide at 1440 px viewport.
- Mobile header: **137.8 px**; title: **38.4 px / 45.5 px** inside a **366 px** content width.
- The price list separates service categories with full-width category bands, then aligns service names and prices into scannable rows.
- Tablet: header **97.8 px**; title **51.2 px / 54.6 px**; content width **744 px** within a 768 px viewport, with no horizontal overflow.

Bloom contains many service-specific durations and prices that do not exist in the Laundry Ceria fixture. A3 borrows only the category/row hierarchy. It must not invent a duration column, additional services, or any Bloom facts.

## 3. Design decisions for Laundry Ceria

A3 combines the measured patterns with the already-approved *Fresh & Orderly* design direction. It does not copy either reference's logo, photographs, wording, brand colors, or code.

- **Page frame:** 1160 px maximum content width. Gutters: 20 px mobile, 32 px tablet, 48 px desktop.
- **Header:** simple horizontal desktop navigation; compact accessible menu on mobile. Target desktop height approximately 80–86 px.
- **Hero:** two-column desktop layout, text left and original CSS illustration right. H1 target: 60–64 px desktop, 40–44 px mobile. The illustration is explicitly decorative and is not a photo of the shop, staff, machine, or customer.
- **Prices:** two visible groups (kiloan and satuan), with category headers and aligned name/price/unit rows. No durations or price conditions beyond the fixture.
- **Turnaround:** preserve “biasanya 2 hari”; show express cutoff, same-day completion, and +50% as separate facts.
- **Process:** all six supplied steps in order. Use a clear sequence, not decorative numbered labels on unrelated content.
- **Pickup:** show radius 2 km and the two exact weight/fee rules. Exactly 5 kg remains in the Rp5.000 bracket.
- **Hours/location:** use the seven supplied hours; keep ALAMAT FIKTIF — DATA DEMO adjacent to the fictional address.
- **Contact:** walk-in information remains a demo-only preview; WhatsApp remains non-interactive and NOT_CONFIGURED.
- **Identity and palette:** retain temporary text-only identity and Stage 3 tokens: teal #0F6B68, ink #172B3A, paper #F6F7F2, mint #DDEFEA, muted #52636C, amber #F0B54A. Use Plus Jakarta Sans / Inter only as preferred font names with system fallbacks; no external font dependency.
- **Motion:** restrained; respect reduced-motion settings. No carousel, fake booking, map, checkout, form, or external conversion action.

## 4. Responsive contract

| Width | Required layout |
|---|---|
| 1440 px | Centered 1160 px frame; split hero; pricing groups side by side; 3-column process sequence |
| 1024 px | Desktop composition with narrower spacing; no clipped navigation |
| 768 px | Two-column hero only if each column remains readable; otherwise stack; process may use two columns |
| 390 px | Single-column hero; illustration after copy; price names and values remain on the same readable row; one-column process |
| 320 px | No horizontal overflow; long values wrap without separating a price from its unit |

The source references' mobile overflow is not an acceptance target. The Laundry Ceria output must have document width equal to viewport width at 320, 360, 390, 640, 768, 900, 1024, 1280, and 1440 px.

## 5. Visual acceptance criteria

1. The hero has the measured desktop reference's clear text/visual split, a dominant headline, and one primary in-page action.
2. The hero illustration is original and unmistakably illustrative; no unapproved business photo or copied reference asset.
3. Service categories and price rows can be scanned without hunting between separate cards.
4. The six process steps retain sequence and clear reading order.
5. Every supplied fact, price, unit, time, threshold, address warning and WhatsApp restriction remains unchanged.
6. All important text is at least 12 px; body text is approximately 15–16 px; price figures are visually dominant but paired with their units.
7. No horizontal overflow or clipped controls at the nine required widths.
8. Keyboard focus, semantic headings/landmarks, menu Escape behavior, and reduced-motion preferences remain usable.
9. The top and footer both retain PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED.

## 6. Evidence limitations

This study is a measured snapshot, not a guarantee that public reference pages will remain unchanged. The QnC source itself overflows at 768 px and 390 px: its document width is 1010 px in both viewports, so the heading begins at x=-31 px on the home page and x=-99 px on the pricing page. Bloom stayed within the viewport at all three tested sizes. The Yanti page screenshots were saved, but its DOM measurement failed because the capture script assumed a semantic element existed; the script has since been made null-safe and the next run will attempt the same measurements again. The coded result still requires same-viewport screenshot review and the canonical website quality gate; a passing build alone is not visual acceptance.
