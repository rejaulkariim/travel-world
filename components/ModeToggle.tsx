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
    <button className="h-8 w-8 px-0" onClick={handleThemeChange}>
      {theme === "light" ? (
        <>
          <BsFillMoonFill size={20} className="rotate-0 scale-100" />
        </>
      ) : (
        <>
          <BiSun size={20} />
        </>
      )}
    </button>
  );
}
