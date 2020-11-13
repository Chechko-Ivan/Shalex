const isDev = process.env.NODE_ENV !== 'production'

export default {
  mode: 'universal',

  ...(!isDev && {
    modern: 'client'
  }),

  rootDir: __dirname,

  head: {
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#'
    },

    title: 'Shalex Trade & Logistics',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Shalex Trade & Logistics is an internationally operating company for trading and logistics.'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Shalex Trade & Logistics'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Shalex Trade & Logistics is an internationally operating company for trading and logistics.'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Shalex Trade & Logistics'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/favicon/apple-touch-icon.png'
      }
    ],

    link: [
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        href: '/favicon/safari-pinned-tab.svg'
      },
      { rel: 'msapplication-TileColor', content: '#2d89ef' },
      { rel: 'theme-color', content: '#ffffff' }
    ]
  },

  loading: { color: '#e42702' },

  css: ['~/assets/scss/style.scss'],

  plugins: [
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/scrollTo.js' }
  ],

  modules: ['@nuxtjs/eslint-module', '@nuxtjs/sitemap'],

  sitemap: {
    gzip: true,
    hostname: 'https://shalextl.com',
    trailingSlash: true,
    defaults: {
      lastmod: new Date(),
      lastmodrealtime: true,
      changefreq: 'daily',
      priority: 1
    }
  },

  build: {
    extend(config, ctx) {},

    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    }
  }
}
