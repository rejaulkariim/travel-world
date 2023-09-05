"use client";

import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-12 mb-10 md:mb-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold text-muted-foreground mb-4">
              About Us
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-5">
              Crafting Extraordinary Journeys Worldwide. Beaches, Mountains,
              Cities – We&apos;ve Got You Covered. Our Secret Ingredient?
              Quality, Personalized Service, Attention to Detail. Let&apos;s
              Make Memories Together!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-muted-foreground mb-4">
              Contact Us
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Phone: +60166256738
              <br />
              Email: miahtravels8@gmail.com
            </p>
          </div>
          <div className="md:text-center">
            <h3 className="text-lg font-bold text-muted-foreground mb-4">
              Follow Us
            </h3>
            <div className="flex md:justify-center items-center space-x-4">
              <Link
                href="https://www.facebook.com/miahworld1102"
                target="_blank"
              >
                <BsFacebook size={30} className="text-muted-foreground" />
              </Link>
              <Link
                href="https://www.instagram.com/miaworldtravel/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                target="_blank"
              >
                <BsInstagram size={30} className="text-muted-foreground" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-8 border-card" />
        <p className="text-sm md:text-base text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} Mia Travel World. All rights
          reserved.
        </p>
        <p className="text-sm text-center text-rose-500 hover:text-blue-700 mt-2">
          <Link href="/">Build with ❤️ by Frontend Team</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
