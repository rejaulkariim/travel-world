"use client";

import { services } from "@/constants";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="py-12">
      <div className="max-w-xl mx-auto text-center space-y-2">
        <h2 className="text-2xl font-bold text-muted-foreground">
          Our Services
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Professional and knowledgeable guides to make your journey educational
          and enjoyable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-card rounded-xl shadow-md p-3 min-h-[330px]"
          >
            <div className="h-40">
              <Image
                src={service.image}
                height={1200}
                width={1200}
                alt={service.title}
                priority
                className="object-cover rounded-xl h-full w-full"
              />
            </div>

            <div className="space-y-1 mt-2">
              <h3 className="text-base text-muted-foreground uppercase tracking-wider font-bold">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
