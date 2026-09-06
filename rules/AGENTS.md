# Creative Agent Universal Polyglot Engineering Standards

These standing invariants apply across every programming language, framework, and AI agent session (OpenCode, Claude Code, Antigravity, Cursor, Codex). Adhere to them unconditionally.

---

## 1. The Dual Invariant Contract (`AGENTS.md` and `design-system/MASTER.md` are MANDATORY)
- **EVERY project MUST have `AGENTS.md` at its root.** This guarantees the project is 100% self-contained across any developer, machine, or agentic session.
- **Canonical Copy Rule:** When writing `AGENTS.md` to a project root, ALWAYS copy the FULL canonical document (all 11 sections). NEVER write a truncated or partial 5-line summary.
- **UI Projects Contract:** Every project with a user interface MUST have `design-system/MASTER.md`.
  - **Scenario A — Direct Build Requests** (e.g. *"make me a simple html js + css todolist app"*, *"build a dashboard"*):
    - Do NOT stall in repetitive generic approval loops.
    - Automatically pick the best matching design archetype from the 74-brand catalog (e.g. *Spotify* for dark media, *Linear* for precision dark, *Wired/Substack* for editorial, *Stripe* for clean light).
    - **IMMEDIATELY write `AGENTS.md` and `design-system/MASTER.md`** at the project root documenting both the engineering invariants and visual tokens BEFORE writing component code.
    - Build the application cleanly adhering to both files.
  - **Scenario B — Broad Requests, Raw Business Ideas & Conceptual Brainstorming** (e.g. *"I have an idea to build..."*, *"Please create me an app called XYZ"*, *"Build a fintech platform"*):
    - **Shallow AI Guesswork is FORBIDDEN:** NEVER ask only 1–2 superficial questions (e.g. just asking for theme or stack) and then guess the rest. Doing so leads to shallow, unaligned prototypes.
    - **MANDATORY: Execute the Deep Architectural Intake Protocol (The 5-Pillar Rule).** Act as an elite Lead Architect & Technical Co-Founder. Present a structured questionnaire of 5–8 high-leverage questions covering:
      1. *Pillar 1 (View Scope & Topology):* What exact views are in scope for v1? (e.g. Single Workspace, Landing + App, or Full Suite [Landing + Login/Register + App + Profile]).
      2. *Pillar 2 (60-Second Core Journey):* What is the single primary action a user performs in their first minute?
      3. *Pillar 3 (Data & State Persistence):* LocalStorage offline-first, in-memory mock with latency simulation, embedded SQLite/DuckDB, or external REST/Supabase?
      4. *Pillar 4 (Authentication & Identity):* Instant Guest Mode (zero friction), Mock Local Credentials with session persistence, or Enterprise SSO?
      5. *Pillar 5 (Visual Aesthetic & Density):* Present 2–3 tailored, contrasting brand archetypes from the 74 catalog (e.g. Linear vs Stripe vs Apple) with exact color hexes and rationale.
    - **The "Recommended Default" Requirement (Zero Stalling):** Every question MUST provide concise multiple choices AND an opinionated recommendation (e.g., `➡️ Recommended: Option C...`). This guarantees that if the user is in a rush, they can simply reply: *"Go with your recommendations"*, giving the agent 100% architectural alignment without guesswork.
    - Once aligned, immediately write `design-system/MASTER.md` and proceed with implementation.
- **Edge Case — Non-UI Exemption:** Pure backend services, CLI tools, daemons, workers, and data scripts require `AGENTS.md` at their root, but MUST NOT create a `design-system/` directory.
- **Edge Case — Monorepos & Workspaces:** In monorepos (`apps/*`, `packages/*`, `pnpm-workspace.yaml`, `turbo.json`), place `AGENTS.md` at the repository root, and place `design-system/MASTER.md` inside the specific UI package (e.g. `apps/web/design-system/MASTER.md`).
- **Edge Case — Existing Brand Preservation:** If an existing project already has established corporate styles or tokens, DO NOT overwrite with a random brand. Extract the existing brand into `design-system/MASTER.md`.
- **Edge Case — Explicit Re-Theming:** If the user requests changing the visual theme, update `design-system/MASTER.md` first, then cascade token updates into the centralized constants file.

---

## 2. Strict Scope Restraint & Organic User Flexibility
- **AI Speculative Bloat is FORBIDDEN:** When asked for a specific feature (e.g., a "simple todo list"), DO NOT unilaterally invent Profile pages, Avatar pickers, Cover gradient galleries, or speculative Kanban boards. One thousand no's for every unsolicited feature.
- **User-Directed Expansion is UNCONSTRAINED:** When the USER explicitly requests an expansion, pivot, or new feature (e.g., "now add a landing page", "now add an interactive audio equalizer", "now add team workspaces"), embrace it with 100% velocity, creative depth, and zero resistance.
- **Anti-Binary Routing Trap (Extensible Architecture):** When expanding beyond a single view, NEVER lock the application into brittle binary toggles (e.g. `const [view, setView] = useState<'landing' | 'app'>`). Always structure multi-view applications using an extensible view registry or hash router (`#landing`, `#app`, `#dashboard`, `#settings`) so the project seamlessly accommodates $N$ future features without architectural rewrites.
- **Persistent Craft Floor on Every Iteration:** Every newly added feature, form, or view must strictly inherit existing design tokens (`MASTER.md`), explicit label-input associations (`id`/`htmlFor`), submit loading states, and the `< 250 lines` presentation budget.

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

