import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/header";
import React from "react";

interface ForgotPasswordProps {
  children: React.ReactNode;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ children }) => {
  return (
    <div className="login-layout">
      <Header />
      {children}
      <Footer className="!mt-0" />
    </div>
  );
};

export default ForgotPassword;
