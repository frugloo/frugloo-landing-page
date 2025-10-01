/**
 * Vercel serverless function for dynamic sitemap generation
 * Handles /api/sitemap requests and returns XML sitemap
 */

import { VercelRequest, VercelResponse } from "@vercel/node";

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

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Generate sitemap XML
    const sitemapXML = generateSitemapXML();

    // Set proper headers for XML response
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Return XML response
    return res.status(200).send(sitemapXML);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return res.status(500).send("Internal Server Error");
  }
}
