import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.js'
import "react-toastify/dist/ReactToastify.css"

// Components
import Homepage from './Pages/Homepage/homepage'
import Movies from './Pages/Movies/movies'
import MovieDetail from './Pages/MovieDetail/movieDetail'
import MovieBooking from './Pages/Moviebooking/movieBooking'
import Seating from './Pages/Moviebooking/seating'

// Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage></Homepage>,
  },
  {
    path: '/allmovies',
    element: <Movies></Movies>,
  },
  {
    path: '/moviedetail',
    element: <MovieDetail></MovieDetail>,
  },
  {
    path: '/moviebooking',
    element: <MovieBooking></MovieBooking>,
  },
  {
    path: '/seating',
    element: <Seating></Seating>,
  },
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App
