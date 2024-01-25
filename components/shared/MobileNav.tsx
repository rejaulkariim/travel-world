import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          {/* <Icons.menu className="h-8 w-8" /> */}
          Logo
        </SheetTrigger>
        <SheetContent
          className="flex flex-col gap-6 bg-background md:hidden"
          side="left"
        >
          <div className="flex items-center gap-2">
            {/* <Icons.logo className="h-6 w-6 text-primary" /> */}
            <p>Frontend Team</p>
          </div>

          {/* <Separator className="border" /> */}
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
