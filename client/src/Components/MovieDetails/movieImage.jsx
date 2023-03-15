import React from 'react'
import { Link } from 'react-router-dom'


// components
import MovieSlide from '../Extracomponents/movieSlide'

const movieData = {
  title: 'The Marvel Series',
  releaseDate: '12/03/2001',
  Director: 'Peter John',
  genres: ['Action', 'Sci-Fi'],
}

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

const movieImage = () => {
  return (
    <div className="mx-auto p-8 items-center justify-center">
      <div className="bg-white p-8 rounded-lg mb-8 items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {movieData.title}
        </h1>
        <img
          src="https://wallpaperaccess.com/full/13453.jpg"
          alt=""
          className="mx-auto block mb-8 rounded-lg  lg:max-w-screen-lg"
        />
        <p className="text-gray-600 mb-4 flex items-center text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="flex mx-auto items-center justify-center gap-6">
          <button
            className="px-6 py-3 w-64 text-white bg-red-600 rounded-md"
            type="button"
          >
<Link to="/moviebooking">Book</Link>
          </button>
          <button
            className="px-6 py-3 w-64 text-white bg-red-600 rounded-md"
            type="button"
          >
            Trailer
          </button>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
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
      <h2 className='mt-12 text-center font-bold text-xl'>UPCOMMING MOVIES</h2>
      <MovieSlide></MovieSlide>
    </div>
  )
}

export default movieImage
