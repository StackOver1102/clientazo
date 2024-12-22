"use client"
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header/header";
import HeroSection from "@/components/Sections/Hero/HeroSection";
import CompanySection from "@/components/Sections/Company/Company";
import ServicesSection from "@/components/Sections/Service/ServiceSection";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <Header />
      <HeroSection />
      <CompanySection />
      <ServicesSection/>
      {/* <h1>{t("title")}</h1> */}
      {/* <Link href="/about">{t("about")}</Link> */}
    </div>
  );
}
