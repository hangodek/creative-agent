---
name: adapter-vue-nuxt
description: "Generates modern Vue 3 and Nuxt Single File Components (.vue) using <script setup lang=\"ts\">, Tailwind CSS, Lucide Vue Next, and Radix Vue / Shadcn Vue primitives."
---

# Vue & Nuxt Adapter

Use this skill when generating UI code in a Vue 3 or Nuxt project.

## Principles

1. **Modern Single File Component Syntax:**
   - Always use `<script setup lang="ts">`.
   - Explicit TypeScript interface for `defineProps<{ ... }>()` and `defineEmits<{ ... }>()`.

2. **Tailwind CSS Styling:**
   - Apply utility classes directly on template elements.
   - Respect scoped vs global styling where necessary.

3. **Nuxt Helpers:**
   - Use `<NuxtLink>` for navigation instead of plain `<a>`.
   - Use `<NuxtImg>` if Nuxt Image is configured.

4. **Component Libraries:**
   - Leverage `shadcn-vue` or `radix-vue` if present in `components/ui/`.
