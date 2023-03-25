import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// swiper components
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper'

const carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="object-fill w-full h-[500px]"
            src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
            alt="slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full  h-[500px]"
            src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
            alt="slide 2"
          />
        </SwiperSlide> 
        <SwiperSlide>
          <img
            className="object-fill w-full  h-[500px]"
            src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
            alt="slide 3"
          />
        </SwiperSlide>
      </Swiper>  
    </>
  )
}

export default carousel
