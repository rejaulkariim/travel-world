"use client";

import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="mb-4">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={1280}
              width={720}
              alt="travel"
              priority
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground uppercase mb-4">
              About <span className="text-gradient">Miah Travel</span> 🌍
            </h2>
            <p className="p-regular-14">
              We&apos;re dedicated to crafting extraordinary journeys worldwide.
              Whether it&apos;s a serene beach escape, an epic mountain
              adventure, or vibrant city exploration, we&apos;ve got you
              covered. Our secret ingredient? Uncompromising quality,
              personalized service, and meticulous attention to detail.
              Let&apos;s make memories together!
            </p>
            <div className="mt-4">
              <Link
                href="https://www.facebook.com/miahworld1102"
                className="mt-4 inline-block"
              >
                <Button variant="primary" className="uppercase" size="lg">
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
