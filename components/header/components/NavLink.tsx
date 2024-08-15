'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import "../style.css";
interface linkType {
  href: any;
  children: React.ReactNode;
}
function NavLink({ href, children }: linkType) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`link ${pathname === href ? "nav_link_active" : ""} nav_link`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
