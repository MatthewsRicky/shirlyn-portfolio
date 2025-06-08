"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  const navlinks = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Experience",
    "Contact",
  ];
  return (
    <div className="flex my-6 mx-auto items-center justify-center">
      <ul
        className="flex items-center justify-around
       text-sm gap-6 font-normal bg-slate-100 w-fit shadow-lg shadow-slate-300/30 rounded-3xl px-3 py-1"
      >
        {navlinks.map((nav) => (
          <li
            key={nav}
            className="px-3 py-3 hover:text-slate-900 active:bg-slate-100 text-slate-500"
          >
            <Link href={"/" + nav}>{nav}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
