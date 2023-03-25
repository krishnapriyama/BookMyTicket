import React from 'react'

//components
import Sidebar from '../../Components/Sidebar/sidebar'
import Addusers from '../../Components/Forms/addusers'

const addUser = () => {
  return (
    <div>
      <div className="h-screen">
        <Sidebar></Sidebar>
        <div className="relative md:ml-64 bg-blueGray-100 p-6">
          <Addusers></Addusers>
        </div>
      </div>
    </div>
  )
}

export default addUser
