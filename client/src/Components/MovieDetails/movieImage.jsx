import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import userAxios from '../../../confic/axiosUser'
import moment from 'moment';
// components
import MovieSlide from '../Extracomponents/movieSlide'
const movieImage = () => {
  const [movie, SetMovie] = useState('')
  const { id } = useParams();
  useEffect(() => {
    userAxios.get(`/moviedetail/${id}`).then((resp) => {
      SetMovie(resp.data)
      console.log(resp.data)
    })
  }, [])

  const castDetails = [
    {
      name: 'Ram K Das',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGk0XDPwd63cdXVsxCfKxTn-gEos2wz-A0ocfU8OhTLltxMbuiTRxz35d0TqxUJ0XAFcPTekABTww&usqp=CAU&ec=48600113',
      position: 'Director',
    },
    {
      name: 'Ram K Das',
      position: 'Director',
    },
    {
      name: 'Ram K Das',
      position: 'Director',
    },
    {
      name: 'Ram K Das',
      position: 'Director',
    },
    {
      name: 'Ram K Das',
      position: 'Director',
    },
    {
      name: 'Ram K Das',
      position: 'Director',
    },
  ]
  return (
    <div className="mx-auto p-8 items-center justify-center">
      <div className="bg-white p-8 rounded-lg mb-8 items-center justify-center">
  <h1 className="text-3xl font-bold mb-6 text-center">
    {movie.moviename}
  </h1>
  <div className="flex justify-center mb-8 gap-6">
    <img
      src={movie.poster1}
      alt=""
      className="w-[200px] h-[300px] block rounded-lg"
    />
    <img
      src={movie.poster2}
      alt=""
      className="w-[200px] h-[300px] block rounded-lg"
    />
    <img
      src={movie.poster3}
      alt=""
      className="w-[200px] h-[300px] block rounded-lg"
      />
      </div>
      <p className="text-black mb-4 w-[1200px] mx-auto flex justify-center font-semibold items-center text-center">
  {movie.description}
</p>


  <div className="text-center">
    <div className="text-center text-black">
      <h5 className='"text-gray-600 text-black mb-4 mt-6 items-center text-center'>
        Language :{movie.language}
      </h5>
      <h5 className='"text-gray-600 text-black mb-4 mt-6 items-center text-center'>
        Genre :{movie.genre}
      </h5>
      <h5 className="text-black font-bold mb-4 mt-6 items-center text-center">
  Release Date: {moment(movie.releasedate).format('MMM DD, YYYY')}
</h5>
    </div>
  </div>
  <div className="flex mx-auto items-center justify-center gap-6">
    <Link to={`/SelectTheater/${movie._id}`}>
      <button
        className="px-6 py-3 w-64 text-white bg-red-600 rounded-md"
        type="button"
      >
        Book
      </button>
    </Link>
    <button
      className="px-6 py-3 w-64 text-white bg-red-600 rounded-md"
      type="button"
    >
      Trailer
    </button>
  </div>
</div>

      <div className="bg-white p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Cast & Crew</h2>
        <div className="grid grid-cols-6 gap-5 items-center justify-center">
          {castDetails.map((cast) => (
            <div key="" className="bg-gray-100 p-4 rounded-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGk0XDPwd63cdXVsxCfKxTn-gEos2wz-A0ocfU8OhTLltxMbuiTRxz35d0TqxUJ0XAFcPTekABTww&usqp=CAU&ec=48600113"
                alt=""
                className="mb-4 rounded-full w-24 h-20 object-cover items-center justify-center mx-auto"
              />
              <h3 className="text-md font-bold mb-2 w-24 items-center justify-center mx-auto">
                {cast.name}
              </h3>
              <p className="text-gray-600 text-center mx-auto">
                {cast.position}
              </p>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-center font-bold text-xl mb-7">NEW RELEASE MOVIES</h2>
      <MovieSlide></MovieSlide>
    </div>
  )
}

export default movieImage
