---
name: adapter-laravel-blade
description: >
  Generates idiomatic Laravel Blade components (resources/views/components/), Livewire 3 components,
  Alpine.js micro-interactions, and Tailwind CSS. Enforces centralized constants in app/Enums/ or config/theme.php
  and keeps Blade presentation templates under 250 lines.
---

# Laravel Blade & Livewire Adapter

Use this skill when developing user interfaces in a Laravel PHP codebase.

---

## 1. Architectural Standards

1. **Blade Components First (`resources/views/components/`):**
   - Create reusable atomic components (e.g. `<x-button>`, `<x-card>`, `<x-badge>`).
   - Use `@props(['variant' => 'primary', 'size' => 'md'])` at the top of Blade components.

2. **Single Source of Truth for Constants:**
   - Store category maps, status colors, and badge definitions in PHP 8.1+ Enums (`app/Enums/TaskStatus.php`) or `config/theme.php`.
   - Never hardcode duplicate styling maps across multiple Blade files.

3. **Interactivity via Livewire & Alpine.js:**
   - Use **Livewire 3** for server-driven reactive state (`wire:model`, `wire:click`).
   - Use **Alpine.js** (`x-data`, `x-show`, `x-transition`) for lightweight client-side micro-interactions (dropdowns, modals, tabs).

4. **Tailwind CSS Integration:**
   - Apply design archetype tokens (Spotify, Linear, Stripe, Notion) into standard Tailwind classes.

5. **Artisan CLI Generators First:**
   - ALWAYS execute `php artisan make:component <name>` to scaffold Blade components into the proper directory structure.
   - ALWAYS execute `php artisan make:livewire <name>` for reactive Livewire components to generate the paired PHP class and Blade view.
   - Run `php artisan test` or `composer validate` to self-verify changes.
