<script>

</script>
<template>
  <div class="px-6 py-6 rounded-md shadow-lg mb-4">
    <div class="flex justify-between mb-4">
      <div class="space-y-1">
        <h3 class="text-xl leading-6 font-medium text-gray-900">Listes des documents</h3>
      </div>
      <label for="add-doc" class="btn btn-primary">Nouveau</label>
    </div>
    <div class='container mb-4'>
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nom du document
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Abreviation
            </th>

            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre d'exemplaires a fournir
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Editer</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">

          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Attestation</td>

            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AT</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              12
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div class="flex items-center">
                  <div>
                    <label for="edit-doc" class='cursor-pointer'>
                      <svg class="text-indigo-900" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24">
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
                    <label for="delete-doc" class='cursor-pointer'>
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
  </div>

  <input type="checkbox" id="add-doc" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-xl mb-4">Ajouter un nouveau document</h3>
      <form class="mx-auto">
        <div class="grid grid-cols-8">
          <div class="col-span-12 md:col-span-12">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Libellé</span>
              </label>
              <input type="text" placeholder="" class="input input-bordered w-full max-w-full" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Abreviation</span>
              </label>
              <input type="text" placeholder="" class="input input-bordered w-full max-w-full" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">exemplaires a fournir</span>
              </label>
              <input type="number" placeholder="" class="input input-bordered w-full max-w-full" />
            </div>
          </div>
        </div>
      </form>
      <div class="modal-action">
        <label for="add-doc" class="btn btn-error text-white">Annuler</label>
        <label for="add-doc" class="btn">Enregistrer</label>
      </div>
    </div>
  </div>

  <!--edit modal-->

  <input type="checkbox" id="edit-doc" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-xl mb-4">Editer le document</h3>
      <form class="mx-auto">
        <div class="grid grid-cols-8">
          <div class="col-span-12 md:col-span-12">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Libellé</span>
              </label>
              <input type="text" placeholder="" class="input input-bordered w-full max-w-full" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Abreviation</span>
              </label>
              <input type="text" placeholder="" class="input input-bordered w-full max-w-full" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">exemplaires a fournir</span>
              </label>
              <input type="number" placeholder="" class="input input-bordered w-full max-w-full" />
            </div>
          </div>
        </div>
      </form>
      <div class="modal-action">
        <label for="edit-doc" class="btn btn-error text-white">Annuler</label>
        <label for="edit-doc" class="btn">Enregistrer</label>
      </div>
    </div>
  </div>

 

  <input type="checkbox" id="delete-doc" class="modal-toggle" />
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
          <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Suppression du document</h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">Etes-vous sur de vouloir supprimer cet document ?</p>
          </div>
        </div>
      </div>
      <div class="modal-action">
        <label for="delete-doc" class="btn btn-error text-white">Annuler</label>
        <label for="delete-doc" class="btn">Confirmer</label>
      </div>
    </div>
  </div>
</template>
