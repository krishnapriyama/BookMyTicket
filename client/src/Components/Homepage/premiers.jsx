import React from 'react'

const cards = [
  { id: 1, content: 'Card 1' },
  { id: 2, content: 'Card 2' },
  { id: 3, content: 'Card 3' },
  { id: 4, content: 'Card 4' },
  { id: 5, content: 'Card 5' },
]

const premiers = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-[700px] bg-gray-800 mb-20">
        <div className="flex justify-between ml-28 items-center w-full md:w-full p-7 mt-[-90px] ">
          <h2 className="text-white text-2xl font-bold">
            Premiers
            <br/>
            <span className='text-lg'>Brand new releases every Friday</span>
          </h2>
        </div>
        <div className="flex justify-center items-center w-3/4 md:w-3/4 h-[472px] bg-gray-200 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 justify-items-center w-full md:w-full">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white w-full h-96 p-4 flex items-center justify-center rounded-2xl"
              >
                {card.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default premiers
