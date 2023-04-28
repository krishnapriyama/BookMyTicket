import React from 'react'
import { useFormik } from 'formik'
import adminAxios from '../../../config/adminAxios'
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


const addtheater = () => {

  const formik = useFormik({
    initialValues: {
      theatername: '',
      place: '',
      password: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const errors = {}
      if (!values.theatername) {
        errors.theatername = 'Name Required'
      }
      if (!values.place) {
        errors.place = 'Place Required'
      } 

      if (!values.password) {
        errors.password = 'Password Required'
      } else if(!passwordRegex.test(values.password)){
         errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.'
      }else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Password Mismatch'
      }
      return errors
    },
    onSubmit: async (values) => {
      console.log(values, '----theater data')
      try {
        const response = await adminAxios.post(
          '/add-theaters',
          { ...values }
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
   <div className="h-screen flex justify-center items-center w-full text-white dark:bg-gray-800">
   <form class="w-full max-w-lg ml-4" onSubmit={formik.handleSubmit}>
     <h1 className="font-bold text-2xl items-center justify-center flex mb-11">
       ADD THEATERS 
     </h1>
     <div class="flex flex-wrap -mx-3 mb-6">
       <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
         <label
           class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
           for="grid-first-name"
         >
           theater Name
         </label>
         <input
           {...formik.getFieldProps('theatername')}
           class="appearance-none block w-full bg-gray-200 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
           id="grid-first-name"
           type="text"
           name="theatername"
           placeholder="Theater Name"
         />
         {formik.touched.theatername && formik.errors.theatername ? (
           <div className="text-red-500">{formik.errors.theatername}</div>
         ) : null}
       </div>
       <div class="w-full md:w-1/2 px-3">
         <label
           class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
           for="grid-last-name"
         >
           Place
         </label>
         <input
           {...formik.getFieldProps('place')}
           class="appearance-none block w-full bg-gray-200 text-white border border-gray-200 round
           ed py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
           id="grid-last-name"
           type="text"
           name="place"
           placeholder="Place"
         />
         {formik.touched.place && formik.errors.place ? (
           <div className="text-red-500">{formik.errors.place}</div>
         ) : null}
       </div>
     </div>
     <div class="flex flex-wrap -mx-3 mb-6">
       <div class="w-full px-3">
         <label
           class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
           for="grid-password"
         >
           password
         </label>
         <input
           {...formik.getFieldProps('password')}
           class="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
           id="grid-password"
           type="password"
           name="password"
           placeholder="Password............"
         />
       </div>
       {formik.touched.password && formik.errors.password ? (
         <div className="text-red-500">{formik.errors.password}</div>
       ) : null}
     </div>


     <div class="w-full mt-9">
       <label
         class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
         for="grid-password"
       >
         Confirm password
       </label>
       <input
         {...formik.getFieldProps('confirmPassword')}
         class="appearance-none block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
         id="grid-password"
         type="password"
         name="confirmPassword"
         placeholder="Conform Password"
       />
       {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
         <div className="text-red-500">{formik.errors.confirmPassword}</div>
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

export default addtheater
