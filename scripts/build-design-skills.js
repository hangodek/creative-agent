import fs from 'fs';
import path from 'path';

const SRC_DIR = '/tmp/opencode/upstream/voltagent-design-md/design-md';
const README_PATH = '/tmp/opencode/upstream/voltagent-design-md/README.md';
const DEST_DIR = '/home/han/godek/projects/creative-agent/skills/design-systems';

// Slugs mapping for clean skill names
const SLUG_MAP = {
  'linear.app': 'linear',
  'mistral.ai': 'mistral',
  'opencode.ai': 'opencode-ai',
  'together.ai': 'together-ai',
  'x.ai': 'xai',
};

// Category mapping for nice cataloging
const CATEGORIES = {
  'AI & LLM Platforms': ['claude', 'cohere', 'elevenlabs', 'minimax', 'mistral', 'ollama', 'opencode-ai', 'replicate', 'runwayml', 'together-ai', 'voltagent', 'xai'],
  'Developer Tools & IDEs': ['cursor', 'expo', 'lovable', 'raycast', 'superhuman', 'vercel', 'warp'],
  'Backend, Database & DevOps': ['clickhouse', 'composio', 'hashicorp', 'mongodb', 'posthog', 'sanity', 'sentry', 'supabase'],
  'Productivity & SaaS': ['cal', 'intercom', 'linear', 'mintlify', 'notion', 'resend', 'zapier'],
  'Design & Creative Tools': ['airtable', 'clay', 'figma', 'framer', 'miro', 'webflow'],
  'Fintech & Crypto': ['binance', 'coinbase', 'kraken', 'mastercard', 'revolut', 'stripe', 'wise'],
  'E-commerce & Retail': ['airbnb', 'meta', 'nike', 'shopify', 'starbucks'],
  'Media & Consumer Tech': ['apple', 'hp', 'ibm', 'nvidia', 'pinterest', 'playstation', 'spacex', 'spotify', 'theverge', 'uber', 'vodafone', 'wired'],
  'Automotive & Luxury': ['bmw', 'bmw-m', 'bugatti', 'ferrari', 'lamborghini', 'renault', 'tesla'],
  'Retro & Heritage': ['dell-1996', 'nintendo-2001'],
};

function parseDescriptions() {
  const readme = fs.readFileSync(README_PATH, 'utf8');
  const map = {};
  const regex = /- \[?\*\*([^\]*]+)\*\*\]?\(https:\/\/getdesign\.md\/([^/]+)\/design-md\)\s*-\s*(.+)/g;
  let match;
  while ((match = regex.exec(readme)) !== null) {
    const rawBrand = match[1].trim();
    const rawSlug = match[2].trim();
    const desc = match[3].trim();
    const cleanSlug = SLUG_MAP[rawSlug] || rawSlug;
    map[cleanSlug] = { brand: rawBrand, desc };
    map[rawSlug] = { brand: rawBrand, desc };
  }
  return map;
}

function normalizeContent(rawContent) {
  // If file starts with YAML frontmatter, strip it and capture body
  if (rawContent.startsWith('---')) {
    const end = rawContent.indexOf('---', 3);
    if (end !== -1) {
      return rawContent.slice(end + 3).trim();
    }
  }
  return rawContent.trim();
}

function getCategory(slug) {
  for (const [cat, list] of Object.entries(CATEGORIES)) {
    if (list.includes(slug)) return cat;
  }
  return 'General';
}

function main() {
  fs.mkdirSync(DEST_DIR, { recursive: true });
  const descriptions = parseDescriptions();
  const entries = fs.readdirSync(SRC_DIR, { withFileTypes: true });

  const catalog = [];
  let count = 0;

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const rawSlug = entry.name;
    const cleanSlug = SLUG_MAP[rawSlug] || rawSlug;
    const sourceFolder = path.join(SRC_DIR, rawSlug);
    const designMdPath = path.join(sourceFolder, 'DESIGN.md');

    if (!fs.existsSync(designMdPath)) continue;

    const rawContent = fs.readFileSync(designMdPath, 'utf8');
    const contentBody = normalizeContent(rawContent);

    const meta = descriptions[cleanSlug] || descriptions[rawSlug] || {
      brand: cleanSlug.charAt(0).toUpperCase() + cleanSlug.slice(1),
      desc: `Visual design system and tokens inspired by ${cleanSlug}.`
    };

    const targetFolder = path.join(DEST_DIR, cleanSlug);
    fs.mkdirSync(targetFolder, { recursive: true });

    // Copy raw DESIGN.md
    fs.writeFileSync(path.join(targetFolder, 'DESIGN.md'), rawContent);

    // Build frontmatter for SKILL.md
    const skillName = `design-${cleanSlug}`;
    const sanitizedDesc = meta.desc.replace(/"/g, "'").replace(/\n/g, ' ');
    const fullDescription = `Apply the ${meta.brand} design system: ${sanitizedDesc} Use when designing UI components, landing pages, dashboards, or full applications in the ${meta.brand} aesthetic. Trigger on "${meta.brand}", "${cleanSlug}", or requests matching this visual language.`;

    const skillContent = `---
name: ${skillName}
description: "${fullDescription}"
---

${contentBody}
`;

    fs.writeFileSync(path.join(targetFolder, 'SKILL.md'), skillContent);

    catalog.push({
      slug: cleanSlug,
      skill: skillName,
      brand: meta.brand,
      description: meta.desc,
      category: getCategory(cleanSlug),
    });

    count++;
  }

  // Write catalog.json
  fs.writeFileSync(path.join(DEST_DIR, 'catalog.json'), JSON.stringify(catalog, null, 2));

  // Write catalog INDEX.md
  let indexMd = `# Design Systems Catalog\n\nTotal design systems available: **${count}**\n\n`;
  const grouped = {};
  for (const item of catalog) {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  }

  for (const [category, items] of Object.entries(grouped)) {
    indexMd += `### ${category}\n\n`;
    indexMd += `| Brand | Skill Trigger | Description |\n`;
    indexMd += `| :--- | :--- | :--- |\n`;
    for (const item of items) {
      indexMd += `| **${item.brand}** | \`${item.skill}\` | ${item.description} |\n`;
    }
    indexMd += `\n`;
  }

  fs.writeFileSync(path.join(DEST_DIR, 'INDEX.md'), indexMd);

  console.log(`Successfully generated ${count} design system skills in ${DEST_DIR}`);
}

main();
