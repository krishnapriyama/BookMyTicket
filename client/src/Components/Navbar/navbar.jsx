import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoChevronRight } from 'react-icons/go'
import { BiSearch } from 'react-icons/bi'
import Modal from 'react-modal'
import Bookmyshowimg from '../../assets/bookmyshow.png'
import axios from 'axios'
import animationData from '../../assets/LottieAnimations/profile.json'
import Lottie from 'react-lottie'
import userAxios from '../../../confic/axiosUser'

const NavLg = () => {
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [locations, setLocations] = useState('')
  const [value, setValue] = useState('')

  const [search, setSearch] = useState([])
  const [key, setKey] = useState('')

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  useEffect(() => {
    const search = async () => {
      try {
        if (!key.trim()) {
          setSearch([])
          return
        }
        const response = await userAxios.get('/search', {
          params: { key: key, limit: 5 },
        })
        setSearch(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    search()
  }, [key])

  const userToken = localStorage.getItem('userToken')
  const [token, setToken] = useState(userToken)
  useEffect(() => {
    setToken(userToken)
  }, [token])

  return (
    <>
      <div className="container">
        <div className="flex justify-around gap-3">
          <div className="w-56 h-11 m-0 mt-3">
            <Link to="/">
              <img src={Bookmyshowimg} alt="logo" className="w-full h-full" />
            </Link>
          </div>


          <div className="relative">
            <div className="flex items-center justify-center mt-3 bg-white rounded-md">
              <input type="search" className="bg-transparent w-[500px] border-none focus:outline-none py-2 px-2" placeholder="Search htmlFor movies...." value={key} onChange={(e) => setKey(e.target.value)} />
            </div>
            {search && search.length > 0 && (
              <div className="absolute top-full left-0 right-0 z-10 bg-white shadow-md max-h-60 overflow-y-auto">
                {search.map((movie) => (
                  <div className="flex items-center px-2 py-3 cursor-pointer hover:bg-gray-100" key={movie._id}>
                    <div className="w-12 h-16 mr-4">
                      <Link to={`/moviedetail/${movie._id}`}>
                        <img className="object-cover w-full h-full" src={movie.poster1} />
                      </Link>
                    </div>
                    <div className="text-lg font-medium">{movie.moviename}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-end w-full gap-3 ml-6">
            <div className="justify-end flex items-center">
              {token ? (
                <>
                  <button
                    className="px-6 py-3 text-white justify-end bg-red-600 rounded-md"
                    type="button"
                    onClick={() => {
                      localStorage.removeItem('userToken')
                      setToken(null)
                    }}
                  >
                    Logout
                  </button>
                  <Link to='/profile'>
                    <div style={{ height: '70px', width: '100px' }}>
                      <Lottie
                        options={defaultOptions}
                        isClickToPauseDisabled={true}
                      />
                    </div>

                  </Link>
                </>
              ) : (
                <Link to="/login">
                  <button
                    className="px-6 py-3 text-white justify-end bg-red-600 rounded-md"
                    type="button"
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>
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
            {/* <NavSm /> */}
          </div>
          <div className="hidden md:flex lg:hidden mt-0 ">
            {/* Medium/Tab screen */}
            {/* <NavMd /> */}
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
