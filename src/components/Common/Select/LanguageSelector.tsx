"use client";

import React, { useEffect, useState } from "react";
import styles from "./LanguageSelector.module.css";
// import { useRouter } from "@/i18n/routing";
// import { FlagEN, FlagVI } from "../Common/Icons/Flags";
import { useRouter } from "next/navigation";
import { FlagEN, FlagVI } from "../Icons/Flags";

const languages = [
  { code: "en", label: "English", flag: <FlagEN /> },
  { code: "vi", label: "Tiếng Việt", flag: <FlagVI /> },
];

export default function LanguageSelector() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname.split("/")[1];
      const currentLanguage =
        languages.find((lang) => lang.code === currentPath) || languages[0];
      setSelectedLanguage(currentLanguage);
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChangeLanguage = (locale: string) => {
    const language = languages.find((lang) => lang.code === locale);
    if (language) {
      setSelectedLanguage(language);
      const pathname = window.location.pathname;
      const searchParams = window.location.search;
      router.push(
        `/${locale}${pathname.replace(/^\/(en|vi)/, "")}${searchParams}`
      );
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.languageSelector}>
      <button
        className={styles.selectorButton}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {selectedLanguage.flag}
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={styles.dropdownItem}
              onClick={() => handleChangeLanguage(lang.code)}
            >
              {lang.flag}
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
