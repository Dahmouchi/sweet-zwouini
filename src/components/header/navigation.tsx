import { NavLink } from "@/db/navLinks";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "./menuItem";
import MobileNavbar from "./mobileNavbar";

interface NavigationProps {
  logo: string;
  navLinks: NavLink[];
  isSticky: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  logo,
  navLinks,
  isSticky,
}) => {
  return (
    <>
      <MobileNavbar logo={logo} />
      <div className="lanklub-nav">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="/">
              <Image width={172} height={60} src={logo} alt="logo" />
            </Link>
            <div className="collapse navbar-collapse mean-menu">
              <ul className="navbar-nav mx-auto">
                {navLinks.map((link, index) => (
                  <MenuItem key={index} item={link} isSticky={isSticky} />
                ))}
              </ul>
              <div className="others-option">
                <Link href="#contact" className="default-btn">
                  S'inscrire
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
