---
name: code-refactor
description: >
  Proactive, behavior-preserving code refactoring and architecture cleanup for existing codebases.
  Decomposes monolithic components (>250 lines) into modular Custom Hooks or abstraction layers,
  consolidates duplicated styling maps/dictionaries into a single source of truth, and eliminates dead code
  without breaking existing user functionality. Trigger on "refactor", "polish", "clean up", "rapikan",
  "benerin arsitekturnya", or requests to simplify and improve code health.
---

# Code Refactoring & Architectural Cleanup

Use this skill whenever asked to **"refactor"**, **"polish"**, **"clean up"**, **"rapikan"**, or **"simplify"** an existing codebase.

AI coding agents often hesitate to touch existing code due to passive inertia, leaving bloated files and duplicated dictionaries untouched. This skill gives you explicit permission and strict discipline to proactively clean architectural debt while preserving 100% of working behavior.

---

## 1. The 3 Pillars of Refactoring

### A. Single Source of Truth (Zero Duplicate Constants / DRY)
- **Identify Duplication:** Scan for identical styling objects, category maps (e.g. `CATEGORY_STYLES`), status badge maps, or dropdown option arrays repeated across multiple components.
- **Extract Centrally:** Move them into a single centralized module idiomatically:
  - *React / Next.js / Vue / Svelte:* `src/constants/theme.ts` or `src/types.ts`.
  - *Ruby on Rails:* `app/helpers/` or `config/initializers/`.
  - *Laravel / PHP:* `app/Enums/` or `config/theme.php`.
  - *Django / Python:* `constants.py` or `choices.py`.
- **Import Everywhere:** Replace the inline duplicate copies with clean imports.

### B. Decompose Monolithic Components (< 250 Lines Budget)
- **Target Large Files:** Any view or root file exceeding 250 lines (e.g. `App.tsx`) is a target for decomposition.
- **Extract Stateful Logic:** Do not leave complex business logic inside presentation files. Separate:
  - Data fetching and storage synchronization into a dedicated hook/service (e.g. `useTasks.ts`).
  - Dark mode and appearance logic into a theme hook (e.g. `useTheme.ts`).
  - Search, filter, and sort pipelines into a filter hook (e.g. `useFilters.ts`).
- **Result:** The root component becomes a clean, declarative orchestrator under 150 lines.

### C. Behavior Preservation (Zero Regressions)
- **Do NOT break working features.** Refactoring changes internal structure without changing external behavior.
- **Do NOT delete working user data structures.** If the user has existing `localStorage` keys or database schemas, ensure backward compatibility.
- **Verify with Build:** Always run the project's build command (`npm run build`, `cargo check`, etc.) immediately after refactoring to guarantee zero compilation errors.

---

## 2. Refactoring Step-by-Step Workflow

1. **Survey:** Read the targeted file(s) and count lines. Identify duplicated maps and tangled state variables.
2. **Plan Seams:** Announce which constants will be extracted and which hooks/modules will be created.
3. **Extract Constants First:** Create the centralized constants file and verify imports resolve cleanly.
4. **Extract Logic Second:** Move state logic into dedicated hooks/service functions.
5. **Clean Presentation:** Simplify the view file to consume the extracted hooks and constants.
6. **Self-Verification:** Run `npm run build && npm run lint` (or project equivalent). Ensure 100% passing build.
