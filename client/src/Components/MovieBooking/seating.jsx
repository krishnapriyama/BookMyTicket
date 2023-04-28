import React, { useEffect, useState } from "react";
// import "./seating.css";
import FourKIcon from "@mui/icons-material/FourK";
import { useLocation } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';
import userAxios from '../../../confic/axiosUser'

let coulumSeat = [];
let seat = [];
const token = localStorage.getItem("userToken");
function Seatselect() {
  const navigate = useNavigate();

  function reservation(seat, data) {
    if (selectedSeat.length <= 0) {
      swal({
        title: "Select Seat first!",
        text: "Minimum One Seat!",
        icon: "warning",

        dangerMode: false,
      });
    } else {
      if (!token) {
        swal({
          title: "Log Error",
          text: "you should log in first!",
          icon: "warning",
          dangerMode: false,
        }).then(() => {
          navigate("/login");
        });
      } else {
        userAxios
          .post(
            "/seatbook",
            {
              BookingDate: new Date(),
              show: {
                date: new Date(data.date),
                time: data.time,
                SeatNumber: seat,
                price: data.Screen.TicketPrice,
                TotelPrice: seat.length * data.Screen.TicketPrice,
              },
              movie: data.Screen.Movie,
              theater: data.Screen.theater,
            },
            
          )
          .then((resp) => {
            swal({
              title: "success",
              text: `${seat} Booked successfully`,
              icon: "success",
              dangerMode: false,
            }).then(() => {
              navigate("/Checkout", {
                state: {
                  seat,
                  Bookingid:resp.data._id,
                  totelprice: seat.length * data?.Screen?.TicketPrice,
                  movie: data?.Screen?.Movie,
                  theater: data?.Screen?.theater,
                  date: new Date(data?.date),
                  time: data?.time,
                  price: data?.Screen?.TicketPrice,
                },
              });
            });
          });
      }
    }
  }

  const { state } = useLocation();

  const [data, setData] = useState(state);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [seatcount, setSeatcount] = useState(data.Screen.theater.screen.row);
  const [columCount, setColumncount] = useState(
    data.Screen.theater.screen.column
  );

  useEffect(() => {
    setData(state);
    setSeatcount(data.Screen.theater.screen.row);
    setColumncount(data.Screen.theater.screen.column);
  }, [state, seatcount, columCount]);

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
  useEffect(() => {
    userAxios.post('/bookedseats'
      , {
        date: data?.date,
        time: data?.time,
        screen_id: data?.Screen?.theater?.screen?._id,
      })
      .then((resp) => {
        setBookedSeats(resp?.data?.seats);
        setSeatcount(resp.data?.screenseats?.theater?.screen?.row);
        setColumncount(resp.data?.screenseats?.theater?.screen?.column);
      });
    bookedSeats.map((value) => {
      document.getElementById(value).style.backgroundColor = "gray";
      document.getElementById(value).disabled = true;
    });
  }, [coulumSeat, seat, bookedSeats]);

  return (
    <div className="bg-gray-800 h-[900px] flex justify-center">
      <div className="w-full max-w-screen-lg mt-24 bg-gray-800 flex flex-col gap-6 p-6">

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
                {data?.Screen?.Movie?.moviename}
              </span>
              -{data?.Screen.Movie.language}
            </h1>
            <h2 className="text-lg font-bold text-gray-100 justify-center flex">
              {data?.date.toLocaleDateString()} - {data?.time}
            </h2>
            <hr className="border-t-2 border-gray-500" />
            <h3 className="text-md font-bold text-gray-100">
              Selected Seats:{" "}
              <span className="text-gray-300">{`${selectedSeat}`}</span>
            </h3>
            {selectedSeat.length > 0 && (
              <h4 className="text-md font-semibold text-gray-100">
                Total Price:{" "}
                <span className="text-gray-300">
                  {data?.Screen?.TicketPrice} * {selectedSeat.length} ={" "}
                  {selectedSeat.length * data?.Screen?.TicketPrice}
                </span>
              </h4>
            )}
            <button
              onClick={() => {
                reservation(selectedSeat, data);
              }}
              className="bg-white text-black px-4 py-2 rounded-md hover:bg-[#b48d8d]"
            >
              Book Your Seat
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Seatselect;
