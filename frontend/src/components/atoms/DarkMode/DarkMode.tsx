"use client";
import { IoMdMoon } from "react-icons/io";
import "./darkModeStyles.css";
import { useState } from "react";
import { useDarkMode } from "@/state-global/darkMode";

export default function DarkMode(): React.ReactNode {
  const { darkMode, setDarkMode } = useDarkMode((state) => state);


  const handleClickDarkMode = (): void => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="dark-mode" onClick={handleClickDarkMode}>
      <IoMdMoon />
    </div>
  );
}
