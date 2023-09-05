"use client";

import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="mb-4">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={1280}
              width={1280}
              alt="travel"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl text-muted-foreground font-bold mb-4">
              About Our Miah Travel 🌍
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-8">
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
                <button className="bg-amber-500 hover:bg-blue-500 py-3 px-6 rounded-lg border-none">
                  Start Your Journey
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
