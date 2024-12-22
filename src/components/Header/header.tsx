"use client";

import { useViewport } from "@/hooks/useViewport";
import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/button";
import styles from "./header.module.css";
import { IconPositivus, IconPositivusTypography } from "../Icons/positivus";
import { IconHamburger } from "../Icons/hamburger";
import { mcn } from "@/lib/utils";
import Typography from "../Typography/typography";
import { useTranslations } from "next-intl";
import LanguageSelector from "../Select/LanguageSelector";

export default function Header() {
  const t = useTranslations("Header");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const { width } = useViewport();

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
    { title: t("menu.services"), url: "#services" },
    { title: t("menu.useCases"), url: "#use-cases" },
    { title: t("menu.pricing"), url: "#pricing" },
    { title: t("menu.blog"), url: "#blog" },
  ];

  return (
    <>
      <nav
        className={styles["navbar"]}
        ref={navbarRef}
        aria-label="Main navigation"
      >
        <a
          className={styles["navbar__brand"]}
          href="/"
          aria-label="Go to home page"
        >
          <IconPositivus className={styles["navbar__brand__icon"]} />
          <IconPositivusTypography
            className={styles["navbar__brand__icon-text"]}
          />
        </a>
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
              <a href={url}>{title}</a>
            </li>
          ))}
          <LanguageSelector />
          <Button variant="outline">{t("login")}</Button>
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
          tabIndex={isMenuOpen ? 0 : -1}
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
