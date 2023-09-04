"use client";

import { guides } from "@/constants";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper/modules";

const TravelTips = () => {
  return (
    <section className="py-16">
      <div className="max-w-xl mx-auto text-center space-y-2 pb-10">
        <h2 className="text-2xl font-bold text-muted-foreground ">
          Travel Tips & Guide
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Professional and knowledgeable guides to make your journey educational
          and enjoyable. Professional and knowledgeable guides to make your
          journey educational and enjoyable.
        </p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        className="pt-10"
        breakpoints={{
          320: { slidesPerView: 1.1, spaceBetween: 10 },
          480: { slidesPerView: 2.6, spaceBetween: 10 },
          700: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
          {guides.map((guide, index) => (
            <SwiperSlide
              key={index}
              className="bg-card rounded-xl shadow-lg p-4 min-h-[310px] cursor-pointer"
            >
              <div className="h-40">
                <Image
                  src={guide.image}
                  height={1280}
                  width={1280}
                  priority
                  alt={guide.title}
                  className="object-cover rounded-xl h-full w-full"
                />
              </div>

              <div className="space-y-1 mt-2">
                <h3 className="text-base text-muted-foreground uppercase tracking-wider font-bold">
                  {guide.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-5 ">
                  {guide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default TravelTips;
