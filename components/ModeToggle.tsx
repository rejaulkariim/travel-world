"use client";

import { useTheme } from "next-themes";

import { BiMoon, BiSun } from "react-icons/bi";
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
    <>
      <Button
        variant="ghost"
        size="sm"
        className="h-10 w-10 px-0 border-none"
        onClick={handleThemeChange}
      >
        {theme === "light" ? (
          <>
            <BiSun
              size={25}
              className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary"
            />
          </>
        ) : (
          <>
            <BiMoon
              size={25}
              className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary"
            />
          </>
        )}
      </Button>
    </>
  );
}
