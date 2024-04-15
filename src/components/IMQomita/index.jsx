import React from "react";

function IMQomita() {
  return (
    <div>
      <div class="max-w-6xl mx-auto my-20 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-lg text-gray-700 uppercase bg-blue-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class=" w-[5%] px-6 py-3">
                №
              </th>
              <th scope="col" class="px-6 py-3">
                Ism
              </th>
              <th scope="col" class="px-6 py-3">
                Mansublik
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1.
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                2.
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                3.
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IMQomita;
