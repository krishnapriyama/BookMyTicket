import React from 'react'

//components
import MovieBooking from '../../Components/MovieBooking/movieBooking'
import Navbar from '../../Components/Navbar/navbar'
import Sidebartheater from '../../Components/Extracomponents/sidebartheater'

const movieBooking = () => {
  return (
    <div>
      
      {/* Navbar */}
      <Navbar></Navbar>

      {/* sidebar */}
      <Sidebartheater></Sidebartheater>

      {/* Booking */}
      <MovieBooking></MovieBooking>
    </div>
  )
}

export default movieBooking
