<script setup lang="ts">
import AuthLayout from '~/layouts/auth.vue'

onMounted(() => {
  console.log('mounted')
})

</script>
<template>
  <AuthLayout title='Connexion'>
    <template #header>
      Veuillez vous connecter
    </template>
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"> Adresse e-mail </label>
        <div class="mt-1">
          <input id="email" name="email" type="email" autocomplete="email" required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700"> Mot de passe </label>
        <div class="mt-1">
          <input id="password" name="password" type="password" autocomplete="current-password" required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
      </div>

      <div>
        <button type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white uppercase bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Se
          connecter</button>
      </div>
    </form>
    <div class="mt-6">
      <div class="relative">

        <div class="relative flex justify-center text-sm mt-12">
          <NuxtLink to="auth/password-forgot" class="font-extrabold text-gray-600 hover:text-gray-500"> Mot de passe
            oublié? </NuxtLink>
        </div>
      </div>

    </div>
  </AuthLayout>

</template>
