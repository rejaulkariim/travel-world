"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliders } from "../constants";
import Overlay from "./Overlay";
import { Button } from "./ui/button";

const HeroSlider = () => {
  return (
    <section className="w-full h-[calc(100vh)]">
      <Swiper
        pagination={{
          clickable: true,
        }}
        speed={750}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper w-full h-full"
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="w-full h-full relative">
              <Image
                src={slide.image}
                alt="Image"
                height={1920}
                width={1080}
                priority
                className="object-cover h-full w-full"
              />
              <Overlay />
              <div className="absolute w-full top-80 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-4">
                <h2 className="max-w-4xl mx-auto text-4xl md:text-7xl font-bold uppercase leading-10">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg mt-2">{slide.subtitle}</p>
                <Link href={slide.link} className="mt-8 inline-block">
                  <Button variant="primary" className="uppercase">
                    Book Your Next Adventure
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
