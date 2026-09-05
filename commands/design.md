---
description: Design and build UI components or full pages matching a design system archetype in the active codebase.
---

You are executing the `/design` command.

User input: "$ARGUMENTS"

Instructions:
1. **Clarification & Deep Alignment:**
   - If the request is a raw concept or new initiative, do not assume. Ask structured, high-value clarification questions covering the core user journey, exact deliverable format, and offer 2-3 tailored visual choices from the 74 design systems.
2. **Resolve Design System & Establish Master Contract:**
   - If the user specified a brand (e.g. "linear", "spotify", "stripe", "apple", "supabase", etc.), invoke `skill: design-<brand>`.
   - If the user described a mood/niche without naming a brand, invoke `skill: design-picker` to offer 2-3 tailored choices.
   - Once aligned, write `design-system/MASTER.md` at the project root to lock in the chosen archetype tokens.
3. **Inspect Codebase:**
   - Invoke `skill: framework-detector` to discover the active stack (React/Next.js, Rails, Laravel, Django, Vue, Svelte, etc.) and installed styling/icon libraries.
4. **Execute Native-First:**
   - Write clean, production-ready code directly to the project files using the detected framework adapter.
   - Strictly adhere to `skill: anti-slop-manifesto` (no generic purple-cyan gradients, no decorative glassmorphism, no marketing filler).
5. **Scope Discipline & DRY Constants:**
   - Build ONLY what was agreed upon. One thousand no's for every yes. Do NOT invent unrequested side-features or extra pages.
   - Never copy-paste styling dictionaries across multiple files; extract shared constants to `src/constants/theme.ts`.
   - Keep root components under 250 lines by extracting state logic into Custom Hooks.
6. **Run Pre-Delivery Audit:**
   - Verify code against `skill: ui-pre-delivery-check` (cursor-pointer, WCAG contrast, tabular-nums, no emoji icons, responsive fluidity) before declaring completion.
