#!/usr/bin/env bash
set -e

# Creative Agent Universal Installer
# Works across OpenCode, Claude Code, Antigravity, Cursor, and Codex CLI

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_MODE="${1:---auto}"
EXTRA_PATH="$2"

BOLD="\033[1m"
GREEN="\033[0;32m"
BLUE="\033[0;34m"
YELLOW="\033[0;33m"
RESET="\033[0m"

echo -e "${BOLD}${BLUE}╔════════════════════════════════════════════════════════╗${RESET}"
echo -e "${BOLD}${BLUE}║             CREATIVE AGENT SKILLS INSTALLER            ║${RESET}"
echo -e "${BOLD}${BLUE}╚════════════════════════════════════════════════════════╝${RESET}"
echo ""

install_skills_to() {
  local target_dir="$1"
  local agent_name="$2"
  
  mkdir -p "$target_dir"
  # Self-cleaning: remove any broken or stale symlinks first
  find "$target_dir" -xtype l -delete 2>/dev/null || true

  echo -e "${BLUE}▶ Linking skills into ${BOLD}${agent_name}${RESET} (${target_dir})..."
  
  local count=0
  for category in engineering productivity workflows adapters core design-systems; do
    if [ -d "$SCRIPT_DIR/skills/$category" ]; then
      for skill_path in "$SCRIPT_DIR/skills/$category"/*; do
        if [ -d "$skill_path" ]; then
          local skill_name=$(basename "$skill_path")
          ln -sfn "$skill_path" "$target_dir/$skill_name"
          count=$((count + 1))
        fi
      done
    fi
  done
  
  echo -e "${GREEN}✓ Linked ${count} skills into ${agent_name}${RESET}"
}

install_commands_to() {
  local target_dir="$1"
  local agent_name="$2"
  
  if [ -d "$SCRIPT_DIR/commands" ]; then
    mkdir -p "$target_dir"
    find "$target_dir" -xtype l -delete 2>/dev/null || true
    echo -e "${BLUE}▶ Linking slash commands into ${BOLD}${agent_name}${RESET} (${target_dir})..."
    
    local count=0
    for cmd_path in "$SCRIPT_DIR/commands"/*.md; do
      if [ -f "$cmd_path" ]; then
        local cmd_name=$(basename "$cmd_path")
        ln -sfn "$cmd_path" "$target_dir/$cmd_name"
        count=$((count + 1))
      fi
    done
    echo -e "${GREEN}✓ Linked ${count} commands (/design, /tdd, /review, etc.) into ${agent_name}${RESET}"
  fi
}

install_rules_to() {
  local target_file="$1"
  local agent_name="$2"
  
  if [ -f "$SCRIPT_DIR/rules/AGENTS.md" ]; then
    mkdir -p "$(dirname "$target_file")"
    ln -sfn "$SCRIPT_DIR/rules/AGENTS.md" "$target_file"
    echo -e "${GREEN}✓ Linked Universal Polyglot Guardian (AGENTS.md) into ${agent_name}${RESET}"
  fi
}

# Project-Level Installation (--project or -p)
if [ "$TARGET_MODE" == "--project" ] || [ "$TARGET_MODE" == "-p" ]; then
  PROJECT_ROOT="${EXTRA_PATH:-$(pwd)}"
  echo -e "${BLUE}Installing skills & rules locally into project at: ${BOLD}${PROJECT_ROOT}${RESET}..."
  
  install_skills_to "$PROJECT_ROOT/.opencode/skills" "Project OpenCode"
  install_commands_to "$PROJECT_ROOT/.opencode/command" "Project OpenCode Commands"
  install_rules_to "$PROJECT_ROOT/AGENTS.md" "Project Root"
  
  if [ -d "$PROJECT_ROOT/.claude" ]; then
    install_skills_to "$PROJECT_ROOT/.claude/skills" "Project Claude Code"
    install_rules_to "$PROJECT_ROOT/.claude/AGENTS.md" "Project Claude Code"
  fi
  
  echo ""
  echo -e "${GREEN}${BOLD}Project installation complete!${RESET}"
  exit 0
fi

# Clean-only mode (--clean)
if [ "$TARGET_MODE" == "--clean" ]; then
  echo -e "${YELLOW}Cleaning broken symlinks across agent directories...${RESET}"
  find "$HOME/.config/opencode/skills" -xtype l -delete 2>/dev/null || true
  find "$HOME/.config/opencode/command" -xtype l -delete 2>/dev/null || true
  find "$HOME/.agents/skills" -xtype l -delete 2>/dev/null || true
  find "$HOME/.claude/skills" -xtype l -delete 2>/dev/null || true
  find "$HOME/.claude/commands" -xtype l -delete 2>/dev/null || true
  echo -e "${GREEN}Cleanup complete!${RESET}"
  exit 0
fi

# Global Installation (Auto-Detect or Explicit)
INSTALLED_COUNT=0

# 1. Antigravity / Shared Agent Standard (~/.agents/skills)
if [ -d "$HOME/.agents" ] || [ "$TARGET_MODE" == "--all" ] || [ "$TARGET_MODE" == "--agents" ]; then
  install_skills_to "$HOME/.agents/skills" "Antigravity & Agentic CLI"
  install_rules_to "$HOME/.agents/AGENTS.md" "Antigravity & Agentic CLI"
  INSTALLED_COUNT=$((INSTALLED_COUNT + 1))
fi

# 2. OpenCode (~/.config/opencode/skills & commands)
if [ -d "$HOME/.config/opencode" ] || [ "$TARGET_MODE" == "--all" ] || [ "$TARGET_MODE" == "--opencode" ]; then
  install_skills_to "$HOME/.config/opencode/skills" "OpenCode"
  install_commands_to "$HOME/.config/opencode/command" "OpenCode"
  install_rules_to "$HOME/.config/opencode/AGENTS.md" "OpenCode"
  INSTALLED_COUNT=$((INSTALLED_COUNT + 1))
fi

# 3. Claude Code (~/.claude/skills & commands)
if [ -d "$HOME/.claude" ] || [ "$TARGET_MODE" == "--all" ] || [ "$TARGET_MODE" == "--claude" ]; then
  install_skills_to "$HOME/.claude/skills" "Claude Code"
  install_commands_to "$HOME/.claude/commands" "Claude Code"
  install_rules_to "$HOME/.claude/AGENTS.md" "Claude Code"
  INSTALLED_COUNT=$((INSTALLED_COUNT + 1))
fi

# Fallback: If nothing was detected, install into ~/.agents/skills as universal default
if [ $INSTALLED_COUNT -eq 0 ]; then
  echo -e "${YELLOW}No existing agent folder detected. Creating universal default in ~/.agents/skills...${RESET}"
  install_skills_to "$HOME/.agents/skills" "Universal Agents Standard"
  install_rules_to "$HOME/.agents/AGENTS.md" "Universal Agents Standard"
fi

echo ""
echo -e "${GREEN}${BOLD}Done! 120+ skills, slash commands, and Universal Polyglot Guardian rules are live.${RESET}"
echo -e "Restart your agent session to start using commands like ${BOLD}/design${RESET}, ${BOLD}/tdd${RESET}, and ${BOLD}/review${RESET}."
