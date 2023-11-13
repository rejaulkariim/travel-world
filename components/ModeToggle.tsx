"use client";

import { useTheme } from "next-themes";
import { BiSun } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";

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
    <div onClick={handleThemeChange} className="cursor-pointer">
      {theme === "light" ? (
        <>
          <BsFillMoonFill
            size={30}
            className="rotate-0 scale-100 text-primary "
          />
        </>
      ) : (
        <>
          <BiSun size={30} className="rotate-0 scale-100 text-primary " />
        </>
      )}
    </div>
  );
}
