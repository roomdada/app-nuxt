<script setup>

</script>
<template>
  <input type="checkbox" id="account" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-xl mb-4">Mon compte</h3>
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
                      <dd class="text-sm font-normal text-gray-900">Romaric Konan</dd>
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
                      <dt class="text-sm font-medium text-gray-500">Derniere connexion</dt>
                      <dd class="text-sm font-normal text-gray-900">Il y'a 2 seconde</dd>
                    </div>
                    <div class="w-full md:w-1/2">
                      <dt class="text-sm font-medium text-gray-500">Compte</dt>
                      <dd class="text-sm font-normal text-gray-900">proprietataire de residence/Admin</dd>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-action">
        <label for="account" class="btn btn-error text-white">Fermer</label>
      </div>
    </div>
  </div>
</template>
