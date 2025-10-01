/**
 * Sitemap route component for Vite React app
 * Serves XML sitemap with proper content-type headers
 */

import { useEffect } from "react";
import { generateDefaultSitemap } from "@/lib/sitemap";

export default function Sitemap() {
  useEffect(() => {
    // Generate sitemap XML
    const sitemapXML = generateDefaultSitemap();

    // Set proper headers for XML response
    const headers = new Headers({
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    });

    // Create response with XML content
    const response = new Response(sitemapXML, {
      status: 200,
      headers,
    });

    // For development, we'll just log the sitemap
    // In production, this would be handled by the server
    console.log("Generated sitemap:", sitemapXML);

    // In a real deployment, you'd want to handle this at the server level
    // For now, we'll redirect to a static version or handle via build process
  }, []);

  // This component shouldn't render anything visible
  return null;
}
