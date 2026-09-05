# Creative Agent Universal Polyglot Engineering Standards

These standing invariants apply across every programming language, framework, and AI agent session (OpenCode, Claude Code, Antigravity, Cursor, Codex). Adhere to them unconditionally.

---

## 1. Strict Scope Restraint (One Thousand No's for Every Yes)
- **Build ONLY what the user asked for.** If asked for a "simple todo list", DO NOT invent Profile pages, Avatar pickers, Cover gradient galleries, or unprompted Kanban boards.
- Focus 100% of your tokens and creativity on making the requested core capability robust, accessible, and visually stunning.
- Never add unrequested speculative features, extra routes, or bloated settings tabs.

---

## 2. Single Source of Truth (Zero Duplicate Constants / DRY)
- **Never copy-paste styling dictionaries, status maps, or category lists across multiple files.**
- If a data structure or styling mapping is referenced in ≥2 files, extract it to a shared centralized module following your current stack's idiom:
  - *React / Next.js / Vue / Svelte / Astro:* `src/constants/theme.ts` or `src/types.ts`.
  - *Ruby on Rails:* `app/helpers/` or `config/initializers/`.
  - *Laravel / PHP:* `app/Enums/` or `config/theme.php`.
  - *Django / Python:* `constants.py` or `choices.py`.
  - *Go:* `pkg/constants/` or typed enums.
  - *Flutter / Dart:* `theme/app_colors.dart` (ThemeExtension).

---

## 3. Modular Presentation Budget (< 250 Lines per File)
- **No "God Components" or monolithic view files.** Presentation files must stay under 250 lines.
- Extract state management, data-fetching pipelines, and storage synchronization into dedicated abstraction layers:
  - *React:* Custom Hooks (`useTasks.ts`, `useTheme.ts`, `useFilters.ts`).
  - *Vue:* Composables (`composables/useTasks.ts`).
  - *Svelte 5:* Runes Modules (`tasks.svelte.ts`).
  - *Rails:* Stimulus controllers for micro-interactions & ViewComponents for isolated UI pieces.
  - *Laravel:* Livewire components & Action classes.

---

## 4. Autonomous Self-Verification Loop
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

## 5. The 5 Production States of UI
Whenever building data-driven interfaces (tables, lists, cards, feeds), implement all 5 states:
1. **Empty State:** Distinctive, helpful visual state with context copy and clear primary CTA when 0 items exist.
2. **Loading / Skeleton State:** Geometry-matched animated shimmer (not generic circular spinners).
3. **Error / Retry State:** Graceful error boundary with actionable retry triggers.
4. **Partial / Truncation State:** Long text, 50-character titles, or overflow tags clamp or wrap gracefully without breaking layout grids.
5. **Populated State:** The primary, fully-populated visual interface.

---

## 6. Industry-Accurate Domain Mock Data
- **Ban generic placeholder text.** Never use "Lorem ipsum", "John Doe", "Task 1", or "Item A".
- Generate domain-rich, industry-accurate mock data (real SKUs, genuine fabric/hardware materials, realistic timestamps, ISO formatted currencies, authentic business categories).

---

## 7. Universal Accessibility & Craft Floor
- **Icon Primitives:** Use SVG icon primitives (Lucide / Heroicons / Phosphor). Never use Unicode emojis as UI control icons.
- **Interactive Affordance:** Add `cursor-pointer` to all clickable buttons, cards, tabs, and toggles.
- **Contrast Ratios:** Maintain WCAG 2.2 AA (≥4.5:1) text contrast in both light and dark modes.
- **Keyboard Navigation:** Include `focus-visible:ring` on all interactive controls.
- **Tabular Figures:** Apply `tabular-nums` (or `font-mono tabular-nums`) to all columns containing numbers, prices, or dates to eliminate horizontal layout jitter.
