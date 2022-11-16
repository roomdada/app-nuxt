<script setup lang="ts">
import AppLayout from '~/layouts/app.vue'
import { defineProps } from 'vue'

const props = defineProps<{
  title: string
}>()
</script>
<template>
  <AppLayout title="Tableau de bord | Mes residennces">

    <div class="mt-8">

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="header mb-2 md:flex justify-between">
          <div class="title">
            <h1 class="text-3xl font-bold text-gray-500 mt-3">Liste des Utilisateurs</h1>
          </div>
        </div>
        <hr class="mb-5 border border-grey-900">
        <div class="bg-white px-6 py-4 rounded-md shadow-lg">
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-100">
                      <tr>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Identifiant
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Photo
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nom complet
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-mail
                        </th>
                        <th scope="col" class="relative px-6 py-3">
                          <span class="sr-only">Editer</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">

                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BACK789</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <img class="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré Abib Richard</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          +225 07 07 07 07 07
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          abib.compaore@me.ci
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BACK789</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <img class="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré Abib Richard</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          +225 07 07 07 07 07
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          abib.compaore@me.ci
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BACK789</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <img class="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré Abib Richard</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          +225 07 07 07 07 07
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          abib.compaore@me.ci
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BACK789</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <img class="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré Abib Richard</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          +225 07 07 07 07 07
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          abib.compaore@me.ci
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BACK789</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <img class="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré Abib Richard</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          +225 07 07 07 07 07
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          abib.compaore@me.ci
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BACK789</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <img class="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré Abib Richard</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          +225 07 07 07 07 07
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          abib.compaore@me.ci
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BACK789</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <img class="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré Abib Richard</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          +225 07 07 07 07 07
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          abib.compaore@me.ci
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BACK789</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <img class="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré Abib Richard</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          +225 07 07 07 07 07
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          abib.compaore@me.ci
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BACK789</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <img class="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré Abib Richard</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          +225 07 07 07 07 07
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          abib.compaore@me.ci
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BACK789</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <img class="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré Abib Richard</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          +225 07 07 07 07 07
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          abib.compaore@me.ci
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BACK789</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <img class="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré Abib Richard</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          +225 07 07 07 07 07
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          abib.compaore@me.ci
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- pagination -->
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </AppLayout>
</template>
