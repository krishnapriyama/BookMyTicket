import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import userAxios from '../../../confic/axiosUser'

import { ToastContainer, toast } from 'react-toastify'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import animationData from '../../assets/LottieAnimations/loginMovie.json'

function login() {
  const navigate = useNavigate()
// animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }



  //error
  const generateError = (error) =>
  toast.error(error, {
    position: 'bottom-right',
  })

  //formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const error = {}
      if (!values.email) {
        error.email = 'Email Required'
      } else if (!values.password) {
        error.password = 'Password Required'
      }
      return error
    },
    onSubmit: async (values) => {
      try {
        const response = await userAxios.post(
          '/login',
          {
            ...values,
          }
          
        )
        console.log(response);
        if (response.data.created == true) {
          localStorage.setItem('userToken',response.data.token)
          navigate('/')
          console.log(response.data.created, 'created')
          console.log('Login Success')
        } else if (response && response.data && response.data.error == 'Invalid email or password') {
          generateError(response.data.error, 'invalid error')
          console.log('Invalid email or password')
        }
      } catch (error) {
        //generateError(error.data.error, 'invalid error')
      }
    },
  })

  return (
    <section className="h-screen justify-center items-center">
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className="md:w-3/4 lg:w-1/2 xl:w-2/5">
          <div>
            <Lottie options={defaultOptions} />
          </div>
        </div>

        {/* Form */}
        <div className="md:w-3/4 lg:w-1/2 xl:w-3/5 xl:pl-10 mt-10 md:mt-0">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-row items-center justify-center">
              <p className="text-lg font-semibold mr-3">Sign in with</p>
              <button
                type="button"
                className="btn btn-primary btn-floating mx-1"
              >
                <i className="fab fa-google text-4xl"></i>
              </button>

              <button
                type="button"
                className="btn btn-primary btn-floating mx-1"
              >
                <i className="fas fa-phone-alt text-4xl"></i>
              </button>
            </div>
            <div className=" flex items-center justify-center my-4">
              <p className="justify-center font-semibold text-xl">Or</p>
            </div>

            <div className="mb-4 mt-6">
              <input
              {...formik.getFieldProps('email')}
                type="email"
                id="email"
                className="w-full p-3 rounded-lg border text-center border-black focus:outline-none focus:border-primary-500"
                placeholder="Email Address"
              />
              {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500">{formik.errors.email}</div>
        ) : null}
            </div>

            <div className="mb-3">
              <input
              {...formik.getFieldProps('password')}
                type="password"
                id="password"
                className="w-full p-3 rounded-lg border text-center border-black focus:outline-none focus:border-primary-500"
                placeholder="Password"
              />
              {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500">{formik.errors.password}</div>
        ) : null}
            </div>
            <Link
              to='/forgotpassword'
              className="text-red-600 text-sm font-bold mt-4 items-center w-full"
            >
              Before Login Verify Your account
            </Link>


            <div className="mb-3 mt-4">
              <button
                type="submit"
                className="w-full p-3 rounded-lg text-xl text-white bg-red-700"
              >
                LOGIN
              </button>
              <p className="text-sm font-bold mt-2 justify-center">
                Don't have an account?{' '}
                <Link to='/signup'>
                <button  className="text-red-500">
                  Register
                </button>
                </Link>
              </p>
            </div>
            <ToastContainer />
          </form>
          {/* End Form */}
        </div>
      </div>
    </section>
  )
}

export default login
