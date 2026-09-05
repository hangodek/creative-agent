---
name: adapter-astro
description: >
  Generates high-performance Astro components (.astro), Zero-JS Island Architecture (client:load, client:visible),
  Content Collections schemas, and Tailwind CSS. Keeps presentation modular and centralized in src/constants/.
---

# Astro Island Architecture Adapter

Use this skill when developing websites and content-driven web applications in Astro.

---

## 1. Architectural Standards

1. **Zero-JS by Default:**
   - Write standard `.astro` components that compile to pure HTML/CSS with zero runtime JavaScript.
   - Only add client directives (`client:load`, `client:visible`, `client:idle`) when a specific island requires client-side state.

2. **Component Separation:**
   - Keep page templates under 250 lines.
   - Separate reusable layout components into `src/components/ui/`.

3. **Single Source of Truth:**
   - Extract styling palettes and status maps to `src/constants/theme.ts`.
   - Use Astro Content Collections (`src/content/config.ts`) with Zod schemas for typed data.

4. **Tailwind CSS & Styling:**
   - Apply design system archetype tokens directly via Tailwind utilities.
