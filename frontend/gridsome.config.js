// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// Use Node 16

module.exports = {
  siteName: "Reenchantment",
  siteUrl: 'https://reenchantment.band',
  siteDescription: 'Rock and Metal Music by Victor Fisher',
  titleTemplate: "Reenchantment",
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['songs', 'recordings', 'genres', 'videos'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        shouldPurge: false
      }
    },
    {
        use: 'gridsome-plugin-gtag',
        options: {
            config: {
                id: "G-LGV0D87JL3",
            },
        },
    },
  ],
  templates: {
    StrapiSongs: [
      {
        path: '/:slug',
        // path: '/music/:slug',
        component: './src/templates/Songs.vue'
      }
    ]
  }
}
