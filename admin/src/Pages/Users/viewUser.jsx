import React from 'react'

//components
import Viewusers from '../../Components/Tables/viewusers'
import Sidebar from '../../Components/Sidebar/sidebar'

const viewUser = () => {
  return (
    <div>
      <div className="h-screen">
        <Sidebar></Sidebar>
        <div className="relative md:ml-64 bg-blueGray-100 p-6 flex items-center justify-center">
          <Viewusers></Viewusers>
        </div>
      </div>
    </div>
  )
}

export default viewUser
