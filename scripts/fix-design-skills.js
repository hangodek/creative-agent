import fs from 'fs';
import path from 'path';

const BASE_DIR = '/home/han/godek/projects/creative-agent/skills/design-systems';

// Read existing catalog.json if available
const catalogPath = path.join(BASE_DIR, 'catalog.json');
let existingCatalog = [];
if (fs.existsSync(catalogPath)) {
  existingCatalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
}

const descMap = {};
for (const item of existingCatalog) {
  descMap[item.slug] = item;
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

function main() {
  const entries = fs.readdirSync(BASE_DIR, { withFileTypes: true });
  const newCatalog = [];
  let count = 0;

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const oldDirName = entry.name;
    const cleanSlug = oldDirName.replace(/^design-/, '');
    const newDirName = `design-${cleanSlug}`;
    const oldDirPath = path.join(BASE_DIR, oldDirName);
    const newDirPath = path.join(BASE_DIR, newDirName);

    const designMdPath = path.join(oldDirPath, 'DESIGN.md');
    if (!fs.existsSync(designMdPath)) continue;

    const rawContent = fs.readFileSync(designMdPath, 'utf8');
    const contentBody = normalizeContent(rawContent);

    const meta = descMap[cleanSlug] || {
      brand: cleanSlug.charAt(0).toUpperCase() + cleanSlug.slice(1),
      description: `Visual design system and tokens inspired by ${cleanSlug}.`,
      category: 'General'
    };

    if (oldDirPath !== newDirPath) {
      fs.renameSync(oldDirPath, newDirPath);
    }

    const skillName = `design-${cleanSlug}`;
    const cleanDesc = meta.description.replace(/"/g, "'").replace(/\n/g, ' ');

    const skillContent = `---
name: ${skillName}
description: >
  Apply the ${meta.brand} design system: ${cleanDesc}
  Use when designing UI components, pages, dashboards, or full applications in the ${meta.brand} aesthetic.
  Trigger on "${meta.brand}", "${cleanSlug}", or requests matching this visual language.
---

> **CRITICAL ARCHITECTURE GUARDRAIL FOR AI CODING AGENTS:**
> DO NOT install external third-party vendor packages (such as \`@shopify/polaris\`, \`@stripe/stripe-js\`, or proprietary UI kits) unless explicitly demanded by the user.
> ALWAYS apply this design system's aesthetic, colors, typography, and geometry natively using the project's existing styling engine (Tailwind CSS, native CSS, or framework adapters)!

${contentBody}
`;

    fs.writeFileSync(path.join(newDirPath, 'SKILL.md'), skillContent);

    newCatalog.push({
      slug: cleanSlug,
      skill: skillName,
      brand: meta.brand,
      description: meta.description,
      category: meta.category || 'General',
    });

    count++;
  }

  // Update catalog.json
  fs.writeFileSync(path.join(BASE_DIR, 'catalog.json'), JSON.stringify(newCatalog, null, 2));

  // Update INDEX.md
  let indexMd = `# Design Systems Catalog\n\nTotal design systems available: **${count}**\n\n`;
  const grouped = {};
  for (const item of newCatalog) {
    const cat = item.category || 'General';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(item);
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

  fs.writeFileSync(path.join(BASE_DIR, 'INDEX.md'), indexMd);

  console.log(`Successfully updated and normalized ${count} design system skills to match folder names!`);
}

main();
