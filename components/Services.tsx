"use client";

const ServicesSection = () => {
  const services = [
    {
      title: "Customized Travel Packages",
      description:
        "Tailored travel experiences that match your preferences and interests.",
      icon: "fas fa-map-marked-alt",
    },
    {
      title: "Expert Guides",
      description:
        "Professional and knowledgeable guides to make your journey educational and enjoyable.",
      icon: "fas fa-user-friends",
    },
    {
      title: "Luxurious Accommodations",
      description:
        "Handpicked accommodations that provide comfort and relaxation during your stay.",
      icon: "fas fa-hotel",
    },
    {
      title: "Adventurous Excursions",
      description:
        "Exciting and memorable activities that let you explore the destination up close.",
      icon: "fas fa-hiking",
    },
  ];

  return (
    <section id="services" className=" py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-blue-500 rounded-full p-3 text-white text-2xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-foreground text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
