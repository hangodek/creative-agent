---
description: Perform a two-axis code review on current diffs or specified targets (Standards & Intent).
---

You are executing the `/review` command.

Target / context: "$ARGUMENTS"

Instructions:
1. Load `skill: code-review`.
2. Inspect `git diff` against base branch or target files.
3. Review across two independent axes:
   - **Standards Axis:** Coding conventions, Fowler code smells, complexity, test coverage, security.
   - **Spec & Intent Axis:** Does this faithfully fulfill the user request / feature intent?
4. Output concise, prioritized findings with concrete line numbers and proposed code corrections.
