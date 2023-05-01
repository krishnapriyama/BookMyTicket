import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import animationData from '../../assets/LottieAnimations/signupMovie.json'
import userAxios from '../../../confic/axiosUser'

function signup() {
  const navigateto = useNavigate()

  // animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }

  // email error
  const generateError = (error) =>
    toast.error(error, {
      position: 'bottom-right',
    })

  //formik
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      password: '',
      conformpassword: '',
    },
  validate: (values) => {
  const error = {};
  if (!values.email) {
    error.email = "Email Required";
  }
  if (!values.name) {
    error.name = "Name Required";
  }
  if (!values.phone) {
    error.phone = "Number Required";
  } else if (values.phone.length !== 10) {
    error.phone = "Number should be 10";
  } else if (!/^[0-9]+$/.test(values.phone)) {
    error.phone = "This field should only contain numbers";
  }
  if (!values.password) {
    error.password = "Password Required";
  } else if (
    !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.{8,})/.test(
      values.password
    )
  ) {
    error.password =
      "Password must contain at least 8 characters, including at least 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 special character";
  } else if (values.password !== values.conformpassword) {
    error.conformpassword = "Password Mismatch";
  }
  return error;
},
    onSubmit: async (values) => {
      try {
        const response = await userAxios.post(
          '/register',
          { ...values },
         
        )

        if (!response.data.created) {
          console.log(response.data.created, 'Created False')
          if (response.data.errors) {
            const { email, password } = response.data.errors
            if (email) {
              generateError(email)
            } else if (password) {
              generateError(password)
            }
          }
        } else {
          console.log(response.data.created, 'Created True')
          navigateto('/login')
        }
      } catch (error) {
        console.log(error, 'Error from ClientAxios')
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
            <div className="mb-3">
              <input
                {...formik.getFieldProps('email')}
                name="email"
                type="email"
                id="email"
                className="w-full p-3 rounded-lg border text-center border-black focus:outline-none focus:border-primary-500"
                placeholder="Email Address"
              />
              {formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                {...formik.getFieldProps('name')}
                name="name"
                type="text"
                id="name"
                className="w-full p-3 rounded-lg border text-center border-black focus:outline-none focus:border-primary-500"
                placeholder="Username"
              />
              {formik.errors.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                {...formik.getFieldProps('phone')}
                name="phone"
                type="text"
                id="phone"
                className="w-full p-3 rounded-lg text-center border border-black focus:outline-none focus:border-primary-500"
                placeholder="Phone Number"
              />
              {formik.errors.phone ? (
                <div className="text-red-500">{formik.errors.phone}</div>
              ) : null}
            </div>

            <div className="mb-3">
              <input
                {...formik.getFieldProps('password')}
                name="password"
                type="password"
                id="password"
                className="w-full p-3 rounded-lg border text-center border-black focus:outline-none focus:border-primary-500"
                placeholder="Password"
              />
              {formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                {...formik.getFieldProps('conformpassword')}
                name="conformpassword"
                type="password"
                id="conformpassword"
                className="w-full p-3 rounded-lg border text-center border-black focus:outline-none focus:border-primary-500"
                placeholder="Conform Password"
              />
              {formik.errors.conformpassword ? (
                <div className="text-red-500">
                  {formik.errors.conformpassword}
                </div>
              ) : null}
            </div>

            <div className="mb-3 mt-4">
              <button
                type="submit"
                className="w-full p-3 rounded-lg text-xl text-white bg-red-700"
              >
                REGISTER
              </button>
              <p className="text-sm font-bold mt-2 justify-center">
                Already have an account?{' '}
                <Link to="/login">
                  <button className="text-red-500">Login</button>
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

export default signup
