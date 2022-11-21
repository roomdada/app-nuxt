<script>

</script>
<template>
  <div class="px-6 py-6 rounded-md shadow-lg mb-4">
    <div class='container mb-4'>
      <h2 class='font-medium text-xl mb-4'>Criteres de recherches</h2>
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Libellé
            </th>
            <th  colspan="4" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Editer</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">

          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Piscine</td>
  
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
                    <svg class="text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                      width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 1 1 14 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 0 0 7 9v1h10z" />
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
</template>
