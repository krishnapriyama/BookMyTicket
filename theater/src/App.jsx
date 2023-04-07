import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"

//components
import Dashboard from './Pages/Dashboard/dashboard'
import Sidebar from './Pages/Dashboard/sidebar'

//Auth
import Signup from './Pages/Authentication/signup'
import Login from './Pages/Authentication/login'

//404
import Approval from './Pages/404/approval'

//screens
import Addscreen from './Pages/screen/addscreen'
import Viewscreen from './Pages/screen/viewscreen'



import Addmovies from './Pages/Movie/addmovies'


const App = () => {
 return (
    <BrowserRouter>
      <Routes>
      <Route path={"/login"} element={<Login/>} />
      <Route path={"/signup"} element={<Signup/>} /> 
      <Route path={"/waiting"} element={<Approval/>} /> 
        {/* child component */}
        <Route path={"/"} element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path={'/add-screen'} element={<Addscreen />} />
          <Route path={'/add-movies'} element={<Addmovies />} />
          <Route path={'/view-screens'} element={<Viewscreen />} />
        </Route>
        {/* end */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
