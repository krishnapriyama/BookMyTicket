import React, { useEffect, useState } from 'react'
import userAxios from '../../../confic/axiosUser'

//components
import MovieBooking from '../../Components/MovieBooking/movieBooking'
import Navbar from '../../Components/Navbar/navbar'
import Sidebartheater from '../../Components/Extracomponents/sidebartheater'
import { useParams } from 'react-router-dom'
import Datepicker from '../../Components/MovieBooking/datePicker'

const movieBooking = () => {
  const [show, setShow] = useState('')
  const { id } = useParams()
  const [bookingDate, setBookingDate] = useState(new Date())

  function currentDate(value) {
    setBookingDate(value)
    console.log(show)
  }
  useEffect(() => {
    userAxios.get(`/findShow/${id}`).then((resp) => {
      setShow(resp.data)
      console.log(resp.data);
    })
  }, [])


  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* <Sidebartheater data={show}/> */}
    <Datepicker  data={show} fn={currentDate} />

      {/* Booking */}
      <MovieBooking data={show} date={bookingDate} />
    </div>
  )
}

export default movieBooking
