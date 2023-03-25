import React from 'react'

// Components
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import UpcommingMovies from '../../Components/Homepage/upcommingMovies'
import NewRelease from '../../Components/Homepage/newRelease'
import Premiers from '../../Components/Homepage/premiers'

const homepage = () => {
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

export default homepage
