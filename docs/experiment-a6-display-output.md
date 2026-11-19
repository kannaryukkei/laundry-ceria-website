# Experiment A6 — Maximum Display Output

**Mode:** `studio_development`  
**Baseline:** Laundry Ceria `main` after Experiment 06/A5 acceptance work  
**Branch:** `experiment/a6-maximum-display-output`  
**Publication:** NOT_APPROVED · private preview only

## Experiment question

How much stronger can the website's visual presentation become when the Studio is allowed to make fuller art-direction and content-composition decisions, rather than treating the original intake as a strict ceiling on display treatment?

A6 is a visual-output stress test, not permission to invent business facts. It retains the same fictional source fixture and customer journey while giving the presentation more expressive hierarchy, editorial composition, original concept illustration, denser information design and useful content disclosure.

## Direction

**Editorial Freshness:** a more expressive evolution of the approved Fresh & Orderly direction. Deep botanical teal, soft mineral green, warm paper, lime and a restrained orange accent. Oversized geometric sans-serif display type is balanced by serif italic emphasis; the composition uses a strong asymmetric hero, rounded-arch illustration, a four-part fact ribbon, distinct service cards, high-contrast turnaround panels, a six-step process grid, radius diagram, hours/address panels and an accessible FAQ accordion.

The visual should feel intentional and tactile without becoming childish, luxury-coded, eco-claiming or dependent on generic stock photography.

## What changed in the output

- Reworked the complete single-page presentation rather than adding isolated decoration.
- Added two original SVG concept illustrations for responsive hero art direction. They depict generic folded fabric, a generic bottle and abstract water movement; they are not photographs or depictions of the actual fictional shop, staff, machines or customers.
- Used a semantic `picture` element with a wide source and a compact fallback, explicit intrinsic dimensions and descriptive alternative text.
- Added a concise FAQ accordion that repeats only already sourced facts and keeps all answers available without any business backend.
- Expanded section hierarchy, spacing, pricing display, process storytelling, pickup fee threshold presentation and contact-state clarity.
- Added a restrained decorative orbit animation with a static reduced-motion path. No content is hidden pending JavaScript.

## Source and safety invariants

- The entire business remains fictional and DEMO-ONLY.
- Persistent `PREVIEW ONLY · DEMO-ONLY · NOT_APPROVED` notice remains visible at the top and footer.
- Address remains explicitly fictional; no map, directions or location action.
- WhatsApp remains `NOT_CONFIGURED`; no number, deep link, QR or interactive control.
- Three described phone photos remain excluded because files are absent and written permission is pending.
- No testimonials, ratings, awards, customer counts, guarantees, payment methods, booking, checkout, order tracking or invented operational claims.
- Prices, units, hours, express cutoff/completion/surcharge, radius and pickup thresholds remain identical to the source fixture.

## Capability choices

Responsive imagery is implemented with a local SVG concept asset, semantic image markup, responsive source selection, intrinsic dimensions and meaningful alt text. The SVGs are scalable vector assets, so no raster compression or generated raster srcset is claimed.

Motion is intentionally limited to one decorative orbit and interaction transitions. This version does not add GSAP: no essential story or interaction in this static brochure needs a scroll-controlled animation, and the GSAP skill explicitly says not to add it merely to make a page look animated. A GSAP implementation should be added only if a later measured design need justifies the dependency and its runtime cost.

The Hostinger 15-characteristic benchmark is applied selectively: navigation, responsive design, content clarity, value proposition, quality visuals and CTAs are relevant. Checkout, lead capture, analytics, structured data for unsupported proof and other irrelevant functionality remain N/A or out of scope.

## Verification plan

- Exact-head TypeScript and production build.
- Browser screenshots at mobile, tablet and desktop widths; manually inspect the actual hero crop, section hierarchy, FAQ, price alignment and contact disclosure.
- Verify 320/360/390/640/720/768/900/1024/1280/1440px for wrapping and horizontal overflow.
- Keyboard-test navigation, skip link and FAQ; verify reduced-motion behavior.
- Inspect image source selection and loading behavior.
- Review the full page for visual convergence using separate visitor-journey and art-direction critique lenses.

A passing build is not visual acceptance. A screenshot is not proof of accessibility or performance. Literal browser zoom, screen-reader review, full performance measurements and independent Stage 7 acceptance remain separate checks. No deployment or public release is authorized.
