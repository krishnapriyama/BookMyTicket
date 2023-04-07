import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoChevronRight } from 'react-icons/go'
import { BiSearch, BiMenu, BiChevronDown } from 'react-icons/bi'
import Modal from 'react-modal'
import Bookmyshowimg from '../../assets/bookmyshow.png'

import LoginSignup from '../../Components/Navbar/loginSignup'



Modal.setAppElement('#root')
const NavSm = () => {
  return (
    <div>
      <div className="text-white flex items-center justify-between ">
        <div>
          <h3 className="text-xl font-bold">It All starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Idukki
            <GoChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}
const NavMd = () => {
  return (
    <div className="w-full flex items-center gap-3  px-3 py-2 rounded-md bg-red">
      <BiSearch className="" />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline"
        placeholder="Search for movies, events, Plays, Sports and Activities."
      />
    </div>
  )
}
const NavLg = () => {
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [locations, setLocations] = useState('')
  const [value, setValue] = useState('')

  return (
    <>
      <div className="container flex items-center gap-8 justify-center">
        <div className="flex items-center w-2/3 gap-3">
          <div className="w-40 h-11 m-0  ">
            <Link to='/'>
              <img src={Bookmyshowimg} alt="logo" className="w-full h-full" />
            </Link>
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md ml-10">
            <BiSearch className="ml-2" />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none ml-2"
              placeholder="Search for movies, events, Plays, Sports and Activities."
            />
          </div>
        </div>
        <div className="flex items-center justify-end w-full gap-3 ml-6">
          <div className="justify-end flex items-center">
            <LoginSignup></LoginSignup>
            
          </div>
        </div>
      </div>
    </>
  )
}

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-700 w-full h-26">
        <div className="p-3 ">
          <div className="md:hidden mt-0 p-2">
            {/* Mobile screen */}
            <NavSm />
          </div>
          <div className="hidden md:flex lg:hidden mt-0 ">
            {/* Medium/Tab screen */}
            <NavMd />
          </div>
          <div className="hidden w-full justify-center lg:flex mt-0 ">
            {/* Large screen */}
            <NavLg />
          </div>
        </div>
        <div className="flex justify-between bg-slate-900 h-11 w-full text-white ">
          <div className="flex gap-7 ml-20 mt-2">
            <div>
              <Link to="/allmovies">Movie</Link>
            </div>
            <div>
              <Link to="/streams">Stream</Link>
            </div>
            <div>
              <Link to="/events">Events</Link>
            </div>
            <div>
              <Link to="/play">Plays</Link>
            </div>
          </div>

          <div className="flex gap-7 mr-20 mt-2">
            <div>
              <Link to="/offer">Offers</Link>
            </div>
            <div>
              <Link to="/giftcarts"> Gift Cards</Link>{' '}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
