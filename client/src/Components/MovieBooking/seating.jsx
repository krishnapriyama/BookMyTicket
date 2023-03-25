import React, { useState } from 'react'
let coulumSeat = []
let seat = []

const seating = () => {
  const [rowCount, setrowCount] = useState(10)
  const [columCount, setColumncount] = useState(5)
  for (let i = 0; i < rowCount; i++) {
    seat[i] = i
  }
  for (let j = 0; j < columCount; j++) {
    coulumSeat[j] = String.fromCharCode(65 + j)
  }
  return (
    <div>
      <div className="bg-black h-screen">
        <div className="mainMid-container">
          <div className="flex justify-center items-auto pt-30">
            <div className="w-full">
              {coulumSeat.map((value, index) => {
                return (
                  <div className="flex justify-center gap-3" key={value}>
                    {seat.map((data, index) => {
                      return (
                        <>
                          <button
                            className="h-8 w-8 bg-white mt-10 rounded-lg cursor-pointer"
                            value=""
                            id=""
                            key=""
                            onClick={() => {}}
                          >
                            {index == 0 && value}
                            {value == 'A' && data}
                          </button>
                        </> 
                      )
                    })}
                  </div>
                )
              })}
              <div className="pt-50 flex items-center flex-col text-yellow-500">
                <div className="mt-8">
                  </div>Screen</div>
                  <div>
                <div className="w-1/2 h-50 bg-gray-800 rounded-full border-b-5 border-white filter blur-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default seating
