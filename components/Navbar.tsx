"use client";

import { Link as ScrollLinks, animateScroll } from "react-scroll";
import Link from "next/link";
import { BiHomeHeart } from "react-icons/bi";
import { FaHospitalUser } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuContact } from "react-icons/lu";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <header id="main">
      <nav className="flex md:fixed top-0 left-0 right-0 justify-between items-center h-16 px-4 md:px-10 bg-card z-40 backdrop-blur">
        <div>
          <Link
            onClick={animateScroll.scrollToTop}
            className="cursor-pointer"
            href="/"
          >
            <h1 className="text-xl uppercase font-bold tracking-widest">
              Miah <span className="text-amber-500">World</span>
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex gap-4 items-center uppercase text-sm text-muted-foreground font-semibold tracking-wider">
          <Link
            href="/"
            onClick={animateScroll.scrollToTop}
            className="cursor-pointer"
          >
            Home
          </Link>
          <ScrollLinks
            to="services"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Services
          </ScrollLinks>
          <ScrollLinks
            to="destination"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
            // href="#destination"
          >
            Destination
          </ScrollLinks>
          <ScrollLinks
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
            href="/about"
          >
            About
          </ScrollLinks>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="flex items-center">
          <ModeToggle />
        </div>
      </nav>
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-card z-40 flex items-center p-2">
        <div className="flex justify-between gap-4 items-center h-full w-full">
          <Link
            href="/"
            onClick={animateScroll.scrollToTop}
            className="cursor-pointer flex flex-col items-center space-y-2 p-2"
          >
            <BiHomeHeart className="text-lg text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Home</p>
          </Link>

          <ScrollLinks
            to="services"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer flex flex-col items-center space-y-2 p-2"
          >
            <HiOutlineUserGroup className="text-lg text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Services</p>
          </ScrollLinks>

          <ScrollLinks
            to="destination"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer flex flex-col items-center space-y-2 p-2"
          >
            <GiAirplaneDeparture className="text-lg text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Destination</p>
          </ScrollLinks>

          <ScrollLinks
            // to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer flex flex-col items-center space-y-2 p-2"
          >
            <FaHospitalUser className="text-lg text-muted-foreground" />
            <p className="text-xs text-muted-foreground">About</p>
          </ScrollLinks>

          <Link
            href="/contact"
            className="flex flex-col items-center space-y-2 p-2"
          >
            <LuContact className="text-lg text-muted-foreground" />
            <Link href="/contact" className="text-xs text-muted-foreground">
              Contact
            </Link>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
