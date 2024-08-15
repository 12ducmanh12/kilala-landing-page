'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import "../style.css";
interface linkType {
  href: any;
  children: React.ReactNode;
}
function NavLinkMobile({ href, children }: linkType) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`link_mobile ${pathname === href ? "nav_link_mobile_active" : ""} nav_link_mobile`}
    >
      {children}
    </Link>
  );
}

export default NavLinkMobile;
