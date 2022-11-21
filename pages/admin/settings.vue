<script setup>
import AppLayout from '~/layouts/admin.vue'
import PaymentMethod from '~/partials/payment-method.vue'
import PaymentMethodForm from '~/partials/payment-method.vue'
import Category from '~/partials/category.vue'
import Document from '~/partials/document.vue'
import Search from '~/partials/search.vue'
</script>
<template>
  <AppLayout>

    <div class="mt-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="header mb-2 md:flex justify-between">
          <div class="title">
            <h1 class="text-3xl font-bold text-gray-500 mt-3">Configuration des parametre de l'application</h1>
          </div>
        </div>
        <hr class="mb-5 border border-grey-900">
        <PaymentMethod/>
        <Category/>
        <Document/>
        <Search/>
      </div>
    </div>
  </AppLayout>
</template>
