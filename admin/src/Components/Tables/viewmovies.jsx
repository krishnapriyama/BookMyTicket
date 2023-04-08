import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//component
import Editmovie from '../Models/editmovie'

const viewmovies = () => {
  const [movies, setMovies] = useState([])
  const [length, setLength] = useState()
  const [showModal, setShowModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState([])

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie)
    setShowModal(true)
  }

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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {movies.map((movie) => (
                  <tr
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                    key={movie._id}
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap"
                      onClick={() => handleMovieClick(movie)}
                    >
                      {movie.moviename}
                    </td>
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

      {/* Models */}
      {showModal ? (
        <>
          <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold uppercase"> {selectedMovie.moviename}</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
  <p className="my-4 text-slate-500 text-lg leading-relaxed">
    <div className="bg-white rounded-lg p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={selectedMovie.poster1}
            alt="Product Image"
            className="rounded-lg shadow-md h-96 w-96"
          />
           <div className="flex flex-row space-x-4 mt-8 justify-between">
          <div className="w-1/3">
            <img
              src={selectedMovie.poster2}
              alt="Product Image"
              className="rounded-lg shadow-md h-56 w-56"
            />
          </div>
          <div className="w-1/3">
            <img
              src={selectedMovie.poster3}
              alt="Product Image"
              className="rounded-lg shadow-md h-56 w-56"
            />
          </div>
        </div>
        </div>
        <div className="md:w-1/2 md:pl-6">
          <p className="text-gray-600 mb-4">
            GENRE : {selectedMovie.genre}
          </p>
          <p className="text-gray-800 mb-4">
            DESCRIPTION : <br></br> {selectedMovie.description}
          </p>
          <p className="text-gray-800 mb-4">
            RELEASE DATE : {selectedMovie.releasedate}
          </p>
          <p className="text-gray-800 mb-4">
           LANGUAGE : {selectedMovie.language}
          </p>
          <p className="text-gray-800 mb-4">
            TRAILER LINK : {selectedMovie.trailerlink}
          </p>
        </div>
       
      </div>
    </div>
  </p>
</div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default viewmovies
