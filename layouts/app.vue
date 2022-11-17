<script setup lang="ts">
import { defineProps } from 'vue'
import Navbar from '~/partials/navbar.vue'

const props = defineProps<{
  title: string
}>()

useHead({
  script: [{
    "src": "//unpkg.com/alpinejs",
    "defer": true
  }]
})
</script>
<template>

  <Head>
    <title>{{ props.title }}</title>
    <html class="h-full" lang="fr" />

    <body x-data='{ showProfilDropdown: false, hideNavbar: false }' x-cloak />
  </Head>

  <div>

    <div x-show="hideNavbar" class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>

      <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">

        <div class="absolute top-0 right-0 -mr-12 pt-2">
          <button x-on:click="hideNavbar = false" type="button"
            class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Fermer</span>
            <!-- Heroicon name: outline/x -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex-shrink-0 flex items-center px-4">
          <img class="h-8 w-auto" src="~/assets/images/logo.jpg" alt="Logo">
        </div>
        <nav class="mt-5 flex-1 flex mt-2 flex-col divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
          <div class="px-4 space-y-1">
            <!-- Current: "bg-cyan-800 text-white", Default: "text-cyan-100 hover:text-white hover:bg-cyan-600" -->
            <NuxtLink href="/proprietaire"
              class="bg-cyan-800 text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
              aria-current="page">
              <!-- Heroicon name: outline/home -->
              <svg class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                <path
                  d="M12 4C6.486 4 2 8.486 2 14a9.89 9.89 0 0 0 1.051 4.445c.17.34.516.555.895.555h16.107c.379 0 .726-.215.896-.555A9.89 9.89 0 0 0 22 14c0-5.514-4.486-10-10-10zm7.41 13H4.59A7.875 7.875 0 0 1 4 14c0-4.411 3.589-8 8-8s8 3.589 8 8a7.875 7.875 0 0 1-.59 3z">
                </path>
                <path
                  d="M10.939 12.939a1.53 1.53 0 0 0 0 2.561 1.53 1.53 0 0 0 2.121-.44l3.962-6.038a.034.034 0 0 0 0-.035.033.033 0 0 0-.045-.01l-6.038 3.962z">
                </path>
              </svg>
              Tableau de bord
            </NuxtLink>



            <NuxtLink href="/proprietaire/users"
              class="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md">
              <!-- Heroicon name: outline/scale -->
              <svg class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                <path
                  d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z">
                </path>
                <path
                  d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z">
                </path>
              </svg>
              Utilisateurs
            </NuxtLink>

            <NuxtLink to="/proprietaire/bookings"
              class="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md">
              <!-- Heroicon name: outline/user-group -->
              <svg class="mr-4 h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                <path
                  d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z">
                </path>
              </svg>
              Reservations
            </NuxtLink>


          </div>
          <div class="mt-6 pt-6">
            <div class="px-4 space-y-1">
              <NuxtLink to="/proprietaire/residence"
                class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                <!-- Heroicon name: outline/cog -->
                <svg class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                  <path
                    d="M19 2H9c-1.103 0-2 .897-2 2v5.586l-4.707 4.707A1 1 0 0 0 3 16v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zm-8 18H5v-5.586l3-3 3 3V20zm8 0h-6v-4a.999.999 0 0 0 .707-1.707L9 9.586V4h10v16z">
                  </path>
                  <path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 1h2v2H7z"></path>
                </svg>
                Residences
              </NuxtLink>

            </div>
          </div>

          <div class="mt-6 pt-6">
            <div class="px-4 space-y-1">

              <NuxtLink href="/proprietaire/transactions"
                class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                <!-- Heroicon name: outline/question-mark-circle -->
                <svg class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                  <path
                    d="M2 8v4.001h1V18H2v3h16l3 .001V21h1v-3h-1v-5.999h1V8L12 2 2 8zm4 10v-5.999h2V18H6zm5 0v-5.999h2V18h-2zm7 0h-2v-5.999h2V18zM14 8a2 2 0 1 1-4.001-.001A2 2 0 0 1 14 8z">
                  </path>
                </svg>
                Transactions
              </NuxtLink>
            </div>
          </div>
        </nav>

      </div>

      <div class="flex-shrink-0 w-14" aria-hidden="true">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
        <div class="inline-flex items-center px-24">
          <a href="#">
            <img class="h-16 w-auto rounded-full" src="~/assets/images/logo.jpg" alt="lOGO">
          </a>
        </div>
        <nav class="mt-5 flex-1 flex mt-2 flex-col divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
          <div class="px-4 space-y-1">
            <!-- Current: "bg-cyan-800 text-white", Default: "text-cyan-100 hover:text-white hover:bg-cyan-600" -->
            <NuxtLink href="/proprietaire"
              class="bg-cyan-800 text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
              aria-current="page">
              <!-- Heroicon name: outline/home -->
              <svg class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                <path
                  d="M12 4C6.486 4 2 8.486 2 14a9.89 9.89 0 0 0 1.051 4.445c.17.34.516.555.895.555h16.107c.379 0 .726-.215.896-.555A9.89 9.89 0 0 0 22 14c0-5.514-4.486-10-10-10zm7.41 13H4.59A7.875 7.875 0 0 1 4 14c0-4.411 3.589-8 8-8s8 3.589 8 8a7.875 7.875 0 0 1-.59 3z">
                </path>
                <path
                  d="M10.939 12.939a1.53 1.53 0 0 0 0 2.561 1.53 1.53 0 0 0 2.121-.44l3.962-6.038a.034.034 0 0 0 0-.035.033.033 0 0 0-.045-.01l-6.038 3.962z">
                </path>
              </svg>
              Tableau de bord
            </NuxtLink>



            <NuxtLink href="/proprietaire/users"
              class="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md">
              <!-- Heroicon name: outline/scale -->
              <svg class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                <path
                  d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z">
                </path>
                <path
                  d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z">
                </path>
              </svg>
              Utilisateurs
            </NuxtLink>

            <NuxtLink to="/proprietaire/bookings"
              class="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md">
              <!-- Heroicon name: outline/user-group -->
              <svg class="mr-4 h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                <path
                  d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z">
                </path>
              </svg>
              Reservations
            </NuxtLink>


          </div>
          <div class="mt-6 pt-6">
            <div class="px-4 space-y-1">
              <NuxtLink to="/proprietaire/residence"
                class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                <!-- Heroicon name: outline/cog -->
                <svg class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                  <path
                    d="M19 2H9c-1.103 0-2 .897-2 2v5.586l-4.707 4.707A1 1 0 0 0 3 16v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zm-8 18H5v-5.586l3-3 3 3V20zm8 0h-6v-4a.999.999 0 0 0 .707-1.707L9 9.586V4h10v16z">
                  </path>
                  <path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 1h2v2H7z"></path>
                </svg>
                Residences
              </NuxtLink>

            </div>
          </div>

          <div class="mt-6 pt-6">
            <div class="px-4 space-y-1">

              <NuxtLink href="/proprietaire/transactions"
                class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                <!-- Heroicon name: outline/question-mark-circle -->
                <svg class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;">
                  <path
                    d="M2 8v4.001h1V18H2v3h16l3 .001V21h1v-3h-1v-5.999h1V8L12 2 2 8zm4 10v-5.999h2V18H6zm5 0v-5.999h2V18h-2zm7 0h-2v-5.999h2V18zM14 8a2 2 0 1 1-4.001-.001A2 2 0 0 1 14 8z">
                  </path>
                </svg>
                Transactions
              </NuxtLink>
            </div>
          </div>
        </nav>

      </div>
    </div>

    <div class="lg:pl-64 flex flex-col flex-1">
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
        <button x-on:click='hideNavbar= !hideNavbar' type="button"
          class="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden">
          <span class="sr-only">Ouvrir</span>
          <!-- Heroicon name: outline/menu-alt-1 -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
        <!-- Search bar -->
        <div class="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Rechercher</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                  <!-- Heroicon name: solid/search -->
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <input id="search-field" name="search-field"
                  class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                  placeholder="Rechercher" type="search">
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <button type="button"
              class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
              <span class="sr-only">Voir les notifications</span>
              <!-- Heroicon name: outline/bell -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button x-on:click='showProfilDropdown = !showProfilDropdown' type="button"
                  class="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
                  id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <img class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="">
                  <span class="hidden ml-3 text-gray-700 text-sm font-medium lg:block"><span class="sr-only">Open user
                      menu for </span>Emilie Koffi</span>
                  <!-- Heroicon name: solid/chevron-down -->
                  <svg class="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
              <div x-show="showProfilDropdown"
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                  id="user-menu-item-0">Mon compte</a>
                <a href="/parametres" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                  id="user-menu-item-1">Parametres</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                  id="user-menu-item-2">Se deconnecter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main class="flex-1 pb-8">
        <slot />
      </main>
    </div>
  </div>
</template>
