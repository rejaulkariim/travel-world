"use client";
import React from 'react';
import {Swiper} from 'swiper/react';
import   {SwiperSlide}  from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination,Autoplay } from 'swiper/modules';
import Image from 'next/image';

const HeroSlider = () => {

  const sliderDatas = [
    {
      id:1 ,
      image: "https://i.ibb.co/hDxTq7T/Screenshot-2023-08-28-124458.png"
    },
    {
      id: 2,
      image: "https://i.ibb.co/wJKZRf6/Screenshot-2023-08-28-124531.png"
    },
   
  ]

  return (
    <div className=''>
    
    <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
          
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 3000 }}
      >
        {sliderDatas.map((slide) => (
          
          <SwiperSlide key={slide.id}>
          <div className='w-full h-[600px] relative'>
            <Image
              src={slide.image}
              alt='Image'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
  </div>
  );
};

export default HeroSlider;