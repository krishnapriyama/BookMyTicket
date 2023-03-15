import React from 'react'

//components
import MovieBooking from '../../Components/MovieBooking/movieBooking'
import Navbar from '../../Components/Navbar/navbar'

const movieBooking = () => {
  return (
    <div>
      
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Booking */}
      <MovieBooking></MovieBooking>
    </div>
  )
}

export default movieBooking
