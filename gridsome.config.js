// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Warcry',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://dmison.github.io'),
  pathPrefix: '/warcry',
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/rules/', title: 'Rules' }
      ]
    },
    sidebar: [
      {
        name: 'rules',
        sections: [
          {
            // title: 'Core Rules',
            items: [
              '/rules/',
              '/rules/general/',
              '/rules/setup/',
              '/rules/battleround/',
              '/rules/abilities/',
              '/rules/terrain/',

            ]
          },
          {
            title: 'ACTIONS',
            items: [
              '/rules/attackactions/',
              '/rules/disengageaction/',
              '/rules/moveaction/',
              '/rules/waitaction/',
            ]
          },
          {
            items: [
              '/rules/chaoticbeasts/',
              '/rules/heroesallies/',
              '/rules/monsters/',
              '/rules/thralls/'
            ]
          },
          {
            title: 'CAMPAIGNS',
            items: [
              '/rules/campaigns/',
              '/rules/campaignquests/',
              '/rules/warbandroster/',
              '/rules/campaignbattles/',
              '/rules/aftermath/',
              '/rules/challengebattles/',
              '/rules/fatedquests/',
              '/rules/trialofchampions/'
            ]
          },
          {
            // title: 'ARTEFACTS',
            items: [
              '/rules/lesserartefacts/',
            ]
          },

        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'MarkdownPage',
        baseDir: './content',
        template: './src/templates/MarkdownPage.vue'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    // {
    //   use: '@gridsome/plugin-google-analytics',
    //   options: {
    //     id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
    //   }
    // },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
      }
    }

  ]
}
