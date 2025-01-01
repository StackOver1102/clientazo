"use client";
import SearchIcon from "@/components/Common/Icons/Search";
import InputSearch from "@/components/Common/Search/Search";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  ArrowRightEndOnRectangleIcon,
  HomeIcon,
  SunIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useState } from "react";

interface LiItemProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  isCollapsed?: boolean;
}

const LiItem: React.FC<LiItemProps> = ({
  icon,
  text,
  onClick,
  isCollapsed,
}) => {
  return (
    <li
      className="flex items-center my-4 mx-4 cursor-pointer text-sm"
      onClick={onClick}
    >
      <span className="mr-2">{icon}</span>
      <span className={`${isCollapsed ? "hidden" : ""}`}>{text}</span>
    </li>
  );
};

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const toggleCollapse = () => {
//     setIsCollapsed(!isCollapsed);
//   };

  const handleLogout = () => {
    alert("Logout");
  };

  const handleHideSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`h-screen fixed top-0 left-0 overflow-y-auto p-4 ${
        isCollapsed ? "w-[80px]" : "w-[224px]"
      } flex flex-col justify-between ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-800"
      }`}
    >
      <div>
        <div className="flex items-center mb-4">
          <Image
            src="/assets/images/logo.jpeg"
            alt="Profile"
            className={`rounded-full mr-2 ${
              isCollapsed ? "w-8 h-8" : "w-10 h-10"
            }`}
            width={80}
            height={80}
          />
          {!isCollapsed && (
            <div>
              <h3 className="font-bold text-sm">Duck UI</h3>
              <p className="text-xs">Duckui@demo.com</p>
            </div>
          )}
        </div>
        <div>
          <InputSearch isCollapsed={isCollapsed} />
        </div>
        <ul className={`flex flex-col ${isCollapsed ? "mt-5" : ""}`}>
          <LiItem
            icon={<HomeIcon className="h-5 w-5" />}
            isCollapsed={isCollapsed}
            text="Dashboard"
          />
          <LiItem
            icon={<SearchIcon />}
            isCollapsed={isCollapsed}
            text="Dashboard"
          />
          <LiItem
            icon={<SearchIcon />}
            isCollapsed={isCollapsed}
            text="Dashboard"
          />
          <LiItem
            icon={<SearchIcon />}
            isCollapsed={isCollapsed}
            text="Dashboard"
          />
        </ul>
      </div>
      <div className="flex flex-col">
        <LiItem
          icon={<ArrowRightEndOnRectangleIcon className="h-5 w-5" />}
          text="Logout"
          onClick={handleLogout}
          isCollapsed={isCollapsed}
        />
        <LiItem
          icon={<SunIcon className="h-5 w-5" />}
          text="Light mode"
          isCollapsed={isCollapsed}
          onClick={() => setDarkMode(!darkMode)}
        />
        <LiItem
          icon={!isCollapsed ? <ArrowLeftCircleIcon className="h-5 w-5" /> : <ArrowRightCircleIcon className="h-5 w-5" />}
          text="Hide sidebar"
          onClick={handleHideSidebar}
          isCollapsed={isCollapsed}
        />
      </div>
    </div>
  );
};

export default Sidebar;
