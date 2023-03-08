import React from 'react'
import { createBrowserRouter, RouterProvider }  from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.js';

// Components
import Homepage from './Pages/Homepage/homepage'
import Movies from './Pages/Movies/movies';

// Routes
const router = createBrowserRouter([
  {
    path : '/',
    element : <Homepage></Homepage>
  },
  {
    path : '/allmovies',
    element : <Movies></Movies>
  }
])


function App() {
  return (
    <main>
       <RouterProvider router={router}></RouterProvider>
    </main>
 )
}

export default App;
