import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import unspalsh from '../assets/unsplash1.jpg';
import unsplash2 from '../assets/unsplash2.jpg';
import unsplash3 from '../assets/unsplash3.jpg';
import 'swiper/css';
import 'swiper/css/effect-fade';


const Swipes = () => {

  return (
    <>
       <div className = ''>
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            autoplay={{
            delay: 4000,
            disableOnInteraction: false,
           }}
            loop={true}
            className="w-full h-full ">
               <SwiperSlide className = '  w-[100%] h-[100%] ' >
                      <img src= {unspalsh} alt="" className = 'w-full aspect-3/2 object-cover h-full'/>
               </SwiperSlide>
               <SwiperSlide className = ' w-[100%] h-[100%]'>
                    <img src= {unsplash2} alt="" className = 'w-full aspect-3/2 object-cover h-full '/>
               </SwiperSlide>
               <SwiperSlide >
                    <img src= {unsplash3} alt="" className = 'w-full  aspect-3/2 object-cover h-full '/>
               </SwiperSlide>
          </Swiper>
       </div>

    </>
  )
}

export default Swipes