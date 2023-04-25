import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TwoColumnForm() {

  const navigate = useNavigate();

  const formikAddGenre = useFormik({
    initialValues: {
      genre: ''
    },
    validate: values => {
      const errors = {};
      if (!values.genre) {
        errors.genre = 'genre is required';
      }
      return errors;
    },
    onSubmit: async (values) => {
      console.log(values,"-----genre");
      try {
        const response = await axios.post(
          'http://localhost:4000/admin/add-genre',
          { ...values },
          { withCredentials: true }
        );
        if (response) {
         window.location.href = "/gener-language"
          console.log('Add Genre Success');
        }
      } catch (error) {
        console.log(error, 'Error from Axios');
      }
    }
  });

  const formikAddLanguage = useFormik({
    initialValues: {
      language: ''
    },
    validate: values => {
      const errors = {};
      if (!values.language) {
        errors.language = 'Language is required';
      }
      return errors;
    },
    onSubmit: async (values) => {
      console.log(values,"-----language");
      try {
        const response = await axios.post(
          'http://localhost:4000/admin/add-language',
          { ...values },
          { withCredentials: true }
        );
        if (response) {
         window.location.href = "/gener-language"
          console.log('Add Language Success');
        }
      } catch (error) {
        console.log(error, 'Error from Axios');
      }
    }
  });


   return (
      <div className="grid grid-cols-2 gap-96 mt-20 mx-auto ">
         <div>
            <form class="w-full max-w-lg" onSubmit={formikAddGenre.handleSubmit}>
               <h1 className="font-bold text-5xl items-center justify-center flex mb-11 text-white">
                  ADD GENRE
               </h1>
               <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3 mb-6 md:mb-0">
                     <label
                        class="block uppercase
                         tracking-wide text-white text-xs font-bold mb-2"
                        for="grid-first-name" 
                     >
                        genre
                     </label>
                     <input
                        {...formikAddGenre.getFieldProps('genre')}
                        class="appearance-none block w-full h-14 bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        name="genre"
                        placeholder="Genre..."
                     />

                     {formikAddGenre.touched.genre && formikAddGenre.errors.genre ? (
                        <div className="text-red-500">{formikAddGenre.errors.genre}</div>
                     ) : null}
                  </div>
               </div>
               <div class="w-full px-3 mt-9 items-end flex justify-end">
                  <button className="text-white w-full h-14 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                     Submit
                  </button>
               </div>
            </form>
         </div>

         <div>
            <form class="w-full max-w-lg" onSubmit={formikAddLanguage.handleSubmit}>
               <h1 className="font-bold text-5xl items-center justify-center flex mb-11 text-white">
                  ADD LANGUAGE
               </h1>
               <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full  px-3 mb-6 md:mb-0">
                     <label
                        class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                        for="grid-first-name"
                     >
                        Language
                     </label>
                     <input
                        {...formikAddLanguage.getFieldProps('language')}
                        class="appearance-none block w-full h-14 bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        name="language"
                        placeholder="Language..."
                     />

                     {formikAddLanguage.touched.language && formikAddLanguage.errors.language ? (
                        <div className="text-red-500">{formikAddLanguage.errors.language}</div>
                     ) : null}
                  </div>
               </div>
               <div class="w-full px-3 mt-9 items-end flex justify-end">
                  <button className="text-white w-full h-14 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default TwoColumnForm;
