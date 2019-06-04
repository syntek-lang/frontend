import pkg from './package';

export default {
  mode: 'universal',

  // Headers of the page
  head: {
    htmlAttrs: {
      lang: 'en',
    },

    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'theme-color', name: 'theme-color', content: '#FFD273' },

      // Open Graph
      { hid: 'og:title', name: 'og:title', content: pkg.name },
      { hid: 'og:description', name: 'og:description', content: pkg.description },
      { hid: 'og:url', name: 'og:url', content: 'https://syntek.dev' },
      { hid: 'og:image', name: 'og:image', content: 'https://syntek.dev/banner.png' },
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
  axios: {},

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
    },
  },
};
