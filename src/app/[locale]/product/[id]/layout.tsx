import Footer from "@/components/Layout/Footer/Footer";
import Sidebar from "@/components/Layout/Sidebar";
import React from "react";

interface ProductLayoutProps {
  children: React.ReactNode;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default ProductLayout;
