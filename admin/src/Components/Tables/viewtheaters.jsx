import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';



const ViewTheaters = () => {
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/admin/view-theaters')
      .then((response) => response.json())
      .then((data) => setTheaters(data))
      .catch((error) => console.error(error));
  }, []);

  function authorizeTheater(theaterToUpdate, action) {
    axios
      .patch(`http://localhost:4000/admin/accept`, {
        email: theaterToUpdate.email,
        action: action,
      })
      .then((response) => {
        const updatedTheaters = theaters.map((value) => {
          if (value.email === theaterToUpdate.email) {
            return { ...value, accepted: response.data.accepted };
          }
          return value;
        });
        setTheaters(updatedTheaters);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="h-screen w-full p-0 m-0 flex justify-center items-center bg-gray-100 dark:bg-gray-800">
    <div className="relative overflow-x-auto shadow-md">
      <table className="w-full text-sm bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
        <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-800 text-center text-gray-700 dark:text-gray-300">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              Email
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Place
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {theaters.map((theater, index) => (
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800" key={theater.id}>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap"
              >
                {theater.email}
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap"
              >
                {theater.place}
              </td>
                <td className="px-6 py-4 items-center flex justify-center">
                  <button
                    type="button"
                    className={`text-white bg-blue-700 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ${
                      theater.accepted
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }`}
                    onClick={() => authorizeTheater(theater, !theater.accepted)}
                  >
                    {theater.accepted ? 'Accepted' : 'Rejected'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewTheaters;