import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const SKILLS_DIR = path.join(ROOT_DIR, 'skills');
const COMMANDS_DIR = path.join(ROOT_DIR, 'commands');

let totalSkills = 0;
let totalCommands = 0;
let errors = [];
let warnings = [];

function parseFrontmatter(content, filePath) {
  if (!content.startsWith('---')) {
    return { error: 'Missing opening frontmatter delimiter (---)' };
  }
  const endIdx = content.indexOf('\n---', 3);
  if (endIdx === -1) {
    return { error: 'Missing closing frontmatter delimiter (---)' };
  }

  const rawYaml = content.slice(3, endIdx).trim();
  const body = content.slice(endIdx + 4).trim();

  // Simple, robust YAML parser for frontmatter
  const fields = {};
  const lines = rawYaml.split('\n');
  let currentKey = null;
  let currentValue = '';

  for (const line of lines) {
    const match = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (match) {
      if (currentKey) {
        fields[currentKey] = currentValue.trim();
      }
      currentKey = match[1];
      currentValue = match[2];
    } else if (currentKey) {
      currentValue += ' ' + line.trim();
    }
  }
  if (currentKey) {
    fields[currentKey] = currentValue.trim();
  }

  return { fields, body };
}

function validateSkill(skillPath, folderName) {
  totalSkills++;
  const content = fs.readFileSync(skillPath, 'utf8');
  const { fields, body, error } = parseFrontmatter(content, skillPath);

  if (error) {
    errors.push(`[${folderName}] Frontmatter error: ${error}`);
    return;
  }

  // 1. Name validation
  if (!fields.name) {
    errors.push(`[${folderName}] Missing required 'name' in frontmatter`);
  } else {
    const name = fields.name.replace(/['"]/g, '').trim();
    if (name !== folderName) {
      warnings.push(`[${folderName}] Skill name '${name}' differs from folder name '${folderName}'`);
    }
    if (!/^[a-z0-9-]+$/.test(name)) {
      errors.push(`[${folderName}] Name '${name}' must be lowercase alphanumeric with hyphens`);
    }
    if (name.length > 64) {
      errors.push(`[${folderName}] Name '${name}' exceeds 64 characters limit`);
    }
  }

  // 2. Description validation
  if (!fields.description) {
    errors.push(`[${folderName}] Missing required 'description' in frontmatter`);
  } else {
    const desc = fields.description.replace(/['"]/g, '').trim();
    if (desc.length < 20) {
      warnings.push(`[${folderName}] Description seems very short (${desc.length} chars)`);
    }
  }

  // 3. Body validation
  if (!body || body.length < 20) {
    errors.push(`[${folderName}] Skill body is empty or too short (${body ? body.length : 0} chars)`);
  }
}

function walkSkills(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const subDir = path.join(dir, entry.name);
      const skillFile = path.join(subDir, 'SKILL.md');
      if (fs.existsSync(skillFile)) {
        validateSkill(skillFile, entry.name);
      } else {
        walkSkills(subDir);
      }
    }
  }
}

function validateCommands() {
  if (!fs.existsSync(COMMANDS_DIR)) return;
  const entries = fs.readdirSync(COMMANDS_DIR, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith('.md')) {
      totalCommands++;
      const cmdPath = path.join(COMMANDS_DIR, entry.name);
      const content = fs.readFileSync(cmdPath, 'utf8');
      const { fields, body, error } = parseFrontmatter(content, cmdPath);

      if (error) {
        errors.push(`[Command: ${entry.name}] Frontmatter error: ${error}`);
      } else {
        if (!fields.description) {
          errors.push(`[Command: ${entry.name}] Missing 'description' in frontmatter`);
        }
        if (!body || body.length < 20) {
          errors.push(`[Command: ${entry.name}] Command body is empty`);
        }
      }
    }
  }
}

console.log('Validating creative-agent skills and commands...\n');
walkSkills(SKILLS_DIR);
validateCommands();

console.log(`✓ Audited ${totalSkills} skills across all categories`);
console.log(`✓ Audited ${totalCommands} slash commands`);

if (warnings.length > 0) {
  console.log(`\n⚠️ Warnings (${warnings.length}):`);
  for (const w of warnings) {
    console.log(`  - ${w}`);
  }
}

if (errors.length > 0) {
  console.error(`\n❌ Validation Failed with ${errors.length} error(s):`);
  for (const e of errors) {
    console.error(`  - ${e}`);
  }
  process.exit(1);
} else {
  console.log('\n✅ All skills and commands passed validation with 0 errors!');
  process.exit(0);
}
