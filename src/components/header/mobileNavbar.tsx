"use client";
import { NavLink, navLinks } from "@/db/navLinks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

const isMenuActive = (item: NavLink, pathname: string): boolean => {
  if (item.href === pathname) {
    return true;
  }
  return !!item.submenu?.some((child: NavLink) =>
    isMenuActive(child, pathname),
  );
};

const MenuItem: React.FC<{
  item: NavLink;
  index: number;
  openDropdown: number | null;
  setOpenDropdown: (index: number | null) => void;
  isNested?: boolean;
  nestLevel?: number;
  closeNavbar: () => void;
}> = ({
  item,
  index,
  openDropdown,
  setOpenDropdown,
  isNested = false,
  nestLevel = 0,
  closeNavbar,
}) => {
  const pathname = usePathname();
  const isActive = isMenuActive(item, pathname);
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const isOpen = openDropdown === index;

  // For nested dropdowns, we need separate state management
  const [nestedOpenDropdown, setNestedOpenDropdown] = useState<number | null>(
    null,
  );

  const handleClick = (e: React.MouseEvent) => {
    if (hasSubmenu) {
      e.preventDefault();
      if (isNested) {
        setNestedOpenDropdown(nestedOpenDropdown === index ? null : index);
      } else {
        setOpenDropdown(isOpen ? null : index);
      }
    } else {
      // No submenu — close the whole navbar
      closeNavbar();
    }
  };

  // Determine which state to use for nested items
  const currentOpenDropdown = isNested ? nestedOpenDropdown : openDropdown;
  const currentSetOpenDropdown = isNested
    ? setNestedOpenDropdown
    : setOpenDropdown;

  // For nested items, check against nestedOpenDropdown instead of openDropdown
  const isNestedOpen = isNested ? nestedOpenDropdown === index : isOpen;

  // Generate appropriate className based on nest level
  const getSubmenuClass = (level: number) => {
    if (level === 0) return "submenu";
    if (level === 1) return "nested-subdropdown";
    return `nested-subdropdown-level-${level}`;
  };

  return (
    <div className={`nav-item ${hasSubmenu ? "" : ""}`}>
      <Link
        href={item.href}
        onClick={handleClick}
        className={`d-flex justify-content-between align-items-center nav-link ${
          isActive ? "active" : ""
        }`}
      >
        {item.title}{" "}
        {hasSubmenu && (
          <i
            className={`fa-solid ${isNestedOpen ? "fa-minus" : "fa-plus"}`}
          ></i>
        )}
      </Link>
      {hasSubmenu && (
        <AnimateHeight
          duration={500}
          height={isNestedOpen ? "auto" : 0}
          className={getSubmenuClass(nestLevel)}
        >
          <div>
            {item.submenu?.map((subItem: NavLink, subIndex: number) => (
              <MenuItem
                key={subIndex}
                item={subItem}
                index={subIndex}
                openDropdown={currentOpenDropdown}
                setOpenDropdown={currentSetOpenDropdown}
                isNested={true}
                nestLevel={nestLevel + 1}
                closeNavbar={closeNavbar}
              />
            ))}
          </div>
        </AnimateHeight>
      )}
    </div>
  );
};

const MobileNavbar = ({ logo }: { logo?: string }) => {
  const [navbarExpend, setNavbarExpend] = useState<number | "auto">(0);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleNavbar = () => {
    const newExpendState = navbarExpend === 0 ? "auto" : 0;
    setNavbarExpend(newExpendState);
    if (newExpendState === 0) {
      setOpenDropdown(null);
    }
  };

  const closeNavbar = () => {
    setNavbarExpend(0);
    setOpenDropdown(null);
  };

  return (
    <div className="lanklub-responsive-nav">
      <div className="container">
        <div className="lanklub-responsive-menu">
          <div className="logo">
            <Link href="/">
              <Image
                width={112}
                height={60}
                src={logo || "/images/logo.png"}
                alt="logo"
              />
            </Link>
          </div>
          <div className="others-option d-flex align-items-center gap-4">
            <Link href="#contact" className="default-btn">
              S'inscrire
            </Link>
            <div style={{ cursor: "pointer" }} onClick={toggleNavbar}>
              <i className="fa-solid fa-bars fs-2"></i>
            </div>
          </div>
          <AnimateHeight
            id="example-panel"
            duration={500}
            height={navbarExpend}
            className={`navbar-open`}
          >
            <div className="mobile-menu">
              {navLinks.map((link, index) => (
                <MenuItem
                  item={link}
                  index={index}
                  key={index}
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}
                  isNested={false}
                  nestLevel={0}
                  closeNavbar={closeNavbar}
                />
              ))}
            </div>
          </AnimateHeight>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
