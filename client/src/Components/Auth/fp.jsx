import React from 'react'
import { useFormik } from 'formik'
import userAxios from '../../../confic/axiosUser'
import { ToastContainer, toast } from 'react-toastify'

export default function forgotPassword() {
  const [showModal, setShowModal] = React.useState(false)

  //error
  const generateSuccess = (message) => {
    toast.success(message, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confrompassword: '',
    },
    validate: (values) => {
      const error = {}
      if (!values.email) {
        error.email = 'Email Required'
      } else if (!values.password) {
        error.password = 'Password Required'
      } else if (!values.confrompassword) {
        error.confrompassword = 'Password Required'
      }
      return error
    },
    onSubmit: async (values) => {
      setShowModal(false)
      console.log(values, '-------forgotvalues')
      try {
        const response = await userAxios.post('/forgotpassword', {
          ...values,
        })
        console.log(response, '-----UPDATED PASSWORD')
        if (response.data.message == 'Password updated successfully') {
          generateSuccess(response.data.message)
        } else {
          console.log("Something Happended");
        }
      } catch (error) {
        console.log(error)
      }
    },
  })
  return (
    <>
      <button
        className="text-red-600 text-sm font-bold "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Forgot your Password !?
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Forgot Password</h3>
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
                <form onSubmit={formik.handleSubmit}>
                  <div className="relative p-6 flex-auto">
                    <div className="mb-4 mt-6">
                      <input
                        {...formik.getFieldProps('email')}
                        type="email"
                        id="email"
                        className="w-full p-3 rounded-lg border text-center border-black focus:outline-none focus:border-primary-500"
                        placeholder="Email Address"
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-500">
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </div>

                    <div className="mb-3">
                      <input
                        {...formik.getFieldProps('password')}
                        type="text"
                        id="password"
                        className="w-full p-3 rounded-lg border text-center border-black focus:outline-none focus:border-primary-500"
                        placeholder="Password"
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="text-red-500">
                          {formik.errors.password}
                        </div>
                      ) : null}
                      <input
                        {...formik.getFieldProps('confrompassword')}
                        type="password"
                        id="confrompassword"
                        className="w-full p-3 rounded-lg border mt-3 text-center border-black focus:outline-none focus:border-primary-500"
                        placeholder="confrompassword"
                      />
                      {formik.touched.confrompassword &&
                      formik.errors.confrompassword ? (
                        <div className="text-red-500">
                          {formik.errors.confrompassword}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
