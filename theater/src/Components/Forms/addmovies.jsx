import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

const addmovies = () => {
  const formik = useFormik({
    initialValues: {
      screen: '',
      movie: '',
    },
    validate: (values) => {
      const error = {}
      if (!values.screen) {
        error.screen = 'Screen Required'
      } else if (!values.movie) {
        error.movie = 'Movie Required'
      }
      return error
    },
    onSubmit: async (values) => {
      console.log(values, '----movies data')
      try {
        const response = await axios.post(
          'http://localhost:4000/theater/add-movies',
          { ...values },
          { withCredentials: true },
        )
        if (response) {
        } else {
        }
      } catch (error) {
        console.log(error, 'Error from ClientAxios')
      }
    },
  })

  return (
    <div className="h-screen flex justify-center items-center">
      <form class="w-full max-w-lg ml-4" onSubmit={formik.handleSubmit}>
        <h1 className="font-bold text-2xl items-center justify-center flex mb-11">
          ADD MOVIES
        </h1>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Screen
            </label>
            <select
              {...formik.getFieldProps('screen')}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="screen"
              placeholder="date"
            >
              <option value="">Select</option>
              <option value="2S">2S</option>
              <option value="VIP">VIP</option>
              <option value="Dolby">DOLBY</option>
            </select>
            {formik.touched.screen && formik.errors.screen ? (
              <div className="text-red-500">{formik.errors.screen}</div>
            ) : null}
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Movie
            </label>
            <select
              {...formik.getFieldProps('movie')}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="movie"
              placeholder="date"
            >
              <option value="">Select</option>
              <option value="Dark">Dark</option>
              <option value="Romacham">Romacham</option>
              <option value="Shark">Shark</option>
            </select>
            {formik.touched.movie && formik.errors.movie ? (
              <div className="text-red-500">{formik.errors.movie}</div>
            ) : null}
          </div>
        </div>

        <div class="w-full px-3 mt-9 items-end flex justify-end">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default addmovies
