import React from 'react'
import { useState } from 'react'

const allmovies = () => {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: 'Movies', src: 'user' },
    { title: 'New Release', src: 'Chat' },
    {
      title: 'Romace',
      src: 'lovemovies',
      gap: true,
      width: '25rem',
      height: '100px',
    },
    { title: 'Action ', src: 'action', width: '31rem', height: '100px' },
    { title: 'Thriller', src: 'Search' },
    { title: 'Series', src: 'series', width: '31rem', height: '100px' },
    { title: 'Upcomming ', src: 'Folder' },
  ]

  return (
      <div
        className={` ${
          open ? 'w-52' : 'w-20'
        } bg-black p-5 pt-8 relative duration-300 h-screen`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
        border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png" 
            className={`cursor-pointer duration-500 w-11 rounded-md ${
              open && 'rotate-[360deg]' 
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-md duration-200 ${
              !open && 'scale-0'
            }`}
          >
            BookMyTicket
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
           ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'} `}
            >
              <img
                src={`./src/assets/${Menu.src}.png`}
                width={Menu.width}
                height={Menu.height}
              />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
    </div>

  )
}

export default allmovies
