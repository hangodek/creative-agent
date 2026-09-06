---
name: adapter-go-templ-htmx
description: >
  Generates idiomatic Go Templ components (.templ) or Go html/template with HTMX attributes,
  Tailwind CSS, and strongly-typed constants/enums in pkg/constants/ or internal/domain/.
---

# Go Templ + HTMX Adapter

Use this skill when developing user interfaces in a Go web application.

---

## 1. Architectural Standards

1. **Templ Components (`*.templ`):**
   - Use `templ` for type-safe, compiled Go component templates:
     ```templ
     package components

     templ TaskItem(title string, completed bool) {
       <div class="flex items-center p-3 border border-zinc-200 rounded-lg">
         <span class={ templ.KV("line-through text-zinc-400", completed) }>{ title }</span>
       </div>
     }
     ```

2. **Single Source of Truth:**
   - Define status types and styling mappings in a dedicated Go package: `pkg/constants/theme.go`.

3. **HTMX Integration:**
   - Use HTMX attributes for asynchronous interaction: `hx-post`, `hx-target`, `hx-swap`.

4. **Tailwind CSS & Styling:**
   - Incorporate design system archetype tokens into Tailwind utility classes.

5. **Built-in Tooling & Compilation Loop:**
   - ALWAYS execute `templ generate` after adding or editing `.templ` component files before compiling.
   - Run `go vet ./...` or `go test ./...` to autonomously verify compilation before completion.
