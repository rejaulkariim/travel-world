"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { destinations } from "@/constants";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";

const Destinations = () => {
  return (
    <section id="destination" className="section-padding">
      <MaxWidthWrapper>
        <SectionHeader
          headerInfo={{
            title: "DESTINATION",
            subtitle:
              " Explore iconic landmarks, historical sites, & make your destination unique. ",
            description:
              "Our expert guides will take you to the must-visit places and hidden gems that will leave you in awe. From stunning natural wonders to architectural masterpieces and culinary delights, our tours cater to your interests and preferences.",
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 mt-10 gap-4">
          {destinations.map((destination) => (
            <div key={destination.id}>
              <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
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
                  <h3 className="text-lg md:text-xl font-bold text-primary">
                    {destination.title}
                  </h3>
                  <p className="p-regular-14">{destination.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Destinations;
