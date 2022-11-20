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
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions
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

                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div class="flex items-center">
                            <div>
                              <label for="show" class='cursor-pointer'>

                                <svg class="text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                </svg>
                              </label>
                            </div>
                          </div>
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


    <input type="checkbox" id="show" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-xl mb-4">Details sur l'Utilisateur</h3>
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="mt-5 md:mt-0 md:col-span-3">
            <div class="overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white">
                <div class="grid grid-cols-8 gap-2 md:gap-6">
                  <div class="col-span-8">
                    <div class="flex flex-col md:flex-row space-y-2 md:space-y-0">
                      <div class="w-full md:w-1/2">
                        <dt class="text-sm font-medium text-gray-500">Date d'inscription</dt>
                        <dd class="text-sm font-normal text-gray-900">11/03/2024</dd>
                      </div>
                      <div class="w-full md:w-1/2">
                        <dt class="text-sm font-medium text-gray-500">Nom complet</dt>
                        <dd class="text-sm font-normal text-gray-900">Ouedraogo jean Marie</dd>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-8">
                    <div class="flex flex-col md:flex-row space-y-2 md:space-y-0">
                      <div class="w-full md:w-1/2">
                        <dt class="text-sm font-medium text-gray-500">E-mail</dt>
                        <dd class="text-sm font-normal text-gray-900">test@dev.fr</dd>
                      </div>
                      <div class="w-full md:w-1/2">
                        <dt class="text-sm font-medium text-gray-500">Contact</dt>
                        <dd class="text-sm font-normal text-gray-900">+225 0256987744</dd>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-8">
                    <div class="flex flex-col md:flex-row space-y-2 md:space-y-0">
                      <div class="w-full md:w-1/2">
                        <dt class="text-sm font-medium text-gray-500">Adresse client</dt>
                        <dd class="text-sm font-normal text-gray-900">Abatta</dd>
                      </div>
                      <div class="w-full md:w-1/2">
                        <dt class="text-sm font-medium text-gray-500">Nbr de reservation</dt>
                        <dd class="text-sm font-normal text-gray-900">11</dd>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-action">
          <label for="show" class="btn btn-error text-white">Fermer</label>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
