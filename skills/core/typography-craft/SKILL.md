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

## 3. Recommended Font Pairings

* **Modern Precision (Linear/Vercel):** Geist Sans / Inter + Geist Mono.
* **Warm SaaS (Stripe/Supabase):** Plus Jakarta Sans / General Sans + JetBrains Mono.
* **Editorial / Content (Notion/Substack):** Newsreader / Merriweather + Inter.
* **Terminal / Dev-First:** Fira Code / Berkeley Mono / JetBrains Mono.
