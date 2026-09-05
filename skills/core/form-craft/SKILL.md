---
name: form-craft
description: >
  Production-grade form engineering standards across all frameworks (React, Rails, Laravel, Vue, Svelte, Django).
  Enforces explicit label-input associations (id/htmlFor), keyboard submit on Enter, inline validation error messages
  with aria-invalid, button loading states during async submission, and auto-focus on the first invalid field.
---

# Form Craft & Resilient Input Engineering

Forms are the primary conversion and data-capture interface in software. Sloppy forms with broken tab order, layout-shifting error messages, or unresponsive submit buttons destroy user trust.

---

## The 6 Mandatory Form Invariants

1. **Explicit Label Association:**
   - Every `<input>`, `<textarea>`, and `<select>` MUST have an associated `<label>` connected via `id` and `htmlFor` (or `for` in HTML/Blade/ERB). Never rely on visual proximity or unlinked placeholder text alone.

2. **Keyboard Usability & Submission:**
   - Pressing `Enter` inside single-line inputs must submit the form.
   - Pressing `Esc` must close open select dropdowns or date pickers.
   - Never remove browser tab-index order.

3. **Inline Validation Without Layout Jitter:**
   - Error messages must render beneath the respective input using `aria-invalid="true"` and `aria-describedby="error-id"`.
   - Reserve space or use micro-height transitions so error messages do not cause jarring vertical page jumps when toggled.

4. **Button Loading & Debounced Submission:**
   - Primary submit buttons must display an active loading state (shimmer or subtle spinner) and disable further clicks during asynchronous requests.
   - Prevent double-submission bugs.

5. **Auto-Focus on First Error:**
   - Upon form validation failure, automatically scroll and focus the cursor into the first invalid input field.

6. **Input Types & Mobile Keyboards:**
   - Use correct semantic types: `type="email"`, `type="tel"`, `type="number"`, and `inputmode="numeric"` to summon the appropriate mobile virtual keyboard.
