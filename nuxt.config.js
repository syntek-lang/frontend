import url from 'url';

const URL = 'https://syntek.dev';
const TITLE = 'Syntek | Programming language';
const DESCRIPTION = 'Syntek is a beginner friendly programming language';
const THEME_COLOR = '#FFD273';

export default {
  mode: 'universal',

  // Headers of the page
  head: {
    htmlAttrs: {
      lang: 'en',
    },

    title: TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: DESCRIPTION },
      { hid: 'theme-color', name: 'theme-color', content: THEME_COLOR },

      // Open Graph
      { hid: 'og:title', name: 'og:title', content: TITLE },
      { hid: 'og:description', name: 'og:description', content: DESCRIPTION },
      { hid: 'og:url', name: 'og:url', content: URL },
      { hid: 'og:image', name: 'og:image', content: url.parse(URL, '/banner.png') },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, // Favicon
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato|Oswald:600&display=swap' }, // Fonts
    ],
  },

  // Customize the progress-bar color
  loading: { color: '#fff' },

  // Global CSS
  css: [],

  // Plugins to load before mounting the App
  plugins: [],

  // Nuxt.js modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Axios module configuration
  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? URL : undefined,
  },

  // Build configuration
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }

      // raw-loader
      config.module.rules.push({
        test: /\.txt$/,
        loader: 'raw-loader',
      });
    },
  },
};
