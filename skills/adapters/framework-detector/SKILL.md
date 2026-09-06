---
name: framework-detector
description: >
  Automatically inspects the current repository to detect the frontend or fullstack framework
  (React, Next.js, Rails Hotwire, Laravel Blade, Django HTMX, Vue, Nuxt, Svelte 5, Astro, Go Templ,
  Flutter, React Native/Expo, or static HTML), CSS engine (Tailwind v3/v4, CSS Modules), and installed UI libraries.
---

# Framework Detector Skill

Before generating or refactoring any user interface code, you MUST inspect the current workspace environment to determine the native tech stack. NEVER output generic raw HTML when the repository is built on an established framework.

---

## 1. Inspection Checklist

Execute these checks in parallel using your search and read tools:

1. **Monorepo & Workspace Check:**
   - Look for `pnpm-workspace.yaml`, `turbo.json`, `lerna.json`, or `apps/` and `packages/` directories.
   - If in a monorepo, navigate into the targeted UI app (e.g., `apps/web/package.json`) rather than assuming the root manifest represents the UI.

2. **Manifest Files:**
   - `package.json` -> Check: `react`, `next`, `vue`, `nuxt`, `svelte`, `astro`, `react-native`, `expo`, `tailwindcss`, `lucide-react`, `@shadcn/ui`.
   - `Gemfile` -> Check: `rails`, `tailwindcss-rails`, `hotwire-rails`, `stimulus-rails`, `view_component`, `phlex-rails`.
   - `composer.json` -> Check: `laravel/framework`, `livewire/livewire`, `blade`, `inertiajs/inertia-laravel`.
   - `pyproject.toml` / `requirements.txt` -> Check: `django`, `flask`, `fastapi`, `jinja2`.
   - `go.mod` -> Check Go dependencies, `templ`, or standard `html/template`.
   - `pubspec.yaml` -> Check: `flutter`, `flutter_riverpod`, `flutter_bloc`.
   - `Cargo.toml` -> Check: `leptos`, `dioxus`, `askama`.

3. **Hybrid Codebase Resolution (The UI Priority Rule):**
   - If the repository has BOTH a backend manifest (e.g. Rails `Gemfile`, Laravel `composer.json`, Django `pyproject.toml`) AND a modern frontend manifest (`package.json` with React, Vue, Svelte, or Inertia):
   - **The Frontend UI layer takes precedence.** Do NOT generate backend template files (`.erb`, `.blade.php`) if the project is configured to render client-side SPA or Inertia pages (`.tsx`, `.vue`).

4. **Non-UI / Pure Backend Exemption:**
   - If the workspace is a pure backend service, CLI tool, or background worker without any web or mobile UI, maintain `AGENTS.md` at root but **do not generate a `design-system/` folder**.

5. **Styling Engine:**
   - Check Tailwind version: v3 (`tailwind.config.*`) or v4 (`@import "tailwindcss";`).
   - Check component libraries: `@/components/ui/` (shadcn/ui), Radix UI, PrimeVue, DaisyUI.

6. **Adapter Routing Table:**
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
   - Standalone Prototype -> `adapter-static-html`
