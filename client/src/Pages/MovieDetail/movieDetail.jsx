import React from 'react'

//components
import Navbar from '../../Components/Navbar/navbar'
import MovieImage from '../../Components/MovieDetails/movieImage'
import Footer from '../../Components/Footer/footer'

const movieDetail = () => {
  return (
    <>
      {/* navbar */}
      <Navbar></Navbar>

      {/* moviedetails */}
      <MovieImage></MovieImage>

      {/* footer */}
      <Footer></Footer>
  
    </>
  )
}

export default movieDetail
