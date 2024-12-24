/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://profile.hansolbangul.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://profile.hansolbangul.com/sitemap.xml',
    ],
  },
}
