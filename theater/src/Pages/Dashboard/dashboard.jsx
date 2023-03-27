import React from 'react'

//components
import Sidebar from '../../Components/Sidebar/sidebar'

const dashboard = () => {
  return (
    <>
    <div className='h-screen'>
      <Sidebar></Sidebar>
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* <Navbar></Navbar>

        <Statics></Statics> */}

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              {/* <CardLineChart /> */}
            </div>
            <div className="w-full xl:w-4/12 px-4">
              {/* <CardBarChart /> */}
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              {/* <CardPage /> */}
            </div>
            <div className="w-full xl:w-4/12 px-4">
              {/* <CardSocial /> */}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default dashboard