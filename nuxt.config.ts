// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "nuxt-lucide-icons",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
  ],
  ssr: false,
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      GITHUB_TOKEN: process.env.NUXT_PUBLIC_GITHUB_TOKEN,
      RECAPTCHA_SITE_KEY: process.env.NUXT_PUBLIC_SITE_KEY,
    },
  },
  // nitro: {
  //   devProxy: {
  //     "/validar-recaptcha": {
  //       target: "https://form-validacao-captcha.vercel.app",
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Headers": "*",
  //       },
  //       prependPath: true,
  //       changeOrigin: true,
  //     },
  //   },
  // },
  routeRules: {
      '/validar-recaptcha': {
          proxy: { to: "https://form-validacao-captcha.vercel.app", },
      }
    }
});
