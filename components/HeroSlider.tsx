"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";

const HeroSlider = () => {
  const sliderDatas = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      image: "https://i.ibb.co/wJKZRf6/Screenshot-2023-08-28-124531.png",
    },
  ];

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 3000 }}
      >
        {sliderDatas.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-[800px] relative">
              <Image
                src={slide.image}
                alt="Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
