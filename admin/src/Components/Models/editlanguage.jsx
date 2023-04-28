import React, { useState } from 'react'
import adminAxios from '../../../config/adminAxios'

import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

export default function Modallanguage(props) {
   const navigate = useNavigate()
   const [showModal, setShowModal] = useState(false)
   const [language, setLangugae] = useState(props.language)


   const formik = useFormik({
      initialValues: {
         language: language.language,
      },
      validate: (values) => {
         const errors = {}
         if (!values.language) {
            errors.language = 'Language Required'
         }
         return errors
      },
      onSubmit: async (values) => {
         setShowModal(false)
         try {
            values._id = language._id
            const response = await adminAxios.post(
               '/admin/updateLanguage',
               { ...values })
            if (response) {
               window.location.href = '/view-genre_language'
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
            class="text-black bg-yellow-600 font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none"
            type="button"
            onClick={() => setShowModal(true)}
         >
            Edit
         </button>
         {showModal ? (
            <>
               <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-center justify-center">
                  <div className="relative">
                     {/*content*/}
                     <div className="border-0  shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-center justify-center p-5 mt-7 border-b border-solid border-slate-200 rounded-t">
                           <h3 className="text-3xl font-semibold justify-center">EDIT Genre</h3>
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
                                 <div class="w-full px-3 mb-6 md:mb-0">
                                    <label
                                       class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                                       for="grid-first-name"
                                    >
                                       Language
                                    </label>
                                    <input
                                       {...formik.getFieldProps('language')}
                                       class="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                       id="grid-first-name"
                                       type="text"
                                       name="language"
                                       placeholder="Language...."
                                    />
                                    {formik.touched.language && formik.errors.language ? (
                                       <div className="text-red-500">
                                          {formik.errors.language}
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
                                 className="bg-red-500 text-black active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                 type="submit"
                              >
                                 Save Changes
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="opacity-70 fixed w-full inset-0 z-40 bg-black"></div>
            </>
         ) : null}
      </>
   )
}
