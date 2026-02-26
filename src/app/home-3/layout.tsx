 
import FooterThree from "@/components/footerThree";
import Header from "@/components/header";
import { ReactNode } from "react";

export default function Home3Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en"> 
      <body className="bg-1c1c1c">
        <Header className="white-navbar" logo="/images/white-logo.svg" />
        {children}
        <FooterThree />
      </body>
    </html>
  );
}
