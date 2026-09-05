---
name: palette-craft
description: "Guidelines and utilities for generating semantic, accessible color palettes with verified WCAG 2.2 AA and APCA contrast ratios, intentional surface hierarchy, and functional accent colors."
---

# Palette Craft & Semantic Color Systems

A great color system is not a random collection of pretty swatches. It is a systematic scale of roles with guaranteed contrast.

---

## 1. The 6 Core Semantic Roles

Every interface generated must map colors to these roles:

| Role | Light Theme Default | Dark Theme Default | Purpose |
| :--- | :--- | :--- | :--- |
| **`canvas`** | `#ffffff` / `#fbfbfa` | `#0a0a0c` / `#121212` | Root page background |
| **`surface-1`** | `#f4f4f5` / `#f5f5f7` | `#141518` / `#181818` | Base cards, sidebars, containers |
| **`surface-2`** | `#e4e4e7` / `#e5e5ea` | `#1e2024` / `#242426` | Hover states, active tabs, inputs |
| **`hairline`** | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.08)` | Subtle 1px borders & dividers |
| **`ink-primary`**| `#09090b` | `#f4f4f5` | Main text, titles, prominent icons |
| **`ink-muted`**  | `#71717a` | `#a1a1aa` | Descriptions, captions, metadata |
| **`accent`**     | Brand color | Brand color | Singular focal point, primary CTA |

---

## 2. Contrast Rules (WCAG 2.2 AA)

1. **Body Text (`ink-primary` on `canvas`/`surface`):**
   - Minimum contrast ratio: **4.5:1** (Target: **7:1** for optimal readability).
2. **Large Text / Headings (18px+ bold or 24px+):**
   - Minimum contrast ratio: **3:1**.
3. **Interactive UI Components & Borders:**
   - Active boundaries and focus rings must meet **3:1** against adjacent surfaces.
4. **Accent Buttons:**
   - Text inside primary buttons (`on-accent`) must have at least **4.5:1** contrast against the button background.
   - Example: White text on Spotify Green (`#1ed760`) is hard to read! Spotify uses near-black text on green buttons for this exact reason.

---

## 3. The 60-30-10 Rule

* **60% Dominant Canvas:** Neutral background surfaces.
* **30% Secondary Structure:** Cards, dividers, tables, sidebars.
* **10% Accent Accentuation:** Reserved strictly for primary CTAs, active status badges, and critical interactive anchors.
