"use client";

import { useTheme } from "next-themes";
import { BiSun } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";
import { Button } from "./ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="h-8 w-8 px-0" onClick={handleThemeChange}>
      {theme === "light" ? (
        <>
          <Button variant="outline" size="icon">
            <BsFillMoonFill size={20} className="rotate-0 scale-100" />
          </Button>
        </>
      ) : (
        <>
          <Button variant="outline" size="icon">
            <BiSun size={20} />
          </Button>
        </>
      )}
    </div>
  );
}
