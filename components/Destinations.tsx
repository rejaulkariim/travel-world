"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { destinations } from "@/constants";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const Destinations = () => {
  return (
    <section id="destination" className="wrapper section-padding">
      <SectionHeader
        headerInfo={{
          title: "DESTINATION",
          subtitle: "Explore the Must-Visit Places.",
          description:
            "Discover must-visit places with us. Dive into captivating landscapes and vibrant cultures. Your next adventure starts here!",
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
                <h3 className="text-xl font-bold text-gradient mb-2">
                  {destination.title}
                </h3>
                <p className="text-sm md:text-base text-foreground">
                  {destination.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
