import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const categoryMovie = () => {

   const [movies, SetMovie] = useState([])
   const { category } = useParams();
   useEffect(() => {
     axios.get(`http://localhost:4000/categorymovie/${category}`).then((resp) => {
       SetMovie(resp.data)
       console.log(resp.data)
     })
   }, [])

  return (
    <>
     <div class="items-center justify-center">
      <div
        class="mx-auto grid max-w-full items-center grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
       {movies.map((movie, index) => {
         return(
            <div key={index} class="grid-item" style={{ width: '250px' }}>
              <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                <div class="relative flex items-center overflow-hidden rounded-xl ">
                    <img
                      src={movie.poster1}
                      className="h-[350px] w-[250px]"
                      alt="dark"
                    />
                </div>
                <div class="mt-1 p-2 items-center justify-center">
                  <h2 class="text-slate-700 items-center justify-center">
                  {movie.moviename}
                  </h2>
                  <p class="mt-1 text-sm text-slate-400">
                  {movie.genre} {'/'}
                    {movie.language}
                  </p>
                </div>
              </article>
            </div>)
            })}
      </div>
    </div>
    </>
  )
}

export default categoryMovie
