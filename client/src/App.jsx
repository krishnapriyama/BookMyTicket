import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'react-toastify/dist/ReactToastify.css'
import 'typeface-roboto'

// Components
const Homepage = lazy(() => import('./Pages/Homepage/homepage'))
const Forgotpassword = lazy(()=> import('./Components/Auth/verifypassword'))
const Login = lazy(() => import('./Components/Auth/login'))
const Signup = lazy(() => import('./Components/Auth/signup'))
const Movies = lazy(() => import('./Pages/Movies/allmovies'))
const MovieDetail = lazy(() => import('./Pages/MovieDetail/movieDetail'))
const MovieBooking = lazy(() => import('./Pages/Moviebooking/movieBooking'))
const Seating = lazy(() => import('./Pages/Moviebooking/seating'))
const Booking = lazy(() => import('./Pages/Moviebooking/booking'))
const Offer = lazy(() => import('./Pages/Payments/offer'))
const Profile = lazy(() => import('./Pages/Profile/profile'))
const Categorymovie = lazy(()=>import('./Pages/Movies/categoryMovies'))
const Checkout = lazy(()=>import('./Pages/Booking/checkout'))
const PaymentSucess = lazy(()=>import('./Pages/Payments/Sucess'))
// Routes
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/login'} element={<Login />} />
          <Route path={'/signup'} element={<Signup />} />
        <Route path="/forgotpassword" element={<Forgotpassword/>}/>
          {/* Child components */}
          <Route path={'/'} element={<Homepage />}/>
            <Route path={'/allmovies'} element={<Movies />} />
            <Route path={'/moviedetail/:id'} element={<MovieDetail />} />
            <Route path={'/SelectTheater/:id'} element={<MovieBooking />} />
            <Route path={'/seating'} element={<Seating />} />
            <Route path={'/booking'} element={<Booking />} />
            <Route path={'/offer'} element={<Offer />} />
            <Route path={'/profile'} element={<Profile />} />
            <Route path={'/categorymovie/:category'} element={<Categorymovie />} />
            <Route path={"/Checkout"} element={<Checkout/>} />
            <Route path={"/paymentsuccess"} element={<PaymentSucess/>} />
          {/* end */}
        </Routes>
      </Suspense>
    </BrowserRouter>
    
  )
}

export default App
