import React from 'react'

//components
import Sidebar from '../../Components/Sidebar/sidebar'
import Addscreen from '../../Components/Forms/addscreen'

const addscreen = () => {
  return (
   <div>
   <div className="h-screen">
     <Sidebar></Sidebar>
     <div className="relative md:ml-64 bg-blueGray-100 p-6">
       <Addscreen></Addscreen>
     </div>
   </div>
 </div>
  )
}

export default addscreen
