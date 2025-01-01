import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/header";
import React from "react";

interface ServicesLayoutProps {
  children: React.ReactNode;
}

const ServicesLayout: React.FC<ServicesLayoutProps> = ({ children }) => {
  return (
    <div className="login-layout">
      <Header />
      {children}
      <Footer className="!mt-0" />
    </div>
  );
};

export default ServicesLayout;
