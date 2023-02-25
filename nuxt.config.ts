export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    modules: ['@nuxtjs/tailwindcss'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    app: {
      head: {
        title: 'Nuxt Doto',
        meta: [
          { name: 'description', content: 'Everything about Nuxt 3' }
        ],
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons',}
        ]
      }
    }
  })