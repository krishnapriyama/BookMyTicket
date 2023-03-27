import axios from 'axios'
import React, { useEffect, useState } from 'react'

const viewusers = () => {
  // const [users,setUsers]= useState()
  useEffect(()=>{
axios.get('http://localhost:4000/admin/view-users').then((resp)=>{

})
  },[])
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        {/* <h1 className="font-bold text-2xl items-center justify-center flex">
          ADD MOVIE 
        </h1> */}
        <div className="relative overflow-x-auto ">
          <table className="text-sm text-left text-white rounded-2xl">
            <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-400 text-center text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  phonenumber
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              
                 <tr className="bg-white border-b">
                 <th
                   scope="row"
                   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                 >
                   Krishna 
                 </th>
                 <td className="px-6 py-4 text-black text-center font-medium">0000000000</td>
                 <td className="px-6 py-4 items-center flex justify-center">
                   <button
                     type="button"
                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                   >
                     Block
                   </button>
                   <button
                     type="button"
                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                   >
                     Edit
                   </button>
                   <button
                     type="button"
                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                   >
                     Delete
                   </button>
                 </td>
               </tr>
                  
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default viewusers
