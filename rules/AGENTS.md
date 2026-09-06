# Creative Agent Universal Polyglot Engineering Standards

These standing invariants apply across every programming language, framework, and AI agent session (OpenCode, Claude Code, Antigravity, Cursor, Codex). Adhere to them unconditionally.

---

## 1. The Dual Invariant Contract (`AGENTS.md` and `design-system/MASTER.md` are MANDATORY)
- **EVERY project MUST have `AGENTS.md` at its root.** This guarantees the project is 100% self-contained across any developer, machine, or agentic session.
- **Canonical Copy Rule:** When writing `AGENTS.md` to a project root, ALWAYS copy the FULL canonical document (all 10 sections). NEVER write a truncated or partial 5-line summary.
- **UI Projects Contract:** Every project with a user interface MUST have `design-system/MASTER.md`.
  - **Scenario A — Direct Build Requests** (e.g. *"make me a simple html js + css todolist app"*, *"build a dashboard"*):
    - Do NOT stall in repetitive generic approval loops.
    - Automatically pick the best matching design archetype from the 74-brand catalog (e.g. *Spotify* for dark media, *Linear* for precision dark, *Wired/Substack* for editorial, *Stripe* for clean light).
    - **IMMEDIATELY write `AGENTS.md` and `design-system/MASTER.md`** at the project root documenting both the engineering invariants and visual tokens BEFORE writing component code.
    - Build the application cleanly adhering to both files.
  - **Scenario B — Raw Business Ideas & Conceptual Brainstorming** (e.g. *"I have an idea to build..."*, *"build a business X"*):
    - Act as an elite Lead Architect & Technical Co-Founder.
    - Deconstruct the business bottleneck, audience, and distribution channel.
    - Ask focused, high-value clarification questions without artificial limits (Workflow, Deliverable format, Data storage).
    - Present 2–3 tailored visual choices from the 74 design systems (e.g. *Wired Broadsheet* vs *Apple Minimal* vs *Linear Dark*).
    - Once the user selects a direction, write `design-system/MASTER.md` and proceed with implementation.
- **Edge Case — Non-UI Exemption:** Pure backend services, CLI tools, daemons, workers, and data scripts require `AGENTS.md` at their root, but MUST NOT create a `design-system/` directory.
- **Edge Case — Monorepos & Workspaces:** In monorepos (`apps/*`, `packages/*`, `pnpm-workspace.yaml`, `turbo.json`), place `AGENTS.md` at the repository root, and place `design-system/MASTER.md` inside the specific UI package (e.g. `apps/web/design-system/MASTER.md`).
- **Edge Case — Existing Brand Preservation:** If an existing project already has established corporate styles or tokens, DO NOT overwrite with a random brand. Extract the existing brand into `design-system/MASTER.md`.
- **Edge Case — Explicit Re-Theming:** If the user requests changing the visual theme, update `design-system/MASTER.md` first, then cascade token updates into the centralized constants file.

---

## 2. Strict Scope Restraint (One Thousand No's for Every Yes)
- **Build ONLY what was requested.** If asked for a "simple todo list", DO NOT invent Profile pages, Avatar pickers, Cover gradient galleries, or speculative Kanban boards.
- Focus 100% of your tokens and creativity on making the agreed core workflow robust, accessible, and visually stunning.
- Never add unrequested speculative features or bloated settings tabs.

---

## 3. Single Source of Truth (Zero Duplicate Constants / DRY)
- **Never copy-paste styling dictionaries, status maps, or category lists across multiple files.**
- If a data structure or styling mapping is referenced in ≥2 files, extract it to a shared centralized module following your current stack's idiom:
  - *React / Next.js / Vue / Svelte / Astro:* `src/constants/theme.ts` or `src/types.ts`.
  - *Ruby on Rails:* `app/helpers/` or `config/initializers/`.
  - *Laravel / PHP:* `app/Enums/` or `config/theme.php`.
  - *Django / Python:* `constants.py` or `choices.py`.
  - *Go:* `pkg/constants/` or typed enums.
  - *Flutter / Dart:* `theme/app_colors.dart` (ThemeExtension).

---

