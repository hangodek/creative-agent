---
name: framework-detector
description: "Automatically inspects the current repository to detect the frontend framework (React, Next.js, Rails Hotwire, Vue, Nuxt, Svelte, SvelteKit, or static HTML), CSS engine (Tailwind v3/v4, CSS Modules, Vanilla CSS), and installed UI / icon libraries before writing UI code."
---

# Framework Detector Skill

Before generating or refactoring any user interface code, you MUST inspect the current workspace environment to determine the native tech stack. NEVER output generic raw HTML when the repository is built on a specific framework like React, Rails, Vue, or Svelte.

## Inspection Checklist

Execute these checks in parallel using your search and read tools:

1. **Manifest Files:**
   - `package.json` -> Check dependencies: `react`, `next`, `vue`, `nuxt`, `svelte`, `@sveltejs/kit`, `tailwindcss`, `lucide-react`, `@radix-ui/*`, `@shadcn/ui`.
   - `Gemfile` -> Check gems: `rails`, `tailwindcss-rails`, `hotwire-rails`, `stimulus-rails`, `view_component`, `phlex-rails`.
   - `pyproject.toml` / `requirements.txt` -> Check frameworks: `django`, `flask`, `fastapi`, `jinja2`.
   - `composer.json` -> Check: `laravel/framework`, `livewire/livewire`, `blade`.

2. **Styling Engine:**
   - Look for `tailwind.config.js`, `tailwind.config.ts`, or `@import "tailwindcss";` in `src/`, `app/assets/stylesheets/`, or `app/globals.css`.
   - Check if Tailwind version is v3 (`@tailwind base;`) or v4 (`@import "tailwindcss";`).
   - Check for component libraries: look for `@/components/ui/` (standard shadcn/ui folder).

3. **Icon Library Discovery:**
   - If `lucide-react` is present: import `{ IconName } from "lucide-react"`.
   - If `heroicons` or `@heroicons/react` is present: import from `@heroicons/react/24/outline`.
   - If Rails: check if `heroicon` or `lucide` gem is available, or use clean inline SVGs with standard viewBox `0 0 24 24`.

4. **Component Location:**
   - React / Next.js: `app/` (App Router) or `pages/` (Pages Router) or `src/components/`.
   - Rails: `app/views/` and `app/components/` (if ViewComponent).
   - Vue / Nuxt: `components/` and `pages/`.
   - Svelte / SvelteKit: `src/routes/` and `src/lib/components/`.

## Translation Rule
Once the stack is identified, translate the design tokens (from the active design system skill) directly into native components matching that stack.
