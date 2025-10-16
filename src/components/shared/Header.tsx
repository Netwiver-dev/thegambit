"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md  transition-shadow duration-300 text-typography ${
        isScrolled ? "border-b border-white/10" : "border-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-luckiest text-2xl tracking-wide font-bold"
        >
          De Gambit
        </Link>

        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://app.reapvest.com/register"
          className="bg-button hover:bg-button-dark transition-colors duration-300 text-typography px-5 py-2 rounded-md font-medium"
        >
          Register
        </a>
      </div>
    </header>
  );
};

export default Header;
