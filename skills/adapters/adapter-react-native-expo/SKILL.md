---
name: adapter-react-native-expo
description: >
  Generates production-grade mobile UI components for React Native and Expo applications.
  Supports TypeScript, React Native StyleSheet or NativeWind (Tailwind), react-native-safe-area-context,
  lucide-react-native icons, and tactile Pressable interactions with haptic feedback.
---

# React Native & Expo Adapter

Use this skill when generating or refactoring user interfaces in a React Native or Expo mobile codebase.

---

## 1. Mobile Design Principles

1. **Touch Targets:**
   - Minimum interactive touch target is **44×44 pt** (Apple Human Interface Guidelines & Material Design).
   - Use `Pressable` or `TouchableOpacity` with active opacity or scale feedback:
     ```tsx
     <Pressable
       onPress={handlePress}
       style={({ pressed }) => [
         styles.button,
         pressed && { opacity: 0.85, transform: [{ scale: 0.98 }] }
       ]}
     >
     ```

2. **Safe Area Insets:**
   - Always account for the notch, dynamic island, and home indicator bar:
     ```tsx
     import { useSafeAreaInsets } from 'react-native-safe-area-context';
     // apply insets.top, insets.bottom
     ```

3. **Styling Strategy (Detect NativeWind vs StyleSheet):**
   - If `nativewind` is installed in `package.json`, use Tailwind classes via `className="..."`.
   - Otherwise, use idiomatic `StyleSheet.create({ ... })` with design tokens mapped to hex values.

4. **Icons:**
   - Use `lucide-react-native` or `@expo/vector-icons`.
