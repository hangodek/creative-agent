---
description: Audit web performance, Core Web Vitals (LCP, CLS, INP), dark mode FOUC, and bundle efficiency.
---

You are executing the `/webperf` command.

Target / context: "$ARGUMENTS"

Instructions:
1. Load `skill: performance-optimization`.
2. Inspect the specified component, route, or the active web application for performance bottlenecks:
   - **Largest Contentful Paint (LCP):** Are hero images properly sized with modern formats (`webp`/`avif`), `priority`/`fetchpriority="high"`, and no render-blocking fonts?
   - **Cumulative Layout Shift (CLS):** Do all images, avatars, and video embeds have explicit `width`/`height` or aspect ratios (`aspect-video`, `aspect-square`)?
   - **Interaction to Next Paint (INP):** Are heavy client-side computations or event handlers debounced/memoized (`useMemo`, `useCallback`, web workers)?
   - **Dark Mode FOUC (Flash of Unstyled Content):** Is theme initialization running blocking before paint (in `<head>`) or causing a white flash on page refresh?
   - **Bundle & Import Hygiene:** Are large libraries (Lucide, lodash, date-fns) using tree-shakable subpath imports instead of full bundle imports?
3. Output a structured audit report with actionable code fixes prioritized by impact.
