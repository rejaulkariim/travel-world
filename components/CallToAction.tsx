"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <section className="wrapper section-padding bg-gradient-to-r from-primary to-secondary rounded-2xl">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl  font-bold text-white mb-4">
          Ready to Embark on Your Next Adventure?
        </h2>
        <p className="text-white">
          Plan your dream vacation with us today and create unforgettable
          memories.
        </p>
        <Link href="/contact" className="mt-4 inline-block">
          <Button variant="outline" size="lg" className="">
            Start Your Journey
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
