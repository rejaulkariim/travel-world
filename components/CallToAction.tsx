"use client";

import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 py-12 rounded-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl  font-bold text-white mb-4">
          Ready to Embark on Your Next Adventure?
        </h2>
        <p className="text-white text-sm md:text-base mb-6">
          Plan your dream vacation with us today and create unforgettable
          memories.
        </p>
        <Link href="/contact" className="mt-4 inline-block">
          <button className="bg-accent text-foreground py-3 px-6 rounded-lg border-none">
            Start Your Journey
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
