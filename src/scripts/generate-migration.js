import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Because caseStudies is a TS file, we'll just parse it manually to avoid TS node setup issues
const caseStudiesRaw = fs.readFileSync(path.join(__dirname, '../data/caseStudies.ts'), 'utf-8');

// A very hacky way to evaluate the exported array in Node without TS.
// We strip the export interface and export const, then eval it.
let evalStr = caseStudiesRaw.substring(caseStudiesRaw.indexOf('export const caseStudies'));
evalStr = evalStr.replace('export const caseStudies: CaseStudy[] = ', 'const caseStudies = ');
evalStr += '\nmodule.exports = { caseStudies };';

const tempJsPath = path.join(__dirname, 'temp-cs.cjs');
fs.writeFileSync(tempJsPath, evalStr);
const { caseStudies } = await import('./temp-cs.cjs');
fs.unlinkSync(tempJsPath);

function escapeSql(str) {
  if (str === null || str === undefined) return 'NULL';
  if (typeof str === 'object') return `'${JSON.stringify(str).replace(/'/g, "''")}'::jsonb`;
  if (typeof str === 'boolean') return str ? 'true' : 'false';
  return `'${String(str).replace(/'/g, "''")}'`;
}

async function run() {
  let sql = `-- Data Migration Script\n\n`;

  // 1. Case Studies
  sql += `-- Insert Case Studies\n`;
  for (const cs of caseStudies) {
    sql += `INSERT INTO case_studies (slug, category, "cardTitle", "cardSubtitle", "cardDescription", "cardImage_url", "pageTitle", "pageSubtitle", "executiveSummary", challenge, methodology, "imagePlaceholder", "technicalFindings", "businessImpact") VALUES (\n`;
    sql += `  ${escapeSql(cs.slug)},\n`;
    sql += `  ${escapeSql(cs.category || 'MINING')},\n`;
    sql += `  ${escapeSql(cs.cardTitle)},\n`;
    sql += `  ${escapeSql(cs.cardSubtitle)},\n`;
    sql += `  ${escapeSql(cs.cardDescription)},\n`;
    sql += `  ${escapeSql(cs.cardImage)},\n`;
    sql += `  ${escapeSql(cs.pageTitle)},\n`;
    sql += `  ${escapeSql(cs.pageSubtitle)},\n`;
    sql += `  ${escapeSql(cs.executiveSummary)},\n`;
    sql += `  ${escapeSql(cs.challenge)},\n`;
    sql += `  ${escapeSql(cs.methodology)},\n`;
    sql += `  ${escapeSql(cs.imagePlaceholder)},\n`;
    sql += `  ${escapeSql(cs.technicalFindings)},\n`;
    sql += `  ${escapeSql(cs.businessImpact)}\n`;
    sql += `) ON CONFLICT (slug) DO NOTHING;\n\n`;
  }

  // 2. Insights
  sql += `-- Insert Insights\n`;
  const blogDir = path.join(__dirname, '../content/blog');
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  
  for (const file of files) {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(content);
    
    const slug = file.replace(/\.mdx?$/, '');
    const data = parsed.data;
    const body = parsed.content;
    
    sql += `INSERT INTO insights (title, slug, description, author, industry, draft, "publishDate", "readTime", "heroImage_url", content) VALUES (\n`;
    sql += `  ${escapeSql(data.title)},\n`;
    sql += `  ${escapeSql(slug)},\n`;
    sql += `  ${escapeSql(data.description)},\n`;
    sql += `  ${escapeSql(data.author || 'InSpectiv Labs')},\n`;
    sql += `  ${escapeSql(data.industry || 'general')},\n`;
    sql += `  ${escapeSql(data.draft || false)},\n`;
    sql += `  ${escapeSql(data.publishDate ? new Date(data.publishDate).toISOString() : new Date().toISOString())},\n`;
    sql += `  ${escapeSql(data.readTime || '5 min read')},\n`;
    sql += `  ${escapeSql(data.heroImage ? data.heroImage.replace('../../assets/', '/images/') : null)},\n`; 
    sql += `  ${escapeSql(body)}\n`;
    sql += `) ON CONFLICT (slug) DO NOTHING;\n\n`;
  }

  const outPath = path.join(__dirname, '../../data_migration.sql');
  fs.writeFileSync(outPath, sql);
  console.log('Successfully generated data_migration.sql');
}

run().catch(console.error);
