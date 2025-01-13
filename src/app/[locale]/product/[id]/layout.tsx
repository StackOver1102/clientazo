import { CartModal } from "@/components/Layout/Cart/Cart";
import CartProviders from "@/components/Layout/Cart/CartProvider";
import Header from "@/components/Layout/Header/HeaderNew";
import AppSidebar from "@/components/Layout/Sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
// import Footer from "@/components/Layout/Footer/Footer";
// import Sidebar from "@/components/Layout/Sidebar";
import React from "react";

interface ProductLayoutProps {
  children: React.ReactNode;
}

const ProductLayout: React.FC<ProductLayoutProps> = async ({ children }) => {
  const cookieStore = await cookies();

  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarInset>
          <Header />
          <CartProviders>
            <CartModal />
            {children}
          </CartProviders>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default ProductLayout;
