import React from 'react';
import { FaApple, FaSpotify } from 'react-icons/fa';
import Image from 'next/image';
import Logo from '../../../public/logo.png';

const Header = () => {
  return (
    <header className="bg-zinc-900 rounded-lg mx-auto max-w-screen-xl px-6 py-4 flex items-center justify-between">
      {/* Logo and Text */}
      <div className="flex flex-col items-right"> 
        <Image
          src={Logo}
          alt="SG Logo"
          height={48} // Set height to 50px
          width={50 * (2910 / 326)} // Aspect ratio based on original size
          className="rounded-lg"
        />
        <p className="font-sans text-red-700 text-base px-4 -mt-2">
          Singer, Songwriter, Sound Engineer, Producer
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow flex justify-center space-x-8">
        <a href="#" className="text-white hover:text-gray-300 text-lg">Home</a>
        <a href="#" className="text-white hover:text-gray-300 text-lg">All Songs</a>
        <a href="#" className="text-white hover:text-gray-300 text-lg">For the Glory</a>
        <a href="#" className="text-white hover:text-gray-300 text-lg">Live</a>
        <a href="#" className="text-white hover:text-gray-300 text-lg">Store</a>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <a href="#" className="text-white hover:text-gray-300 text-2xl">
          <FaApple />
        </a>
        <a href="#" className="text-white hover:text-gray-300 text-2xl">
          <FaSpotify />
        </a>
      </div>
    </header>
  );
};

export default Header;
