import { apiEndpoint, repositoryName } from "./slicemachine.config.json";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  experimental: { appManifest: false },
  vite: {
    optimizeDeps: {
      include: [
        '@prismicio/client',
        '@evomark/flipbook-vue',
      ]
    }
  },
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['flipbook'].includes(tag),
    },
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  routeRules: {
    "/home": {
      redirect: "/",
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/prismic",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-swiper",
  ],
  prismic: {
    endpoint: apiEndpoint || repositoryName
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/bubble.css',
    '~/assets/css/richText.css',
    '~/assets/css/flipbook.css',
    '~/assets/css/audio.css',
    '~/assets/css/animation.css'
  ],
  googleFonts: {
    families: {
      Caveat: [400, 700],
    },
    display: 'swap',
  },
})