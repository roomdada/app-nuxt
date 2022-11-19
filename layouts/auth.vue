<script setup>


</script>
<template>

  <Head>
    <html class="h-full bg-gradient-to-r from-blue-500 to-indigo-900" lang="fr" />
  </Head>
  <div>
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <NuxtLink to="/"><img class="mx-auto h-24 w-auto rounded-full" src="~/assets/images/logo.jpg" alt="Workflow" />
        </NuxtLink>
        <h2 class="mb-4 text-center text-xl font-extrabold text-white">
          <slot name='header' />
        </h2>
      </div>
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-12 rounded-lg mx-10 px-4 shadow sm:rounded-lg sm:mx-auto">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
