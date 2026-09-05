---
name: adapter-flutter
description: >
  Generates idiomatic Flutter and Dart cross-platform mobile and desktop widgets,
  leveraging ThemeExtension for design system tokens (theme/app_colors.dart),
  responsive layout widgets, and clean Riverpod / BLoC / ValueNotifier state management.
---

# Flutter & Dart Adapter

Use this skill when developing cross-platform applications in Flutter / Dart.

---

## 1. Architectural Standards

1. **Design Tokens via ThemeExtension:**
   - Define design system color palettes and surfaces using Flutter's `ThemeExtension<AppColors>` in `lib/theme/app_colors.dart`:
     ```dart
     @immutable
     class AppColors extends ThemeExtension<AppColors> {
       final Color canvas;
       final Color surface;
       final Color accent;
       // copyWith, lerp implementations
     }
     ```

2. **Presentation Budget (< 250 Lines):**
   - Keep screen widgets under 250 lines.
   - Extract cards, list items, and input controls into isolated stateless widgets in `lib/widgets/`.

3. **State Decoupling:**
   - Separate business logic and API synchronization into Riverpod Notifiers, BLoC, or ChangeNotifier classes in `lib/providers/` or `lib/controllers/`.

4. **Responsive Layout:**
   - Use `LayoutBuilder`, `MediaQuery`, and `Flex`/`Row`/`Column` widgets to ensure flawless scaling from small phones to desktop windows.
