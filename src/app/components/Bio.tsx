import React from 'react';
import Image from 'next/image';
import Profile from '../../../public/images/profile.png';
// import Link from 'next/link';

const Bio = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 max-w-full w-11/12 rounded-lg bg-gray-900">
        <Image
            src={Profile}
            alt="SG Profile"
            height={48} // Set height to 50px
            width={48 * (2911 / 325)} // Aspect ratio based on original size
            className="rounded-full object-cover drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
        />
        <h1 className="font-sans text-red-500 text-xl md:text-3xl ml-4">
            Scott Glorioso
        </h1>

        <p className="font-sans text-red-500 text-base mt-1">
            Singer, Songwriter, Sound Engineer, Producer
        </p>
    </div>
  );
};

export default Bio;