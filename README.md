# Creative Agent (⚡ craft-skills)

> **The Universal Agent Skills Engine for Engineering Excellence & World-Class Design Systems.**  
> Built for AI coding agents: **OpenCode**, **Claude Code**, **Antigravity**, **Cursor**, and **Codex CLI**.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![CI](https://github.com/hangodek/creative-agent/actions/workflows/ci.yml/badge.svg)](https://github.com/hangodek/creative-agent/actions/workflows/ci.yml)
[![Skills Count](https://img.shields.io/badge/Total%20Skills-133%2B-emerald.svg)](#skills-catalog)
[![Design Systems](https://img.shields.io/badge/Design%20Systems-74%20Brands-purple.svg)](skills/design-systems/INDEX.md)
[![Multi-Agent Ready](https://img.shields.io/badge/Multi--Agent-OpenCode%20%7C%20Claude%20Code%20%7C%20Cursor%20%7C%20Antigravity-orange.svg)](#installation)

---

## 💡 Why This Exists

### The Problems with Existing Tools
1. **Context Bloat & Latency:** Tools like OpenDesign or monolithic design systems dump 50,000–100,000+ tokens of raw HTML, previews, and component catalogs into every single prompt. Inference slows to a crawl, local models choke, and API costs skyrocket.
2. **Framework Mismatch:** Existing visual design generators spit out raw, static HTML/CSS. If you're building in **React / Next.js**, **Ruby on Rails (Hotwire/ERB)**, **Laravel (Blade/Livewire)**, **Django**, **Vue**, or **Svelte**, you're forced to painfully copy-paste thousands of lines of code and run back-and-forth prompt loops to convert it.
3. **The "AI Slop" Trap:** Without strict aesthetic guardrails, coding agents gravitate towards the mathematical average of their training data: dark purple-cyan gradient cards, washed-out low-contrast text, excessive glassmorphism blur, and cliché marketing copy (*"Empower your seamless workflow"*).

### The Creative Agent Solution
* **⚡ Just-in-Time (JIT) Modular Loading:** Each skill and design system is an isolated `SKILL.md`. When you ask for a Spotify-style dashboard in Rails, only ~1,200 tokens of relevant tokens and adapter rules are loaded. Instant TTFT, ultra-lightweight, zero lag.
* **🛠 12 Polyglot Framework Adapters:** Automatically introspects your workspace (`package.json`, `Gemfile`, `composer.json`, `pyproject.toml`, `go.mod`, `pubspec.yaml`, Tailwind v3/v4 setup) and outputs idiomatic, production-ready code directly into your project files.
* **🛡 Universal Polyglot Guardian (`rules/AGENTS.md`):** High-level architectural invariants (Strict Scope Restraint, Single Source of Truth / DRY constants, Component Line Budget < 250 lines, Autonomous Self-Verification Loop, 5 States of UI).
* **🌐 134+ Production-Grade Skills:** Combines Matt Pocock's complete engineering and productivity suite (TDD, Code Review, Architecture Deepening, Grilling), OpenDesign workflows, and 74 measured real-world brand design systems.
* **🛡️ Hardened Against Edge Cases:** Built-in resilience for Monorepos (`apps/*`), Hybrid stacks (Rails+React, Django+Vue, Go+Svelte), Non-UI backends/CLI tools, and proprietary font fallbacks.

---

## 📦 What's Inside

```
creative-agent/
├── rules/
│   └── AGENTS.md              # Universal Polyglot Guardian (Layer 1 Standing Invariants)
├── skills/
│   ├── design-systems/        # 74 Brand Design Systems (Spotify, Linear, Stripe, Apple, etc.)
│   ├── engineering/           # 18 Matt Pocock Engineering Skills (TDD, Code Review, etc.)
│   ├── productivity/          # 7 Matt Pocock Productivity Skills (Grill-Me, Handoff, etc.)
│   ├── workflows/             # 10 OpenDesign Workflow Skills (Director, Deck, Wireframe, etc.)
│   ├── adapters/              # 12 Polyglot Framework Adapters (React, Rails, Laravel, Django, etc.)
│   └── core/                  # Form Craft, 5-State UI, Zero-FOUC, Anti-Slop Manifesto, Palette Craft
│
├── commands/                  # 7 Multi-Agent Slash Commands (/design, /tdd, /review, /webperf)
├── .claude-plugin/            # Official Claude Code Plugin Manifest
├── .cursor-plugin/            # Cursor IDE Plugin Manifest
├── .codex-plugin/             # Codex CLI Manifest
├── install.sh                 # Multi-Agent Universal One-Liner Installer
└── scripts/
    ├── build-design-skills.js # Automated spec generator for design systems
    ├── validate-skills.mjs    # Automated quality gate test suite (npm test)
    └── sync-upstream.sh       # Regression-safe upstream sync pipeline
```

---

## 🚀 Quickstart & Installation

### Option 1: Universal Auto-Installer (Recommended)
Clones and links skills directly into whichever coding agents are detected on your machine (`~/.config/opencode`, `~/.claude`, `~/.agents`):

```bash
git clone https://github.com/hangodek/creative-agent.git
cd creative-agent
./install.sh
```

To install into your current project only (creates `.opencode/skills` and `.opencode/command`):
```bash
./install.sh --project
```

### Option 2: Claude Code Plugin
From inside Claude Code:
```bash
/plugin marketplace add hangodek/creative-agent
/plugin install creative-agent@creative-agent
```

### Option 3: Codex / Skills.sh
```bash
npx skills@latest add hangodek/creative-agent
```

---

## 🎯 How Triggering Works

You do not need to memorize commands. Skills are triggered through **Natural Intent**, **Slash Commands**, or **Autonomous Routing**:

### 1. Slash Commands (Instant CLI Shortcuts)
Pre-configured commands installed directly into your agent's command palette:
* `/design <brand|intent>` — Apply any design system (e.g. `/design linear`, `/design spotify`, `/design fintech`).
* `/tdd <feature>` — Red-Green-Refactor loop with automatic test verification.
* `/review [target]` — Two-axis pull request audit (Standards & Intent).
* `/grill <plan>` — Relentless requirement interrogation before coding.
* `/wireframe <concept>` — Generate 3 distinct architectural layout variations.
* `/deck <topic>` — Generate 1920×1080 HTML presentation decks.
* `/webperf [target]` — Core Web Vitals (LCP, CLS, INP) audit, dark mode FOUC check, and bundle profiling.

### 2. Natural Language (Model-Invoked)
Simply describe what you want in your natural workflow:
* *"Build a music player and playlist overview with the **Spotify** aesthetic."*  
  *(Agent triggers `design-spotify` + `framework-detector` + `anti-slop-manifesto`)*
* *"Refactor our billing view using **Stripe**'s clean light typography."*  
  *(Agent triggers `design-stripe` + `typography-craft`)*
* *"Recommend the best design system for my B2B analytics tool."*  
  *(Agent triggers `design-picker` to suggest 1 primary + 2 contrasting archetypes)*
* *"Let's build this feature using test-driven development."*  
  *(Agent triggers `tdd`)*

---

## 📚 Skills Catalog

### 🎨 74 Brand Design Systems
Full catalog with color hexes, typography, and live references: **[Browse Design Systems Catalog](skills/design-systems/INDEX.md)**.

* **Developer Tools & Infrastructure:** Vercel, Supabase, Cursor, Raycast, Warp, Expo, HashiCorp, PostHog, Sentry, ClickHouse, Sanity, Mintlify, Composio, MongoDB.
* **AI & LLM Platforms:** Claude, Mistral AI, Ollama, ElevenLabs, Cohere, Replicate, RunwayML, Together AI, VoltAgent, xAI, Minimax, OpenCode AI.
* **Fintech & Crypto:** Stripe, Revolut, Coinbase, Binance, Wise, Kraken, Mastercard.
* **Productivity & SaaS:** Linear, Notion, Cal.com, Intercom, Resend, Zapier, Superhuman.
* **Media & Consumer Tech:** Spotify, Apple, Uber, Airbnb, Pinterest, Nike, SpaceX, PlayStation, IBM, NVIDIA, The Verge, WIRED.
* **Creative & Design Tools:** Figma, Framer, Airtable, Miro, Webflow, Clay.
* **Automotive & Luxury:** Tesla, Ferrari, Lamborghini, Bugatti, BMW, BMW M, Renault.
* **Heritage & Retro:** Dell (1996), Nintendo (2001).

### 🛠 18 Engineering Skills (Matt Pocock)
* `tdd` — Red-green-refactor loop with strict feedback loops.
* `code-review` — Standards & spec review via parallel subagents.
* `diagnosing-bugs` — Scientific bug diagnosis: red-loop -> minimize -> hypothesize -> fix.
* `codebase-design` — Principles of deep modules and clean architectural seams.
* `improve-codebase-architecture` — Scan code for structural debt and deepen modules.
* `domain-modeling` — Synchronize domain terminology with `CONTEXT.md` and ADRs.
* `to-spec` — Turn conversation into actionable architectural specs.
* `to-tickets` — Deconstruct specs into dependency-linked tracer-bullet tickets.
* `implement` — Build tickets through TDD and review checkpoints.
* `wayfinder` — Large-scale initiative planning across multiple sessions.
* `prototype` — Fast exploratory throwaway prototypes.
* `research` — Cited, source-grounded investigations saved to markdown.
* `resolving-merge-conflicts` — Hunk-by-hunk conflict resolution by intent.
* `wizard` — Interactive bash scripts for human-guided operational tasks.
* `triage` — Structured issue tracker triage.
* `grill-with-docs` — Deep intake that updates domain models and ADRs.
* `ask-matt` — Meta-router to find the right engineering flow.
* `setup-matt-pocock-skills` — Project configuration initialization.

### ⚡ 7 Productivity Skills (Matt Pocock)
* `grill-me` — Rigorous requirement interrogation.
* `grilling` — Core questioning primitive.
* `handoff` — Context compaction for seamless agent-to-agent handover.
* `teach` — Interactive workspace-driven learning.
* `to-questionnaire` — Extract async questions for decision makers.
* `wait-what` — Clarify jargon and missed context in plain English.
* `writing-for-agents` — Guidelines for authoring high-performing agent instructions.

### 🖌 10 Design Workflows (OpenDesign)
* `opendesign` — Base design director workflow and intake.
* `frontend-design` — Distinctive aesthetic creation from scratch.
* `create-design-system` — Live token extraction from codebases.
* `wireframe` — Fast exploration of alternative layouts.
* `interactive-prototype` — Standalone clickable prototypes.
* `make-a-deck` — 1920×1080 slide decks.
* `make-tweakable` — Interactive in-browser variant toggles.
* `handoff-to-dev` — Universal developer handoff spec generator.
* `handoff-to-claude-code` — Specification generator for engineering handoff.
* `setup-opendesign` — Local output workspace initializer.
* `run-opendesign` — Preview server launcher.

### 🔌 12 Polyglot Framework Adapters
* `framework-detector` — Automatic repo stack discovery across 12+ frameworks.
* `adapter-react-tailwind` — React / Next.js + Tailwind + modular Custom Hooks.
* `adapter-rails-hotwire` — Rails ERB + Hotwire (Turbo/Stimulus) + Tailwind output.
* `adapter-laravel-blade` — Laravel Blade + Livewire 3 + Alpine.js + Tailwind output.
* `adapter-django-htmx` — Django Template Partials + HTMX + Tailwind output.
* `adapter-vue-nuxt` — Vue 3 / Nuxt Single File Components + Composables output.
* `adapter-svelte` — Svelte 5 (Runes) + SvelteKit output.
* `adapter-astro` — Astro Zero-JS Island Architecture + Content Collections.
* `adapter-go-templ-htmx` — Go Templ type-safe components + HTMX output.
* `adapter-flutter` — Flutter & Dart widgets + ThemeExtension tokens output.
* `adapter-react-native-expo` — React Native & Expo mobile UI (StyleSheet / NativeWind).
* `adapter-shadcn-ui` — Maps archetype tokens into existing shadcn/ui primitives.
* `adapter-static-html` — Single-file standalone prototype output.

### 🛡️ Core Craft & Quality Gates
* `code-refactor` — Proactive, behavior-preserving architecture cleanup and decomposition.
* `design-picker` — Intelligent design system recommender & advisor.
* `design-persist` — Master + Overrides pattern to eliminate multi-session design drift.
* `ui-pre-delivery-check` — 10-point mandatory quality & architecture gate.
* `form-craft` — Resilient input engineering, explicit labels, and inline error states.
* `ui-states-craft` — Complete 5-state UI implementation (Empty, Loading, Error, Overflow, Populated).
* `zero-fouc-craft` — Zero-flash theme initialization for light/dark mode.
* `anti-slop-manifesto` — Strict taste boundaries and negative constraints.
* `palette-craft` — Accessible semantic color scale generator (WCAG 2.2 AA).
* `typography-craft` — Mathematical type scale and optical tracking rules.
* `micro-interactions` — Tactile hover/active states and spring physics.

---

## 🧪 Quality Assurance & Testing

Every skill and slash command in this repository is automatically validated against strict schema rules (YAML frontmatter syntax, name-folder symmetry, character limits, and non-empty markdown bodies):

```bash
npm test
```

Expected output:
```
✓ Audited 134 skills across all categories
✓ Audited 7 slash commands
✅ All skills and commands passed validation with 0 errors!
```

---

## 🤝 Contributing & Upstream Sync

Keep your local catalog updated with upstream innovations:

```bash
npm run sync:upstream
```

Pull requests are welcome! To propose new design system archetypes, ensure your `DESIGN.md` contains verified color hexes, typography scales, geometry rules, and explicit *don'ts*.

---

## 📄 License

MIT © 2026 hangodek.  
Upstream design system analysis inspired by publicly observable design patterns from respective brand owners. All trademarks belong to their respective owners.
