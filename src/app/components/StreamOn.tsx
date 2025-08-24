import React from 'react';
import { FaApple, FaSpotify, FaAmazon, FaYoutube } from 'react-icons/fa';

export default function StreamingLinks() {
  const platforms = [
    {
      name: 'Apple Music',
      url: '/apple-music',
      icon: <FaApple />,
    },
    {
      name: 'Spotify',
      url: '/spotify',
      icon: <FaSpotify />,
    },
    {
      name: 'Amazon Music',
      url: '/amazon-music',
      icon: <FaAmazon />,
    },
    {
      name: 'YouTube Music',
      url: '/youtube-music',
      icon: <FaYoutube />,
    },
  ];

  return (
    <section className="bg-neutral-900 text-white rounded-lg pt-2">
      <div className="grid grid-cols-1 sm:grid-cols-0 md:grid-cols-4 gap-6 ">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center space-y-2 bg-neutral-800 hover:bg-neutral-700 hover:scale-105 duration-300 p-4 rounded-lg shadow-lg h-full"
          >
            <div className="text-4xl text-red-500">{platform.icon}</div>
            <span className="text-lg font-semibold text-center">{platform.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};
