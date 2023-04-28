import axios from 'axios'
import React, { useEffect, useState } from 'react'
import userAxios from '../../../confic/axiosUser'

const movies =[{
   title:"THE DARK",
   vote_average:3
},{
   title:"THE DARK",
   vote_average:3
},{
   title:"THE DARK",
   vote_average:3
},{
   title:"THE DARK",
   vote_average:3
},{
   title:"THE DARK",
   vote_average:3
},{
   title:"THE DARK",
   vote_average:3
}]

const movieSlide = () => {

   const [movies,setMovies] =useState([])
  useEffect(()=>{
   userAxios.get('/new-release').then((resp)=>{
  setMovies(resp.data)
})
  },[])

  return (
    <div>
        <div className='flex px-2 overflow-x-scroll overflow-y-hidden scroll-smooth scroll-m-0 scrollbar-hide'>
            {movies.map((movie, index) => {
                return (
                    <div key={index} className='max-w-[100%] bg-gray-100 rounded-xl p-3 text-white m-5 flex flex-col duration-300 cursor-pointer text-xl hover:scale-110'>
                        <img
                            className='max-w-lg rounded-lg w-[230px]  h-[350px]'
                            src={movie.poster1}
                            alt='poster'
                        />
                        <h3 className='my-1 text-start text-black'>{movie.moviename}</h3>
                        <h3 className='my-1 text-black text-sm'>⭐8/10</h3>
                    </div>)
            })}
        </div>
    </div>
  )
}

export default movieSlide
