import FooterOne from "@/components/footerOne";
import Header from "@/components/header";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <FooterOne />
    </>
  );
};

export default HomeLayout;
