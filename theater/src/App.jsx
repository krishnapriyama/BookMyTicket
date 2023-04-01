import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"

//components
import Dashboard from './Pages/Dashboard/dashboard'

//Auth
import Signup from './Pages/Authentication/signup'
import Login from './Pages/Authentication/login'

//404
import Approval from './Pages/404/approval'

//screens
import Addscreen from './Pages/screen/addscreen'
import Viewscreen from './Pages/screen/viewscreen'



import Addmovies from './Pages/Movie/addmovies'

//Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard></Dashboard>,
  },
  {
    path: '/signup',
    element: <Signup></Signup>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/waiting',
    element: <Approval></Approval>,
  },
  {
    path: '/add-screen',
    element: <Addscreen></Addscreen>,
  },
  {
    path: '/add-movies',
    element: <Addmovies></Addmovies>,
  },
  {
    path: '/view-screens',
    element: <Viewscreen></Viewscreen>,
  },
])

const App = () => {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App
