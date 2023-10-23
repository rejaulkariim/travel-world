"use client";

import { services } from "@/constants";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="wrapper section-padding">
      <div className="max-w-xl mx-auto text-center space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground uppercase">
          Our <span className="text-gradient">Travel</span> Services
        </h2>
        <p className="text-sm md:text-base text-foreground">
          Your Gateway to Memorable Journeys!
        </p>
      </div>
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
                width={1200}
                alt={service.title}
                priority
                className="object-cover rounded-lg h-full w-full"
              />
            </div>

            <div className="space-y-1 mt-2">
              <h3 className="text-lg font-bold text-gradient uppercase tracking-wider">
                {service.title}
              </h3>
              <p className="text-foreground text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
