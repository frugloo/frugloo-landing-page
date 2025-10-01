/**
 * Vercel serverless function for dynamic sitemap generation
 * Handles /api/sitemap requests and returns XML sitemap
 */

import { VercelRequest, VercelResponse } from "@vercel/node";
import { generateDefaultSitemap } from "../src/lib/sitemap";

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Set proper headers for XML response
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600"); // Cache for 1 hour

  // Generate sitemap XML
  const sitemapXML = generateDefaultSitemap();

  // Return XML response
  res.status(200).send(sitemapXML);
}
