<script setup lang="ts">
import AppLayout from '~/layouts/admin.vue'
import Navbar from '~/partials/navbar.vue'


</script>
<template>
  <AppLayout>
    <template #mobile>
      <Navbar />
    </template>
    <template #mobile-navbar>
      <Navbar />
    </template>
        <div class="mt-8">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          </div>

        </div>
  </AppLayout>
</template>
