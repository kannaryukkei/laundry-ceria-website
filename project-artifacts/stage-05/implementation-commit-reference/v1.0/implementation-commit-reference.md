# Stage 5 — Implementation Repository, Branch and Commit Reference

**Repository:** kannaryukkei/laundry-ceria-website  
**Development branch:** test/full-workflow-production-shaped-simulation  
**Website source baseline commit:** 0973ee321612cf208a78c9dba4d7ad72300da2d0  
**Current branch includes:** the same existing website source tree plus isolated workflow-test files and canonical artifacts.

## Website code references

- src/App.tsx
- src/data.ts
- src/main.tsx
- src/styles.css
- index.html
- package.json
- vite.config.ts

## Source integrity statement

No website source file was modified while installing the workflow adapter and writing Stage 0–4 test artifacts. The website candidate remains the source-branch implementation. Subsequent refinement must record any actual code changes and the exact resulting commit before QA.

## Verification note

The repository's CI workflow was enabled for this test branch. A successful CI run verifies the exact tested branch commit's dependency installation, TypeScript check and Vite production build, but not responsive or visual acceptance by itself.
