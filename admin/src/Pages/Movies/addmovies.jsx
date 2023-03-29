import React from 'react'

// components
import Sidebar from '../../Components/Sidebar/sidebar'
import Addmovieform from '../../Components/Forms/addmovie'
import Navbar from '../../Components/Navabar/navbar'

const addmovies = () => {
  return (
    <div className="h-screen flex w-full">
    <Sidebar />
    <div className="relative md:ml-64 w-full bg-blueGray-100">
      <Navbar />
      <div className="mx-auto w-full">
        <Addmovieform />
      </div>
    </div>
  </div>
  )
}

export default addmovies
