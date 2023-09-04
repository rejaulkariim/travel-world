"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliders } from "../constants";

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {sliders.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="w-full h-[85vh] relative">
            <Image
              src={slide.image}
              alt="Image"
              height={1200}
              width={1200}
              className="object-cover h-full w-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h2 className="text-3xl font-semibold">{slide.title}</h2>
              <p className="text-lg mt-2">{slide.subtitle}</p>
              <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600">
                {slide.buttonLabel}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
