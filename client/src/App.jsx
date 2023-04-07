import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'react-toastify/dist/ReactToastify.css'
import 'typeface-roboto'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Components
import Homepage from './Pages/Homepage/homepage'
import Movies from './Pages/Movies/movies'
import MovieDetail from './Pages/MovieDetail/movieDetail'
import MovieBooking from './Pages/Moviebooking/movieBooking'
import Seating from './Pages/Moviebooking/seating'
import Booking from './Pages/Moviebooking/booking'
import Offer from './Pages/Payments/offer'

// Routes


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Homepage />} />
        <Route path={'/allmovies'} element={<Movies />} />
        <Route path={'/moviedetail'} element={<MovieDetail />} />
        <Route path={'/moviebooking'} element={<MovieBooking />} />
        <Route path={'/seating'} element={<Seating />} />
        <Route path={'/booking'} element={<Booking />} />
        <Route path={'/offer'} element={<Offer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
