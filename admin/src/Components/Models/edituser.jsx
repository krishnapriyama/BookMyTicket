import React, { useState } from 'react'
import axios from 'axios'

import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

export default function Modaluser(props) {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [user, setUser] = useState(props.user)

  const formik = useFormik({
    initialValues: {
      email: user.email,
      number: user.number,
    },
    validate: (values) => {
      const errors = {}
      if (!values.email) {
        errors.email = 'Email Required'
      }
      if (!values.number) {
        errors.number = 'Number Required'
      } else if (!/^[0-9]+$/.test(values.number)) {
        errors.number = 'This field should only contain numbers'
      } else if (values.number.length != 10) {
        errors.number = 'Number should be 10'
      }
      return errors
    },
    onSubmit: async (values) => {
      setShowModal(false)
      console.log(values, '----user data')
      try {
        values._id = user._id
        const response = await axios.post(
          'http://localhost:4000/admin/updateUser',
          { ...values },
          { withCredentials: true },
        )
        if (response.data.msg) {
          window.location.href = '/view-users'
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
                  <h3 className="text-3xl font-semibold">EDIT USER</h3>
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
                <form class="w-full max-w-lg" onSubmit={formik.handleSubmit}>
                  <div className="relative p-6 flex-auto">
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          Email
                        </label>
                        <input
                          {...formik.getFieldProps('email')}
                          class="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="email"
                          name="email"
                          placeholder="Name"
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-red-500">
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                          for="grid-last-name"
                        >
                          phone number
                        </label>
                        <input
                          {...formik.getFieldProps('number')}
                          class="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-last-name"
                          type="text"
                          name="number"
                          placeholder="Phone Number"
                        />
                        {formik.touched.number && formik.errors.number ? (
                          <div className="text-red-500">
                            {formik.errors.number}
                          </div>
                        ) : null}
                      </div>
                    </div>
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
                      type="submit"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
