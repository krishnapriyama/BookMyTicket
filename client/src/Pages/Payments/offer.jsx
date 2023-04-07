import React from 'react'

//components
import Navbar from '../../Components/Navbar/navbar'
import Offer from '../../Components/Extracomponents/offer'
import Footer from '../../Components/Footer/footer'

const offer = () => {
  return (
   <>
   {/* navbar */}
   <Navbar></Navbar>

   {/* moviedetails */}
   <Offer></Offer>

   {/* footer */}
   <Footer></Footer>

 </>
  )
}

export default offer
