import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

// Components
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import UpcommingMovies from '../../Components/Homepage/upcommingMovies'
import NewRelease from '../../Components/Homepage/newRelease'
import Premiers from '../../Components/Homepage/premiers'


const navbar = () => {
   const navigate = useNavigate()
   const [token, setToken] = useState(false)
   useEffect(() => {
     const userToken = localStorage.getItem('userToken')
     setToken(userToken)
     if (!userToken) {
       navigate('/login')
     }
   }, [token])

  return (
    <div>

      {/* header */}
      <Navbar></Navbar>
      
     {/* homecontent */}
     <UpcommingMovies></UpcommingMovies>
      <NewRelease></NewRelease>
      <Premiers></Premiers>

      {/* footer */}
      <Footer></Footer>

    </div>
  )
}

export default navbar
