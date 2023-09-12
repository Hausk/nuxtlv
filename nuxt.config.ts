// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['assets/css/app.css'],
  modules: [
    '@nuxt/image',
    'nuxt-icon',
    '@hypernym/nuxt-anime',
  ],
})
