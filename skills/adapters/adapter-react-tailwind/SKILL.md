---
name: adapter-react-tailwind
description: >
  Generates production-ready React / Next.js components (.tsx/.jsx) with Tailwind CSS, leveraging existing shadcn/ui
  primitives (@/components/ui), Lucide icons, responsive layouts, modular Custom Hooks, DRY styling constants, and accessible ARIA attributes.
---

# React + Tailwind Adapter

Use this skill when generating UI code in a React, Next.js, Vite, or Remix repository using Tailwind CSS.

## Principles

1. **Leverage Existing Component Primitives:**
   - Always check `@/components/ui/` first (Buttons, Cards, Dialogs, Dropdowns, Badges, Tabs, Tooltips).
   - If a primitive exists, import and compose it rather than rebuilding from raw HTML `<div>`s.
   - Example: `import { Button } from "@/components/ui/button"`

2. **Icons:**
   - Default to `lucide-react`.
   - Set consistent size: `className="w-4 h-4"` or `className="w-5 h-5"` with `strokeWidth={1.5}` or `strokeWidth={2}` according to the design system.

3. **Design Tokens into Tailwind:**
   - Map background, surface, and border colors from the active `design-*` skill into appropriate Tailwind utilities or arbitrary values if not configured in theme.
   - Example (Spotify): `bg-[#121212]`, surface `bg-[#181818] hover:bg-[#282828]`, accent `text-[#1ed760] bg-[#1ed760]`.
   - Example (Linear): `bg-[#010102]`, borders `border-[#23252a]`, text `text-[#f7f8f8]`.

4. **Zero Duplicate Constants (DRY Architecture):**
   - NEVER copy-paste styling dictionaries (e.g. `CATEGORY_STYLES`, status badges, color maps) across multiple component files.
   - If an object or list is referenced in ≥2 files, extract it to `src/constants/theme.ts` or `src/types.ts` and import it.

5. **Component Line Budget & Custom Hooks (< 250 Lines):**
   - Keep root files (such as `App.tsx`) and individual views under 250 lines.
   - Extract stateful business logic (localStorage synchronization, filter/search/sort pipelines, theme management) into reusable Custom Hooks (`useTasks.ts`, `useTheme.ts`, `useFilters.ts`).

6. **Strict Scope Discipline:**
   - Build ONLY the requested feature with razor-sharp craftsmanship.
   - Do NOT invent unrequested feature creep (e.g. unprompted Profile pages, cover gradient pickers, or alternate Kanban boards for a simple list brief).

7. **Component Cleanliness & TypeScript:**
   - Explicit props interface: `interface PlaylistCardProps { ... }`.
   - Destructure props cleanly.
   - Export named or default component matching existing conventions in the repo.
   - Add `"use client"` directive only if the component uses hooks (`useState`, `useEffect`, `useRef`) in Next.js App Router.
