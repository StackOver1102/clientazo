// import Footer from "@/components/Layout/Footer/Footer";
// import Header from "@/components/Layout/Header/header";
import React from "react";

interface RegisterLayoutProps {
  children: React.ReactNode;
}

const RegisterLayout: React.FC<RegisterLayoutProps> = ({ children }) => {
  return (
    <div className="login-layout">
      {/* <Header /> */}
      {children}
      {/* <Footer className="!mt-0" /> */}
    </div>
  );
};

export default RegisterLayout;
