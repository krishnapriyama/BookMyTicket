import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

const viewbookings = () => {
  const [booking, setBooking] = useState([])
  const [length, setLength] = useState()
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 5
  const token = localStorage.getItem('theaterToken')
  useEffect(() => {
    axios
      .get('http://localhost:4000/theater/view-booking', {
        Credentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((bookinglist) => {
        console.log(bookinglist);
        setBooking(bookinglist.data)
        setLength(bookinglist.data.length)
      })
      .catch((err) => console.log(err))
  }, [])

  function getCurrentPageData() {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return booking.slice(startIndex, endIndex);
  }


  return (
    <div className="h-screen w-full p-0 m-0 flex justify-center items-center bg-gray-100 dark:bg-gray-800">
        <div className="relative overflow-x-auto shadow-md">
        {length > 0 ? (
       <table className="w-full text-sm bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
       <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-800 text-center text-gray-700 dark:text-gray-300">
         <tr>
              <th scope="col" className="px-6 py-3 font-medium">
              User Name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
              Screen Name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
              Seat
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Movie Name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
              payment
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
              Date
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {getCurrentPageData().map((Reservation, index) => (
              <tr className="text-white" key={index}>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap"
                >
                  {Reservation.user.email.split('@')[0]}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap"
                >
                  {Reservation.theater.screen.screenname}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-white  whitespace-nowrap"
                >
                  {Reservation.show.SeatNumber.map(seat=> seat + ", " )} 
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-white  whitespace-nowrap"
                >
                  {Reservation.movie.moviename}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-white  whitespace-nowrap"
                >
                    {Reservation.CompletPayment ? "Success" :"Not Completed"}
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-white  whitespace-nowrap"
                >
                    {Reservation.BookingDate.split("T")[0]}
                </td>
               
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-white  whitespace-nowrap"
                >
                  <button
                    type="button"
                    className="text-white focus:ring-4 bg-green-700 hover:bg-green-800  w-20  hover:ring-red-300 font-medium rounded-lg text-sm  py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Edit
                  </button>{' '}
                  <br />
                  <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800  w-20 hover:ring-4 hover:ring-green-300 font-medium rounded-lg text-sm  py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         ) : (
          <Link to="/add-movies">
            <button
              type="button"
              className="text-white  bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              ADD Movies
            </button>
          </Link>
        )}
             <ReactPaginate
  pageCount={Math.ceil(booking.length / itemsPerPage)}
  pageRangeDisplayed={5}
  marginPagesDisplayed={2}
  onPageChange={({ selected }) => setCurrentPage(selected)}
  containerClassName="flex justify-center my-5"
  activeClassName="font-medium bg-blue-700 text-white py-1 px-3"
  pageClassName="font-medium text-gray-500 rounded-md py-1 px-3 mx-1 cursor-pointer hover:text-blue-700 hover:bg-gray-200"
  previousClassName="font-medium text-gray-500 rounded-md py-1 px-3 mx-1 cursor-pointer hover:text-blue-700 hover:bg-gray-200"
  nextClassName="font-medium text-gray-500 rounded-md py-1 px-3 mx-1 cursor-pointer hover:text-blue-700 hover:bg-gray-200"
  breakClassName="font-medium text-gray-500 rounded-md py-1 px-3 mx-1 cursor-pointer hover:text-blue-700 hover:bg-gray-200"
  previousLabel="<<"
  nextLabel=">>"
/>
      </div>
    </div>
  )
}

export default viewbookings
