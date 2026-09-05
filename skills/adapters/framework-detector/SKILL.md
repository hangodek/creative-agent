---
name: framework-detector
description: >
  Automatically inspects the current repository to detect the frontend or fullstack framework
  (React, Next.js, Rails Hotwire, Laravel Blade, Django HTMX, Vue, Nuxt, Svelte 5, Astro, Go Templ,
  Flutter, React Native/Expo, or static HTML), CSS engine (Tailwind v3/v4, CSS Modules), and installed UI libraries.
---

# Framework Detector Skill

Before generating or refactoring any user interface code, you MUST inspect the current workspace environment to determine the native tech stack. NEVER output generic raw HTML when the repository is built on an established framework.

## Inspection Checklist

Execute these checks in parallel using your search and read tools:

1. **Manifest Files:**
   - `package.json` -> Check: `react`, `next`, `vue`, `nuxt`, `svelte`, `astro`, `react-native`, `expo`, `tailwindcss`, `lucide-react`, `@shadcn/ui`.
   - `Gemfile` -> Check: `rails`, `tailwindcss-rails`, `hotwire-rails`, `stimulus-rails`, `view_component`, `phlex-rails`.
   - `composer.json` -> Check: `laravel/framework`, `livewire/livewire`, `blade`.
   - `pyproject.toml` / `requirements.txt` -> Check: `django`, `flask`, `fastapi`, `jinja2`.
   - `go.mod` -> Check Go dependencies, `templ`, or standard `html/template`.
   - `pubspec.yaml` -> Check: `flutter`, `flutter_riverpod`, `flutter_bloc`.
   - `Cargo.toml` -> Check: `leptos`, `dioxus`, `askama`.

2. **Styling Engine:**
   - Check Tailwind version: v3 (`tailwind.config.*`) or v4 (`@import "tailwindcss";`).
   - Check component libraries: `@/components/ui/` (shadcn/ui), Radix UI, PrimeVue, DaisyUI.

3. **Icon Discovery:**
   - Detect Lucide, Heroicons, Phosphor, or framework-specific icon libraries.

4. **Adapter Routing Table:**
   - React / Next.js -> `adapter-react-tailwind` / `adapter-shadcn-ui`
   - Ruby on Rails -> `adapter-rails-hotwire`
   - Laravel PHP -> `adapter-laravel-blade`
   - Python Django -> `adapter-django-htmx`
   - Vue 3 / Nuxt -> `adapter-vue-nuxt`
   - Svelte 5 / Kit -> `adapter-svelte`
   - Astro -> `adapter-astro`
   - Go -> `adapter-go-templ-htmx`
   - React Native / Expo -> `adapter-react-native-expo`
   - Flutter / Dart -> `adapter-flutter`
   - Raw HTML -> `adapter-static-html`
