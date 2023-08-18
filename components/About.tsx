"use client";

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          About Our Travel Agency
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-4">
            <img
              src="/images/about.jpg"
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed">
              Welcome to [Your Travel Agency Name]! We are dedicated to making
              your travel experiences unforgettable.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              With a team of passionate travelers and experts, we curate the
              best destinations and experiences around the world, ensuring every
              trip you take with us is filled with adventure, discovery, and
              joy.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Whether you're looking for a relaxing beach getaway, an
              adventurous mountain trek, or a cultural city exploration, we have
              the perfect package for you. Our commitment to quality,
              personalized service, and attention to detail sets us apart from
              the rest.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Join us in creating memories that last a lifetime. Let's embark on
              a journey together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
