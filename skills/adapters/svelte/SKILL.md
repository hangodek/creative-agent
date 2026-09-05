---
name: adapter-svelte
description: "Generates modern Svelte 5 / SvelteKit components (.svelte) using modern Runes ($state, $derived, $props), Tailwind CSS, and Lucide Svelte icons."
---

# Svelte 5 & SvelteKit Adapter

Use this skill when generating UI code in a Svelte or SvelteKit project.

## Principles

1. **Svelte 5 Runes:**
   - Use `$props()` for component inputs:
     ```svelte
     <script lang="ts">
       interface Props {
         title: string;
         active?: boolean;
       }
       let { title, active = false }: Props = $props();
       let count = $state(0);
     </script>
     ```

2. **Tailwind CSS:**
   - Use Tailwind utility classes.
   - For conditional classes, use template literals or `clsx`/`tailwind-merge`.

3. **SvelteKit Navigation:**
   - Use standard `<a>` with SvelteKit's automatic client-side router.
