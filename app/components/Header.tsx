import React from "react";
import LogoSection from "./LogoSection";
import NavLinks from "./NavLinks";
import Image from "next/image"; // Next.js optimized Image component
import "../globals.css";

const Header: React.FC = () => {
  return (
    <header className="header-container">

      <LogoSection />
      <NavLinks />
      {/* Adding a logo image */}
      <Image 
        src="/icons/apple-music.svg" // Relative path from the "public" folder
        alt="Site Logo" 
        width={50} // Specify the width of the image
        height={50} // Specify the height of the image
      />
        <Image 
        src="/icons/spotify.svg" // Relative path from the "public" folder
        alt="Site Logo" 
        width={50} // Specify the width of the image
        height={50} // Specify the height of the image
      />

    </header>
  );
};

export default Header;
