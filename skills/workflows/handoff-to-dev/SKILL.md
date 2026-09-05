---
name: handoff-to-dev
description: >
  Generates a comprehensive, self-sufficient developer handoff package from a finished design.
  Produces exact token tables (hex colors, type scale, spacing), component state specifications,
  and implementation notes tailored for coding agents (OpenCode, Claude Code, Cursor, Codex) or human developers.
---

# Universal Developer Handoff

Use this skill when handing off a finished UI design, prototype, or component spec to a developer or coding agent for implementation in a production codebase.

---

## Handoff Specification Structure

When executing a handoff, generate a structured `HANDOFF.md` containing:

1. **Feature Overview:** Clear, 1-paragraph summary of user goal and core flow.
2. **Framework Target:** Recommended framework structure (React component hierarchy, Rails partials/ViewComponents, Vue SFCs).
3. **Exact Design Tokens Table:**
   - Colors: Hex, semantic role (`canvas`, `surface-1`, `ink-primary`, `accent`), and contrast ratio.
   - Typography: Font family, scale (size, line-height, weight, tracking).
   - Radii & Elevation: Exact px / rem values and box-shadow declarations.
4. **Component State Matrix:**
   - Default, Hover, Active, Focus-Visible, Disabled, Loading (skeleton shimmer), Error.
5. **Interactive & Motion Behaviors:**
   - Transition durations, spring easing curves, and responsive breakpoint collapses (mobile: 375px, tablet: 768px, desktop: 1280px+).
