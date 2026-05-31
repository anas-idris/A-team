import fs from 'fs';
import path from 'path';

const siteUrl = process.env.SITE || 'https://example.com';
const buildDate = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('Sitemap generated: dist/sitemap.xml');
