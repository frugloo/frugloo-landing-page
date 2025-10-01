/**
 * Dynamic sitemap generator for Vite React app
 * Generates XML sitemap with proper headers and content-type
 */

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export interface SitemapConfig {
  baseUrl: string;
  urls: SitemapUrl[];
}

/**
 * Generate XML sitemap content
 */
export function generateSitemapXML(config: SitemapConfig): string {
  const { baseUrl, urls } = config;

  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen =
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = "</urlset>";

  const urlEntries = urls
    .map(url => {
      const { loc, lastmod, changefreq, priority } = url;

      // Ensure absolute URL
      const absoluteLoc = loc.startsWith("http") ? loc : `${baseUrl}${loc}`;

      let urlXml = `  <url>
    <loc>${absoluteLoc}</loc>`;

      if (lastmod) {
        urlXml += `
    <lastmod>${lastmod}</lastmod>`;
      }

      if (changefreq) {
        urlXml += `
    <changefreq>${changefreq}</changefreq>`;
      }

      if (priority !== undefined) {
        urlXml += `
    <priority>${priority}</priority>`;
      }

      urlXml += `
  </url>`;

      return urlXml;
    })
    .join("\n");

  return `${xmlHeader}
${urlsetOpen}
${urlEntries}
${urlsetClose}`;
}

/**
 * Default sitemap configuration for Frugloo
 */
export function getDefaultSitemapConfig(): SitemapConfig {
  const baseUrl = "https://www.frugloo.com";
  const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

  return {
    baseUrl,
    urls: [
      {
        loc: "/",
        lastmod: currentDate,
        changefreq: "weekly",
        priority: 1.0,
      },
      // Add more pages as they're created
      // {
      //   loc: '/about',
      //   lastmod: currentDate,
      //   changefreq: 'monthly',
      //   priority: 0.8,
      // },
      // {
      //   loc: '/contact',
      //   lastmod: currentDate,
      //   changefreq: 'monthly',
      //   priority: 0.7,
      // },
    ],
  };
}

/**
 * Generate sitemap XML string with default config
 */
export function generateDefaultSitemap(): string {
  const config = getDefaultSitemapConfig();
  return generateSitemapXML(config);
}
