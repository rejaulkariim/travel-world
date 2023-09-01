import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      testimonial:
        "The travel package I booked through your app exceeded my expectations. The accommodations and activities were top-notch.",
    },
    {
      name: "Alex Carter",
      testimonial:
        "I can't believe how smoothly my vacation went. Your team took care of everything, allowing me to fully enjoy my time without any worries.",
    },
    {
      name: "Sophia Martinez",
      testimonial:
        "The travel package I booked through your app exceeded my expectations. The accommodations and activities were top-notch.",
    },
  ];

  return (
    <div className="py-16">
      <div className="">
        <h2 className="text-center text-2xl font-semibold mb-4">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-muted rounded-lg p-6 shadow-md text-foreground"
            >
              <p className="mb-2 text-xs md:text-sm">
                {testimonial.testimonial}
              </p>
              <div className="flex gap-2 mb-2">
                <AiFillStar className=" text-amber-300" />
                <AiFillStar className=" text-amber-300" />
                <AiFillStar className=" text-amber-300" />
                <AiFillStar className=" text-amber-300" />
                <AiFillStar className=" text-amber-300" />
              </div>
              <p className="text-base font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
