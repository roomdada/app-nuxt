<script setup lang="ts">
import AuthLayout from '~/layouts/auth.vue'
</script>
<template>
  <AuthLayout title="Mot de passe oublié">
    <template #header>
      Nouveau mot de passe  
    </template>
    <p class='text-center font-medium mb-4'>Veuillez reinitialiser votre mot de passe</p>
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"> Adresse e-mail </label>
        <div class="mt-1">
          <input id="email" name="email" type="email" autocomplete="email" required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"> Nouveau mot de passe </label>
        <div class="mt-1">
          <input id="password" name="password" type="password" autocomplete="password" required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"> Confirmer le mot de passe </label>
        <div class="mt-1">
          <input id="password_confirmation" name="password_confirmation" type="password" autocomplete="password_confirmation" required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
      </div>

      <div>
        <NuxtLink type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white uppercase bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Enregistrer le mot de passe
        </NuxtLink>
      </div>
    </form>
  </AuthLayout>
</template>
