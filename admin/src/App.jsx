import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"

//componets
import Dashboard from './Pages/dashboard/dashboard'
import Login from './Pages/Authentication/login'

// movies
import AddMovies from './Pages/Movies/addmovies'
import Viewmovies from './Pages/Movies/viewmovies'
// users
import AddUser from './Pages/Users/addUser'
import Viewusers from './Pages/Users/viewUser'
//theater
import Addtheater from './Pages/Theaters/addtheater'
import Viewtheater from './Pages/Theaters/viewtheater'

// Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard></Dashboard>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  // /movies
  {
    path: '/add-movies',
    element: <AddMovies></AddMovies>,
  },
  {
    path: '/view-movies',
    element: <Viewmovies></Viewmovies>,
  },
  // users
  {
    path: '/add-users',
    element: <AddUser></AddUser>,
  },
  {
    path: '/view-users',
    element: <Viewusers></Viewusers>,
  },
  // theaters
  {
    path: '/view-theaters',
    element: <Viewtheater></Viewtheater>,
  },
  {
    path: '/add-theaters',
    element: <Addtheater></Addtheater>,
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App
