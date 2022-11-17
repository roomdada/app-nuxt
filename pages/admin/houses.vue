<script setup lang="ts">
import AppLayout from '~/layouts/admin.vue'
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
            <h1 class="text-3xl font-bold text-gray-500 mt-3">Liste des residences</h1>
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
                          Nbr de pieces
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Prix de location
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut
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
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">R001</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15000/jour</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">
                            Indisponible
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div class="flex items-center">
                            <div>
                              <a href="#" data-modal-toggle='mediaModal'>
                                <svg class="text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                              </a>
                            </div>
                        
                            <div>
                              <a href="#" data-modal-toggle="popup-modal">
                                <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">R001</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15000/jour</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">
                            Indisponible
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div class="flex items-center">
                            <div>
                              <a href="#" data-modal-toggle='mediaModal'>
                                <svg class="text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                              </a>
                            </div>
                        
                            <div>
                              <a href="#" data-modal-toggle="popup-modal">
                                <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
  
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">R001</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15000/jour</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">
                            Indisponible
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div class="flex items-center">
                            <div>
                              <a href="#" data-modal-toggle='mediaModal'>
                                <svg class="text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                              </a>
                            </div>
                        
                            <div>
                              <a href="#" data-modal-toggle="popup-modal">
                                <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
  
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">R001</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15000/jour</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">
                            Indisponible
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div class="flex items-center">
                            <div>
                              <a href="#" data-modal-toggle='mediaModal'>
                                <svg class="text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                              </a>
                            </div>
                        
                            <div>
                              <a href="#" data-modal-toggle="popup-modal">
                                <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
  
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">R001</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15000/jour</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">
                            Indisponible
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div class="flex items-center">
                            <div>
                              <a href="#" data-modal-toggle='mediaModal'>
                                <svg class="text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                              </a>
                            </div>
                        
                            <div>
                              <a href="#" data-modal-toggle="popup-modal">
                                <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
  
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">R001</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15000/jour</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">
                            Indisponible
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div class="flex items-center">
                            <div>
                              <a href="#" data-modal-toggle='mediaModal'>
                                <svg class="text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                              </a>
                            </div>
                        
                            <div>
                              <a href="#" data-modal-toggle="popup-modal">
                                <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
  
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">R001</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15000/jour</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">
                            Indisponible
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div class="flex items-center">
                            <div>
                              <a href="#" data-modal-toggle='mediaModal'>
                                <svg class="text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                              </a>
                            </div>
                        
                            <div>
                              <a href="#" data-modal-toggle="popup-modal">
                                <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                                </svg>
                              </a>
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
  </AppLayout>
</template>
