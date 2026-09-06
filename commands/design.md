---
description: Design and build UI components or full pages matching a design system archetype in the active codebase.
---

You are executing the `/design` command.

User input: "$ARGUMENTS"

Instructions:
1. **Clarification & Deep Architectural Intake Protocol (The 5-Pillar Rule):**
   - If the request is a raw concept, broad product name, or new initiative, shallow guesswork is FORBIDDEN.
   - Present a structured questionnaire of 5–8 high-leverage questions covering the 5 Pillars:
     1. *View Scope & Topology:* What exact views are in scope for v1? (e.g., Single Workspace, Landing + App, or Full Suite [Landing + Login/Register + App + Profile]).
     2. *60-Second Core Journey:* What is the primary action performed in the first minute?
     3. *Data & State Persistence:* LocalStorage offline-first, in-memory mock, SQLite/DuckDB, or REST/Supabase?
     4. *Authentication & Identity:* Guest Mode, Mock Local Credentials with session persistence, or Enterprise SSO?
     5. *Visual Aesthetic & Density:* Present 2–3 tailored brand archetypes from the 74-brand catalog with exact palettes.
   - **Recommended Default Requirement:** Every question MUST provide concise multiple choices (A, B, C) AND an opinionated recommendation (`➡️ Recommended: Option C...`) so the user can reply instantly with *"Go with your recommendations"*.
2. **Resolve Design System & Establish Master Contract:**
   - If the user specified a brand (e.g. "linear", "spotify", "stripe", "apple", "supabase", etc.), invoke `skill: design-<brand>`.
   - If the user described a mood/niche without naming a brand, invoke `skill: design-picker` to offer 2-3 tailored choices.
   - Once aligned, write the complete, uncompromised `design-system/MASTER.md` at the project root by copying/embedding the full specification body from `skills/design-systems/design-<brand>/SKILL.md` (~250–350 lines covering Palette Roles, Typography Scale with exact tracking, Spacing Scale, Elevation Ladder, Geometry, and Anti-Patterns). NEVER generate a truncated 30-line skeleton or fragment into competing files.
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
