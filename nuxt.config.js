const webpack = require('webpack')
var languages = ['ru', 'uk'];

var environment = process.env.NODE_ENV || 'development';


var apiUrl =  (environment === 'development' ? 'http://olmax-admin.loc' : 'http://olmax.beststart.info/admin');
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'olmax2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~assets/scss/main.scss', lang: 'sass' },
  ],
  plugins: [
    { src: '~plugins/global-components' },
    { src: '~plugins/no-ssr-components', ssr: false },
    { src: '~plugins/dynamic-components', ssr: false },
    { src: '~plugins/res-navbar', ssr: false },
    { src: '~plugins/axios' },
    { src: '~plugins/get-data', ssr: false },
    { src: '~plugins/vue-toasted', ssr: false },
  ],

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      if (to.hash) {
       
        return { selector: to.hash }
      } else {
        return { x: 0, y: 0 }
      }
    }
  },

  modules: [

    ['nuxt-google-maps-module', {

      key: 'AIzaSyBLL8f_Og8iKH2Pi1O4xFK82rCjV98xenk', // Default
    }],
    ['@nuxtjs/axios',
      {
        baseUrl: apiUrl
      }
    ],
    '@nuxtjs/auth',
    ['nuxt-i18n', {
      locales: languages,
      defaultLocale: 'ru',
      
    }
       
    ],
  ],
  router: {
    middleware: ['auth']
  },
  axios: {
    baseUrl: apiUrl
  },

  auth: {
    //localStorage: false,
    baseUrl: apiUrl,
    strategies: {

      local: {
        endpoints: {
          login: {
            url: '/user/api/login/', method: 'post', propertyName: 'token',
            // headers: { 'Content-Type': 'application/x-www-form-urlencoded' } 
            //headers: { 'Content-Type': 'text/plain' } 
          },
          logout: { url: '/user/api/logout/', method: 'get' },
          user: { url: '/user/api/token/', method: 'get', propertyName: 'user' }
        },
        tokenRequired: true,
        //tokenType: 'Bearer',
      },

    },
    //watchLoggedIn: false,
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
 
    vendor: ['jquery', 'vue-carousel', 'vue-simple-svg', 'axios', 'vue-toasted'],
    analyze: false,
   /* rules: [
      {
        test: /\.js$/,
        exclude: /node_modules(?!\/quill-image-drop-module|quill-image-resize-module)/,
        loader: 'babel-loader',
     
      }
    ],*/
    plugins: [
      new webpack.DefinePlugin({
        'process.env.apiUrl': JSON.stringify( apiUrl)
      }),
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery',
        'window.Quill': 'quill'
      })
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

