"use client";
import Link from "next/link";
import { BiHomeHeart } from "react-icons/bi";
import { FaHospitalUser } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuContact } from "react-icons/lu";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <header>
      <nav className="flex md:fixed top-0 left-0 right-0 justify-between items-center h-16 px-2 md:px-10 bg-accent z-40 backdrop-blur">
        <div>
          <Link href="/">
            <h1 className="text-xl font-bold tracking-wider">Miah World</h1>
          </Link>
        </div>

        <div className="hidden md:flex gap-4 items-center uppercase text-sm text-foreground">
          <Link href="/">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="/">Air Ticket</Link>
          <Link href="/">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="flex items-center">
          <ModeToggle />
          {/* <Link href="/login">Login</Link> */}
        </div>
      </nav>
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-muted z-40 flex items-center p-2">
        <div className="flex justify-between gap-4 items-center h-full w-full">
          <Link href="/" className="flex flex-col items-center space-y-2 p-2">
            <BiHomeHeart className="text-lg text-foreground" />
            <p className="text-xs text-foreground">Home</p>
          </Link>

          <Link
            href="#services"
            className="flex flex-col items-center space-y-2 p-2"
          >
            <HiOutlineUserGroup className="text-lg text-foreground" />
            <p className="text-xs text-foreground">Services</p>
          </Link>

          <Link href="/" className="flex flex-col items-center space-y-2 p-2">
            <GiAirplaneDeparture className="text-lg text-foreground" />
            <p className="text-xs text-foreground">Air Ticket</p>
          </Link>

          <Link href="/" className="flex flex-col items-center space-y-2 p-2">
            <FaHospitalUser className="text-lg text-foreground" />
            <p className="text-xs text-foreground">About</p>
          </Link>
          <Link
            href="/contact"
            className="flex flex-col items-center space-y-2 p-2"
          >
            <LuContact className="text-lg text-foreground" />
            <p href="/contact" className="text-xs text-foreground">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
