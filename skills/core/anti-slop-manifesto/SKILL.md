---
name: anti-slop-manifesto
description: "Core anti-slop visual rules and negative constraints for AI coding agents. Bans generic AI visual clichés (blurry purple-cyan gradients, floating low-contrast cards, decorative glassmorphism, marketing buzzwords) and enforces intentional visual hierarchy."
---

# The Anti-Slop Manifesto for AI Design

Generic AI-generated UI is immediately recognizable: a dark purple background, excessive gradient mesh, floating rounded cards with glowing cyan borders, low contrast, and buzzword copy like *"Empower your workflow"*.

This skill enforces strict **taste boundaries** and negative constraints to guarantee that every generated interface looks like it was designed by a world-class product designer.

---

## 1. Absolute Negative Constraints (BANNED Patterns)

1. **NO Generic Dark-Purple/Cyan Gradients:**
   - Do NOT default to `bg-gradient-to-r from-purple-900 to-indigo-900`.
   - If dark mode is needed, use intentional neutrals: deep charcoal (`#121212`), slate black (`#0a0a0b`), or true dark zinc (`#09090b`).
2. **NO Gratuitous Glassmorphism:**
   - Do NOT plaster `backdrop-blur-md bg-white/10` everywhere. Glassmorphism without a solid structural elevation hierarchy is pure slop.
   - Use solid surface layers (`surface-1`, `surface-2`) with subtle 1px hairline borders (`border-white/10` or `border-zinc-800`).
3. **NO Decorative Border Accent Strips:**
   - Do NOT put 4px colored border on the left side of cards (`border-l-4 border-indigo-500`) unless explicitly demanded by an error/alert state.
4. **NO Fluffy Marketing Jargon:**
   - Ban copy like: *"Unleash the future of collaboration"*, *"Elevate your productivity"*, *"Next-generation seamless solutions"*.
   - Use concrete, domain-specific copy with real nouns and active verbs.
5. **NO Unanchored Floating Cards:**
   - Cards must live inside a structured grid or list with predictable spacing.
   - Do not use arbitrary floating cards with massive diffuse shadows (`shadow-2xl`). Use crisp, layered elevations.
6. **NO Scope Slop / Unsolicited Feature Bloat:**
   - One thousand no's for every yes. Build strictly what was requested.
   - Do NOT invent unrequested side-features (e.g. inventing a Profile Page, Avatar Pickers, or Kanban boards when asked for a simple todo list).
   - Deliver the requested capability with supreme depth, polished micro-interactions, and zero code duplication.

---

## 2. The Positive Craft Standards

1. **Hierarchy First:**
   - The user should instantly understand what is primary, secondary, and tertiary.
   - Primary action: 1 per view. Strong contrast.
   - Secondary actions: Ghost or subtle outline.
2. **Hairlines & Micro-Borders:**
   - Modern precision UI relies on subtle 1px dividers:
   - Light theme: `border-zinc-200/80` or `border-neutral-200`.
   - Dark theme: `border-white/[0.08]` or `border-zinc-800`.
3. **Typography Rhythm:**
   - Establish high contrast between headings and body text.
   - Headings: `font-semibold tracking-tight text-zinc-900 dark:text-zinc-50`.
   - Muted details: `text-xs font-medium text-zinc-500 dark:text-zinc-400`.
   - Tabular figures for numbers: `font-mono tabular-nums` or `tabular-nums`.
4. **Density Calibration:**
   - **Dev Tools & Dashboards:** Dense. Compact padding (`p-2.5`, `gap-2`), smaller font sizes (`text-xs`, `text-sm`), clear tabular rows.
   - **Consumer & Landing Pages:** Relaxed. Generous breathing room (`py-16`, `gap-8`), larger displays (`text-4xl`, `text-6xl`).
