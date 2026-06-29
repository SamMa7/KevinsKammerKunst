import { apiEndpoint, repositoryName } from "./slicemachine.config.json";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  experimental: { appManifest: false },
  vite: {
    optimizeDeps: {
      include: [
        '@evomark/flipbook-vue',
        '@prismicio/client',
        'swiper/element/bundle'
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
    "@vercel/analytics",
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
  runtimeConfig: {
    basicAuthUser: '',    // via NUXT_BASIC_AUTH_USER
    basicAuthPassword: '', // via NUXT_BASIC_AUTH_PASSWORD
  },
})