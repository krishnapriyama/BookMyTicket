import React, { useEffect, useState } from "react";
import moment from 'moment';
import Rate from '../Extracomponents/rate'

export default function viewbookings(props) {
   const [showModal, setShowModal] = useState(false);
   const [rating, setRating] = useState(0);
   const [rating2, setRating2] = useState(0);
   const [bookings, setBookings] = useState(props.booking)

   useEffect(() => {
      setBookings(props.booking)
   }, [props])

   const formattedDate = moment(bookings.show?.date).format("MMMM Do, YYYY");
   return (
      <>
         <button
            className="bg-gray-800 text-white font-bold uppercase text-sm px-6 py-3 rounded"
            type="button"
            onClick={() => setShowModal(true)}
         >
            VIEW RECENT BOOKINGS
         </button>
         {showModal ? (
            <>
               <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
               >
                  <div className="relative  my-6 mx-auto max-w-3xl justify-center items-center">
                     {/*content*/}
                     <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                           <h3 className="text-3xl font-semibold">
                              RECENT BOOKINGS
                           </h3>
                           <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                           >
                              <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                 ×
                              </span>
                           </button>
                        </div>
                        {/*body*/}
                        <div className="overflow-y-scroll h-96">
                           {bookings.map((shows, index) => {
                              return (
                                 <div key={index} className="relative p-6 flex-auto items-center justify-center">
                                    <a
                                       href="#"
                                       className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                    >
                                       <img
                                          className="object-cover w-full rounded-t-lg h-80 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                          src={shows?.movie?.poster1}
                                          alt=""
                                       />
                                       <div className="flex flex-col justify-between p-4 leading-normal">
                                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                             {shows?.movie?.moviename}
                                          </h5>
                                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate w-72">
                                             {shows?.movie?.description}.
                                          </p>
                                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                             {shows?.theater?.name}
                                          </h5>
                                          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                             {shows?.theater?.screen?.screenname}
                                          </h5>
                                          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                             {formattedDate} - {shows?.show?.time}
                                          </h5>
                                         
                                          <Rate moviename={shows?.movie?.moviename}/>
                                       </div>
                                    </a>
                                 </div>
                              );
                           })}
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
                        </div>
                     </div>
                  </div>
               </div>
               <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
         ) : null}
      </>
   );
}