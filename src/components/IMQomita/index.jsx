import React, { useEffect, useState } from "react";
import APIIlmiyQomita from "../../services/ilmiyQomita";

function IMQomita() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchImQomita = async () => {
      try {
        const response = await APIIlmiyQomita.getIlmiyQomita();
        setData(response.data);
      } catch (error) {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
      }
    };
    fetchImQomita();
  }, []);
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
            {data &&
              data.map((item, idx) => {
                return (
                  <tr key={idx} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {idx}.
                    </th>
                    <td class="px-6 py-4">{item.name_uz}</td>
                    <td class="px-6 py-4">{item.oqish_joyi_uz}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IMQomita;
