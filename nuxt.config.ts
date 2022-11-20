// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head : 
    {
      title : "Resi",
      meta: [
        {name: 'description', content : 'Application de gestion de residence'},
      ],
    }
  }
})
