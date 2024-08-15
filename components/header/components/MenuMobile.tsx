"use client";
import Image from "next/image";
import NavMoblie from "@/public/nav_mobile.svg";
import { useState } from "react";
import NavLinkMobile from "./NavLinkMobile";

function MenuMobile() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="icon_mobile">
      <Image
        src={NavMoblie}
        alt="nav_mobile"
        onClick={() => setShowMenu((prev) => !prev)}
        style={{ cursor: "pointer" }}
      />
      <nav className={`${showMenu ? "nav_mobile_show" : "nav_mobile_hidden"}`}>
        <NavLinkMobile href="/">HOME</NavLinkMobile>
        <NavLinkMobile href="/about-us">ABOUT US</NavLinkMobile>
        <NavLinkMobile href="/feature-work">FEATURE WORK</NavLinkMobile>
        <NavLinkMobile href="/reference">REFERENCE</NavLinkMobile>
        <NavLinkMobile href="/blog">BLOG</NavLinkMobile>
      </nav>
    </div>
  );
}

export default MenuMobile;
