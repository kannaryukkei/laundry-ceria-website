# Stage 4 implementation checklist

- [x] Persistent preview notice before business content; status repeated in footer.
- [x] Exact section IDs and order from Stage 2 retained.
- [x] All five supplied service prices and units retained.
- [x] Regular timing qualifier “biasanya” retained.
- [x] Express cutoff, completion time and +50% surcharge retained.
- [x] Handover process described without absolute guarantee.
- [x] Pickup radius and exact 5 kg threshold retained.
- [x] Monday–Sunday hours included.
- [x] Fictional address labelled; no maps/directions.
- [x] WhatsApp is non-interactive and NOT_CONFIGURED.
- [x] No business photos, testimonials, ratings, awards or customer counts.
- [x] Mobile navigation and in-page links implemented.
- [x] Typecheck and production build pass (Web Preview CI run 30; tested commit 121173d3802f921ceae26694683b13fafaff45ba).
- [ ] Visual/responsive QA at 320, 360, 390, 768, 1024 and 1440 px.
- [ ] Keyboard, focus, reduced motion and 200% zoom checks.

Stage 4 cannot be marked complete until all unchecked validations pass. Stage 5 remains independent.


## Recorded validation evidence

- Workflow: Web Preview CI
- Run: [#30](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44246929394)
- Tested branch: feat/stage-4-website-production
- Tested commit: 121173d3802f921ceae26694683b13fafaff45ba
- Runtime: GitHub Actions ubuntu-latest, Node.js 22
- Dependency installation: PASS
- Typecheck: PASS
- Vite production build: PASS

This evidence covers dependency installation, typecheck and production build only. It does not pass the remaining visual/responsive, keyboard, focus, reduced-motion or 200% zoom checks. The shared rendered quality gate remains FAIL for unresolved typography/contrast findings.
