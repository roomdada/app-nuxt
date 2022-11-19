<script setup>
import AuthLayout from '~/layouts/auth.vue'
import { reactive, ref } from 'vue'
import store from '../store/index.js'
import axiosHttpClient from '@/axios';


const form = reactive({
  login: '',
  password: ''
});


const message = ref('');

const submit = async () => {
  await axiosHttpClient.post("user/authentification", { ...form }).then((res) => {
    if (res.data.msg.status == 'error') {
      message.value = res.data.msg;
    }

    if (res.data.msg.token) {
      store.commit('setAuth', res.data.msg.token);
      window.location.href = '/proprietaire';
    }

  }).catch((err) => {
    console.log(err);
    message.value = err.response.data.message;
  }).finally(() => {
    form.email = '';
    form.password = '';
  });
}

</script>
<template>
  <AuthLayout>
    <template #header>
      Veuillez vous connecter
    </template>
    <form @submit.prevent='submit' class="space-y-6" action="#" method="POST">
      {{ message }}
      <n-input v-model:value="value" type="text" placeholder="Basic Input" />
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"> Adresse e-mail </label>
        <div class="mt-1">
          <input v-model='form.login' id="login" name="login" type="text" autocomplete="email" required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700"> Mot de passe </label>
        <div class="mt-1">
          <input v-model="form.password" id="password" name="password" type="password" autocomplete="current-password"
            required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
      </div>

      <div>
        <button type="submit"
          class="w-full flex justify-center py-2 mt-6 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white uppercase bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Se
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
