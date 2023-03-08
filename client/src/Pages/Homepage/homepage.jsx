import React from 'react'

// Components
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import Carousel from '../../Components/Homepage/carousel'
import UpcommingMovies from '../../Components/Homepage/upcommingMovies'
import NewRelease from '../../Components/Homepage/newRelease'

const homepage = () => {
  return (
    <div>

      {/* header */}
      <Navbar></Navbar>

      {/* homecontent */}
      <Carousel></Carousel>
      <UpcommingMovies></UpcommingMovies>
      <NewRelease></NewRelease>

      {/* footer */}
      <Footer></Footer>

    </div>
  )
}

export default homepage
