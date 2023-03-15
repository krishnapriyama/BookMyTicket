import React from 'react'

const movieBooking = () => {
  return (
    <div>
      <div class="Main-Container w-full m-0 p-3">
  <div class="active-fill flex justify-end items-center mb-4">
  <button class="btn bg-red-500 h-10 text-white rounded-lg px-4 mx-1">Availability</button>
    <button class="btn bg-red-500 h-10 text-white rounded-lg px-4 mx-1">Fast Filling</button>
    <button class="btn bg-red-500 h-10 text-white rounded-lg px-4 mx-1">Subtitle</button>
  </div>
  <hr class="pt-3"/>
  <div class="Theater-container">
    <div class="theater-Name-container w-3/10 flex items-center">
      <h5 class="pe-3 m-0">Theater Name</h5>
      <p class="m-0">INFO</p>
    </div>
    <div class="Time-button w-7/10 flex justify-start mt-5">
      <button class="btn bg-red-500 h-10 text-white rounded-lg px-4 mx-1">03:45</button>
      <button class="btn bg-red-500 h-10  text-white rounded-lg px-4 mx-1">03:45</button>
      <button class="btn bg-red-500 h-10 text-white rounded-lg px-4 mx-1">03:45</button>
    </div>
  </div>
  <hr class="pt-3 mt-3"/>
  <div class="Theater-container">
    <div class="theater-Name-container w-3/10 flex items-center">
      <h5 class="pe-3 m-0">Theater Name</h5>
      <p class="m-0">INFO</p>
    </div>
    <div class="Time-button w-7/10 flex justify-start mt-5">
      <button class="btn bg-red-500 h-10 text-white rounded-lg px-4 mx-1">03:45</button>
      <button class="btn bg-red-500 h-10 text-white rounded-lg px-4 mx-1">03:45</button>
      <button class="btn bg-red-500 h-10 text-white rounded-lg px-4 mx-1">03:45</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default movieBooking
