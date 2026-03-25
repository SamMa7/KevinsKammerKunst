import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/prismic",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
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