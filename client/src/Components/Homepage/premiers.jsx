import React from 'react'
import { Link, useParams } from 'react-router-dom'

const cards = [
  { id: 1, category: 'Drama' },
  { id: 2, category: 'Action' },
  { id: 3, category: 'Thriller' },
  { id: 4, category: 'Sci-fic' },
  { id: 5, category: 'Comedy' },
]

const premiers = () => {
  return (
    <>
      <div className="flex box-border flex-col mt-36 justify-center items-center  h-[700px]. bg-gray-800 mb-20">
        <div className="flex justify-between items-center w-screen  p-7 mt-[-90px] bg-gray-800 ">
          <h2 className="text-white text-2xl font-bold w-screen">
            Premiers
            <br />
            <span className="text-lg">Brand new releases every Friday</span>
          </h2>
        </div>
        <div className="flex  justify-center items-center w-3/4 md:w-4/4 bg-gray-200 rounded-lg mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 justify-items-center w-full md:w-full">
            {cards.map((card) => (
              <Link to={`/categorymovie/${card.category}`}>
                <button
                  key={card.id}
                  className="bg-black text-white w-44 h-44 p-4 flex items-center justify-center font-semibold rounded-2xl uppercase"
                >
                  {card.category}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default premiers
