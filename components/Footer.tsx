"use client";

import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">About Us</h3>
            <p>
              Personalized Service, Attention to Detail. Let&apos;s Make
              Memories Together!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Contact Us
            </h3>
            <p>
              Phone: +60166256738
              <br />
              Email: miahtravels8@gmail.com
            </p>
          </div>
          <div className="md:text-center">
            <h3 className="text-lg font-bold text-foreground mb-4">
              Follow Us
            </h3>
            <div className="flex md:justify-center items-center space-x-4">
              <Link
                href="https://www.facebook.com/miahworld1102"
                target="_blank"
                className="p-2 bg-card rounded-full"
              >
                <BsFacebook size={30} className="text-primary" />
              </Link>
              <Link
                href="https://www.instagram.com/miaworldtravel/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                target="_blank"
                className="p-2 bg-card rounded-full"
              >
                <BsInstagram size={30} className="text-primary" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-8 border-card" />
        <p>
          &copy; {new Date().getFullYear()} Mia Travel World. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
