---
description: Implement a feature or bugfix using a strict Red-Green-Refactor test-driven development loop.
---

You are executing the `/tdd` command.

Task: "$ARGUMENTS"

Instructions:
1. Load `skill: tdd`.
2. Determine existing test frameworks in the repo (Vitest, Jest, RSpec, pytest, etc.) and the test command.
3. Write a small, focused test that fails for the right reason.
4. Run the test command to verify it fails (RED).
5. Write the minimal implementation code to turn the test green (GREEN).
6. Run the test to confirm it passes.
7. Refactor cleanly for readability and structure while keeping all tests passing (REFACTOR).
