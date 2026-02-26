"use client";
import { useEffect, useRef, useState } from "react";
import Navigation from "./navigation";
import { navLinks } from "@/db/navLinks";

interface HeaderClientProps {
  className?: string;
}

const HeaderClient: React.FC<HeaderClientProps> = ({ className }) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 120) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      className={`navbar-area position-fixed top-0 start-0 end-0 ${
        isSticky ? "is-sticky" : ""
      } ${className || ""}`}
    >
      <Navigation
        navLinks={navLinks}
        logo={isSticky ? "/images/logo.png" : "/images/logowhite.png"}
        isSticky={isSticky}
      />
    </div>
  );
};

export default HeaderClient;
