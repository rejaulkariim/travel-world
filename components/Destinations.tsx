"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  FreeMode,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { destinations } from "@/constants";
import Image from "next/image";

const Destinations = () => {
  return (
    <section id="destination" className="section-padding">
      <div className="max-w-xl mx-auto text-center space-y-2 pb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-muted-foreground ">
          Popular Destinations
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Explore the Must-Visit Places
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[EffectCoverflow, Pagination, Autoplay, FreeMode]}
      >
        {destinations.map((destination) => (
          <SwiperSlide key={destination.id}>
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-60">
                <Image
                  src={destination.image}
                  layout="fill"
                  objectFit="cover"
                  alt="image"
                  priority
                  className="destination-image"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-muted-foreground mb-2">
                  {destination.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {destination.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Destinations;
