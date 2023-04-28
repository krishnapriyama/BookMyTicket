import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

// components
const Dashboard = lazy(() => import('./Pages/Dashboard/dashboard'));
const Sidebar = lazy(() => import('./Pages/Dashboard/sidebar'));

// Auth
const Signup = lazy(() => import('./Pages/Authentication/signup'));
const Login = lazy(() => import('./Pages/Authentication/login'));

// 404
const Approval = lazy(() => import('./Pages/404/approval'));

// screens
const Addscreen = lazy(() => import('./Pages/screen/addscreen'));
const Viewscreen = lazy(() => import('./Pages/screen/viewscreen'));

// Movies
const Addmovies = lazy(() => import('./Pages/Movie/addmovies'));
const Viewmovies = lazy(() => import('./Pages/Movie/viewmovies'));

// booking
const AddBooking = lazy(() => import('./Pages/Bookings/addbooking'));
const ViewBooking = lazy(() => import('./Pages/Bookings/viebookings'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/waiting'} element={<Approval />} />
        {/* child component */}
        <Route path={'/'} element={<Suspense fallback={<div>Loading...</div>}> <Sidebar /> </Suspense>}>
          <Route index element={<Suspense fallback={<div>Loading...</div>}> <Dashboard /> </Suspense>} />
          <Route path={'/add-screen'} element={<Suspense fallback={<div>Loading...</div>}> <Addscreen /> </Suspense>} />
          <Route path={'/add-movies'} element={<Suspense fallback={<div>Loading...</div>}> <Addmovies /> </Suspense>} />
          <Route path={'/view-screens'} element={<Suspense fallback={<div>Loading...</div>}> <Viewscreen /> </Suspense>} />
          <Route path={'/view-movies'} element={<Suspense fallback={<div>Loading...</div>}> <Viewmovies /> </Suspense>} />
          <Route path={'/add-booking'} element={<Suspense fallback={<div>Loading...</div>}> <AddBooking /> </Suspense>} />
          <Route path={'/view-booking'} element={<Suspense fallback={<div>Loading...</div>}> <ViewBooking /> </Suspense>} />
        </Route>
        {/* end */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
