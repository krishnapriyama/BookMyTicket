import React from 'react'

//components
import Viewmovies from '../../Components/Tables/viewmovies'
import Sidebar from '../../Components/Sidebar/sidebar'
import Navbar from '../../Components/Navabar/navbar'

const viewmovies = () => {
  return (
    <div className="h-screen flex w-full">
    <Sidebar />
    <div className="relative md:ml-64 w-full bg-blueGray-100">
      <Navbar />
      <div className="mx-auto w-full">
        <Viewmovies />
      </div>
    </div>
  </div>
  )
}

export default viewmovies
