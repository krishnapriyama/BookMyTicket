import React from 'react'

// components
import Sidebar from '../../Components/Sidebar/sidebar'
import Addmovieform from '../../Components/Forms/addmovie'
import Navbar from '../../Components/Navabar/navbar'

const addmovies = () => {
  return (
      <div className="mx-auto w-full">
        <Addmovieform />
      </div>
  )
}

export default addmovies
