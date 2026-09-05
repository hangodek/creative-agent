---
name: micro-interactions
description: "Guidelines for subtle tactile interactive feedback, hover states, active press scaling, focus-visible outlines, skeleton loading shimmers, and accessible spring physics."
---

# Micro-Interactions & Tactile Feedback

Static UI feels dead. Great software feels physical, responsive, and tactile.

---

## 1. Tactile Button & Card States

Buttons and clickable surfaces should give immediate tactile feedback:

* **Hover State:**
  - Subtle brightness shift: `hover:bg-zinc-800` or `hover:border-zinc-700`.
  - Micro-lift (cards only): `transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md`.
* **Active (Pressed) State:**
  - Press compression: `active:scale-[0.98]` or `active:translate-y-0`.
* **Focus Visible:**
  - Always provide crisp focus indicators: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-400`.

---

## 2. Timing & Easing Curves

1. **Micro-States (Hover, Focus, Press):**
   - Duration: **100ms – 150ms**.
   - Easing: `ease-out` (fast start, smooth stop).
2. **Sheet / Modal / Dropdown Transitions:**
   - Duration: **200ms – 250ms**.
   - Easing: Cubic bezier spring `cubic-bezier(0.16, 1, 0.3, 1)`.
3. **Avoid Over-Animation:**
   - Never delay the user's action with long animations (>300ms).
   - Motion should feel like physical feedback, not a cartoon.

---

## 3. Skeleton Loading Shimmers

Instead of spinners, use structured pulse skeletons matching the exact geometry of the loading cards:
```html
<div class="animate-pulse flex space-x-4">
  <div class="rounded-full bg-zinc-800 h-10 w-10"></div>
  <div class="flex-1 space-y-2 py-1">
    <div class="h-4 bg-zinc-800 rounded w-3/4"></div>
    <div class="h-3 bg-zinc-800 rounded w-1/2"></div>
  </div>
</div>
```
