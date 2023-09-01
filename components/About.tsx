"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          About Our Travel Agency
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-4">
            <Image
              src="https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=600"
              height={300}
              width={300}
              alt="travel"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div>
            <p className="text-foreground leading-7">
              Welcome to [Your Travel Agency Name]! We are dedicated to making
              your travel experiences unforgettable. With a team of passionate
              travelers and experts, we curate the best destinations and
              experiences around the world, ensuring every trip you take with us
              is filled with adventure, discovery, and joy. Whether you&apos;re
              looking for a relaxing beach getaway, an adventurous mountain
              trek, or a cultural city exploration, we have the perfect package
              for you. Our commitment to quality, personalized service, and
              attention to detail sets us apart from the rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
