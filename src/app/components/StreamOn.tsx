import React from 'react';
import { FaApple, FaSpotify, FaAmazon, FaYoutube } from 'react-icons/fa';

const StreamingLinks = () => {
  const platforms = [
    {
      name: 'Apple Music',
      url: 'https://music.apple.com/us/artist/scott-glorioso/1637244084',
      icon: <FaApple />,
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/2r4EbUh8eNVrjHb4KAS5rp?si=yvBkF0F4SuymbAPO4VSClw',
      icon: <FaSpotify />,
    },
    {
      name: 'Amazon Music',
      url: 'https://music.amazon.com/artists/B0B4B279BW/scott-glorioso',
      icon: <FaAmazon />,
    },
    {
      name: 'YouTube Music',
      url: 'https://music.youtube.com/channel/UCkqGZJSTGraAMd_mRRWKS_w',
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

export default StreamingLinks;