## 4. Modular Presentation Budget (< 250 Lines per File)
- **No "God Components" or monolithic view files.** Presentation files must stay under 250 lines.
- Extract state management, data-fetching pipelines, and storage synchronization into dedicated abstraction layers:
  - *React:* Custom Hooks (`useTasks.ts`, `useTheme.ts`, `useFilters.ts`).
  - *Vue:* Composables (`composables/useTasks.ts`).
  - *Svelte 5:* Runes Modules (`tasks.svelte.ts`).
  - *Rails:* Stimulus controllers for micro-interactions & ViewComponents for isolated UI pieces.
  - *Laravel:* Livewire components & Action classes.
- **Scope Clarification:** The 250-line budget applies to presentation view code. Complex table schemas, column declarations (`columns.tsx`), and data interfaces should be placed in dedicated `columns.tsx` or `schema.ts` files without arbitrary line-butchering.

---

## 5. Hybrid & Polyglot Priority (UI Layer Wins)
- In hybrid codebases containing both a backend framework and a modern frontend (e.g. Rails with Inertia/React, Django with Vue, Go with Svelte, Laravel with Livewire/React):
  - **The Frontend UI Layer takes precedence for view generation.** Write native frontend components (`.tsx`, `.vue`, `.svelte`) rather than falling back to raw backend template files.

---

## 6. Autonomous Self-Verification Loop
- **Verify before declaring completion.** Always execute the project's build, compile, or lint command autonomously:
  - *Node / TypeScript:* `npm run build` or `npx tsc --noEmit`.
  - *Ruby on Rails:* `bin/rails zeitwerk:check`.
  - *Laravel:* `php artisan test` or `composer validate`.
  - *Python / Django:* `python manage.py check` or `ruff check`.
  - *Go:* `go vet ./...`.
  - *Rust:* `cargo check`.
  - *Flutter:* `flutter analyze`.
- If errors or warnings occur, fix them autonomously before reporting back to the user. Never hand off broken code.

---

## 7. Proactive Refactoring Directive (Existing Codebases)
- When asked to "polish", "clean up", "tidy up", or "improve architecture" on an existing codebase:
  - Proactively scan for code smells (duplicated styling maps, components >250 lines).
  - Automatically extract duplicate styling maps to `src/constants/theme.ts`.
  - Automatically decompose monolithic components (>250 lines) into dedicated Custom Hooks.
  - Preserve 100% of existing working user features without regressions.

---

## 8. The 5 Production States of UI
Whenever building data-driven interfaces (tables, lists, cards, feeds), implement all 5 states:
1. **Empty State:** Distinctive, helpful visual state with context copy and clear primary CTA when 0 items exist.
2. **Loading / Skeleton State:** Geometry-matched animated shimmer (not generic circular spinners).
3. **Error / Retry State:** Graceful error boundary with actionable retry triggers.
4. **Partial / Truncation State:** Long text, 50-character titles, or overflow tags clamp or wrap gracefully without breaking layout grids.
5. **Populated State:** The primary, fully-populated visual interface.

---

## 9. Industry-Accurate Domain Mock Data
- **Ban generic placeholder text.** Never use "Lorem ipsum", "John Doe", "Task 1", or "Item A".
- Generate domain-rich, industry-accurate mock data (real SKUs, genuine fabric/hardware materials, realistic timestamps, ISO formatted currencies, authentic business categories).

---

## 10. Universal Accessibility & Craft Floor
- **Icon Primitives:** Use SVG icon primitives (Lucide / Heroicons / Phosphor). Never use Unicode emojis as UI control icons.
- **Interactive Affordance:** Add `cursor-pointer` to all clickable buttons, cards, tabs, and toggles.
- **Contrast Ratios:** Maintain WCAG 2.2 AA (≥4.5:1) text contrast in both light and dark modes.
- **Keyboard Navigation:** Include `focus-visible:ring` on all interactive controls.
- **Tabular Figures:** Apply `tabular-nums` (or `font-mono tabular-nums`) to all columns containing numbers, prices, or dates to eliminate horizontal layout jitter.
- **Proprietary Font Fallbacks:** If a chosen brand uses proprietary typefaces (e.g. Spotify CircularSp, Apple SF Pro, Renault NouvelR), always pair with verified Google Fonts substitutes (Inter, Plus Jakarta Sans, Montserrat) so rendering never defaults to browser serif.
