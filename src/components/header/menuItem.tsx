"use client";
import { NavLink } from "@/db/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const isMenuActive = (item: NavLink, pathname: string): boolean => {
  if (item.href === pathname) {
    return true;
  }
  return !!item.submenu?.some((child) => isMenuActive(child, pathname));
};

interface MenuItemProps {
  item: NavLink;
  isSticky: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, isSticky }) => {
  const pathname = usePathname();
  const isActive = isMenuActive(item, pathname);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <li className={`nav-item ${hasSubmenu ? "dropdown" : ""}`}>
      <Link
        href={item.href}
        className={`nav-link ${isActive ? "active" : ""} ${
          hasSubmenu ? "dropdown-toggle" : ""
        }`}
        style={{
          color: isSticky ? undefined : "white",
          transition: "color 0.3s ease",
        }}
      >
        {item.title}
      </Link>
      {hasSubmenu && (
        <ul className="dropdown-menu">
          {item.submenu?.map((subItem, subIndex) => (
            <MenuItem key={subIndex} item={subItem} isSticky={isSticky} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
