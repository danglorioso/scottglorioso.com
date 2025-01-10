import React from 'react';
import { FaApple, FaSpotify } from 'react-icons/fa';
import Link from 'next/link';
import LogoTagline from './LogoTagline';

const Header = () => {
  return (
    <header className="bg-black rounded-lg mx-auto max-w-screen-xl px-6 py-4 flex items-center justify-between mt-4">
      {/* Logo and Tagline */}
      <div className="mt-4 cursor-pointer">
        <LogoTagline />
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow flex justify-center space-x-10">
        <Link href="/" className="text-white hover:text-red-500 text-lg transition-all duration-300 ease-in-out">Home</Link>
        <Link href="all-songs" className="text-white hover:text-red-500 text-lg transition-all duration-300 ease-in-out">All Songs</Link>
        <Link href="for-the-glory" className="text-white hover:text-red-500 text-lg transition-all duration-300 ease-in-out">For the Glory</Link>
        <Link href="live" className="text-white hover:text-red-500 text-lg transition-all duration-300 ease-in-out">Live</Link>
        <Link href="store" className="text-white hover:text-red-500 text-lg transition-all duration-300 ease-in-out">Store</Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <a href="https://music.apple.com/us/artist/scott-glorioso/1637244084" target="_blank" className="text-white hover:text-gray-300 hover:scale-110 text-3xl duration-300 mr-1">
          <FaApple />
        </a>
        <a href="https://open.spotify.com/artist/2r4EbUh8eNVrjHb4KAS5rp?si=yvBkF0F4SuymbAPO4VSClw" target="_blank" className="text-white hover:text-gray-300 hover:scale-110 duration-300 text-3xl">
          <FaSpotify />
        </a>
      </div>
    </header>
  );
};

export default Header;
