---
name: typography-craft
description: "Rules for mathematical type scales, optical line-height adjustments, letter-spacing tracking, tabular figures, and font pairings for digital product engineering."
---

# Typography Craft & Type Scales

Typography represents 90% of the web interface. Weak typography makes any layout look amateur, while disciplined typography elevates even simple layouts.

---

## 1. The Harmonic Type Scale (Major Second / Minor Third)

Use standard scales that prevent random font sizes:

```
Display Large : 48px – 64px (tracking: -0.03em, leading: 1.1)
Display       : 32px – 40px (tracking: -0.025em, leading: 1.2)
Heading 1     : 24px – 28px (tracking: -0.02em, leading: 1.25)
Heading 2     : 20px – 22px (tracking: -0.015em, leading: 1.3)
Heading 3     : 16px – 18px (tracking: -0.01em, leading: 1.4)
Body          : 14px – 15px (tracking: normal, leading: 1.5)
Caption/Label : 12px – 13px (tracking: +0.01em, leading: 1.4)
Micro/Overline: 10px – 11px (tracking: +0.06em, uppercase, font-semibold)
```

---

## 2. Three Golden Rules of Type Craft

1. **Optical Tracking (Letter-Spacing):**
   - As font size increases, tracking must become **tighter** (`tracking-tight` or `tracking-tighter`).
   - Small labels and all-caps text must have **wider** tracking (`tracking-wider` or `tracking-widest`).
2. **Line Height (Leading):**
   - Headings require tight line-heights (`leading-none` or `leading-tight`).
   - Body paragraphs require generous line-heights (`leading-relaxed` or `leading-normal`).
3. **Tabular Figures for Data:**
   - Any column of numbers, timestamps, prices, or metrics MUST use `tabular-nums` so columns align without jittering.
   - Example: `<span className="font-mono tabular-nums text-sm">$1,420.50</span>`.

---

## 3. Brand Optical Fidelity & Proprietary Substitutes

World-class brands (Stripe, Linear, Apple, The Verge, Spotify) license expensive proprietary typefaces. When building interfaces, NEVER let the browser fall back to generic uncalibrated fonts. Use these verified optical substitutes:

| Brand Archetype | Proprietary Target | Open-Source Substitute | Optical Adjustments & CSS Flags |
|---|---|---|---|
| **Stripe / Fintech** | Söhne (Klim) | `Inter` (Google Fonts) | **Weight 300 only**, `font-feature-settings: "ss01", "tnum"`, `tracking-[-0.025em]`. Never default to bold. |
| **Linear / Raycast** | Linear Display / SF Pro | `Inter` / `Geist Sans` | **Weight 600**, tight line-height `1.10`, negative tracking (`-1.8px` on 56px, `-0.6px` on 28px). |
| **Spotify / Media** | CircularSp (Lineto) | `Plus Jakarta Sans` | Weight 700 headings, full-pill buttons (`rounded-full`), uppercase button labels with positive tracking (`tracking-[1.4px]`). |
| **The Verge** | Manuka (Klim) | `Anton` / `Cinzel` | Heavy display stance, loosen line-height by **+0.15** to prevent glyph collision, pair with uppercase mono tags. |
| **WIRED** | WiredDisplay (Condé Nast) | `Newsreader` / `Playfair Display` | High-contrast editorial serif, strictly square 0px corners (`rounded-none`), crisp 1px column rules. |
| **Apple / Consumer** | SF Pro Display | `Inter` (Weights 400–600) | Whisper-soft contrast, generous edge-to-edge section breathing room, parchment tones (`#f5f5f7`). |

---

## 4. Mandatory Optical Tracking Matrix

Never use `tracking-normal` on display headings 28px and above. Always apply proportional negative tracking:

```css
/* Tailwind Optical Tracking Matrix */
.heading-sm { /* 20px - 24px */ @apply tracking-[-0.015em]; }
.heading-md { /* 28px - 32px */ @apply tracking-[-0.025em]; }
.heading-lg { /* 40px - 48px */ @apply tracking-[-0.035em]; }
.heading-xl { /* 56px - 64px+ */ @apply tracking-[-0.045em]; }

/* Eyebrows & Monospace Labels (Positive Tracking) */
.label-eyebrow { @apply uppercase tracking-[0.06em] text-[11px] font-semibold; }
```
