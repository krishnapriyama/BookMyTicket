import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const viewtheaters = () => {
  const [theater, setTheater] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/admin/view-theaters')
      .then((response) => response.json())
      .then((data) => setTheater(data))
      .catch((error) => console.error(error))
  }, [])

  function authorisetheater(theater) {
fetch('http://localhost:4000/admin/accept', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(theater)
}).then((resposne)=>{
console.log(resposne);
});
  }
    
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div class="relative overflow-x-auto ">
          <table class="text-sm text-left text-white rounded-2xl">
            <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-400 text-center text-white">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Place
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {theater.map((theater,index) => (
                <tr key={index} class="bg-white border-b">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {theater.email}
                  </th>
                  <td class="px-6 py-4 text-black font-medium">
                    {theater.place}
                  </td>
                  <td class="px-6 py-4 items-center flex justify-center">
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={() => authorisetheater(theater)}
                    >
                      Block
                    </button>
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default viewtheaters
