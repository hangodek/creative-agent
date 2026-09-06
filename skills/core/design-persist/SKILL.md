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

## 2. On First UI Generation (Write True Canonical Master)

NEVER split design specifications across competing files (e.g. `DESIGN.md` vs `MASTER.md` vs `GUIDELINES.md`). Doing so creates dual-source ambiguity and causes the AI to guess typography and padding.

`design-system/MASTER.md` must be written as a comprehensive, self-contained specification covering:

```markdown
# Project Design System Master: [Brand Archetype]

## 1. Palette Roles (Exact Hexes & Semantics)
- Canvas Floor: `#...`
- Surface 1–4 Ladder: `#...`, `#...`, `#...`, `#...`
- Hairlines: `#...` (1px structural dividers)
- Ink Hierarchy: Primary `#...`, Muted `#...`, Subtle `#...`
- Accent CTA: `#...` (Hover: `#...`, Active: `#...`)

## 2. Mathematical Typography Scale (Zero Guesswork)
| Role | Font Family | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Display Hero | [Family] | 56px | 600 | 1.10 | -1.8px (-0.03em) |
| Section Headline | [Family] | 28px | 600 | 1.20 | -0.6px (-0.02em) |
| Card Title | [Family] | 18px | 500 | 1.30 | -0.2px (-0.01em) |
| Body Text | [Family] | 14px | 400 | 1.50 | -0.05px |
| Technical Code | [Family Mono] | 12px | 400 | 1.40 | tabular-nums |

## 3. Geometry & Padding Grammar (Exact Dimensions)
- Primary CTA Button: `height: 36px`, `padding: 8px 16px`, `radius: 6px/full`, `cursor: pointer`
- Standard Card: `padding: 20px / 24px`, `radius: 12px`, `border: 1px solid hairline`
- Inputs: `height: 38px`, `padding: 8px 12px`, `radius: 6px`, `focus-ring: 2px solid accent`

## 4. Interaction States
- Hover Lift: Lift accent hex, smooth `duration-150`
- Active Press: `active:scale-[0.98]`
- Keyboard Focus: Explicit `focus-visible:ring-2`
```

---

## 3. On Subsequent Pages & Features (Read & Comply)

Before generating any new screen, view, or component:

1. **Check for Master:** Check if `design-system/MASTER.md` exists.
   - If it exists: **Read it first.** Strictly adhere to the tokens and geometries declared in `MASTER.md`.
2. **Check for Page Overrides:** Check if `design-system/pages/<current-page>.md` exists.
   - If it exists, apply its specific override rules on top of the Master.
   - If not, use `MASTER.md` exclusively.
3. **Never Drift:** Never introduce new primary colors, conflicting button border-radii, or inconsistent font families without updating `MASTER.md` intentionally.
