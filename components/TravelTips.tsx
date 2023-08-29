"use client";
import { guides } from "@/constants";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

const TravelTips = () => {
  return (
    <section className="py-16">
      <div className="max-w-2xl mx-auto text-center space-y-2 pb-10">
        <h2 className="text-2xl font-semibold ">Travel Tips & Guide</h2>
        <p className="text-sm">
          Professional and knowledgeable guides to make your journey educational
          and enjoyable.
        </p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="pt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
          {guides.map((guide, index) => (
            <SwiperSlide
              key={index}
              className=" bg-muted rounded-xl shadow-md p-2 h-[330px] cursor-pointer"
            >
              <div className="h-52">
                <Image
                  src={guide.image}
                  height={300}
                  width={300}
                  alt={guide.title}
                  className="object-cover rounded-xl h-full w-full"
                />
              </div>

              <div className="space-y-1 text-center mt-2">
                <h3 className="text-base uppercase tracking-wide font-semibold">
                  {guide.title}
                </h3>
                <p className="text-foreground text-sm text-center">
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
