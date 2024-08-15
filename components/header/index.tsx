import Image from "next/image";
import logo from "@/public/Kilala.png"
import NavLink from "./components/NavLink";

import "./style.css"
import MenuMobile from "./components/MenuMobile";

function Header() {
  return (
    <header className="header">
        <Image src={logo} alt="" className="header_logo"/>
        <nav className="nav">
            <NavLink href="/">
                HOME
            </NavLink>
            <NavLink href="/about-us">
                ABOUT US
            </NavLink>
            <NavLink href="/feature-work">
                FEATURE WORK
            </NavLink>
            <NavLink href="/reference">
                REFERENCE
            </NavLink>
            <NavLink href="/blog">
                BLOG
            </NavLink>
        </nav>
        <MenuMobile />
    </header>
  )
}

export default Header