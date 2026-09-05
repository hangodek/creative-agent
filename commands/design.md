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
