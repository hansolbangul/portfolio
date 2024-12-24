/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hansolbangul.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*'],
      },
    ],
  },
  exclude: ['/api/*'],
  changefreq: 'daily',
  priority: 0.7,
}
