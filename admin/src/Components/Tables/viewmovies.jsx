import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//component
import Editmovie from '../Models/editmovie'

const viewmovies = () => {
  const [movies, setMovies] = useState([])
  const [length, setLength] = useState()

  useEffect(() => {
    axios.get('http://localhost:4000/admin/view-movies').then((response) => {
      setLength(response.data.length)
      setMovies(response.data)
    })
  }, [length, movies])

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/admin/deleteMovie/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Movie deleted')
          window.location.href = '/view-movies'
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
    <>
      <div className="h-screen w-full p-0 m-0 flex justify-center items-center bg-gray-100 dark:bg-gray-800">
        <div className="relative overflow-x-auto shadow-md">
          {length > 0 ? (
            <table className="w-full text-sm bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
              <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-800 text-center text-gray-700 dark:text-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Movie name
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    language
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Trailer link
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {movies.map((movie) => (
                  <tr
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                    key={movie._id}
                  >
                    <Link to='/detailedmovie'>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap"
                      >
                        {movie.moviename}
                      </td>
                    </Link>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap"
                    >
                      {movie.language}
                    </td>
                    <td className="px-6 py-4 items-center flex justify-center gap-4">
                      <button
                        type="button"
                        className="text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                      >
                        Block
                      </button>
                      <Editmovie movie={movie}></Editmovie>
                      <button
                        type="button"
                        onClick={() => handleDelete(movie._id)}
                        className="text-white bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Link to="/add-movies">
              <button
                type="button"
                className="text-white  bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                ADD Movies
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default viewmovies
