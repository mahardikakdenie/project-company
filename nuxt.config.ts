// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-aos',
    '@pinia/nuxt',
    // '~/plugins/helpers'
    // '@nuxtjs/axios'
  ],
  typescript: {
    typeCheck: true,
    strict: true
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  tailwindcss: {
    exposeConfig: true,
  },
  devServer: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5174
  },
  runtimeConfig: {
    // Config within public will be also exposed to the client
    public: {
      BASE_API_URL: process.env.BASE_API_URL || 'http://127.0.0.1:8000/v1',
    }
  },
})
