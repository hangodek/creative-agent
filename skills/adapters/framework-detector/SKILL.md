---
name: framework-detector
description: >
  Automatically inspects the current repository to detect the frontend or fullstack framework
  (React, Next.js, Rails Hotwire, Laravel Blade, Django HTMX, Vue, Nuxt, Svelte 5, Astro, Go,
  Rust, Deno, Bun, Flutter, React Native, or Terminal TUI), CSS engine, and installed UI libraries.
---

# Framework Detector Skill

Before generating or refactoring any user interface code, you MUST inspect the current workspace environment to determine the native tech stack. NEVER output generic raw HTML when the repository is built on an established framework or compiled runtime.

---

## 1. Inspection Checklist

Execute these checks in parallel using your search and read tools:

1. **Monorepo & Workspace Check:**
   - Look for `pnpm-workspace.yaml`, `turbo.json`, `lerna.json`, or `apps/` and `packages/` directories.
   - If in a monorepo, navigate into the targeted UI app (e.g., `apps/web/package.json`) rather than assuming the root manifest represents the UI.

2. **Manifest Files & Runtimes:**
   - `package.json` -> Check: `react`, `next`, `vue`, `nuxt`, `svelte`, `astro`, `solid-js`, `react-native`, `expo`, `tailwindcss`, `lucide-react`, `@shadcn/ui`.
   - `deno.json` -> Deno 2 native runtime. Check `"tasks"` for `check`, `test`, `build`.
   - `bun.lock` / `bunfig.toml` -> Bun runtime. Check `tsconfig.json` for `jsxImportSource` (`hono/jsx`, etc.).
   - `Cargo.toml` -> Rust runtime. Check for `axum`, `actix-web`, `leptos`, `dioxus`, `askama`.
   - `Gemfile` -> Check: `rails`, `sinatra`, `tailwindcss-rails`, `hotwire-rails`, `stimulus-rails`, `view_component`.
   - `composer.json` -> Check: `laravel/framework`, `livewire/livewire`, `blade`, `inertiajs/inertia-laravel`.
   - `pyproject.toml` / `requirements.txt` -> Check: `django`, `fastapi`, `flask`, `jinja2`.
   - `go.mod` -> Check: standard `net/http`, `templ`, `gin`, `chi`, `fiber`.
   - `pubspec.yaml` -> Check: `flutter`, `flutter_riverpod`, `flutter_bloc`.

3. **Hybrid Codebase Resolution (The UI Priority Rule):**
   - If the repository has BOTH a backend manifest (e.g. Rails `Gemfile`, Laravel `composer.json`, Django `pyproject.toml`, Go `go.mod`) AND a modern frontend manifest (`package.json` with React, Vue, Svelte, Solid, or Inertia):
   - **The Frontend UI layer takes precedence.** Do NOT generate backend template files (`.erb`, `.blade.php`) if the project is configured to render client-side SPA or Inertia pages (`.tsx`, `.vue`).

4. **Terminal / Console UI (Non-DOM Environment):**
   - If the target application is a Terminal / CLI dashboard (e.g. using Python, Rust, Go, or Node CLI), apply `MASTER.md` tokens via ANSI escape codes (`\033[38;2;...m`), Unicode box-drawing characters (`┌ ─ ┐ │ └ ┘`), and tabular number formatting. Never force browser DOM onto a console app.

5. **Non-UI / Pure Backend Exemption:**
   - If the workspace is a pure backend daemon, worker, or headless API, maintain `AGENTS.md` at root but **do not generate a `design-system/` folder**.

6. **The Zero-Day & Unknown Stack Fallback (Mimicry Protocol):**
   - If the project uses an emerging, niche, or day-old framework not listed in pre-baked adapters (e.g. Gleam, Zig, Elixir, or an in-house proprietary engine):
   - **DO NOT drop to raw HTML.**
   - Probe 2 neighboring files to extract import styles, component structures, and file extensions (`.gleam`, `.zig`, `.ex`).
   - Extract the project's native build/test command from its manifest (`Makefile`, `Justfile`, etc.) and run it to autonomously self-verify.

7. **Adapter Routing Table:**
   - React / Next.js -> `adapter-react-tailwind` / `adapter-shadcn-ui`
   - Ruby on Rails (Hotwire) -> `adapter-rails-hotwire`
   - Laravel PHP (Blade/Livewire) -> `adapter-laravel-blade`
   - Python Django (HTMX) -> `adapter-django-htmx`
   - Vue 3 / Nuxt -> `adapter-vue-nuxt`
   - Svelte 5 / Kit -> `adapter-svelte`
   - Astro -> `adapter-astro`
   - Go -> `adapter-go-templ-htmx`
   - React Native / Expo -> `adapter-react-native-expo`
   - Flutter / Dart -> `adapter-flutter`
   - Unknown / Zero-Day -> **Zero-Day Mimicry Protocol**
   - Standalone Prototype -> `adapter-static-html`
