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
            <h1 class="text-3xl font-bold text-gray-500 mt-3">Modalité du bien</h1>
          </div>
          <div class="actions md:flex self-start space-x-2 mt-3">
            <label for="commod" class="btn btn-primary">Ajouter commodité</label>
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
                          Modalité
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          prix max
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          prix min
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
                          <div class="badge badge-primary">Jour</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          15000 XOF
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25000 XOF</td>

                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div class="flex items-center">


                            <div>
                              <label for="edit-commod" class='cursor-pointer'>
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

                          </div>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!--Add commodité-->
    <input type="checkbox" id="commod" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-xl mb-4">Enregistrer une commodité </h3>
        <form class="mx-auto">
          <div class="grid grid-cols-8">
            <div class="col-span-12 md:col-span-12">

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Prix de location (minimum)</span>
                </label>
                <input type="text" placeholder="10000" class="input input-bordered w-full max-w-full" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Prix de location (maximum)</span>
                </label>
                <input type="text" placeholder="10000" class="input input-bordered w-full max-w-full" />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Modalité</span>
                </label>
                <select type="text" placeholder="Type here" class="input input-bordered w-full max-w-full">
                  <option value="1">Heure</option>
                  <option value="2">Jour</option>
                  <option value="3">Semaine</option>
                  <option value="4">Weekend</option>
                  <option value="5">Mois</option>
                </select>
              </div>

            </div>
          </div>
        </form>
        <div class="modal-action">
          <label for="commod" class="btn btn-error text-white">Annuler</label>
          <label for="commod" class="btn">Enregistrer</label>
        </div>
      </div>
    </div>


    <!--Edit commodité-->
    <input type="checkbox" id="edit-commod" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-xl mb-4">Editer la commodité </h3>
        <form class="mx-auto">
          <div class="grid grid-cols-8">
            <div class="col-span-12 md:col-span-12">

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Prix de location (minimum)</span>
                </label>
                <input type="text" placeholder="10000" class="input input-bordered w-full max-w-full" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Prix de location (maximum)</span>
                </label>
                <input type="text" placeholder="10000" class="input input-bordered w-full max-w-full" />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Modalité</span>
                </label>
                <select type="text" placeholder="Type here" class="input input-bordered w-full max-w-full">
                  <option value="1">Heure</option>
                  <option value="2">Jour</option>
                  <option value="3">Semaine</option>
                  <option value="4">Weekend</option>
                  <option value="5">Mois</option>
                </select>
              </div>

            </div>
          </div>
        </form>
        <div class="modal-action">
          <label for="edit-commod" class="btn btn-error text-white">Annuler</label>
          <label for="edit-commod" class="btn">Enregistrer</label>
        </div>
      </div>
    </div>


  </AppLayout>
</template>
