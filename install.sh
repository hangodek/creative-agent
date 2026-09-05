#!/usr/bin/env bash
set -e

# Creative Agent Universal Installer
# Works across OpenCode, Claude Code, Antigravity, Cursor, and Codex CLI

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_MODE="${1:---auto}"

BOLD="\033[1m"
GREEN="\033[0;32m"
BLUE="\033[0;34m"
YELLOW="\033[0;33m"
RESET="\033[0m"

echo -e "${BOLD}${BLUE}╔════════════════════════════════════════════════════════╗${RESET}"
echo -e "${BOLD}${BLUE}║             CREATIVE AGENT SKILLS INSTALLER            ║${RESET}"
echo -e "${BOLD}${BLUE}╚════════════════════════════════════════════════════════╝${RESET}"
echo ""

install_to() {
  local target_dir="$1"
  local agent_name="$2"
  
  mkdir -p "$target_dir"
  echo -e "${BLUE}▶ Linking skills into ${BOLD}${agent_name}${RESET} (${target_dir})..."
  
  # Link all skill subdirectories
  for category in engineering productivity workflows adapters core design-systems; do
    if [ -d "$SCRIPT_DIR/skills/$category" ]; then
      for skill_path in "$SCRIPT_DIR/skills/$category"/*; do
        if [ -d "$skill_path" ]; then
          local skill_name=$(basename "$skill_path")
          ln -sfn "$skill_path" "$target_dir/$skill_name"
        fi
      done
    fi
  done
  
  echo -e "${GREEN}✓ Successfully linked into ${agent_name}${RESET}"
}

INSTALLED_COUNT=0

# 1. Antigravity / Shared Agent Standard (~/.agents/skills)
if [ -d "$HOME/.agents" ] || [ "$TARGET_MODE" == "--all" ] || [ "$TARGET_MODE" == "--agents" ]; then
  install_to "$HOME/.agents/skills" "Antigravity & Agentic CLI"
  INSTALLED_COUNT=$((INSTALLED_COUNT + 1))
fi

# 2. OpenCode (~/.config/opencode/skills)
if [ -d "$HOME/.config/opencode" ] || [ "$TARGET_MODE" == "--all" ] || [ "$TARGET_MODE" == "--opencode" ]; then
  install_to "$HOME/.config/opencode/skills" "OpenCode (Global)"
  INSTALLED_COUNT=$((INSTALLED_COUNT + 1))
fi

# 3. Claude Code (~/.claude/skills)
if [ -d "$HOME/.claude" ] || [ "$TARGET_MODE" == "--all" ] || [ "$TARGET_MODE" == "--claude" ]; then
  install_to "$HOME/.claude/skills" "Claude Code (Global)"
  INSTALLED_COUNT=$((INSTALLED_COUNT + 1))
fi

# Fallback: If nothing was detected, install into ~/.agents/skills as universal default
if [ $INSTALLED_COUNT -eq 0 ]; then
  echo -e "${YELLOW}No existing agent folder detected. Creating universal default in ~/.agents/skills...${RESET}"
  install_to "$HOME/.agents/skills" "Universal Agents Standard"
fi

echo ""
echo -e "${GREEN}${BOLD}Done! 100+ skills (74 brand design systems, 25 engineering/productivity skills, and dynamic framework adapters) are now live.${RESET}"
echo -e "Restart your agent or CLI session to start using them."
