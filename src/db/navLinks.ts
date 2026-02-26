export interface NavLink {
  title: string;
  href: string;
  submenu?: NavLink[];
}

export const navLinks: NavLink[] = [
  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "À Propos",
    href: "#about",
  },
  {
    title: "Formation",
    href: "#pricing",
  },
  {
    title: "Galerie",
    href: "#galerie",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
