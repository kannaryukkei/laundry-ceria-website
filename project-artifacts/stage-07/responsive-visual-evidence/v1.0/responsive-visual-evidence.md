# Stage 7 — Responsive and Section Screenshot Evidence

**CI run:** [#44258897911](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44258897911)  
**Artifact:** [14407785947](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44258897911/artifacts/14407785947)  
**Exact tested commit:** `2aa97b6a50c0bb2009517e34a9fe9dfc3ec4a78f`

## Paired screenshot matrix

| Viewport | Baseline screenshot | After screenshot | Browser result |
|---:|---|---|---|
| 320 | `baseline/screenshots/viewport-320.png` | `screenshots/viewport-320.png` | PASS |
| 360 | `baseline/screenshots/viewport-360.png` | `screenshots/viewport-360.png` | PASS |
| 390 | `baseline/screenshots/viewport-390.png` | `screenshots/viewport-390.png` | PASS |
| 640 | `baseline/screenshots/viewport-640.png` | `screenshots/viewport-640.png` | PASS |
| 768 | `baseline/screenshots/viewport-768.png` | `screenshots/viewport-768.png` | PASS |
| 1024 | `baseline/screenshots/viewport-1024.png` | `screenshots/viewport-1024.png` | PASS |
| 1440 | `baseline/screenshots/viewport-1440.png` | `screenshots/viewport-1440.png` | PASS |
| Reduced motion / 390 | `baseline/screenshots/reduced-motion-390.png` | `screenshots/reduced-motion-390.png` | PASS |

## Section coverage

The after screenshots show the full-page state in one image for each viewport and therefore include the preview notice, header, hero, service prices, turnaround, process, pickup/delivery, hours/location, contact and footer.

## Measured layout observations

- Seven viewport widths were tested.
- Document width and body width matched the viewport at every width.
- No page-level horizontal overflow was reported.
- Sampled support-text floor: 12 px at each width.
- The mobile menu interaction and keyboard state were tested separately in the same run.

## Evidence limitations

The images are automated Chromium captures; they do not substitute for actual device testing, screen-reader verification, true 200% browser UI zoom or exhaustive manual review of every nested component and state.
