# Stage 5 — Initial Production Build and Functional Check Evidence

**Evidence class:** Automated build evidence  
**Workflow:** Web Preview CI  
**Run:** [44250541506](https://github.com/kannaryukkei/laundry-ceria-website/actions/runs/44250541506)  
**Tested branch:** test/full-workflow-production-shaped-simulation  
**Tested commit:** 37b18e289ddb7173449d324f5b20f575b6c7818a  
**Result:** SUCCESS

## Steps verified

| Check | Result | Evidence |
|---|---|---|
| Checkout | PASS | GitHub Actions run |
| Node.js setup (22) | PASS | GitHub Actions run |
| npm install | PASS | GitHub Actions run |
| npm run typecheck | PASS | GitHub Actions run |
| npm run build | PASS | GitHub Actions run |

## What this evidence proves

The existing Laundry Ceria React/Vite codebase installed its declared dependencies, passed TypeScript checking and generated a Vite production build on the isolated E2E branch at the tested commit.

## What it does not prove

- No visual screenshot was captured by this CI job.
- No viewport-by-viewport rendered QA was performed by this workflow.
- No independent keyboard/focus or 200% zoom review is implied.
- No production URL, live integration, public publication or deployment was tested or authorized.
- Passing a build does not prove all business claims or interactions are correct.

## Exactness and limitations

The website source files at the tested commit were inherited from the referenced source baseline. Workflow and documentation files were added on the test branch, but the website frontend source had not yet undergone refinement. Later Stage 6/7 evidence must reference the then-current exact candidate commit.
