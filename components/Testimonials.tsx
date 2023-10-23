"use client";

import { testimonials } from "@/constants/testimonails";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <section className="wrapper section-padding">
      <div className="max-w-xl mx-auto text-center space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground uppercase">
          What Our <span className="text-gradient">Clients</span> Say.
        </h2>
        <p className="text-sm md:text-base text-foreground">
          Hear from Those Who Have Experienced Our Service!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-card rounded-lg p-6 shadow-md text-foreground"
          >
            <p className="mb-2 text-sm  text-foreground">
              {testimonial.review}
            </p>
            <div className="flex mb-2">
              <AiFillStar className=" text-amber-500" />
              <AiFillStar className=" text-amber-500" />
              <AiFillStar className=" text-amber-500" />
              <AiFillStar className=" text-amber-500" />
              <AiFillStar className=" text-amber-500" />
            </div>
            <p className="text-sm font-medium text-foreground">
              {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
