"use client";

import Image from "next/image";
import Link from "next/link";
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
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {sliders.map((slide) => (
        <SwiperSlide key={slide.id} className="relative">
          <div className="w-full h-screen md:h-[95vh] relative">
            <Image
              src={slide.image}
              alt="Image"
              height={1280}
              width={1920}
              priority
              className="object-cover h-full w-full"
            />
            <div className="absolute top-0 left-0 right-0 w-full h-full bg-black opacity-60">
              <h2 className="text-4xl md:text-[150px] font-extrabold text-center pt-16 text-gray-500/80 animate-bounce">
                FLY WITH MW
              </h2>
            </div>
            <div className="absolute w-full top-72 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-4">
              <h2 className="text-2xl md:text-5xl font-bold">{slide.title}</h2>
              <p className="text-sm md:text-lg mt-2">{slide.subtitle}</p>
              <Link href={slide.link} className="mt-8 inline-block">
                <button className="bg-amber-500 hover:bg-blue-500 py-3 px-6 rounded-lg border-none">
                  Book Your Next Adventure
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
