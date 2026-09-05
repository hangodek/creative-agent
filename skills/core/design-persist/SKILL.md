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

## 2. On First UI Generation (Write Master)

When establishing a design system for a project, write `design-system/MASTER.md` containing:

```markdown
# Project Design System Master

- **Archetype Anchor:** [e.g. Linear, Spotify, Stripe, Notion]
- **Palette Roles:**
  - Canvas: `#...`
  - Surface-1: `#...`
  - Surface-2: `#...`
  - Hairline: `#...`
  - Ink-Primary: `#...`
  - Ink-Muted: `#...`
  - Accent: `#...`
- **Typography:**
  - Display Font: [e.g. Neue Haas Grotesk, Inter, Geist]
  - Body Font: [e.g. Inter, Plus Jakarta Sans]
  - Tabular Numbers: Enabled for all data / metrics (`tabular-nums`)
- **Geometry & Elevation:**
  - Buttons: [Pill `rounded-full` OR Box `rounded-md` (8px)]
  - Cards: [Radius px / class]
  - Hairlines: [1px border color and opacity]
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
