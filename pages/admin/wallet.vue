<script setup>
import AppLayout from '~/layouts/admin.vue'
import { defineProps } from 'vue'

</script>
<template>
  <AppLayout>

    <div class="mt-8">

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="header mb-2 md:flex justify-between">
          <div class="title">
            <h1 class="text-3xl font-bold text-gray-500 mt-3">Liste des comptes</h1>
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
                          Civilité
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nom
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Prénoms
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Moyen
                          de paiement
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Solde
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
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mr/Mme</td>

                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Abib Richard
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Ria
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          125000 XOF
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>
                              <label for="delete" class='cursor-pointer'>
                                <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 1 1 14 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 0 0 7 9v1h10z"/></svg>
                              </label>
                            </div>
                        </td>
                      </tr>
                         
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mr/Mme</td>

                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Abib Richard
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Ria
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          125000 XOF
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>
                              <label for="delete" class='cursor-pointer'>
                                <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 1 1 14 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 0 0 7 9v1h10z"/></svg>
                              </label>
                            </div>
                        </td>
                      </tr>
                      
                         
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mr/Mme</td>

                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Abib Richard
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Ria
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          125000 XOF
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>
                              <label for="delete" class='cursor-pointer'>
                                <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 1 1 14 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 0 0 7 9v1h10z"/></svg>
                              </label>
                            </div>
                        </td>
                      </tr>
                         
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mr/Mme</td>

                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Abib Richard
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Ria
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          125000 XOF
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>
                              <label for="delete" class='cursor-pointer'>
                                <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 1 1 14 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 0 0 7 9v1h10z"/></svg>
                              </label>
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

    <input type="checkbox" id="delete" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-xl mb-4"></h3>
      <div class="sm:flex sm:items-start">
        <div
          class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <!-- Heroicon name: outline/exclamation-triangle -->
          <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z" />
          </svg>
        </div>
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Desactiver le compte</h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">Etes-vous sur de vouloir desactiver ce compte ?</p>
          </div>
        </div>
      </div>
      <div class="modal-action">
        <label for="delete" class="btn btn-error text-white">Annuler</label>
        <label for="delete" class="btn">Confirmer</label>
      </div>
    </div>
  </div>
  </AppLayout>
</template>
