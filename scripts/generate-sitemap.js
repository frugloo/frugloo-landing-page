/**
 * Build script to generate static sitemap.xml
 * Run this after building your app: node scripts/generate-sitemap.js
 */

import { writeFileSync } from "fs";
import { generateDefaultSitemap } from "../src/lib/sitemap.js";

const sitemapXML = generateDefaultSitemap();
const outputPath = "./public/sitemap.xml";

try {
  writeFileSync(outputPath, sitemapXML, "utf8");
  console.log(`✅ Sitemap generated successfully: ${outputPath}`);
  console.log("📄 Sitemap content:");
  console.log(sitemapXML);
} catch (error) {
  console.error("❌ Error generating sitemap:", error);
  process.exit(1);
}
