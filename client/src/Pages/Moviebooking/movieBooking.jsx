import React, { useEffect, useState } from 'react'
import axios from 'axios'

//components
import MovieBooking from '../../Components/MovieBooking/movieBooking'
import Navbar from '../../Components/Navbar/navbar'
import Sidebartheater from '../../Components/Extracomponents/sidebartheater'
import { useParams } from 'react-router-dom'
import Datepicker from '../../Components/MovieBooking/datePicker'

const movieBooking = () => {
  const [show, setShow] = useState('')
  const { MovieId } = useParams()
  const [bookingDate, setBookingDate] = useState(new Date())

  function currentDate(value) {
    setBookingDate(value)
  }


  useEffect(() => {
    axios.get(`http://localhost:4000/findShow/${MovieId}`).then((resp) => {
      setShow(resp.data)
      console.log(resp.data);
    })
  }, [])

  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

      <Sidebartheater></Sidebartheater>
    <Datepicker  data={show} fn={currentDate} />
     

      {/* Booking */}
      <MovieBooking></MovieBooking>
    </div>
  )
}

export default movieBooking
