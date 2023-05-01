import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import userAxios from '../../../confic/axiosUser'

const categoryMovie = () => {

   const [movies, SetMovie] = useState([])
   const { category } = useParams();
   useEffect(() => {
    userAxios.get(`/categorymovie/${category}`).then((resp) => {
       SetMovie(resp.data)
       console.log(resp.data)
     })
   }, [])

  return (
    <>
     <div className="items-center justify-center">
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
                    <img
                      src={movie.poster1}
                      className="h-[350px] w-[250px]"
                      alt="dark"
                    />
                </div>
                <div className="mt-1 p-2 items-center justify-center">
                  <h2 className="text-slate-700 items-center justify-center">
                  {movie.moviename}
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
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
