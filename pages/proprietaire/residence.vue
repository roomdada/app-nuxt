<script setup>
import AppLayout from '~/layouts/app.vue'
import Modal from '~/partials/house-modals.vue'
</script>
<template>
  <AppLayout>
    <div class="mt-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="header mb-2 md:flex justify-between">
          <div class="title">
            <h1 class="text-3xl font-bold text-gray-500 mt-3">Liste des residences</h1>
          </div>
          <div class="actions md:flex self-start space-x-2 mt-3">
            <label for="my-modal" class="btn btn-primary">Nouveau</label>
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
                          Statuts
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nom
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commune
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix
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
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div class="badge badge-primary">Disponible</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Appartement
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">RoroHouse</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Lorem ipsum dolor sit
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Plateau
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          20000 FCFA
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div class="flex items-center">
                            <div>
                              <NuxtLink to='/proprietaire/modality' class='cursor-pointer'>
                                <svg class="text-orange-900" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z"/><path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19zm3-9h6v6H9v-6zm2 2v2h2v-2h-2z"/>
                                </svg>
                              </NuxtLink>
                            </div>
                            <div>
                              <label for="gallery" class='cursor-pointer'>
                                <svg class="text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                              </label>
                            </div>
                            <div>
                              <label for="edit" class='cursor-pointer'>
                                <svg class="text-indigo-900" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                  width="24" height="24" viewBox="0 0 24 24">
                                  <path
                                    d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z">
                                  </path>
                                  <path
                                    d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z">
                                  </path>
                                </svg>
                              </label>
                            </div>
                            <div>
                              <label for="delete" class='cursor-pointer'>
                                <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                                </svg>
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div class="badge badge-secondary">Indisponible</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Appartement
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">RoroHouse</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Lorem ipsum dolor sit
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Plateau
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          20000 FCFA
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div class="flex items-center">
                            <div>
                              <NuxtLink to='/proprietaire/modality' class='cursor-pointer'>
                                <svg class="text-orange-900" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z"/><path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19zm3-9h6v6H9v-6zm2 2v2h2v-2h-2z"/>
                                </svg>
                              </NuxtLink>
                            </div>
                            <div>
                              <label for="gallery" class='cursor-pointer'>
                                <svg class="text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                              </label>
                            </div>
                            <div>
                              <label for="edit" class='cursor-pointer'>
                                <svg class="text-indigo-900" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                  width="24" height="24" viewBox="0 0 24 24">
                                  <path
                                    d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z">
                                  </path>
                                  <path
                                    d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z">
                                  </path>
                                </svg>
                              </label>
                            </div>
                            <div>
                              <label for="delete" class='cursor-pointer'>
                                <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path
                                    d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
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

    <Modal/>

  </AppLayout>
</template>
