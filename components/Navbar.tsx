import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

const Navbar = () => {
  const navLink = [
    {
      id: 1,
      link: "/",
      text: "Home",
    },
    {
      id: 2,
      link: "#services",
      text: "Services",
    },
    {
      id: 3,
      link: "#destination",
      text: "Dsestination",
    },
    {
      id: 4,
      link: "/Contact",
      text: "Contact",
    },
    {
      id: 1,
      link: "#about",
      text: "About Us",
    },
  ];
  return (
    <header className="flex items-center bg-background h-20 sticky top-0 right-0 left-0 z-50 md:px-0 ">
      <nav className="wrapper w-full flex justify-between items-center">
        <div className="flex gap-10 items-center">
          <Link
            href="/"
            className="w-full text-xl md:text-2xl font-bold tracking-wider uppercase text-foreground"
          >
            Fly <span className="text-primary font-bold">With MW</span>
          </Link>
        </div>

        <div className="hidden md:flex gap-4">
          {navLink.map((item) => (
            <Link href={item.link} key={item.id}>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
        <div className="flex justify-between gap-4 items-center uppercase">
          <ModeToggle />
          <Link href="https://www.facebook.com/miahworld1102" target="_blank">
            <Button variant="primary" size="lg" className="hidden md:block">
              Get in Touch
            </Button>
          </Link>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <GiHamburgerMenu size={30} />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <div className="flex flex-col items-start gap-4 text-foreground">
                  {navLink.map((item) => (
                    <SheetClose asChild key={item.id}>
                      <Link href={item.link}>
                        <Button className="w-full" variant="primary" size="lg">
                          {item.text}
                        </Button>
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
