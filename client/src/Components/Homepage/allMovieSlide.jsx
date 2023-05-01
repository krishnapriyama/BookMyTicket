import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import userAxios from '../../../confic/axiosUser'

const newRelease = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    userAxios.get('/homeMovies').then((resp) => {
      setMovies(resp.data)
    })
  }, [])
  return (
    <>
      <div className="h-9 w-full mt-10 flex items-center justify-center  mb-7 bg-gray-100">
        <h2 className="text-center text-black font-mono font-bold text-xl mt-16 mb-20">
          ENJOY THE ENTERTAINMENT
        </h2>
      </div>
      <div className="flex px-2 overflow-x-scroll overflow-y-hidden scroll-smooth scroll-m-0 scrollbar-hide  bg-gray-100">
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              className="max-w-[100%] bg-gray-800 rounded-xl p-3 text-white m-5 flex flex-col duration-300 mb-12 cursor-pointer text-xl"
              onClick={() => {}}
            >
             <Link to={`/moviedetail/${movie._id}`}>
                <img
                  className="max-w-lg self-center rounded-lg w-[230px]  h-[350px]"
                  src={movie.poster1}
                  alt="poster"
                />
              </Link>
              <div className="mt-1 p-2 items-center justify-center">
                <h2 className="text-white items-center justify-center">
                  {movie.moviename}
                </h2>
                <p className="mt-1 text-sm text-white">
                  {movie.genre} {'/'}
                  {movie.language}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default newRelease
