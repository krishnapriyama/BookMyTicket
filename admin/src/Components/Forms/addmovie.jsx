import React from 'react'
import { useFormik } from 'formik'

const addmovieform = () => {
  const formik = useFormik({
    initialValues: {
      moviename: '',
      releasedate: '',
      description: '',
      poster1: '',
      poster2: '',
      poster3: '',
      genre: '',
      language: '',
      trailerlink: '',
    },
    validate: (values) => {
      const error = {}
      if (!values.moviename) {
        error.moviename = 'Name Required'
      } else if (!values.releasedate) {
        error.releasedate = 'Date Required'
      } else if (!values.description) {
        error.description = 'Description Required'
      } else if (!values.poster1) {
        error.poster1 = 'Image Required'
      } else if (!values.poster2) {
        error.poster2 = 'Image Required'
      } else if (!values.poster3) {
        error.poster3 = 'Image Required'
      } else if (!values.trailerlink) {
        error.trailerlink = 'Link Required'
      } else if (!values.genre) {
        error.trailerlink = 'Genre Required'
      } else if (!values.language) {
        error.trailerlink = 'Language Required'
      }
      return error
    },
    onSubmit: async (values) => {
      console.log(values, '----movies data')
      try {
        const response = await axios.post(
          'http://localhost:4000/add-movies',
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
          ADD MOVIE
        </h1>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Movie Name
            </label>
            <input
              {...formik.getFieldProps('moviename')}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="moviename"
              placeholder="THE DARK"
            />
            {formik.touched.moviename && formik.errors.moviename ? (
              <div className="text-red-500">{formik.errors.moviename}</div>
            ) : null}
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Release date
            </label>
            <input
              {...formik.getFieldProps('releasedate')}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 round
              ed py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="date"
              name="releasedate"
              placeholder="date"
            />
            {formik.touched.releasedate && formik.errors.releasedate ? (
              <div className="text-red-500">{formik.errors.releasedate}</div>
            ) : null}
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Description
            </label>
            <input
              {...formik.getFieldProps('description')}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              name="description"
              placeholder="Description............"
            />
          </div>
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500">{formik.errors.description}</div>
          ) : null}
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Movie poster
            </label>
            <input
              {...formik.getFieldProps('poster1')}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              name="poster1"
              type="file"
            />
            {formik.touched.poster1 && formik.errors.poster1 ? (
              <div className="text-red-500">{formik.errors.poster1}</div>
            ) : null}
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              side poster
            </label>
            <input
              {...formik.getFieldProps('poster2')}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              name="poster2"
              type="file"
            />
            {formik.touched.poster2 && formik.errors.poster2 ? (
              <div className="text-red-500">{formik.errors.poster2}</div>
            ) : null}
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              grand poster
            </label>
            <input
              {...formik.getFieldProps('poster3')}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              name="poster3"
              placeholder="90210"
            />
          </div>
          {formik.touched.poster3 && formik.errors.poster3 ? (
            <div className="text-red-500">{formik.errors.poster3}</div>
          ) : null}
        </div>

        <div class="flex flex-wrap -mx-3 mb-2 mt-9">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Genre
            </label>
            <input
              {...formik.getFieldProps('genre')}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              name="genre"
              type="text"
              placeholder='Genre'
            />
            {formik.touched.genre && formik.errors.genre ? (
              <div className="text-red-500">{formik.errors.genre}</div>
            ) : null}
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              language
            </label>
            <input
              {...formik.getFieldProps('language')}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              name="language"
              type="text"
              placeholder='Language'
            />
            {formik.touched.language && formik.errors.language ? (
              <div className="text-red-500">{formik.errors.language}</div>
            ) : null}
          </div>
        </div>
        <div class="w-full mt-9">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Trailer link
          </label>
          <input
            {...formik.getFieldProps('trailerlink')}
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            name="trailerlink"
            placeholder="Link"
          />
          {formik.touched.trailerlink && formik.errors.trailerlink ? (
            <div className="text-red-500">{formik.errors.trailerlink}</div>
          ) : null}
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

export default addmovieform
