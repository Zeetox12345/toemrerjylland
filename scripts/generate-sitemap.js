import { writeFileSync } from 'fs';

const baseUrl = 'https://toemrerjylland.dk';

const routes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/services/tagarbejde', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/tilbygninger', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/renoveringer', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/terrasser', priority: '0.8', changefreq: 'monthly' },
  { path: '/toemrer-silkeborg', priority: '0.7', changefreq: 'monthly' },
  { path: '/kontakt', priority: '0.6', changefreq: 'yearly' },
  { path: '/politik', priority: '0.3', changefreq: 'yearly' }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path === '/' ? '' : route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  writeFileSync('dist/sitemap.xml', sitemap);
  console.log('✓ Generated: dist/sitemap.xml');
};

const generateRobotsTxt = () => {
  const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

  writeFileSync('dist/robots.txt', robots);
  console.log('✓ Generated: dist/robots.txt');
};

generateSitemap();
generateRobotsTxt();

console.log('\n🤖 SEO files generated successfully!');
