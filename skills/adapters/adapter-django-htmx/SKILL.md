---
name: adapter-django-htmx
description: >
  Generates idiomatic Django template partials with HTMX for reactive client-server interactions,
  Tailwind CSS for styling, and centralized choices/constants in constants.py or choices.py.
---

# Django + HTMX Adapter

Use this skill when developing user interfaces in a Python Django application.

---

## 1. Architectural Standards

1. **Template Partials & Components (`templates/components/`):**
   - Break large templates into modular partials (e.g. `_task_item.html`, `_task_list.html`).
   - Keep views under 250 lines; place complex query logic in Django Models, Managers, or Service modules.

2. **Single Source of Truth for Constants:**
   - Define status dictionaries and category choices in `models.TextChoices` or a centralized `constants.py`:
     ```python
     # constants.py
     CATEGORY_STYLES = {
         "Orders": {"bg": "bg-blue-100", "text": "text-blue-800"},
         "Inventory": {"bg": "bg-purple-100", "text": "text-purple-800"},
     }
     ```

3. **HTMX Integration:**
   - Use `hx-get`, `hx-post`, `hx-target`, and `hx-swap="outerHTML"` for reactive updates without full page reloads.
   - Example:
     ```html
     <button hx-post="{% url 'toggle_task' task.id %}"
             hx-target="#task-{{ task.id }}"
             hx-swap="outerHTML"
             class="cursor-pointer ...">
     ```

4. **Tailwind CSS:**
   - Apply design system archetype tokens into Tailwind utilities.

5. **Django Management Commands First:**
   - ALWAYS execute `python manage.py startapp <name>` when adding modular application boundaries to ensure `apps.py` and `models.py` follow Django conventions.
   - Run `python manage.py check` or `ruff check` to autonomously verify syntax and framework configuration before declaring completion.
