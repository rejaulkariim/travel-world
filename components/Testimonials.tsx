const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      testimonial:
        "Thanks to your agency, I had the most amazing trip of my life. ",
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
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-muted rounded-lg p-6 shadow-md text-foreground"
            >
              <p className="mb-4">{testimonial.testimonial}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
