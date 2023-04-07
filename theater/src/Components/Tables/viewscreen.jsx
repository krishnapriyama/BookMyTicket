import React, { useEffect, useState } from 'react'
import axios from 'axios'

const viewscreen = () => {
  const [screen, setScreen] = useState([])

  useEffect(() => {
    try {
      let token = localStorage.getItem('theaterToken')
      console.log(token)
      axios
        .get('http://localhost:4000/theater/view-screens', 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        .then((resp) => {
          console.log(resp)
          if (resp.data) {
            setScreen(resp.data.screens)
          } else {
            setScreen([])
          }
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
            <thead className="text-xs uppercase bg-gray-50 text-center text-black">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  Screen Name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Screen Type
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Total Count
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Row Count
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Column Count
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="justify-center items-center dark:divide-gray-700">
              {screen.map((s) => (
                <tr key={s.id}>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium justify-center items-center text-black whitespace-nowrap"
                  >
                    {s.screenname}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium justify-center items-center text-black  whitespace-nowrap"
                  >
                    {s.screentype}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium justify-center items-center text-black  whitespace-nowrap"
                  >
                    {s.totalcount}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium justify-center items-center text-black  whitespace-nowrap"
                  >
                    {s.row}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium justify-center items-center text-black  whitespace-nowrap"
                  >
                    {s.column}
                  </td>
                  <td className="px-6 py-4 items-center flex justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleDelete(s._id)}
                      className="text-white bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
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
