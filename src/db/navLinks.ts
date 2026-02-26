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
    href: "#",
    submenu: [
      {
        title: "Nos Tarifs",
        href: "#pricing",
      },
      {
        title: "Témoignages",
        href: "#feedback",
      },
    ],
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
