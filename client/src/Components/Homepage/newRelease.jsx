import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import userAxios from '../../../confic/axiosUser'

const upcommingMovies = () => {
  const [movies,setMovies] =useState([])
  useEffect(()=>{
    userAxios.get('/new-release').then((resp)=>{
  setMovies(resp.data)
})
  },[])
  return (
    <div>
      <section className="py-10 bg-gray-100 items-center justify-center">
        <h1 className="text-start p-8  font-bold text-2xl ml-10 mb-[-20px]">NEWRELEASE MOVIES</h1>

        <div
          className="mx-auto grid max-w-full items-center grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {movies.map((movie, index) => {
            return(
            <div key={index} className="grid-item" style={{ width: '250px' }}>
              <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                <div className="relative flex items-center overflow-hidden rounded-xl ">
                <Link to={`/moviedetail/${movie._id}`}>
                  <img
                    src={movie.poster1} className='w-[230px]  h-[350px]'
                    alt="dark"
                  />
                  </Link>
                </div>
                <div className="mt-1 p-2 items-center justify-center">
                  <h2 className="text-slate-700 items-center justify-center">
                  {movie.moviename}
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                  {movie.genre}{'/'}{movie.language }
                  </p>
                </div>
              </article>
            </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default upcommingMovies
