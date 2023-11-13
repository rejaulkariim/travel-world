"use client";

import { services } from "@/constants";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="wrapper">
        <SectionHeader
          headerInfo={{
            title: "OUR SERVICES",
            subtitle: "Your Gateway to Memorable Journeys!",
            description:
              "Explore our curated travel services, unlocking unforgettable adventures designed just for you. Let us be your guide to creating lasting memories and seamless travel experiences.",
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-md p-3 h-fit md:min-h-[320px]"
            >
              <div className="h-40">
                <Image
                  src={service.image}
                  height={1200}
                  width={720}
                  alt={service.title}
                  priority
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>

              <div className="space-y-1 mt-2">
                <h3 className="text-lg font-bold text-gradient uppercase tracking-wider">
                  {service.title}
                </h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
