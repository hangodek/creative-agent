---
name: zero-fouc-craft
description: >
  Zero-FOUC (Flash of Unstyled Content) architectural standards for dark/light mode toggles.
  Guarantees zero white flashes on page reload by running synchronous theme initialization
  inside the document head before the first paint, using CSS color-scheme, and smooth transitions.
---

# Zero-FOUC Color Mode Architecture

Nothing breaks the illusion of software quality faster than a dark mode website blinding the user with a 0.5-second white flash (*Flash of Unstyled Content*) every time a page is reloaded or navigated.

---

## 1. The Head-Blocking Theme Initialization Script

To eliminate FOUC, theme resolution MUST run synchronously in `<head>` before the DOM paints:

### In React / Next.js / Vite (`index.html` or `app/layout.tsx`):
```html
<head>
  <script>
    (function() {
      try {
        var theme = localStorage.getItem('theme_mode');
        var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (theme === 'dark' || (!theme && supportDark)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })();
  </script>
</head>
```

### In Rails / Laravel / Django / Astro:
Inject the equivalent inline `<script>` into `app/views/layouts/application.html.erb` or `resources/views/layouts/app.blade.php`.

---

## 2. CSS Color-Scheme Declaration

Always pair the theme toggle with the CSS `color-scheme` property so native browser scrollbars, form inputs, and checkmarks automatically inherit the correct theme:

```css
:root {
  color-scheme: light;
}

.dark {
  color-scheme: dark;
}
```

---

## 3. Smooth Transition Rule

Apply smooth micro-transitions on background and border colors, but NEVER animate the initial load:
```css
body {
  transition: background-color 150ms ease, color 150ms ease;
}
```
