"use client";

import CreateTravelGuides from "./CreateTravelGuides";

const Sidebar = () => {
  return (
    <nav className="px-4">
      <div className="h-16 px-3 flex items-center">
        <h2>Miah Travel World</h2>
      </div>
      <div className="px-3 my-2">
        <p className="text-muted-foreground">Navigation</p>
      </div>
      <div className="grid items-start gap-2">
        <CreateTravelGuides />
      </div>
    </nav>
  );
};

export default Sidebar;
