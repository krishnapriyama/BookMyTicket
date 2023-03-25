import React from 'react'

// components
import Sidebar from '../../Components/Sidebar/sidebar'
import Addmovieform from '../../Components/Forms/addmovie'
import Navbar from '../../Components/Navabar/navbar'

const addmovies = () => {
  return (
    <div>
      <div className="h-screen">
        <Sidebar></Sidebar>
        <div className="relative md:ml-64 bg-blueGray-100 p-6">
          <Addmovieform></Addmovieform>
        </div>
      </div>
    </div>
  )
}

export default addmovies
