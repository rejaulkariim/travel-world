"use client";

import { teams } from "@/constants";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "./SectionHeader";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";

const Team = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div>
          <SectionHeader
            headerInfo={{
              title: "OUR TEAM",
              subtitle: "Meet the Professionals Team",
              description:
                "Our success is shaped by a passionate and dedicated team committed to excellence. Meet the faces behind the exceptional service that makes your travel experiences truly remarkable.",
            }}
          />
          <div className="swiper testimonial mt-10">
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 4,
                },
              }}
              // className="max-w-4xl mx-auto"
            >
              {teams.map((team) => (
                <SwiperSlide key={team.name}>
                  <div className="border rounded-2xl shadow-md p-4">
                    <div className="w-full h-80">
                      <Image
                        height={350}
                        width={350}
                        src={team.image}
                        alt={team.name}
                        className="rounded-xl w-full h-full"
                      />
                    </div>
                    {/* <Separator className="mt-6" /> */}

                    <div className="mt-6 flex items-center justify-start gap-5">
                      <div className="flex items-center gap-4">
                        {/* <Icons.user className="h-6 w-6 text-foreground dark:text-gray-500" /> */}
                        <div className="mb-0.5">
                          <h5>{team.name}</h5>
                          <p className="p-regular-14">{team.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-4">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-md p-4 min-h-[320px] cursor-pointer relative"
            >
              <div className="h-[280px] w-[280px] mx-auto relative">
                <Image
                  src={team.image}
                  alt={team.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  priority
                  className="rounded-lg"
                />
              </div>
              <div className="text-center mt-4">
                <h4 className="text-base font-bold text-foreground uppercase">
                  {team.name}
                </h4>
                <p className="text-sm text-foreground">{team.position}</p>
              </div>
            </div>
          ))}
        </div> */}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Team;
