import React, { useEffect, useState } from 'react'

import Modaluser from '../Model/edituser'
import Modelshow from '../Model/viewbookings'
import userAxios from '../../../confic/axiosUser'

const profile = () => {
  const token = localStorage.getItem('userToken')
  const [user, setUser] = useState([])
  const [booking, setBooking] = useState([])
  useEffect(() => {
    userAxios
      .get('/view-booking')
      .then((bookinglist) => {
        console.log(bookinglist);
        setUser(bookinglist.data.user)
        setBooking(bookinglist.data.show)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <section class="relative block">
        <div class="absolute w-full h-full bg-center bg-cover">
          <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}>
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div class="relative">
                    <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <Modaluser></Modaluser>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <h1 className='text-xl font-semibold'>Totals :</h1>
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{booking.length}</span><span class="text-sm text-blueGray-400">Bookings</span>
                    </div>
                    <div class="mr-4  text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span class="text-sm text-blueGray-400">Reservations</span>
                    </div>
                    <div class="lg:mr-4  text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span class="text-sm text-blueGray-400">Cancelation</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                {user.length > 0 && (
                  <>
                    <h3 class="text-4xl font-semibold leading-normal text-blueGray-700 mb-2 uppercase">
                      {user[0].name}
                    </h3>
                    <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                      {user[0].email}
                    </div>
                  </>
                )}
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
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
