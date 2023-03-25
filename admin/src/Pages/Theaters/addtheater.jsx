import React from 'react'

//components
import Addtheater from '../../Components/Forms/addtheater'
import Sidebar from '../../Components/Sidebar/sidebar'

const addtheater = () => {
  return (
    <div>
      <div className="h-screen">
        <Sidebar></Sidebar>
        <div className="relative md:ml-64 bg-blueGray-100 p-6">
          <Addtheater></Addtheater>
        </div>
      </div>
    </div>
  )
}

export default addtheater
