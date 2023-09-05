"use client";

import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Azman",
      testimonial:
        "In my recent trip they made everything effortless from booking flights and hotels to arranging tours and transportation. I highly recommend their services!",
    },
    {
      name: "Safiyyah",
      testimonial:
        "Handled my business trip impeccably. Flights, accommodations, and transfers were all expertly managed, allowing me to focus on work stress-free.",
    },
    {
      name: "Hafiz",
      testimonial:
        "My family enjoyed a wonderful vacation. They found us great deals, organized a memorable tour, and made travel easy. We'll definitely use them again!",
    },
  ];

  return (
    <div className="py-16">
      <div className="">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-muted-foreground mb-4">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-md text-foreground"
            >
              <p className="mb-2 text-sm md:text-base text-muted-foreground">
                {testimonial.testimonial}
              </p>
              <div className="flex gap-2 mb-2">
                <AiFillStar className=" text-amber-300" />
                <AiFillStar className=" text-amber-300" />
                <AiFillStar className=" text-amber-300" />
                <AiFillStar className=" text-amber-300" />
                <AiFillStar className=" text-amber-300" />
              </div>
              <p className="text-base tracking-wider font-semibold text-muted-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
