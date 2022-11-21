<script setup>
import AppLayout from '~/layouts/admin.vue'

</script>
<template>
  <AppLayout>

    <div class="mt-8">

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="header mb-2 md:flex justify-between">
          <div class="title">
            <h1 class="text-3xl font-bold text-gray-500 mt-3">Liste des roles</h1>
          </div>
          <div class="actions md:flex self-start space-x-2 mt-3">
            <label for="create" class="btn btn-primary">Nouveau</label>
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
                          Libelle
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nbr de permissions
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
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Adminstrateur</td>
                                       
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          2
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div class="flex items-center">
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

    <input type="checkbox" id="create" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-xl mb-4">Ajouter un nouveau role</h3>
        <form class="mx-auto">
          <div class="grid grid-cols-8">
            <div class="col-span-12 md:col-span-12">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Role</span>
                </label>
                <input type="text" placeholder="" class="input input-bordered w-full max-w-full" />
              </div>
            </div>
          </div>
        </form>
        <div class="modal-action">
          <label for="create" class="btn btn-error text-white">Annuler</label>
          <label for="create" class="btn">Enregistrer</label>
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
            <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Suppression du role</h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">Etes-vous sur de vouloir supprimer cet role ?</p>
            </div>
          </div>
        </div>
        <div class="modal-action">
          <label for="delete" class="btn btn-error text-white">Annuler</label>
          <label for="delete" class="btn">Confirmer</label>
        </div>
      </div>
    </div>

    <input type="checkbox" id="edit" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-xl mb-4">Editer le role</h3>
        <form class="mx-auto">
          <div class="grid grid-cols-8">
            <div class="col-span-12 md:col-span-12">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Role</span>
                </label>
                <input type="text" placeholder="Adminstrateur" class="input input-bordered w-full max-w-full" />
              </div>
            </div>
          </div>
        </form>
        <div class="modal-action">
          <label for="edit" class="btn btn-error text-white">Annuler</label>
          <label for="edit" class="btn">Enregistrer</label>
        </div>
      </div>
    </div>


  </AppLayout>
</template>
