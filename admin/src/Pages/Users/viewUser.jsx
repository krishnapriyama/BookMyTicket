import React from 'react'

//components
import Viewusers from '../../Components/Tables/viewusers'
import Sidebar from '../../Components/Sidebar/sidebar'
import Navbar from '../../Components/Navabar/navbar'

const viewUser = () => {
  return (
    <div className="h-screen flex w-full">
    <Sidebar />
    <div className="relative md:ml-64 w-full bg-blueGray-100">
      <Navbar />
      <div className="mx-auto w-full">
        <Viewusers />
      </div>
    </div>
  </div>
  )
}

export default viewUser
