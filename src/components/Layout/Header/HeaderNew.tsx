"use client";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React, { useState } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Cart } from "../Cart/Cart";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Header() {
  const [selectedCountry, setSelectedCountry] = useState<string>("USA");
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumbs />
      </div>

      <div className="flex items-center gap-2 px-4">
        <Button variant="outline" size="icon">
          20$
        </Button>
        <Cart />
        <CountryDropdown
          placeholder="Select country"
          defaultValue={selectedCountry}
          onChange={(e) => setSelectedCountry(e.alpha3)}
          slim
        />
        {/* <UserNav /> */}
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}
