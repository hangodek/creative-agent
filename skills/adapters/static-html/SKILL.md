---
name: adapter-static-html
description: "Generates self-contained, standalone single-file HTML5 prototypes with Tailwind CSS CDN, Google Fonts, accessible semantic tags, and interactive vanilla JavaScript when a quick visual mockup or throwaway demo is requested."
---

# Static HTML Prototype Adapter

Use this skill ONLY when the user explicitly asks for a standalone HTML file, throwaway prototype, or when working in a non-framework directory.

## Principles

1. **Self-Contained Single File:**
   - Include Tailwind CSS Play CDN: `<script src="https://cdn.tailwindcss.com"></script>`.
   - Embed customized Tailwind config directly in a `<script>` tag:
     ```html
     <script>
       tailwind.config = {
         darkMode: 'class',
         theme: {
           extend: {
             colors: {
               brand: { ... }
             }
           }
         }
       }
     </script>
     ```

2. **Google Fonts & Typography:**
   - Embed font stylesheets matching the chosen design system (e.g. Plus Jakarta Sans, Inter, Geist, Space Grotesk).

3. **Inline Micro-Interactions:**
   - Add minimal vanilla JavaScript for tab switching, modal opening, or theme toggling.
   - Ensure the file can be opened by double-clicking in any browser without a build step or server.
