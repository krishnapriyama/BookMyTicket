import React from 'react'
import { useState } from 'react'

const login = () => {
   const [showModal, setShowModal] = useState(false)


  return (
     <>
      <button
        className="px-6 py-3 text-purple-100 bg-red-600 rounded-sm"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Login
      </button>

      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex justify-center">
                  <div className="mt-2 text-center sm:ml-4 sm:text-left items-center justify-center">

                  <div class="flex flex-col items-center justify-center w-full gap-4">
                  <button class="bg-transparent hover:bg-red-500 text-red-700 font-bold w-72 hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                        Sign In with Google
                      </button>
                      <button class="bg-transparent hover:bg-red-500 text-red-700 font-bold w-72 hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                        Sign In with Gmail
                      </button>
                      <div className='w-full'>
                      <input type='text'  name="phonenumber" placeholder="Enter your mobile number" className="border-b outline-none focus:outline-none text-gray-700 w-full text-center"/>
                      </div>
                  </div>
                      
                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={() => setShowModal(false)}
                      >
                        Login
                      </button>
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default login
