import Link from "next/link";
import { MdFlightTakeoff } from "react-icons/md";
import { ModeToggle } from "./ModeToggle";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import MobileNav from "./shared/MobileNav";
import NavItems from "./shared/NavItems";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 z-50 w-full border-b border-border/40 bg-background">
      <MaxWidthWrapper className="flex items-center justify-between h-14">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <span className="p-2 bg-primary rounded-xl">
            <MdFlightTakeoff className="h-4 w-4" />

            {/* <Icons.logo className="h-6 w-6 text-white " /> */}
          </span>

          <p className="text-xl hidden md:block">FLY WITH MW</p>
        </Link>

        <nav className="md:flex justify-between items-center hidden max-w-lg w-full">
          <NavItems />
        </nav>

        <div className="flex justify-end items-center gap-4">
          <ModeToggle />

          <MobileNav />
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
