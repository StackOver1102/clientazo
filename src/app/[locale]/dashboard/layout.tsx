// import Header from "@/components/Layout/Header/header";
// import AppSidebar from "@/components/Layout/Sidebar/app-sidebar";
import Header from "@/components/Layout/Header/HeaderNew";
import AppSidebar from "@/components/Layout/Sidebar/app-sidebar";
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
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <Header />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
