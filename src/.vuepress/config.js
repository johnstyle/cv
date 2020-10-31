const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Jonathan SAHM',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'google-site-verification', content: 'YWVv0G-vvezbjS-TcO0AI2iX-ENyFY_b1ECEpbJBIgQ' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'CV',
        link: '/cv/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/johnstyle'
      },
      {
        text: 'Linkedin',
        link: 'https://www.linkedin.com/in/johnstyle/'
      },
      {
        text: 'Twitter',
        link: 'https://twitter.com/johnstyle'
      }
    ],
    sidebar: {
      '/cv/': [
        {
          title: 'CV',
          collapsable: false,
          children: [
            '',
            'competences',
            'experiences',
            'realisations',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@snowdog/vuepress-plugin-pdf-export', {
      puppeteerLaunchOptions: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    }],
    ['@vuepress/google-analytics', {
      'ga': 'UA-179607475-1'
    }]
  ]
}
