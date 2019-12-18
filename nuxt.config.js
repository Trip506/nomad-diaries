import colors from 'vuetify/es5/util/colors'
import axios from 'axios'


export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + 'Nomad Diaries',
    title: 'process.env.npm_package_name' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon2.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    // proxyHeaders: false
  },

  generate: {
    routes: function () {

      return axios.post("https://cms.hackmylanguage.com/api/collections/get/blog?token=fc6c7faa21c0678f849f0d34e6f664",
        {

          fields: { slug: 1, _id: 0 }
        })
        .then((res) => {
          return res.data.entries.map((entry) => {
            return {
              route: '/blog/' + entry.slug
            }

          })
        });
      //   let prints = axios.post("http://localhost/api/collections/get/prints?token=7915796cfc0e36b8e176365f73a329",
      //     {

      //       fields: { permalink: 1, _id: 0 }
      //     })
      //     .then((res) => {
      //       return res.data.entries.map((entry) => {
      //         return {
      //           route: '/stuff/' + entry.permalink
      //         }
      //       })
      //     });

      // return Promise.all([paintings, prints]).then(values => {
      //   return [...values[0], ...values[1]]
      // })
    },

  },


  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {

      themes: {
        light: {
          primary: '#575551',
          accent: '#FFFFFF',
          secondary: '#b5afa3',
          info: '#D8D6D8',
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: '#4CAF50', //#94c8ed
          text: "#FFFFFF"

        }

      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
