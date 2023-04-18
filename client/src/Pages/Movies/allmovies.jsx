import React from 'react'

// components
import Navbar from '../../Components/Navbar/navbar'
import Sidebar from '../../Components/Extracomponents/sidebarmovie'
import Movies from '../../Components/Movies/allMovie'

const movies = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar></Navbar>

     
      {/* movies */}
      <div className="h-screen flex-1 p-7">
      <Movies></Movies>
      </div>
      </div>

      
  )
}

export default movies
