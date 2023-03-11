import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

// Components
import LoginSignup from './loginsignup';

const navbar = () => {
   const [Navbar, setNavbar] = useState(false)


  return (
    <>
      {/* navabar */}
    <nav className="w-full bg-black shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-9xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block lg:w-96">
            <div className="flex items-center lg:max-w-9xl">
              {/* search */}
              <div className="flex lg:max-w-9xl">
                <input
                  type="text"
                  className="block w-full px-4 py-2 lg:w-6xl text-purple-700 bg-white   focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search..."
                />
                <button className="px-4 text-black bg-white border-l">
                  Search
                </button>
              </div>
            </div>

            {/* toggle */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!Navbar)}
              >
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              Navbar ? 'hidden' : 'hidden'
            }`}
          ></div>

        </div>
          {/* full screen login */}
        <div className="hidden space-x-2 md:inline-block">

        <LoginSignup />
        
        </div>
      </div>

      


      {/* options */}
      <div className="justify-center items-center px-4 mx-auto lg:max-w-9xl md:items-center md:flex md:px-8 h-12">
        <div></div>
        <div className="items-center justify-center">
          <div
            className={`flex pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              Navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-self-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
              <Link to="/allmovies">Movies</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href=".">Streams</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href=".">Events</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href=".">Offers</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href=".">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`flex-1  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            Navbar ? 'block' : 'hidden'
          }`}
        >
          {/* Toggle login button */}
          <div className="mt-3 space-y-2 md:hidden inline-block">
            <button
              className="px-6 py-3 text-purple-100 bg-red-600 rounded-sm"
              type="button"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default navbar
