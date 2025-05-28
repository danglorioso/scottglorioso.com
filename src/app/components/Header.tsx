'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FaApple, FaSpotify } from 'react-icons/fa';
import Link from 'next/link';
import LogoTagline from './LogoTagline';

const Header = () => {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/all-songs', label: 'All Songs' },
    { href: '/albums/for-the-glory', label: 'For the Glory' },
    { href: '/albums/my-kind-of-success', label: 'My Kind of Success' },
    { href: '/live', label: 'Live' },
    { href: '/store', label: 'Store' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-black rounded-lg mx-auto max-w-screen-xl px-6 py-4 flex items-center justify-between mt-2">
      {/* Logo and Tagline */}
      <div className="mt-4 cursor-pointer">
        <LogoTagline />
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow flex justify-center">
        <div className="flex space-x-1 bg-black/50 rounded-full px-3 py-2 backdrop-blur-sm">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-4 py-2 rounded-full text-md font-medium transition-all duration-300 ease-in-out
                  ${active 
                    ? 'text-red-500 hover:bg-red-600/20 hover:scale-100' 
                    : 'text-gray-300 hover:text-white hover:bg-red-600/20 hover:scale-100'
                  }
                `}
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <a href="https://music.apple.com/us/artist/scott-glorioso/1637244084" target="_blank" className="text-white hover:text-gray-400 hover:scale-110 text-3xl duration-300 mr-1">
          <FaApple />
        </a>
        <a href="https://open.spotify.com/artist/2r4EbUh8eNVrjHb4KAS5rp?si=yvBkF0F4SuymbAPO4VSClw" target="_blank" className="text-white hover:text-gray-400 hover:scale-110 duration-300 text-3xl">
          <FaSpotify />
        </a>
      </div>
    </header>
  );
};

export default Header;
