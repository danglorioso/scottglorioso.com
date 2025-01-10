import React from 'react';
import Image from 'next/image';
import Profile from '../../../public/images/profile.png';
// import Link from 'next/link';
import StreamOn from './StreamOn';

const Bio = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-neutral-900 outline outline-neutral-800 p-10 mt-14 rounded-xl shadow-lg max-w-screen-xl mx-auto">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
            <Image
                src={Profile}
                alt="Profile"
                width={300}
                height={300}
                className="rounded-full object-cover mx-auto"
            />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 md:pl-8 flex flex-col">
            <h2 className="text-5xl font-bold text-red-500 mb-4">Scott Glorioso</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
                Scott has been a music lover all of his life. He loves well produced, catchy rock and pop. Scott is an experienced songwriter, producer, recording engineer and artist in his own right. He has a back catalog of over 150 original pop/rock songs that he has produced and recorded in his studio. He also does recording and production work for several other area musicians and projects.
            </p>
            {/* <a
                href="#"
                className="text-zinc-200 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-md text-lg font-medium transition duration-300 mt-5"
            >
                Learn More
            </a> */}
            <StreamOn />
        </div>
    </section>
  );
};

export default Bio;