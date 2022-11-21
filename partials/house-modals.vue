<script setup>
</script>
<template>
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


  <!-- add commodité-->
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

  <input type="checkbox" id="show" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-xl mb-4">Details sur la residence</h3>
        <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="mt-5 md:mt-0 md:col-span-3">
                <div class="overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white">
                        <div class="grid grid-cols-8 gap-2 md:gap-6">
                            <div class="col-span-8">
                                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0">
                                    <div class="w-full md:w-1/2">
                                        <dt class="text-sm font-medium text-gray-500">Date de création</dt>
                                        <dd class="text-sm font-normal text-gray-900">11/03/2024</dd>
                                    </div>
                                    <div class="w-full md:w-1/2">
                                        <dt class="text-sm font-medium text-gray-500">Commune</dt>
                                        <dd class="text-sm font-normal text-gray-900">Koumassi Agouti</dd>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-8">
                                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0">
                                  <div class="w-full md:w-1/2">
                                        <dt class="text-sm font-medium text-gray-500">Montant minimum de location</dt>
                                        <dd class="text-sm font-normal text-gray-900">50000 XOF</dd>
                                    </div>
                                    <div class="w-full md:w-1/2">
                                        <dt class="text-sm font-medium text-gray-500">Montant maximum de location</dt>
                                        <dd class="text-sm font-normal text-gray-900">1000000 XOF</dd>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-8">
                                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0">
                                  <div class="w-full md:w-1/2">
                                        <dt class="text-sm font-medium text-gray-500">Modalité</dt>
                                        <dd class="text-sm font-normal text-gray-900">Jour</dd>
                                    </div>
                                    <div class="w-full md:w-1/2">
                                        <dt class="text-sm font-medium text-gray-500">Type</dt>
                                        <dd class="text-sm font-normal text-gray-900">Villa</dd>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-8">
                                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0">
                                    <div class="w-full md:w-1/2">
                                        <dt class="text-sm font-medium text-gray-500">Nom complet proprietaire</dt>
                                        <dd class="text-sm font-normal text-gray-900">Chantal Leroux</dd>
                                    </div>
                                    <div class="w-full md:w-1/2">
                                        <dt class="text-sm font-medium text-gray-500">Contact proprietaire</dt>
                                        <dd class="text-sm font-normal text-gray-900">0158784411</dd>
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
</template>
