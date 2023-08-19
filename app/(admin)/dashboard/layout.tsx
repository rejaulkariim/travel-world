import { ModeToggle } from "@/components/ModeToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="md:grid grid-cols-6">
      {/* DASHBOARD SIDEBAR NAVIGATION */}
      <div className="hidden md:block col-span-1 min-h-screen border-r">
        <div className="sticky top-0">
          {/* <DashboardSidebarNav items={dashboardConfig.sidebarNav} /> */}
        </div>
      </div>

      {/* DASHBOARD MAIN LAYOUT */}
      <div className="col-span-5">
        {/* DASHBOARD NAVBAR */}
        <header className="sticky top-0 w-full z-40 border-b bg-background overflow-hidden px-4 md:px-10 flex h-16 items-center justify-between">
          <div className="">
            {/* <Link href="/" className="flex md:hidden items-center space-x-2">
              <Icons.logo className="text-accent h-8 w-8" />
              <span className="text-sm font-semibold">{siteConfig.name}</span>
            </Link> */}
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            {/* <UserAccountNav
          user={{
            name: user.name,
            image: user.image,
            email: user.email,
          }}
        /> */}
          </div>
        </header>

        {/* MOBILE BOTTOM MENU */}
        {/* <div className="fixed bottom-0 left-0 z-50 h-16 w-full border-t border-border bg-border print:hidden lg:hidden">
      <MobileBottomMenu />
    </div> */}

        <main className="wrapper">
          {children}
          {/* <DashboardFooter /> */}
        </main>
      </div>
    </main>
  );
}
