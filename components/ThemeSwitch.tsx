"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={`fixed bottom-10 right-10 w-12 h-12 bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex justify-center items-center hover:scale-[1.15] active:scale-105 transition-all ${theme=== "dark" ?"dark:bg-slate-900 dark:text-white dark:border-gray-950" : ""}`}
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
