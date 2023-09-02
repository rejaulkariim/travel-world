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

import { airTicketsPromo } from "@/constants";
import Image from "next/image";

const AirTicketPromo = () => {
  return (
    <section className="py-12">
      <div className="max-w-xl mx-auto text-center space-y-2 pb-10">
        <h2 className="text-2xl font-bold text-muted-foreground ">
          Air Ticket
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Professional and knowledgeable guides to make your journey educational
          and enjoyable. Professional and knowledgeable guides to make your
          journey educational and enjoyable.
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
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay, FreeMode]}
      >
        {airTicketsPromo.map((promo) => (
          <SwiperSlide key={promo.id}>
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-60">
                <Image
                  src={promo.image}
                  layout="fill"
                  objectFit="cover"
                  alt="image"
                  className="promo-image"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-muted-foreground mb-2">
                  {promo.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {promo.subtitle}
                </p>
                <a
                  href={promo.link}
                  className="mt-2 block text-blue-600 hover:underline"
                >
                  {promo.buttonLabel}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AirTicketPromo;
