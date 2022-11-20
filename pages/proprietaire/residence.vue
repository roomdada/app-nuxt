<script setup>
import AppLayout from '~/layouts/app.vue'
import { defineProps } from 'vue'
</script>
<template>
  <AppLayout title="Tableau de bord | Mes residennces">
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
                          <div class="badge badge-secondary">occupé</div>
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
                              <a href="#" data-modal-toggle="editHouseModal">
                                <svg class="text-indigo-900" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                  width="24" height="24" viewBox="0 0 24 24">
                                  <path
                                    d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z">
                                  </path>
                                  <path
                                    d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z">
                                  </path>
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

    <!-- Ajout de nouveau residence-->
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-xl mb-4">Ajouter une nouvelle residence</h3>
        <form class="mx-auto">
          <div class="grid grid-cols-8">
            <div class="col-span-12 md:col-span-12">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Libellé du bien</span>
                </label>
                <input type="text" placeholder="" class="input input-bordered w-full max-w-full" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Commaune/ville</span>
                </label>
                <input type="text" placeholder="" class="input input-bordered w-full max-w-full" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Prix de location (maximum)</span>
                </label>
                <input type="text" placeholder="10000" class="input input-bordered w-full max-w-full" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Type de bien</span>
                </label>
                <select type="text" placeholder="Type here" class="input input-bordered w-full max-w-full">
                  <option value="1">Appartement</option>
                  <option value="2">Maison</option>
                  <option value="3">Villa</option>
                </select>
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

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <textarea type="text" class="input input-bordered w-full max-w-full"></textarea>
              </div>
            </div>
          </div>
        </form>
        <div class="modal-action">
          <label for="my-modal" class="btn btn-error text-white">Annuler</label>
          <label for="my-modal" class="btn">Enregistrer</label>
        </div>
      </div>
    </div>
    <!--Editer une residence-->
    <input type="checkbox" id="edit" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-xl mb-4">Editer la residence</h3>
        <form class="mx-auto">
          <div class="grid grid-cols-8">
            <div class="col-span-12 md:col-span-12">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Libellé du bien</span>
                </label>
                <input type="text" placeholder="" class="input input-bordered w-full max-w-full" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Commaune/ville</span>
                </label>
                <input type="text" placeholder="" class="input input-bordered w-full max-w-full" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Prix de location (maximum)</span>
                </label>
                <input type="text" placeholder="10000" class="input input-bordered w-full max-w-full" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Type de bien</span>
                </label>
                <select type="text" placeholder="Type here" class="input input-bordered w-full max-w-full">
                  <option value="1">Appartement</option>
                  <option value="2">Maison</option>
                  <option value="3">Villa</option>
                </select>
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

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <textarea type="text" class="input input-bordered w-full max-w-full"></textarea>
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

    <!--confirmaton de suppression-->
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
            <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Suppression d'une residence</h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">Etes-vous sur de vouloir supprimer cette residence ?</p>
            </div>
          </div>
        </div>
        <div class="modal-action">
          <label for="delete" class="btn btn-error text-white">Annuler</label>
          <label for="delete" class="btn">Confirmer</label>
        </div>
      </div>
    </div>

    <!--gallerie d'une residence-->
    <input type="checkbox" id="gallery" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-xl mb-4">Liste des images de la residence</h3>

        <div class='grid grid-cols-1 space-y-2 mx-auto'>
        
          <div class="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div class="card-body">
              <div class="card-actions justify-end">
                <label for="delete" class='cursor-pointer'>
                  <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                  </svg>
                </label>
              </div>
            </div>
          </div>

          <div class="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div class="card-body">
              <div class="card-actions justify-end">
                <label for="delete" class='cursor-pointer'>
                  <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                  </svg>
                </label>
              </div>
            </div>
          </div>

          <div class="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div class="card-body">
              <div class="card-actions justify-end">
                <label for="delete" class='cursor-pointer'>
                  <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                  </svg>
                </label>
              </div>
            </div>
          </div>
              
        </div>
        <div class="modal-action">
          <label for="gallery" class="btn btn-error text-white">Fermer</label>
        </div>
      </div>
    </div>

  </AppLayout>
</template>
