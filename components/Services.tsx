"use client";

import { services } from "@/constants";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <MaxWidthWrapper>
        <SectionHeader
          headerInfo={{
            title: "OUR SERVICES",
            subtitle: "Discover a personalized travel experiences with us.",
            description:
              "Our travel services offer a personalized touch, designed to accommodate your unique needs and preferences. Let us help you make unforgettable memories and discover new horizons.",
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
                <h3 className="text-base font-bold text-gradient uppercase tracking-wider">
                  {service.title}
                </h3>
                <p className="p-regular-14">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;
