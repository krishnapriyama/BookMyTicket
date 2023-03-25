import React from 'react'

//components
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import Seating from '../../Components/MovieBooking/seating'

const seating = () => {
  return (
    <>
    {/* navbar */}
    <Navbar></Navbar>

{/* seating */}
<Seating></Seating>

    {/* footer */}
    <Footer></Footer>
    </>
  )
}

export default seating
