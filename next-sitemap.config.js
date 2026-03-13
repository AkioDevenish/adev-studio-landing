/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.adevstudio.com',
  generateRobotsTxt: true,
  exclude: [
    '/*/opengraph-image',
    '/**/opengraph-image',
    '/feed.xml',
    '/api/*',
  ],
};
