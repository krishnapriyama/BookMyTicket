import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      passowrd: '',
    },
    validate: (values) => {
      console.log(values)
      const error = {}
      if (!values.email) {
        error.email = 'Email Required'
      } else if (!values.passowrd) {
        error.passowrd = 'Password Required'
      }
      return error
    },
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(
          'http://localhost:4000/login',
          {
            ...values,
          },
          { withCredentials: true },
        )
      //   if (!data.errors) {
      //     navigate('/')
      //   } else {
      //     console.log(data.errors)
      //   }
      } catch (error) {
        console.log(error)
      }
    },
  })

  return (
    <div>
      <form>
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back!</h2>
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
        <button
          className="w-full px-4 py-2 text-lg font-bold text-white bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-700"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
