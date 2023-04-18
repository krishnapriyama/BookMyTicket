import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoChevronRight } from 'react-icons/go'
import { BiSearch } from 'react-icons/bi'
import Modal from 'react-modal'
import Bookmyshowimg from '../../assets/bookmyshow.png'
import axios from 'axios'

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

  const [search, setSearch] = useState([])
  const [key, setKey] = useState('')
  console.log(search, '------search')
  console.log(key, '------key')

  useEffect(() => {
    const search = async () => {
      try {
        if (!key.trim()) {
          setSearch([])
          return
        }
        const response = await axios.get('http://localhost:4000/search', {
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
          <div className="w-56 h-11 m-0">
            <Link to="/">
              <img src={Bookmyshowimg} alt="logo" className="w-full h-full" />
            </Link>
          </div>


          <div class="relative">
            <div class="flex items-center bg-white rounded-md">
              <input type="search" class="bg-transparent w-[500px] border-none focus:outline-none py-2 px-2" placeholder="Search for movies, events, Plays, Sports and Activities." value={key} onChange={(e) => setKey(e.target.value)} />
            </div>
            {search && search.length > 0 && (
              <div class="absolute top-full left-0 right-0 z-10 bg-white shadow-md max-h-60 overflow-y-auto">
                {search.map((movie) => (
                  <div class="flex items-center px-2 py-3 cursor-pointer hover:bg-gray-100" key={movie._id}>
                    <div class="w-12 h-16 mr-4">
                    <Link to={`/moviedetail/${movie._id}`}>
                     <img class="object-cover w-full h-full" src={movie.poster1} />
                      </Link>
                    </div>
                    <div class="text-lg font-medium">{movie.moviename}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-end w-full gap-3 ml-6">
            <div className="justify-end flex items-center">
              {token ? (
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
