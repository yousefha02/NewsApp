import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import SlideData from "./SlideData";
import 'swiper/css/navigation';
import 'swiper/css';
import { val } from "../App";
import { nanoid } from "nanoid";
export default function Slide(props)
{
   const {data} = useContext(val);
    return(
        <div className="slide">
        <Swiper
        loop={true}
        navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
            {
                data.map(box=><SwiperSlide><SlideData {...box} key={nanoid()}/></SwiperSlide>)
            }
      </Swiper>
      </div>
    )
}