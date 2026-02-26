import "@/assets/css/all.min.css";
import "@/assets/css/style.css";
import "@/assets/css/responsive.css";
import AnimationProvider from "@/components/AnimationProvider";
import type { Metadata } from "next";
import { Poppins, Unbounded } from "next/font/google";

const geistSans = Poppins({
  variable: "--fontFamily",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});

const geistMono = Unbounded({
  variable: "--headingFontFamily",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Sweet Zwouini | Atelier Pâtisserie & Cuisine - Salé & Rabat",
  description:
    "Atelier professionnel de pâtisserie et cuisine pour femmes à Salé et Rabat. Formations pratiques de qualité pour maîtriser l'art de la pâtisserie et de la cuisine. Rejoignez-nous ! 📞 06 97 08 34 42",
  keywords: [
    "pâtisserie Salé",
    "cours cuisine Rabat",
    "formation pâtisserie femmes",
    "atelier cuisine Maroc",
    "Sweet Zwouini",
    "formation culinaire",
    "pâtisserie professionnelle",
    "cours pâtisserie Maroc",
  ],
  authors: [{ name: "Sweet Zwouini" }],
  creator: "Sweet Zwouini",
  openGraph: {
    title: "Sweet Zwouini | Atelier Pâtisserie & Cuisine",
    description:
      "Formations pratiques en pâtisserie et cuisine pour femmes à Salé & Rabat. Apprenez avec des professionnels ! 🍰",
    siteName: "Sweet Zwouini",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweet Zwouini | Atelier Pâtisserie & Cuisine",
    description:
      "Formations pratiques en pâtisserie et cuisine pour femmes à Salé & Rabat. 🍰📞 06 97 08 34 42",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
