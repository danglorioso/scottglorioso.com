import React from "react";
import Image from "next/image";
import { Album } from "../types/album";
import Link from "next/link";

// Define the prop type for the AlbumPage component
interface AlbumPageProps {
  album: Album;
}

const AlbumPage: React.FC<AlbumPageProps> = ({ album }) => {
    // Destrucutre the album object (import props)
    
  return (
    <div className="bg-black text-white px-8 py-12 max-w-screen-xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        
        {/* Album Cover */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <Image
          src={album.coverImage}
          alt={`${album.title} album cover`}
          width={400}
          height={400}
          className="w-full rounded-lg shadow-lg"
          />

          {/* Streaming Links */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {album.streamingLinks.map((link) => (
                <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition p-4 rounded-lg hover:scale-105"
                >
                <link.icon className="text-3xl text-red-500" />
                <span className="text-gray-300 font-medium">{link.name}</span>
                </a>
            ))}
          </div>
        </div>

        {/* Album Details */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-red-500 mb-3">{album.title}</h1>
          <h2 className="text-2xl font-semibold mb-6">{album.artist}</h2>
          <p className="text-lg text-gray-400 mb-8">{album.description}</p>
          <p className="text-sm text-neutral-500 mb-4">Released: {album.releaseDate}</p>

          {/* Track List */}
          <div>
            <h3 className="text-3xl font-semibold text-red-500 mb-4">Track List</h3>
            <ul className="space-y-4">
              {album.tracks.map((track, index) => (
                <li
                  key={track.id}
                  className="flex justify-between items-center bg-neutral-800 p-4 rounded-lg hover:bg-neutral-700 transition"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-neutral-500">{index + 1}.</span>
                    <span className="text-lg text-gray-300">{track.title}</span>
                  </div>
                  <Link
                    href={`/songs/${track.id}`}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    View Song
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
