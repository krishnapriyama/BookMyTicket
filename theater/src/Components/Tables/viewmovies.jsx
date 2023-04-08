import React, { useEffect, useState } from 'react'
import axios from 'axios'

const viewmovies = () => {
  return (
   <div className="h-screen w-full p-0 m-0 flex justify-center items-center">
   <div className="relative overflow-x-auto shadow-md">
     <table className="w-full text-sm bg-white rounded-2xl overflow-hidden">
       <thead className="text-xs uppercase bg-gray-50 text-center text-black">
         <tr>
           <th scope="col" className="px-6 py-3 font-medium">
             Movie name
           </th>
           <th scope="col" className="px-6 py-3 font-medium">
             Screen name
           </th>
           <th scope="col" className="px-6 py-3 font-medium">
             show timings
           </th>
           <th scope="col" className="px-6 py-3 font-medium">
             ticket price
           </th>
           <th scope="col" className="px-6 py-3 font-medium">
             start date
           </th>
           <th scope="col" className="px-6 py-3 font-medium">
             end date
           </th>
           <th scope="col" className="px-6 py-3 font-medium">
             Action
           </th>
         </tr>
       </thead>
       <tbody className="justify-center items-center dark:divide-gray-700">
           <tr >
             <td
               scope="row"
               className="px-6 py-4 font-medium justify-center items-center text-black whitespace-nowrap"
             >
               gf
             </td>
             <td
               scope="row"
               className="px-6 py-4 font-medium justify-center items-center text-black  whitespace-nowrap"
             >
              gf
             </td>
             <td
               scope="row"
               className="px-6 py-4 font-medium justify-center items-center text-black  whitespace-nowrap"
             >
              g
             </td>
             <td
               scope="row"
               className="px-6 py-4 font-medium justify-center items-center text-black  whitespace-nowrap"
             >
              gdfg
             </td>
             <td
               scope="row"
               className="px-6 py-4 font-medium justify-center items-center text-black  whitespace-nowrap"
             >
               gdgf
             </td>
             <td
               scope="row"
               className="px-6 py-4 font-medium justify-center items-center text-black  whitespace-nowrap"
             >
               gdgf
             </td>
             <td className="px-6 py-4 items-center flex justify-center gap-4">
               <button
                 type="button"
                 onClick={() => handleDelete(s._id)}
                 className="text-white bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
               >
                 Delete
               </button>
             </td>
           </tr>
       </tbody>
     </table>
   </div>
</div>
  )
}

export default viewmovies
