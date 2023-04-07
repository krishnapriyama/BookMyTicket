import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import firebase from '../../Firebase/firebase'

//components
import Signup from './signup'
import Login from './login'

const login = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const handleClick = async () => {
    try {
      var applicationVerifier = new firebase.auth.RecaptchaVerifier(
        'recaptcha-container',
      )
      var provider = new firebase.auth.PhoneAuthProvider()
      provider
        .verifyPhoneNumber('+917994632026', applicationVerifier)
        .then(function (verificationId) {
          var verificationCode = window.prompt(
            'Please enter the verification ' +
              'code that was sent to your mobile device.',
          )
          return firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            verificationCode,
          )
        }).then((phoneCredential)=>{
         
          return firebase.auth().signInWithCredential(phoneCredential)
        }).then((respo)=>{
         
        })


        // .then(function (phoneCredential) {
        //   return firebase.auth().signInWithCredential(phoneCredential)
        // })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <button
        className="px-6 py-3 text-white bg-red-600 rounded-md"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Login
      </button>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {
            setIsOpen(false)
            setShowRegister(false)
          }}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                {showRegister ? (
                  <>
                    {/* Signup Form */}
                    <Signup></Signup>


                    <p className="mt-4 text-gray-600 text-center">
                      Already have an account?{' '}
                      <button
                        className="text-red-500 hover:text-red-700 font-bold focus:outline-none"
                        onClick={() => setShowRegister(false)}
                      >
                        Login here.
                      </button>
                    </p>
                  </>
                ) : (
                  <>
                    {/* Login Form */}
                    <Login></Login>

                    <h2 className="text-2xl font-bold text-center mt-4">OR</h2>
                    <button
                      className="w-full px-4 py-2 text-lg font-bold text-black  rounded-lg focus:outline-none"
                      type="submit"
                    >
                      <FontAwesomeIcon icon={faGoogle} className="mr-2" /> Login
                      With Google
                    </button>
                    <button
                      className="w-full px-4 py-2 text-lg font-bold text-black  rounded-lg focus:outline-none"
                      type="submit"
                      onClick={handleClick}
                    >
                      Login With OTP
                    </button>
                    <div id="recaptcha-container"></div>
                    <p className="mt-4 text-gray-600 text-center">
                      Don't have an account yet?{' '}
                      <button
                        className="text-red-500 hover:text-red-700 font-bold focus:outline-none"
                        onClick={() => setShowRegister(true)}
                      >
                        Register here.
                      </button>
                    </p>
                  </>
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default login
