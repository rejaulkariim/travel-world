import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 py-12 rounded-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Ready to Embark on Your Next Adventure?
        </h2>
        <p className="text-foreground text-xs md:text-sm mb-6">
          Plan your dream vacation with us today and create unforgettable
          memories.
        </p>
        <Link
          href="/contact"
          className="bg-white text-indigo-500 py-2 px-6 rounded-full text-lg font-semibold shadow-lg"
        >
          Start Your Journey
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
