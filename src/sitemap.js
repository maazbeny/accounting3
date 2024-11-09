const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

const hostname = 'https://faizaccountax.com';

const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/services', changefreq: 'monthly', priority: 0.8 },
    { url: '/personal', changefreq: 'monthly', priority: 0.8 },
    { url: '/business', changefreq: 'monthly', priority: 0.8 },
    { url: '/accounting', changefreq: 'monthly', priority: 0.8 },
    { url: '/payroll', changefreq: 'monthly', priority: 0.8 },
    { url: '/bookkeeping', changefreq: 'monthly', priority: 0.8 },
    { url: '/secretary', changefreq: 'monthly', priority: 0.8 },
    { url: '/pricing-and-plans', changefreq: 'monthly', priority: 0.8 },
    { url: '/accountant-in-highwycombe', changefreq: 'monthly', priority: 0.8 },
];

const generateSitemap = async () => {
    const sitemap = new SitemapStream({ hostname });

    pages.forEach(page => sitemap.write(page));
    sitemap.end();

    try {
        const sitemapOutput = await streamToPromise(sitemap);
        fs.writeFileSync('./public/sitemap.xml', sitemapOutput.toString());
        console.log('Sitemap generated successfully!');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
};

generateSitemap();
