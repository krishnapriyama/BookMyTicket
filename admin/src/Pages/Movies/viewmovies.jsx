import React from 'react'

//components
import Viewmovies from '../../Components/Tables/viewmovies'
import Sidebar from '../../Components/Sidebar/sidebar'

const viewmovies = () => {
  return (
    <div>
      <div className="h-screen">
        <Sidebar></Sidebar>
        <div className="relative md:ml-64 bg-blueGray-100 p-6 flex items-center justify-center">
          <Viewmovies></Viewmovies>
        </div>
      </div>
    </div>
  )
}

export default viewmovies
