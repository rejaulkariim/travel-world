"use client";

import { testimonials } from "@/constants/testimonails";
import { AiFillStar } from "react-icons/ai";
// import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeader from "./SectionHeader";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";

const Testimonials = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <SectionHeader
          headerInfo={{
            title: "TESTIMONAILS",
            subtitle: "Who Have Experienced Our Service!",
            description:
              "Discover the Stories and Experiences Shared by Those Who Have Immersed Themselves in the Exceptional Service of Our Travel Journey Experts!",
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl py-6 px-4 shadow-md"
            >
              <p>{testimonial.review}</p>
              <div className="flex mb-2">
                <AiFillStar className=" text-amber-500" />
                <AiFillStar className=" text-amber-500" />
                <AiFillStar className=" text-amber-500" />
                <AiFillStar className=" text-amber-500" />
                <AiFillStar className=" text-amber-500" />
              </div>
              <p>{testimonial.name}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonials;
