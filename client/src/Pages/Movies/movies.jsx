import React from 'react'

// components
import Navbar from '../../Components/Navbar/navbar'
import Sidebar from '../../Components/Movies/sidebar'
import Movies from '../../Components/Movies/movies'

const movies = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar></Navbar>

      {/* sidebar */}
      <div className="flex">
      <Sidebar></Sidebar>

      {/* movies */}
      <div className="h-screen flex-1 p-7">
      <Movies></Movies>
      </div>
      </div>

      

    </div>
  )
}

export default movies
