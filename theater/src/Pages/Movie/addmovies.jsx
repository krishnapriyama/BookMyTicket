import React from 'react'

//components
import Sidebar from '../../Components/Sidebar/sidebar'
import Addmovies from '../../Components/Forms/addmovies'

const addmovies = () => {
  return (
   <div>
   <div className="h-screen">
     <Sidebar></Sidebar>
     <div className="relative md:ml-64 bg-blueGray-100 p-6">
       <Addmovies></Addmovies>
     </div>
   </div>
 </div>
  )
}

export default addmovies
