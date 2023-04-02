import React, { useEffect, useState } from 'react'
import axios from 'axios'

const viewscreen = () => {
  const [screen, setScreen] = useState([])

  useEffect(() => {
    try {
      axios.get('http://localhost:4000/theater/view-screens').then((resp) => {
        setScreen(resp.data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/theater/deleteScreen/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.ok) {
        console.log('Movie deleted')
        window.location.href = '/view-screens'
      } else {
        console.error('Error deleting user')
        alert('Error deleting user')
      }
    })
    .catch((error) => {
      console.error(error)
      alert('Error deleting user')
    })
}

  return (
    <div className="h-screen w-full p-0 m-0 flex justify-center items-center">
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm bg-white rounded-2xl overflow-hidden">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-800 text-center text-gray-700 dark:text-gray-300">
            <tr>
              <th scope="col" class="px-6 py-3 font-medium">
                Screen Name
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Screen Type
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Ac/Non-AC
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Row Count
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Column Count
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {screen.map((s) => (
              <tr
                key={s.id}
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  {s.screenname}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                >
                  {s.screentype}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                >
                  {s.acnon}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                >
                  {s.rowcount}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-black  whitespace-nowrap"
                >
                  {s.columncount}
                </td>
                <td class="px-6 py-4 items-center flex justify-center gap-4">
                  <button
                    type="button"
                    class="text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                  >
                    Block
                  </button>
                  {/* edit */}
                  <button
                    type="button"
                    onClick={() => handleDelete(s._id)}
                    class="text-white bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
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
  )
}

export default viewscreen