## 6. Ecosystem Idiom & Built-in Generators First
- **Never manually reinvent framework primitives.** When an established ecosystem provides official CLI generators, scaffolding tools, or code compilers, ALWAYS prioritize executing them via `bash` before handcrafting raw boilerplate:
  - *Ruby on Rails:* Use `bin/rails generate stimulus <name>`, `bin/rails generate component <name>` (ViewComponent), or `bin/rails generate controller/migration`. Never manually create files that disrupt Zeitwerk autoloading conventions. Run `bin/rails zeitwerk:check`.
  - *Laravel / PHP:* Use `php artisan make:component <name>`, `php artisan make:livewire <name>`, `php artisan make:controller`, or `php artisan make:model -m`.
  - *Django / Python:* Use `python manage.py startapp <name>`, `python manage.py makemigrations`, and `python manage.py migrate`.
  - *React / Next.js with shadcn/ui:* When a primitive (Dialog, Sheet, DropdownMenu, Tabs, Toast) is needed, ALWAYS check `@/components/ui/` first; if absent, execute `npx shadcn@latest add <component>` rather than copy-pasting an unvetted or inaccessible custom implementation.
  - *Go with Templ:* Always execute `templ generate` after adding or editing `.templ` component files before compiling.
  - *Flutter / Dart:* Use `dart run build_runner build` for code generators (Freezed, JSON serializable, Riverpod).
  - *Bun / Hono / Solid:* Configure matching `jsxImportSource` in `tsconfig.json` (`hono/jsx`, `solid-js`) to prevent missing runtime errors.
  - *Non-DOM Terminal UIs:* When writing console/TUI apps, translate `MASTER.md` tokens into ANSI TrueColor codes (`\033[38;2;...m`) and Unicode box-drawing primitives (`┌ ─ ┐ │ └ ┘`).
- **Strict Convention over Configuration:** Adhere strictly to the framework's native casing, naming, and directory patterns (snake_case in Rails/Python, PascalCase in React/Vue/Svelte, kebab-case in Angular/Astro).

---

## 7. Autonomous Self-Verification Loop
- **Verify before declaring completion.** Always execute the project's build, compile, or lint command autonomously:
  - *Node / TypeScript:* `npm run build` or `npx tsc --noEmit`.
  - *Bun:* `bun test` or `bun run check`.
  - *Deno:* `deno check` or `deno test`.
  - *Rust:* `cargo test` or `cargo check`.
  - *Ruby on Rails / Sinatra:* `bin/rails zeitwerk:check` or `ruby test/*_test.rb` (with `ENV['RACK_ENV'] = 'test'`).
  - *Laravel:* `php artisan test` or `composer validate`.
  - *Python / Django / FastAPI:* `python3 -m unittest` or `python3 -m py_compile` or `ruff check`.
  - *Go:* `go test ./...` and `go vet ./...`.
  - *Flutter:* `flutter analyze`.
- If errors or warnings occur, fix them autonomously before reporting back to the user. Never hand off broken code.

---

## 8. Proactive Refactoring Directive (Existing Codebases)
- When asked to "polish", "clean up", "tidy up", or "improve architecture" on an existing codebase:
  - Proactively scan for code smells (duplicated styling maps, components >250 lines).
  - Automatically extract duplicate styling maps to `src/constants/theme.ts`.
  - Automatically decompose monolithic components (>250 lines) into dedicated Custom Hooks.
  - Preserve 100% of existing working user features without regressions.

---

## 9. The 5 Production States of UI
Whenever building data-driven interfaces (tables, lists, cards, feeds), implement all 5 states:
1. **Empty State:** Distinctive, helpful visual state with context copy and clear primary CTA when 0 items exist.
2. **Loading / Skeleton State:** Geometry-matched animated shimmer (not generic circular spinners).
3. **Error / Retry State:** Graceful error boundary with actionable retry triggers.
4. **Partial / Truncation State:** Long text, 50-character titles, or overflow tags clamp or wrap gracefully without breaking layout grids.
5. **Populated State:** The primary, fully-populated visual interface.

---

## 10. Industry-Accurate Domain Mock Data
- **Ban generic placeholder text.** Never use "Lorem ipsum", "John Doe", "Task 1", or "Item A".
- Generate domain-rich, industry-accurate mock data (real SKUs, genuine fabric/hardware materials, realistic timestamps, ISO formatted currencies, authentic business categories).

---

## 11. Universal Accessibility & Craft Floor
- **Icon Primitives:** Use SVG icon primitives (Lucide / Heroicons / Phosphor). Never use Unicode emojis as UI control icons.
- **Interactive Affordance:** Add `cursor-pointer` to all clickable buttons, cards, tabs, and toggles.
- **Contrast Ratios:** Maintain WCAG 2.2 AA (≥4.5:1) text contrast in both light and dark modes.
- **Keyboard Navigation:** Include `focus-visible:ring` on all interactive controls.
- **Tabular Figures:** Apply `tabular-nums` (or `font-mono tabular-nums`) to all columns containing numbers, prices, or dates to eliminate horizontal layout jitter.
- **Proprietary Font Fallbacks:** If a chosen brand uses proprietary typefaces (e.g. Spotify CircularSp, Apple SF Pro, Renault NouvelR), always pair with verified Google Fonts substitutes (Inter, Plus Jakarta Sans, Montserrat) so rendering never defaults to browser serif.
