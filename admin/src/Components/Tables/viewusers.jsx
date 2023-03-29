import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const viewusers = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/admin/view-users').then((response) => {
      setUsers(response.data)
    })
  }, [])

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/admin/deleteUser/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('User deleted')
          window.location.href = '/view-users'
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


  function userAction(usertoUpdate, action) {
    axios
      .post(`http://localhost:4000/admin/useraction`, {
        email: usertoUpdate.email,
        action: action,
      })
      .then((response) => {
        console.log(response);
        const updatedUsers = users.map((t) => {
          if (t.email === usertoUpdate.email) {
            return { ...t, isBlocked: response.data.isBlocked };
          }
          return t;
        });
        setUsers(updatedUsers);
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <div className="h-screen w-full p-0 m-0 flex justify-center items-center bg-gray-100 dark:bg-gray-800">
        <div className="relative overflow-x-auto shadow-md">
          <table className="w-full text-sm bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
            <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-800 text-center text-gray-700 dark:text-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((user) => (
                <tr
                  className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  key={user._id}
                >
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap"
                  >
                    {user.email}
                  </td>
                  <td className="px-6 py-4 flex justify-center items-center space-x-4">
                    <button
                      type="button"
                      className={`text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 ${
                        user.isBlocked
                          ? 'bg-green-500'
                          : 'bg-red-500'
                      }`}
                      onClick={() => userAction(user, !user.isBlocked)}
                    >
                      {user.isBlocked ? 'Block' : 'Unblock'}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(user._id)}
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
    </>
  )
}

export default viewusers
