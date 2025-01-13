"use client";

import { useViewport } from "@/hooks/useViewport";
import React, { useEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import {
  IconPositivus,
  IconPositivusTypography,
} from "../../Common/Icons/positivus";
import { IconHamburger } from "../../Common/Icons/hamburger";
import { mcn } from "@/lib/utils";
import { useTranslations } from "next-intl";
// import LanguageSelector from "@/components/Common/Select/LanguageSelector";
import Button from "@/components/Common/Table/Button";
import Typography from "@/components/Common/Typography/typography";
import { Link } from "@/i18n/routing";
import { CountryDropdown } from "@/components/ui/country-dropdown";

export default function Header() {
  const t = useTranslations("Header");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const { width } = useViewport();
  const [selectedCountry, setSelectedCountry] = useState<string>('USA');
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResizeAndKeys = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (width > 1366) closeMenu();

    document.addEventListener("keydown", handleResizeAndKeys);
    return () => document.removeEventListener("keydown", handleResizeAndKeys);
  }, [width]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const menuData = [
    { title: t("menu.aboutUs"), url: "#about-us" },
    { title: t("menu.services"), url: "/services" },
    { title: t("menu.useCases"), url: "#use-cases" },
    { title: t("menu.pricing"), url: "#pricing" },
    { title: t("menu.blog"), url: "#blog" },
    { title: t("login"), url: "/login" },
    { title: t("signUp"), url: "/register" },

  ];

  return (
    <>
      <nav
        className={styles["navbar"]}
        ref={navbarRef}
        aria-label="Main navigation"
      >
        <Link
          className={styles["navbar__brand"]}
          href="/"
          aria-label="Go to home page"
        >
          <IconPositivus className={styles["navbar__brand__icon"]} />
          <IconPositivusTypography
            className={styles["navbar__brand__icon-text"]}
          />
        </Link>
        <button
          className={styles["navbar__toggle-menu"]}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <IconHamburger />
        </button>
        <ul className={styles["navbar__list"]}>
          {menuData.map(({ title, url }) => (
            <li key={url} className={styles["navbar__list__item"]}>
              <Link href={url}>{title}</Link>
            </li>
          ))}
          {/* <Link href="/login">{t("login")}</Link>
          <Link href="/login">{t("signUp")}</Link> */}
          <CountryDropdown
              placeholder="Select country"
              defaultValue={selectedCountry}
              onChange={(e) => setSelectedCountry(e.alpha3)}
              slim
            />
          {/* <LanguageSelector /> */}
        </ul>
      </nav>
      <div
        id="navbar-menu"
        style={{
          paddingTop: navbarRef.current
            ? `${navbarRef.current?.offsetHeight}px`
            : `${84}px`,
        }}
        className={mcn([
          styles["navbar__menu"],
          isMenuOpen && styles["navbar__menu--open"],
        ])}
        role="menu"
        aria-hidden={!isMenuOpen}
      >
        <ul className={styles["navbar__menu__list"]}>
          {menuData.map(({ title, url }) => (
            <li key={`menu-${title}`} className={styles["navbar__list__item"]}>
              <Typography level={3} asChild>
                <a
                  href={url}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                  role="menuitem"
                >
                  {title}
                </a>
              </Typography>
            </li>
          ))}
        </ul>
        <Button
          variant="secondary"
          onClick={closeMenu}
          style={{
            display: "inline-block !important",
          }}
        >
          {t("login")}
        </Button>
      </div>
      <div
        className={mcn([
          styles["navbar__background-overlay"],
          isMenuOpen && styles["navbar__background-overlay--open"],
        ])}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />
    </>
  );
}
