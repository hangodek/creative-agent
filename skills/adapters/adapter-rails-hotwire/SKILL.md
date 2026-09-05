---
name: adapter-rails-hotwire
description: "Generates idiomatic Ruby on Rails views (.html.erb), ViewComponents, or Phlex components with Tailwind CSS, Hotwire (Turbo Frames, Turbo Streams), and Stimulus controllers for micro-interactions."
---

# Rails + Hotwire Adapter

Use this skill when generating UI code in a Ruby on Rails application.

## Principles

1. **Idiomatic Rails Markup:**
   - Use ERB partials (`_card.html.erb`) or ViewComponents (`app/components/`).
   - Use standard Rails helpers: `link_to`, `button_to`, `image_tag`, `dom_id(record)`.
   - Never write hardcoded `<a href="/...">` when a Rails route helper exists.

2. **Tailwind CSS in Rails:**
   - Use Tailwind utility classes directly in `class="..."`.
   - Map color tokens from the active design system into Tailwind classes or arbitrary hex values (e.g. `class="bg-[#121212] text-[#f7f8f8] border border-[#23252a]"`).

3. **Hotwire & Turbo Integration:**
   - Wrap dynamic/replaceable sections in `<%= turbo_frame_tag ... do %>`.
   - Ensure form submissions and list updates degrade gracefully.

4. **Stimulus Controllers for Interactivity:**
   - For interactive states (dropdowns, tabs, media player controls, copy buttons):
     Create or connect to Stimulus controllers:
     ```html
     <div data-controller="dropdown" class="relative">
       <button data-action="click->dropdown#toggle" class="...">Actions</button>
       <div data-dropdown-target="menu" class="hidden absolute ...">...</div>
     </div>
     ```

5. **Icon Integration:**
   - If `heroicon` or `lucide` view helpers are installed, use them: `<%= lucide_icon "play", class: "w-5 h-5" %>`.
   - Otherwise, generate clean, accessible SVG snippets with `aria-hidden="true"`.
