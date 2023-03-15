import React, { useState } from 'react'

const dropDowns = [
  { label: 'Place', link: '#' },
  { label: 'Geners', link: '#' },
  { label: 'Theaters', link: '#' },
  { label: 'cast', link: '#' },
]
const dropdownItems = [
  { label: 'Dropdown', link: '#' },
  { label: 'Dropdown', link: '#' },
  { label: 'Dropdown', link: '#' },
  { label: 'Dropdown', link: '#' },
]

const SidebarTheater = () => {
  const [openDropdown, setOpenDropdown] = useState(null)

  const handleDropdownClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-5">
      <div className="w-full block flex-grow lg:flex lg:w-auto">
        <div className="text-md flex items-center justify-center">
          {dropDowns.map((item, index) => (
            <div key={index} className="relative items-center justify-center">
              <button
                className={`block text-lg lg:inline-block text-white hover:text-white mr-4 ${
                  openDropdown === index ? 'text-white' : ''
                }`}
                onClick={() => handleDropdownClick(index)}
              >
                {item.label}
              </button>
              {openDropdown === index && (
                <div className="bg-gray-900 rounded-lg p-4 absolute z-10 mt-10">
                  {dropdownItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="block mt-2 p-5 text-white hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default SidebarTheater