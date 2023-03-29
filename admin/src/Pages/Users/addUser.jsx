import React from 'react'

//components
import Sidebar from '../../Components/Sidebar/sidebar'
import Addusers from '../../Components/Forms/addusers'
import Navbar
 from '../../Components/Navabar/navbar'

const addUser = () => {
  return (
    <div className="h-screen flex w-full">
    <Sidebar />
    <div className="relative md:ml-64 w-full bg-blueGray-100">
      <Navbar />
      <div className="mx-auto w-full">
        <Addusers />
      </div>
    </div>
  </div>
  )
}

export default addUser
