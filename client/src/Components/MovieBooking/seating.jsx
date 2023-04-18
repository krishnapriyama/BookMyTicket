import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import FourKIcon from '@mui/icons-material/FourK';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert'

let coulumSeat = []
let seat = []
const token = localStorage.getItem('token')

const seating = () => {
  const navigate = useNavigate()
  function reservation(seat, data) {

    if (selectedSeat.length <= 0) {
      swal({
        title: "Select Seat first!",
        text: "Minimum One Seat!",
        icon: "warning",

        dangerMode: false,
      })

    } else {
      if (!token) {
        swal({
          title: "Log Error",
          text: "you should log in first!",
          icon: "warning",
          dangerMode: false,
        })

      } else {

      }
      axios.post('http://localhost:4000/seatbook',
        {
          show: {
            date: new Date(data.date),
            time: data.time,
            SeatNumber: seat,
            price: data.Screen.TicketPrice,
            TotelPrice: seat.length * data.Screen.TicketPrice
          },
          movie: data.Screen.Movie,
          theater: data.Screen.theater

        }, {
        headers: {
          Authorization: `Bearer ${token}`
        }


      }
      ).then((resp) => {
        swal({
          title: "success",
          text: `${seat} Booked successfully`,
          icon: "success",
          dangerMode: false,
        }).then(() => {
          navigate('/')
        })
      })
    }


  }
  function reservation(seat, data) {

    if (selectedSeat.length <= 0) {
      swal({
        title: "Select Seat first!",
        text: "Minimum One Seat!",
        icon: "warning",

        dangerMode: false,
      })

    } else {
      if (!token) {
        swal({
          title: "Log Error",
          text: "you should log in first!",
          icon: "warning",
          dangerMode: false,
        })

      } else {

      }
      axios.post('http://localhost:4000/seatbook',
        {
          show: {
            date: new Date(data.date),
            time: data.time,
            SeatNumber: seat,
            price: data.Screen.TicketPrice,
            TotelPrice: seat.length * data.Screen.TicketPrice
          },
          movie: data.Screen.Movie,
          theater: data.Screen.theater

        }, {
        headers: {
          Authorization: `Bearer ${token}`
        }


      }
      ).then((resp) => {
        swal({
          title: "success",
          text: `${seat} Booked successfully`,
          icon: "success",
          dangerMode: false,
        }).then(() => {
          navigate('/')
        })
      })
    }


  }

  const { state } = useLocation()

  console.log(state)
  const [data, setData] = useState(state)

  const [rowCount, setrowCount] = useState(data.Screen.theater.screen.row)
  const [columCount, setColumncount] = useState(data.Screen.theater.screen.column)


  useEffect(() => {
    setData(state)
    setrowCount(data.Screen.theater.screen.row)
    setColumncount(data.Screen.theater.screen.column)
  }, [state, rowCount, columCount])

  for (let i = 0; i < rowCount; i++) {
    seat[i] = i
  }
  for (let j = 0; j < columCount; j++) {
    coulumSeat[j] = String.fromCharCode(65 + j)
  }
  const [selectedSeat, setSelectedSeat] = useState([])
  const Seatselect = (event) => {
    if (event.currentTarget.style.backgroundColor === 'red') {
      event.currentTarget.style.backgroundColor = 'white'
    } else {
      event.currentTarget.style.backgroundColor = 'red'
    }
    if (!selectedSeat.includes(event.target.value)) {
      setSelectedSeat([...selectedSeat, event.target.value])
    } else {
      setSelectedSeat(selectedSeat.filter((val) => val !== event.target.value))
    }
  }
  return (
    <div>
      <div className="bg-black ">
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
                            value={value + index} id={value + index} key={value + index} onClick={(event) => { Seatselect(event) }}
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
                  <div class="bg-[#2d2424fb] h-16 w-56 rounded-lg mt-20  flex  text-white">
                    <span className='flex text-center flex-col justify-center items-center '> {selectedSeat.length ? `${selectedSeat} ,` : null}</span></div>
                  <button class="bg-red-800 py-2 mb-8 px-4 mt-7 rounded-lg text-white font-bold">
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
