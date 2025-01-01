// import Footer from "@/components/Layout/Footer/Footer";
// import Header from "@/components/Layout/Header/header";
import React from "react";

interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <div className="login-layout">
      {/* <Header /> */}
      {children}
      {/* <Footer className="!mt-0" /> */}
    </div>
  );
};

export default LoginLayout;
