import React from 'react'

//components
import Addtheater from '../../Components/Forms/addtheater'
import Sidebar from '../../Components/Sidebar/sidebar'
import Navbar from '../../Components/Navabar/navbar'

const addtheater = () => {
  return (
    <div className="h-screen flex w-full">
    <Sidebar />
    <div className="relative md:ml-64 w-full bg-blueGray-100">
      <Navbar />
      <div className="mx-auto w-full">
        <Addtheater />
      </div>
    </div>
  </div>
  )
}

export default addtheater
