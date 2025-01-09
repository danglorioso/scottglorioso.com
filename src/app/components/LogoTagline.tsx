import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Link from 'next/link';

const LogoTagline = () => {
  return (
    <Link href="/" passHref>

    <div className="flex flex-col items-center justify-center">
      <Image
        src={Logo}
        alt="SG Logo"
        height={48} // Set height to 50px
        width={48 * (2911 / 325)} // Aspect ratio based on original size
        className="rounded-lg cursor-pointer"
      />
      <p className="font-sans text-red-500 text-base mt-1 cursor-pointer">
        Singer, Songwriter, Sound Engineer, Producer
      </p>
    </div>
    </Link>
  );
};

export default LogoTagline;