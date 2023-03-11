import React from 'react'

//components
import Navbar from '../../Components/Navbar/navbar'
import MovieImage from '../../Components/MovieDetails/movieImage'

const movieDetail = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar></Navbar>

      {/* moviedetails */}
      <MovieImage></MovieImage>
    </div>
  )
}

export default movieDetail
