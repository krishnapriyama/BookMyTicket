import React, { useEffect, useState } from 'react'

import Modaluser from '../Model/edituser'
import Modelshow from '../Model/viewbookings'
import userAxios from '../../../confic/axiosUser'
import { useResolvedPath } from 'react-router-dom'

const profile = () => {
  const token = localStorage.getItem('userToken')
  const [user, setUser] = useState([])
  const [booking, setBooking] = useState([])
  useEffect(() => {
    userAxios
      .get('/view-booking')
      .then((bookinglist) => {
        setUser(bookinglist.data.user)
        setBooking(bookinglist.data.show)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <section className="relative block">
        <div className="absolute w-full h-full bg-center bg-cover">
          <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <Modaluser userdetails={user[0]}></Modaluser>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <h1 className='text-xl font-semibold'>Totals :</h1>
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{booking.length}</span><span className="text-sm text-blueGray-400">Bookings</span>
                    </div>
                    <div className="mr-4  text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Reservations</span>
                    </div>
                    <div className="lg:mr-4  text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Cancelation</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                {user.length > 0 && (
                  <>
                    <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2 uppercase">
                      {user[0].name}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                      {user[0].email}
                    </div>
                  </>
                )}
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <Modelshow booking={booking}></Modelshow>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default profile
