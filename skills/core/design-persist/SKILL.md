---
name: design-persist
description: >
  Implements the Master + Overrides pattern to eliminate multi-session design drift across multiple pages.
  Saves and reads design-system/MASTER.md in the project root as the single source of truth for color tokens,
  typography, radii, and button geometries, with optional per-page override specs in design-system/pages/<page>.md.
---

# Design System Persistence: Master + Overrides Pattern

When building multi-page applications or working across multiple agent sessions, coding agents tend to suffer from **context drift** (e.g. inventing new accent colors, different border radii, or mismatched button geometries on later pages).

This skill enforces persistent visual continuity across all sessions and routes.

---

## 1. The Master + Overrides Architecture

```
your-project/
└── design-system/
    ├── MASTER.md            <-- Global Source of Truth (colors, typography, geometry)
    └── pages/               <-- Optional page-specific deltas
        ├── checkout.md      <-- Only rules that deviate from Master
        └── dashboard.md
```

---

## 2. On First UI Generation (The Canonical Embed Standard)

NEVER split design specifications across competing files (e.g. `DESIGN.md` vs `MASTER.md` vs `GUIDELINES.md`), and NEVER generate a truncated 30-line skeleton that drops typography tracking, spacing scales, or component grammar.

When establishing `design-system/MASTER.md` from the 74-brand catalog, copy or embed the **complete specification body of `skills/design-systems/design-<brand>/SKILL.md` directly into `design-system/MASTER.md`**, ensuring it preserves the full ~250–350 line manual covering:

1. **Visual Theme & Atmosphere:** Complete brand essence, whitespace rules, and philosophy.
2. **Complete Palette Roles:** Exact hex codes for canvas floor, surface 1–4 ladder, hairlines, text hierarchy, active/hover/focus states.
3. **Mathematical Typography Scale Table:** Complete matrix of Token, Size, Weight, Line Height, and exact Letter Spacing tracking (e.g. `-3.0px` at 80px).
4. **Spacing Scale & Layout Grid:** Explicit 4px base units from `{spacing.xxs}` 4px up to `{spacing.section}` 96px, and container max-widths.
5. **Geometry & Border Radius Scale:** Explicit scale from 4px up to 9999px pill, with exact button and input dimensions.
6. **Elevation Ladder:** Levels 0 through 4 with hairline treatments and focus outlines.
7. **Brand Anti-Patterns:** The mandatory "What NEVER to do" negative constraints.

---

## 3. On Subsequent Pages & Features (Read & Comply)

Before generating any new screen, view, or component:

1. **Check for Master:** Check if `design-system/MASTER.md` exists.
   - If it exists: **Read it first.** Strictly adhere to the tokens and geometries declared in `MASTER.md`.
2. **Check for Page Overrides:** Check if `design-system/pages/<current-page>.md` exists.
   - If it exists, apply its specific override rules on top of the Master.
   - If not, use `MASTER.md` exclusively.
3. **Never Drift:** Never introduce new primary colors, conflicting button border-radii, or inconsistent font families without updating `MASTER.md` intentionally.
