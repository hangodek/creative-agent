#!/usr/bin/env bash
set -e

# Syncs skills and design systems from upstream repositories
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

echo "Copying OpenDesign workflow skills..."
cp -r manalkaff-opendesign/skills/* "$ROOT_DIR/skills/workflows/"

echo "Rebuilding design system catalog..."
cd "$ROOT_DIR"
node scripts/build-design-skills.js

echo "Sync completed successfully!"
