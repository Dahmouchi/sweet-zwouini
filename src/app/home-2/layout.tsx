import FooterTwo from "@/components/footerTwo";
import Header from "@/components/header";
import { ReactNode } from "react";

const HomeTwoLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <FooterTwo />
    </>
  );
};

export default HomeTwoLayout;
