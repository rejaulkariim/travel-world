"use client";

import Link from "next/link";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-20">
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
      </MaxWidthWrapper>
    </section>
  );
};

export default CallToAction;
