---
name: adapter-shadcn-ui
description: >
  Maps design system archetype tokens (Spotify, Linear, Stripe, Notion, Supabase, etc.) directly into
  existing shadcn/ui component primitives (@/components/ui/button, card, dialog, sheet, table, dropdown-menu)
  in React and Next.js applications, preserving accessible Radix UI mechanics while applying custom aesthetics.
---

# shadcn/ui Component Primitives Adapter

Use this skill when developing UI in a project that has `shadcn/ui` installed (detected by `@/components/ui` or `components.json`).

---

## 1. Token-to-Primitive Mapping

Rather than recreating buttons or modals from raw HTML elements, compose existing shadcn/ui components and style them with design archetype tokens:

### A. Buttons (`@/components/ui/button`)
* **Spotify / Shopify (Pill):**
  `<Button className="rounded-full bg-[#1ed760] text-black font-semibold hover:bg-[#1fdf64]">`
* **Linear / Raycast (Hairline Dark):**
  `<Button variant="outline" className="rounded-md bg-[#0f1011] border-[#23252a] text-[#f7f8f8] hover:bg-[#141516] hover:border-[#34343a]">`
* **Notion (Sober 8px):**
  `<Button className="rounded-lg bg-[#5645d4] text-white hover:bg-[#4534b3]">`

### B. Cards (`@/components/ui/card`)
* Use `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `CardFooter`.
* Apply the archetype's border and elevation:
  - Linear: `className="bg-[#0f1011] border-[#23252a] rounded-lg"`
  - Notion: `className="bg-white dark:bg-[#202020] border-[#e5e3df] dark:border-[#2f2f2f] shadow-sm"`
  - Stripe: `className="bg-white border-zinc-200/80 shadow-[0px_4px_16px_rgba(0,0,0,0.06)] rounded-xl"`

### C. Data Tables (`@/components/ui/table`)
* Ensure headers and numeric columns use `tabular-nums`.
* Apply subtle row border hairlines matching the design archetype.

---

## 2. Core Rule
NEVER delete or bypass shadcn's Radix UI accessibility attributes (`aria-*`, keyboard navigation focus rings). Layer the design system's aesthetic over the accessible primitive.

---

## 3. Official CLI Generator First
When a primitive (Dialog, Sheet, DropdownMenu, Tabs, Toast, Table) is required by the user's design but absent from `@/components/ui/`:
- ALWAYS execute `npx shadcn@latest add <component>` via `bash` to install the official, accessible Radix-backed primitive.
- NEVER handcraft raw, inaccessible modal or dropdown replacements when shadcn CLI is available.
