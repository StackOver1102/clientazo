import { CartModal } from "@/components/Layout/Cart/Cart";
import { SidebarInset } from "@/components/ui/sidebar";
import CartProviders from "@/components/Layout/Cart/CartProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/Layout/Header/HeaderNew";
import React from "react";
import AppSidebar from "@/components/Layout/Sidebar/app-sidebar";
import PageContainer from "@/components/PageContainer";
import { cookies } from "next/headers";

export default async function Layout({ children }: { children: React.ReactNode }) {
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
