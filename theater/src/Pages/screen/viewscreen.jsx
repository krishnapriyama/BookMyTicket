import React from 'react'

//components
import Sidebar from '../../Components/Sidebar/sidebar'
import Viewscreen from '../../Components/Tables/viewscreen'

const viewscreen = () => {
  return (
   <div>
   <div className="h-screen">
     <Sidebar></Sidebar>
     <div className="relative md:ml-64 bg-blueGray-100 p-6">
       <Viewscreen></Viewscreen>
     </div>
   </div>
 </div>
  )
}

export default viewscreen
