#!/usr/bin/env bash
set -e

# Syncs skills and design systems from upstream repositories while protecting creative-agent enhancements
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
TMP_DIR="/tmp/opencode/sync-upstream"

echo "Syncing upstream sources..."
mkdir -p "$TMP_DIR"
cd "$TMP_DIR"

git clone --depth 1 https://github.com/mattpocock/skills.git mattpocock-skills 2>/dev/null || (cd mattpocock-skills && git pull)
git clone --depth 1 https://github.com/manalkaff/opendesign.git manalkaff-opendesign 2>/dev/null || (cd manalkaff-opendesign && git pull)
git clone --depth 1 https://github.com/VoltAgent/awesome-design-md.git voltagent-design-md 2>/dev/null || (cd voltagent-design-md && git pull)

echo "Copying Matt Pocock skills..."
cp -r mattpocock-skills/skills/engineering/* "$ROOT_DIR/skills/engineering/"
cp -r mattpocock-skills/skills/productivity/* "$ROOT_DIR/skills/productivity/"

echo "Copying OpenDesign workflow skills (protecting native-first customizations)..."
# Back up custom native-first files before sync
TMP_BACKUP=$(mktemp -d)
cp "$ROOT_DIR/skills/workflows/opendesign/SKILL.md" "$TMP_BACKUP/opendesign-skill.md"

# Copy upstream workflows
cp -r manalkaff-opendesign/skills/* "$ROOT_DIR/skills/workflows/"

# Restore our native-first enhancements
cp "$TMP_BACKUP/opendesign-skill.md" "$ROOT_DIR/skills/workflows/opendesign/SKILL.md"
rm -rf "$TMP_BACKUP"

echo "Rebuilding design system catalog with normalized names and guardrails..."
cd "$ROOT_DIR"
node scripts/build-design-skills.js

echo "Verifying all skills and commands..."
node scripts/validate-skills.mjs

echo "Sync and verification completed successfully!"
