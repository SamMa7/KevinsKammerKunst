import { apiEndpoint, repositoryName } from "./slicemachine.config.json";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/prismic",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],
  prismic: {
    endpoint: apiEndpoint || repositoryName
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/bubble.css',
  ],
  googleFonts: {
    families: {
      Caveat: [400, 700],
    },
    display: 'swap',
  },
})