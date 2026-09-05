---
description: Design and build UI components or full pages matching a design system archetype in the active codebase.
---

You are executing the `/design` command.

User input: "$ARGUMENTS"

Instructions:
1. **Resolve Design System:**
   - If the user specified a brand (e.g. "linear", "spotify", "stripe", "apple", "supabase", etc.), immediately invoke that brand's skill: `skill: design-<brand>`.
   - If the user described a mood/industry without naming a brand, invoke `skill: design-picker` to evaluate requirements and recommend the best fit.
2. **Inspect Codebase:**
   - Invoke `skill: framework-detector` to discover whether the workspace is React/Next.js, Rails, Vue, Svelte, or static HTML, plus Tailwind version and installed icon/component libraries.
3. **Execute Native-First:**
   - Write clean, production-ready code directly to the project files using the detected framework adapter.
   - Strictly adhere to `skill: anti-slop-manifesto` (no generic purple-cyan gradients, no decorative glassmorphism, no marketing filler).
4. **Scope Discipline & DRY Constants:**
   - Build ONLY what the user asked for. One thousand no's for every yes. Do NOT invent unrequested side-features or extra pages.
   - Never copy-paste styling dictionaries across multiple files; extract shared constants to `src/constants/theme.ts`.
   - Keep root components under 250 lines by extracting state logic into Custom Hooks.
5. **Run Pre-Delivery Audit:**
   - Verify code against `skill: ui-pre-delivery-check` (cursor-pointer, WCAG contrast, tabular-nums, no emoji icons, responsive fluidity) before declaring completion.
