<script setup>
import AppLayout from '~/layouts/admin.vue'

</script>
<template>
  <AppLayout>

    <div class="mt-8">

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="header mb-2 md:flex justify-between">
          <div class="title">
            <h1 class="text-3xl font-bold text-gray-500 mt-3">Liste des proprietaires</h1>
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
                          Civilité
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
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status
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
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Compaoré Abib</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          +225 07 07 07 07 07
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          abib.compaore@me.ci
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div class="badge badge-success text-white">Actif</div>
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
                   
                            <div>
                              <label for="delete" class='cursor-pointer'>
                                <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 1 1 14 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 0 0 7 9v1h10z"/></svg>
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
        <h3 class="font-bold text-xl mb-4">Details sur le proprietaire</h3>
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="mt-5 md:mt-0 md:col-span-3">
            <div class="overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white">
                <div class="grid grid-cols-8 gap-2 md:gap-6">
                  <div class="col-span-8">
                    <div class="flex flex-col md:flex-row space-y-2 md:space-y-0">
                      <div class="w-full md:w-1/2">
                        <dt class="text-sm font-medium text-gray-500">Date de création</dt>
                        <dd class="text-sm font-normal text-gray-900">11/03/2020</dd>
                      </div>
                      <div class="w-full md:w-1/2">
                        <dt class="text-sm font-medium text-gray-500">Nom complet</dt>
                        <dd class="text-sm font-normal text-gray-900">Abib Richard</dd>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-8">
                    <div class="flex flex-col md:flex-row space-y-2 md:space-y-0">
                      <div class="w-full md:w-1/2">
                        <dt class="text-sm font-medium text-gray-500">E-mail</dt>
                        <dd class="text-sm font-normal text-gray-900">me@dev.resi</dd>
                      </div>
                      <div class="w-full md:w-1/2">
                        <dt class="text-sm font-medium text-gray-500">Contact</dt>
                        <dd class="text-sm font-normal text-gray-900">0155889955</dd>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-8">
                    <div class="flex flex-col md:flex-row space-y-2 md:space-y-0">
                      <div class="w-full md:w-1/2">
                        <dt class="text-sm font-medium text-gray-500">Status</dt>
                        <dd class="text-sm font-normal text-gray-900"><div class="badge badge-success text-white">Actif</div></dd>
                      </div>
                      <div class="w-full md:w-1/2">
                        <dt class="text-sm font-medium text-gray-500">Compte</dt>
                        <dd class="text-sm font-normal text-gray-900"><div class="badge badge-primary text-white">Operationnelle</div></dd>
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
            <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Suppression du compte</h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">Etes-vous sur de vouloir supprimer cet proprietaire ?</p>
            </div>
          </div>
        </div>
        <div class="modal-action">
          <label for="delete" class="btn btn-error text-white">Annuler</label>
          <label for="delete" class="btn">Confirmer</label>
        </div>
      </div>
    </div>

    <input type="checkbox" id="create" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-xl mb-4">Ajouter un nouveau proprietaire</h3>
        <form class="mx-auto">
          <div class="grid grid-cols-8">
            <div class="col-span-12 md:col-span-12">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Civilité</span>
                </label>
                <input type="text" placeholder="" class="input input-bordered w-full max-w-full" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Nom</span>
                </label>
                <input type="text" placeholder="" class="input input-bordered w-full max-w-full" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">prénoms</span>
                </label>
                <input type="text" placeholder="" class="input input-bordered w-full max-w-full" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">E-mail</span>
                </label>
                <input type="text" placeholder="" class="input input-bordered w-full max-w-full" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Contact</span>
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
  </AppLayout>
</template>
