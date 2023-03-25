import React from 'react'

//components
import Viewtheaters from '../../Components/Tables/viewtheaters'
import Sidebar from '../../Components/Sidebar/sidebar'

const viewtheater = () => {
  return (
    <div>
    <div className="h-screen">
      <Sidebar></Sidebar>
      <div className="relative md:ml-64 bg-blueGray-100 p-6 flex items-center justify-center">
        <Viewtheaters></Viewtheaters>
      </div>
    </div>
  </div>
  )
}

export default viewtheater
