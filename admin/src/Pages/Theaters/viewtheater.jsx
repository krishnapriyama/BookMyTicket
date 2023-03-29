import React from 'react'

//components
import Viewtheaters from '../../Components/Tables/viewtheaters'
import Sidebar from '../../Components/Sidebar/sidebar'
import Navbar from '../../Components/Navabar/navbar'

const viewtheater = () => {
  return (
    <div className="h-screen flex w-full">
    <Sidebar />
    <div className="relative md:ml-64 w-full bg-blueGray-100">
      <Navbar />
      <div className="mx-auto w-full">
        <Viewtheaters />
      </div>
    </div>
  </div>
  )
}

export default viewtheater
