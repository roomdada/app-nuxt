<script setup>
import AppLayout from '~/layouts/admin.vue'
import PaymentMethod from '~/partials/payment-method.vue'
</script>
<template>
  <AppLayout>

    <div class="mt-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="header mb-2 md:flex justify-between">
          <div class="title">
            <h1 class="text-3xl font-bold text-gray-500 mt-3">Parametres</h1>
          </div>
        </div>
        <hr class="mb-5 border border-grey-900">
        <div class=" px-6 py-4 rounded-md">
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="flex flex-col" x-data="{ showCards: 'first',
              activeClasses: 'text-blue-500',
              inactiveClasses: 'text-black  hover:text-gray-900',
            }">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden sm:rounded-lg">
                  <div class="relative max-w-4xl mx-auto md:px-8 xl:px-0">
                    <div class="pt-10 pb-16">

                      <div class="px-4 sm:px-6 md:px-0">
                        <div class="py-6">
                          <!-- Tabs -->
                          <div class="lg:hidden">
                            <select id="selected-tab" name="selected-tab"
                              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                              <option selected>General</option>

                              <option>Password</option>

                              <option>Notifications</option>

                              <option>Plan</option>

                              <option>Billing</option>

                              <option>Team Members</option>
                            </select>
                          </div>
                          <div class="hidden lg:block">
                            <div class="border-b border-gray-200">
                              <nav class="-mb-px flex space-x-8">
                                <!-- Current: "border-purple-500 text-purple-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                                <button @click="showCards = 'first'"
                                  :class="showCards == 'first' ? activeClasses : inactiveClasses "
                                  class="whitespace-nowrap uppercase py-4 px-1 border-b-2 font-medium text-sm">
                                  Moyens de paiements
                                </button>

                                <button @click="showCards = 'second'"
                                  :class="showCards == 'second' ? activeClasses : inactiveClasses"
                                  class="border-transparent uppercase text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                                  Categorie </button>
                                <button @click="showCards = 'docs'"
                                  :class="showCards == 'docs' ? activeClasses : inactiveClasses"
                                  class="border-transparent uppercase text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                                  Documents disponibles </button>

                                <button @click="showCards = 'search'"
                                  :class="showCards == 'search' ? activeClasses : inactiveClasses"
                                  class="border-transparent uppercase text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                                  Criteres de Recherche </button>

                              </nav>
                            </div>
                          </div>

                          <!-- Description list with inline editing -->
                          <div class="mt-10 divide-y divide-gray-200"
                            :class="showCards == 'first' ? 'block' : 'hidden'">
                            <div class="flex justify-between">
                              <div class="space-y-1">
                                <h3 class="text-lg leading-6 font-medium text-gray-900">Listes des differents moyens de
                                  paiement</h3>
                                <p class="max-w-2xl text-sm text-gray-500">Les differents moyens de trasactions</p>
                              </div>
                              <button data-modal-toggle="addMethod"
                                class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                  style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                                  <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                                </svg>
                              </button>



                            </div>
                            <div class="mt-6">
                              <div>
                                <div class="flow-root mt-6">
                                  <ul role="list" class="-my-5 divide-y divide-gray-200 border-2 px-4">
                                    <li class="py-4 px-4">
                                      <div class="flex items-center space-x-4">
                                        <div class="flex-shrink-0">
                                          <img class="h-24 w-24 rounded-full object-cover"
                                            src="https://africabusinesscommunities.com/Images/Key%20Logos/wave.png"
                                            alt="">
                                        </div>
                                        <div class="flex-1 min-w-0">
                                          <p class="text-sm font-medium text-gray-900 truncate">Wave cote d'ivoire</p>
                                          <p class="text-sm text-gray-500 truncate">25%</p>
                                        </div>
                                        <div class="flex items-center">

                                          <div>
                                            <a href="#" data-modal-toggle="editHouseModal">
                                              <svg class="text-indigo-900" fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24">
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
                                              <svg class="text-red-500" fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                height="24">
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path
                                                  d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                                              </svg>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </li>


                                  </ul>
                                </div>

                              </div>

                            </div>
                          </div>

                          <div class="mt-10 divide-y divide-gray-200"
                            :class="showCards == 'second' ? 'block' : 'hidden'">
                            <div class="space-y-1">
                              <div class="flex justify-between">
                                <div class="space-y-1">
                                  <h3 class="text-lg leading-6 font-medium text-gray-900">Listes des differentes
                                    Categorie</h3>
                                </div>
                                <button
                                  class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                  type="button">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                                    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                                  </svg>
                                </button>



                              </div>
                            </div>
                            <div class="mt-6">
                              <PaymentMethod />
                            </div>
                          </div>

                          <div class="mt-10 divide-y divide-gray-200" :class="showCards == 'docs' ? 'block' : 'hidden'">
                            <div class="space-y-1">
                              <div class="flex justify-between">
                                <div class="space-y-1">
                                  <h3 class="text-lg leading-6 font-medium text-gray-900">Listes des documents</h3>
                                </div>
                                <div>


                                  <button data-modal-toggle="addCat"
                                    class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                      style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                                      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                                    </svg>
                                  </button>
                                </div>



                              </div>
                            </div>
                            <div class="mt-6">
                              <PaymentMethod />
                            </div>
                          </div>

                          <div class="mt-10 divide-y divide-gray-200"
                            :class="showCards == 'search' ? 'block' : 'hidden'">
                            <div class="space-y-1">
                              <div class="flex justify-between">
                                <div class="space-y-1">
                                  <h3 class="text-lg leading-6 font-medium text-gray-900">Listes des differents Criteres
                                    de recherche</h3>
                                </div>
                                <button
                                  class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                  type="button">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                                    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                                  </svg>
                                </button>


                              </div>
                            </div>
                            <div class="mt-6">
                              <PaymentMethod />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </AppLayout>
</template>
