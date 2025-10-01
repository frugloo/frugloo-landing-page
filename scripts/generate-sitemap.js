/**
 * Build script to generate static sitemap.xml
 * Run this after building your app: node scripts/generate-sitemap.js
 */

import { writeFileSync } from "fs";

// Inline sitemap generation to avoid import issues
function generateSitemapXML() {
  const baseUrl = "https://www.frugloo.com";
  const currentDate = new Date().toISOString().split("T")[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
}

const sitemapXML = generateSitemapXML();
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
