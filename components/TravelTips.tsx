"use client";

import { guides } from "@/constants";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SectionHeader from "./SectionHeader";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";

const TravelTips = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <SectionHeader
          headerInfo={{
            title: "TRAVEL MALAYSIA",
            subtitle: "Explore the Beauty of Malaysia",
            description:
              "Uncover the beauty of Malaysia. Your gateway to diverse landscapes, rich culture, and unforgettable experiences awaits. Explore with us!",
          }}
        />
        <div className="swiper testimonial mt-10">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            speed={750}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            loop={true}
            grabCursor={true}
            modules={[Navigation, Autoplay, Pagination]}
            breakpoints={{
              320: { slidesPerView: 1.1, spaceBetween: 10 },
              480: { slidesPerView: 2.6, spaceBetween: 10 },
              700: { slidesPerView: 4 },
            }}
            pagination={{
              clickable: true,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {guides.map((guide, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-card rounded-2xl shadow-md p-4 min-h-[320px] cursor-pointer relative"
                >
                  <div className="h-56">
                    <Image
                      src={guide.image}
                      height={1280}
                      width={720}
                      priority
                      alt={guide.title}
                      className="object-cover rounded-xl h-full w-full"
                    />
                  </div>

                  <div className="space-y-1 mt-2">
                    <h3 className="text-base text-gradient uppercase tracking-wider font-bold">
                      {guide.title}
                    </h3>
                    <p className="text-foreground text-sm leading-5 ">
                      {guide.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default TravelTips;
