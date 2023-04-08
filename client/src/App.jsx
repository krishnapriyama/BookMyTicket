import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'react-toastify/dist/ReactToastify.css';
import 'typeface-roboto';

// Components
const Homepage = lazy(() => import('./Pages/Homepage/homepage'));
const Movies = lazy(() => import('./Pages/Movies/movies'));
const MovieDetail = lazy(() => import('./Pages/MovieDetail/movieDetail'));
const MovieBooking = lazy(() => import('./Pages/Moviebooking/movieBooking'));
const Seating = lazy(() => import('./Pages/Moviebooking/seating'));
const Booking = lazy(() => import('./Pages/Moviebooking/booking'));
const Offer = lazy(() => import('./Pages/Payments/offer'));

// Routes
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          <Route path={'/allmovies'} element={<Movies />} />
          <Route path={'/moviedetail'} element={<MovieDetail />} />
          <Route path={'/moviebooking'} element={<MovieBooking />} />
          <Route path={'/seating'} element={<Seating />} />
          <Route path={'/booking'} element={<Booking />} />
          <Route path={'/offer'} element={<Offer />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;