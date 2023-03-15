import React, { useEffect } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [cookies] = useCookies(['cookie-name'])
  const navigateto = useNavigate();
  
  useEffect(() => {
    console.log(cookies.jwt);
    if (cookies.jwt) {
      navigateto('/')
    }
  }, [cookies, navigateto])

  const generateError = (error) =>
    toast.error(error, {
      position: 'bottom-right',
    })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const error = {}
      if (!values.email) {
        error.email = 'Email Required'
      } else if (!values.password) {
        error.password = 'Password Required'
      } else if (values.password != values.confirmPassword) {
        error.confirmPassword = 'Password Mismatch'
      }
      return error
    },
    onSubmit: async (values) => {
      console.log(values)
      try {
        const response = await axios.post(
          'http://localhost:4000/register',
          { ...values },
          { withCredentials: true },
        )

        console.log(response.data, 'response data')

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
          navigateto('/')
        }
      } catch (error) {
        console.log(error, 'Error from ClientAxios')
      }
    },
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome New!</h2>
        <div className="mb-4">
          <input
            {...formik.getFieldProps('email')}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500">{formik.errors.email}</div>
        ) : null}
        <div className="mb-4">
          <input
            {...formik.getFieldProps('password')}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500">{formik.errors.password}</div>
        ) : null}
        <div className="mb-4">
          <input
            {...formik.getFieldProps('confirmPassword')}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
          />
        </div>
        {formik.errors.confirmPassword ? (
          <div className="text-red-500">{formik.errors.confirmPassword}</div>
        ) : null}
        <button
          className="w-full px-4 py-2 text-lg font-bold text-white bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-700"
          type="submit"
        >
          Register
        </button>
        <ToastContainer />
      </form>
    </div>
  )
}

export default Signup
