import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo_desktop.png';
import Link from 'next/link';

export default function LogoTagline() {
  return (
    <Link href="/" passHref>

    <div className="flex flex-col items-center justify-center hover:scale-95 duration-300">
      <Image
        src={Logo}
        alt="SG Logo"
        height={48}
        width={48 * (2911 / 325)}
        className="rounded-lg cursor-pointer"
        priority
      />
      <p className="font-sans text-red-500 text-base mt-1 cursor-pointer text-center">
        Singer, Songwriter, Sound Engineer, Producer
      </p>
    </div>
    </Link>
  );
};
