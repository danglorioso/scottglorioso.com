import React from 'react';
import { FaApple, FaSpotify } from 'react-icons/fa';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black-900 rounded-lg mx-auto max-w-screen-xl px-6 py-4 flex items-center justify-between mt-4">
      {/* Logo and Text */}
      <div className="flex flex-col items-right"> 
      <Link href="/" passHref>
          <Image
            src={Logo}
            alt="SG Logo"
            height={48} // Set height to 50px
            width={48 * (2911 / 325)} // Aspect ratio based on original size
            className="rounded-lg cursor-pointer"
          />
        <p className="font-sans text-red-700 text-base mt-1">
          Singer, Songwriter, Sound Engineer, Producer
        </p>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow flex justify-center space-x-8">
        <Link href="/" className="text-white hover:text-gray-300 text-lg">Home</Link>
        <Link href="all-songs" className="text-white hover:text-gray-300 text-lg">All Songs</Link>
        <Link href="for-the-glory" className="text-white hover:text-gray-300 text-lg">For the Glory</Link>
        <Link href="live" className="text-white hover:text-gray-300 text-lg">Live</Link>
        <Link href="store" className="text-white hover:text-gray-300 text-lg">Store</Link>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <a href="https://music.apple.com/us/artist/scott-glorioso/1637244084" target="_blank" className="text-white hover:text-gray-300 text-2xl">
          <FaApple />
        </a>
        <a href="https://open.spotify.com/artist/2r4EbUh8eNVrjHb4KAS5rp?si=yvBkF0F4SuymbAPO4VSClw" target="_blank" className="text-white hover:text-gray-300 text-2xl">
          <FaSpotify />
        </a>
      </div>
    </header>
  );
};

export default Header;
