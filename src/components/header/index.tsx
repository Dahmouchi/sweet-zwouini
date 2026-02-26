import { navLinks } from "@/db/navLinks";
import HeaderClient from "./headerClient";
import Navigation from "./navigation";

interface HeaderProps {
  className?: string;
  logo?: string;
}

const Header = ({ className, logo }: HeaderProps) => {
  return (
    <HeaderClient className={className || ""}>
      <Navigation navLinks={navLinks} logo={logo || "/images/logo.png"} />
    </HeaderClient>
  );
};

export default Header;
