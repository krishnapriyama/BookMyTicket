import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
                <div className="mt-8 font-extrabold text-3xl">SCREEN</div>
              </div>
              <div>
                <div class="flex flex-col items-center">
                  <div class="bg-[#2d2424fb] h-16 w-56 rounded-lg mt-20"></div>
                  <button class="bg-red-800 py-2 px-4 mt-7 rounded-lg text-white font-bold">
                    <Link to='/booking'>
                    Confirm Seats
                    </Link>
                    
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default seating
