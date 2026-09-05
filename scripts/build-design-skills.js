import fs from 'fs';
import path from 'path';

const SRC_DIR = '/tmp/opencode/upstream/voltagent-design-md/design-md';
const README_PATH = '/tmp/opencode/upstream/voltagent-design-md/README.md';
const DEST_DIR = path.resolve(process.cwd(), 'skills/design-systems');

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
  if (!fs.existsSync(README_PATH)) {
    // Fallback to existing catalog.json if upstream README is not currently cloned
    const catalogFile = path.join(DEST_DIR, 'catalog.json');
    if (fs.existsSync(catalogFile)) {
      const existing = JSON.parse(fs.readFileSync(catalogFile, 'utf8'));
      const map = {};
      for (const item of existing) {
        map[item.slug] = { brand: item.brand, desc: item.description };
      }
      return map;
    }
    return {};
  }
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
  
  // If upstream exists, read from upstream; otherwise normalize in DEST_DIR
  const readDir = fs.existsSync(SRC_DIR) ? SRC_DIR : DEST_DIR;
  const entries = fs.readdirSync(readDir, { withFileTypes: true });

  const catalog = [];
  let count = 0;

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const rawName = entry.name;
    const cleanSlug = rawName.replace(/^design-/, '');
    const mappedSlug = SLUG_MAP[cleanSlug] || cleanSlug;
    const sourceFolder = path.join(readDir, rawName);
    const designMdPath = path.join(sourceFolder, 'DESIGN.md');

    if (!fs.existsSync(designMdPath)) continue;

    const rawContent = fs.readFileSync(designMdPath, 'utf8');
    const contentBody = normalizeContent(rawContent);

    const meta = descriptions[mappedSlug] || descriptions[rawName] || {
      brand: mappedSlug.charAt(0).toUpperCase() + mappedSlug.slice(1),
      desc: `Visual design system and tokens inspired by ${mappedSlug}.`
    };

    const targetDirName = `design-${mappedSlug}`;
    const targetFolder = path.join(DEST_DIR, targetDirName);
    fs.mkdirSync(targetFolder, { recursive: true });

    // Copy raw DESIGN.md
    fs.writeFileSync(path.join(targetFolder, 'DESIGN.md'), rawContent);

    // Build frontmatter for SKILL.md
    const skillName = targetDirName;
    const cleanDesc = meta.desc.replace(/"/g, "'").replace(/\n/g, ' ');

    const skillContent = `---
name: ${skillName}
description: >
  Apply the ${meta.brand} design system: ${cleanDesc}
  Use when designing UI components, pages, dashboards, or full applications in the ${meta.brand} aesthetic.
  Trigger on "${meta.brand}", "${mappedSlug}", or requests matching this visual language.
---

> **CRITICAL ARCHITECTURE GUARDRAIL FOR AI CODING AGENTS:**
> DO NOT install external third-party vendor packages (such as \`@shopify/polaris\`, \`@stripe/stripe-js\`, or proprietary UI kits) unless explicitly demanded by the user.
> ALWAYS apply this design system's aesthetic, colors, typography, and geometry natively using the project's existing styling engine (Tailwind CSS, native CSS, or framework adapters)!

${contentBody}
`;

    fs.writeFileSync(path.join(targetFolder, 'SKILL.md'), skillContent);

    catalog.push({
      slug: mappedSlug,
      skill: skillName,
      brand: meta.brand,
      description: meta.desc,
      category: getCategory(mappedSlug),
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

  console.log(`Successfully generated and consolidated ${count} design system skills in ${DEST_DIR}`);
}

main();
