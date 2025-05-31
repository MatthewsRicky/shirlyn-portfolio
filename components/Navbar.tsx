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
    <div>
      {navlinks.map((nav) => (
        <ul key={nav}>
          <li>
            <Link href={"/" + nav}>{nav}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
