// import Header from "@/components/Layout/Header/header";
// import AppSidebar from "@/components/Layout/Sidebar/app-sidebar";
import { CartModal } from "@/components/Layout/Cart/Cart";
import CartProviders from "@/components/Layout/Cart/CartProvider";
import Header from "@/components/Layout/Header/HeaderNew";
import AppSidebar from "@/components/Layout/Sidebar/app-sidebar";
import PageContainer from "@/components/PageContainer";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import React from "react";

// interface DashboardLayoutProps {
//   children: React.ReactNode;
// }

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
  return (
    <CartProviders>
      <SidebarProvider defaultOpen={defaultOpen}>
        <CartModal />
        <AppSidebar />
        <SidebarInset>
          <Header />
          <PageContainer>{children}</PageContainer>
        </SidebarInset>
      </SidebarProvider>
    </CartProviders>
  );
}
