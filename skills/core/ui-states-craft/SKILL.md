---
name: ui-states-craft
description: >
  Implementation standards for the 5 production states of data-driven user interface components:
  Empty State (with thematic CTA), Loading / Skeleton Shimmer (geometry-matched), Error / Retry State
  (actionable retry trigger), Partial / Truncation State, and Populated State.
---

# The 5 Production States of UI

AI slop designs only for the "happy path" when data is perfectly populated. Professional software handles all 5 lifecycle states with elegance.

---

## 1. The 5 Mandatory UI States

| State | Visual Pattern | Requirements |
|---|---|---|
| **1. Empty State** | Thematic illustration / icon + concise copy | Render when array length is 0. Provide a clear primary CTA button (e.g. "Create your first task") so the user is never stuck in a dead-end. |
| **2. Loading / Skeleton** | Geometry-matched animated shimmer pulse | Skeleton blocks must match the exact height, width, and border-radius of the actual loaded cards or rows. Never use generic full-page circular spinners. |
| **3. Error / Retry** | Actionable warning banner or boundary | State clearly what went wrong in human language. Include an explicit "Retry" button that re-triggers the data fetch. |
| **4. Partial / Truncation** | Safe text clamping and wrapping | Test with 50-character titles, long email addresses, and overflow tag lists. Use `truncate`, `line-clamp-2`, or `flex-wrap` so content never breaks layout containers. |
| **5. Populated State** | Primary, high-finish UI | The standard, polished interface displaying real domain mock data. |

---

## 2. Skeleton Shimmer Anatomy (Tailwind Example)

```html
<!-- Skeleton geometry matching a task/card row -->
<div class="animate-pulse flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
  <div class="flex items-center gap-3">
    <div class="w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-800"></div>
    <div class="space-y-1.5">
      <div class="w-48 h-4 rounded bg-zinc-200 dark:bg-zinc-800"></div>
      <div class="w-24 h-3 rounded bg-zinc-100 dark:bg-zinc-800/60"></div>
    </div>
  </div>
  <div class="w-16 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800/60"></div>
</div>
```
