"use client";

import { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`${
        isVisible ? "fixed bottom-5 right-5" : "hidden"
      } p-2 bg-primary text-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary/90 transition duration-300 ease-in-out z-10`}
      onClick={scrollToTop}
    >
      <BsArrowUpShort size={30} />
    </button>
  );
}
