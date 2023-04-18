import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const movieBooking = (props) => {
  const navigate = useNavigate()
  const [show, setShow] = useState([])
  const [currentDate, setCurrentDate] = useState(props.date)
  const Seatselection = (date, time, Screen) => {
    navigate('/seating', { state: { date, time, Screen } })
  }

  useEffect(() => {
    setShow(props.data)
    setCurrentDate(props.date)
  }, [props.data, props.date])

  return (
    <div>
      <div class="Main-Container w-full m-0 p-3">
        <div class="active-fill flex justify-end items-center mb-4">
          <button class="btn bg-red-500 h-10 text-white rounded-lg px-4 mx-1">
            Availability
          </button>
          <button class="btn bg-red-500 h-10 text-white rounded-lg px-4 mx-1">
            Fast Filling
          </button>
          <button class="btn bg-red-500 h-10 text-white rounded-lg px-4 mx-1">
            Subtitle
          </button>
        </div>

        {Array.isArray(show) &&
          show.map((item, index) => {
            const startDate = new Date(item.startDate)
            const endDate = new Date(item.EndDate)
            if (currentDate >= startDate && currentDate <= endDate) {
              return (
                <React.Fragment key={index}>
                  <hr class="pt-3" />
                  {console.log(item, 'hjkjhkj')}
                  <div class="Theater-container">
                    <div class="theater-Name-container w-3/10 flex items-center">
                      <h5 class="pe-3 m-0">{item.theater.name}</h5>
                      <p class="m-3">{item.theater.screen.screenname}</p>
                    </div>
                    <div class="Time-button w-7/10 flex justify-start mt-5">
                      {item.ShowTimes.map((value, index) => (
                        <button
                          onClick={() => {
                            Seatselection(currentDate, value, item)
                            window.location.reload()
                          }}
                          key={index}
                          className="btn bg-red-500 h-10 text-white rounded-lg px-4 mx-1 "
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>
                </React.Fragment>
              )
            } else {
              return null
            }
          })}
      </div>
    </div>
  )
}

export default movieBooking
