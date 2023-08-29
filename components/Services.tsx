"use client";

import { services } from "@/constants";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="py-16">
      <div className="max-w-2xl mx-auto text-center space-y-2">
        <h2 className="text-2xl font-semibold ">Our Services</h2>
        <p className="text-sm">
          Professional and knowledgeable guides to make your journey educational
          and enjoyable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className=" bg-muted rounded-xl shadow-md p-2 h-[330px]"
          >
            <div className="h-52">
              <Image
                src={service.image}
                height={300}
                width={300}
                alt={service.title}
                className="object-cover rounded-xl h-full w-full"
              />
            </div>

            <div className="space-y-1 text-center mt-2">
              <h3 className="text-base uppercase tracking-wide font-semibold">
                {service.title}
              </h3>
              <p className="text-foreground text-sm text-center">
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
