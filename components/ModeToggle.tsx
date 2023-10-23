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
    <Button
      variant="ghost"
      className="h-8 w-8 px-0"
      onClick={handleThemeChange}
    >
      {theme === "light" ? (
        <>
          <BsFillMoonFill
            size={25}
            className="rotate-0 scale-100 text-primary "
          />
        </>
      ) : (
        <>
          <BiSun size={25} className="rotate-0 scale-100 text-secondary " />
        </>
      )}
    </Button>
  );
}
