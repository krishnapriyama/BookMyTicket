import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

let coulumSeat = [];
let seat = [];


function addbooking() {
   const [seatcount, setSeatcount] = useState('');
   const [columCount, setColumncount] = useState('');
   const [screens, setScreens] = useState([]);
   const [selectedScreenId, setSelectedScreenId] = useState("");
   const [movie, setMovie] = useState([]);
   const [time, setTime] = useState([]);
<div className="0"></div>

   const token = localStorage.getItem('theaterToken')

   useEffect(() => {
      axios
         .get(
            "http://localhost:4000/theater/screen",
            {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            }
         ).then((response) => {
            setScreens(response.data.screens);
         })
   }, [])

   for (let i = 0; i < seatcount; i++) {
      seat[i] = i;
   }
   for (let j = 0; j < columCount; j++) {
      coulumSeat[j] = String.fromCharCode(65 + j);
   }
   const [selectedSeat, setSelectedSeat] = useState([]);
   const Seatselect = (event) => {
      if (event.currentTarget.style.backgroundColor === "red") {
         event.currentTarget.style.backgroundColor = "white";
      } else {
         event.currentTarget.style.backgroundColor = "red";
      }
      if (!selectedSeat.includes(event.target.value)) {
         setSelectedSeat([...selectedSeat, event.target.value]);
      } else {
         setSelectedSeat(selectedSeat.filter((val) => val !== event.target.value));
      }
   };
 


   const handleScreenChange = (event) => {
      const screenId = event.target.value;
      setSelectedScreenId(screenId);

      axios.get(`http://localhost:4000/theater/movie-time/${screenId}`, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      })
         .then(data => {
            console.log(data);
            console.log(data.data[0]);
            setMovie(data.data[0])
            setTime(data.data[1])
            setSeatcount(data.data[2].screen.row)
            setColumncount(data.data[2].screen.column)
         })
         .catch(error => console.error(error));
   }

   return (
      <>
         <div className="bg-gray-800 h-40 w-full gap-6 p-28 flex justify-center items-center">
            <select
               className="appearance-none block w-1/3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
               onChange={handleScreenChange}
               value={selectedScreenId}
            >
               <option value="">Select Screen</option>
               {screens.map((screen) => (
                  <option key={screen._id} value={screen._id}>
                     {screen.screenname}
                  </option>
               ))}
            </select>

            <select
               className="appearance-none block w-1/3 bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
               onChange={handleScreenChange}
            >
               {movie.length == 1 ? (
                  <option value={movie[0].movieName}>{movie[0].movieName}</option>
               ) : (
                  <>
                     <option value="">Select Movie</option>
                     {movie.map((m) => (
                        <option key={m._id} value={m._id}>
                           {m.movieName}
                        </option>
                     ))}
                  </>
               )}
            </select>

            <select
               className="appearance-none block w-1/3 bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
               onChange={handleScreenChange}
            >
               {time.length == 1 ? (
                  <option value={time}>{time}</option>
               ) : (
                  <>
                     <option value="">Select Time</option>
                     {time.map((t) => (
                        <option key={t} value={t}>
                           {t}
                        </option>
                     ))}
                  </>
               )}
            </select>
         </div>

         <div className="bg-gray-800 h-[900px] flex justify-center">
            <div className="w-full max-w-screen-lg mt-7 bg-gray-800 flex flex-col gap-6 p-6">

               <div className="w-[100%]">
                  {coulumSeat.map((value, index) => {
                     return (
                        <div className="flex gap-3 justify-center" key={value}>
                           {seat.map((data, index) => {
                              return (
                                 <button
                                    className="h-[40px] w-[70px] rounded-lg bg-white mt-2 cursor-pointer"
                                    value={value + index}
                                    id={value + index}
                                    key={value + index}
                                    onClick={(event) => {
                                       Seatselect(event);
                                    }}
                                 >
                                    {index == 0 && value}
                                    {value == "A" && data}
                                 </button>
                              );
                           })}
                        </div>
                     );
                  })}

               </div>
               <div className="flex justify-center items-center">
                  <div className="w-full flex flex-col gap-4 p-4 bg-gray-700 rounded-lg">
                     <h1 className="text-4xl font-bold  text-gray-100 justify-center flex">
                        <span className="text-[#29fadede] ">
                           MovieName
                        </span>
                        -Genre
                     </h1>
                     <h2 className="text-lg font-bold text-gray-100 justify-center flex">
                        Description
                     </h2>
                     <hr className="border-t-2 border-gray-500" />
                     <h3 className="text-md font-bold text-gray-100">
                        Selected Seats:{" "}
                        <span className="text-gray-300">{'Seats'}</span>
                     </h3>
                     {selectedSeat.length > 0 && (
                        <h4 className="text-md font-semibold text-gray-100">
                           Total Price:{" "}
                           <span className="text-gray-300">
                              1200
                           </span>
                        </h4>
                     )}
                     <button

                        className="bg-white text-black px-4 py-2 rounded-md hover:bg-[#b48d8d]"
                     >
                        Book Your Seat
                     </button>
                  </div>
               </div>

            </div>
         </div>
      </>
   );
}

export default addbooking;
