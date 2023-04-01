import React, { useState } from 'react'

import { useFormik } from 'formik'

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(false)
  const [movie, setMovie] = useState(props.movie)
  console.log(movie)
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
          'http://localhost:4000/admin/addmovies',
          { ...values },
          { withCredentials: true },
        )

        if (response.data.msg) {
          navigate('/view-movies')
        } else {
          console.log('Something went wrong')
        }
      } catch (error) {
        console.log(error, 'Error from ClientAxios')
      }
    },
  })

  return (
    <>
      <button
        class="text-black bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-7 rounded-xl">
            <div className="relative">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-5 mt-7 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">EDIT MOVIES</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form class="w-full max-w-lg" onSubmit={formik.handleSubmit}>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-bleck text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          Movie Name
                        </label>
                        <input
                          {...formik.getFieldProps('moviename')}
                          class="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          name="moviename"
                          placeholder="THE DARK"
                        />
                        {formik.touched.moviename && formik.errors.moviename ? (
                          <div className="text-red-500">
                            {formik.errors.moviename}
                          </div>
                        ) : null}
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                          for="grid-last-name"
                        >
                          Release date
                        </label>
                        <input
                          {...formik.getFieldProps('releasedate')}
                          class="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-last-name"
                          type="date"
                          name="releasedate"
                          placeholder="date"
                        />
                        {formik.touched.releasedate &&
                        formik.errors.releasedate ? (
                          <div className="text-red-500">
                            {formik.errors.releasedate}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full px-3">
                        <label
                          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                          for="grid-password"
                        >
                          Description
                        </label>
                        <input
                          {...formik.getFieldProps('description')}
                          class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                          type="text"
                          name="description"
                          placeholder="Description............"
                        />
                      </div>
                      {formik.touched.description &&
                      formik.errors.description ? (
                        <div className="text-red-500">
                          {formik.errors.description}
                        </div>
                      ) : null}
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2 mt-9">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                          for="grid-city"
                        >
                          Genre
                        </label>
                        <input
                          {...formik.getFieldProps('genre')}
                          class="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-city"
                          name="genre"
                          type="text"
                          placeholder="Genre"
                        />
                        {formik.touched.genre && formik.errors.genre ? (
                          <div className="text-red-500">
                            {formik.errors.genre}
                          </div>
                        ) : null}
                      </div>
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                          for="grid-state"
                        >
                          language
                        </label>
                        <input
                          {...formik.getFieldProps('language')}
                          class="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-city"
                          name="language"
                          type="text"
                          placeholder="Language"
                        />
                        {formik.touched.language && formik.errors.language ? (
                          <div className="text-red-500">
                            {formik.errors.language}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div class="w-full mt-9">
                      <label
                        class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                        for="grid-password"
                      >
                        Trailer link
                      </label>
                      <input
                        {...formik.getFieldProps('trailerlink')}
                        class="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-password"
                        type="text"
                        name="trailerlink"
                        placeholder="Link"
                      />
                      {formik.touched.trailerlink &&
                      formik.errors.trailerlink ? (
                        <div className="text-red-500">
                          {formik.errors.trailerlink}
                        </div>
                      ) : null}
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end  p-6 border-solid border-slate-200">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
