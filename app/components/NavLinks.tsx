import React from "react";
import Link from "next/link";


interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/songs", label: "All Songs" },
  { href: "/album", label: "For the Glory – Album" },
  { href: "/live", label: "Live" },
  { href: "/store", label: "Store" },
];

const NavLinks: React.FC = () => {
  return (
    <nav className="nav-links">
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="nav-link">
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
