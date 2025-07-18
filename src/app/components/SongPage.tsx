import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Song } from "../types/song";

// Define the prop type for the SongPage component
interface SongPageProps {
  song: Song;
}

// Main component for the song page
const SongPage: React.FC<SongPageProps> = ({ song }) => {
  // Destructure song object (import props)
  const {
    coverImage,
    title,
    album,
    albumId,
    artist,
    writtenDate,
    releaseDate,
    copyright,
    streamingLinks,
    credits,
    lyrics,
  } = song;

  return (
    <div className="bg-black text-white py-8 max-w-screen-lg mx-auto px-8 xl:px-0">
      
      {/* Back to Album Button */}
      <div className="w-full">
        <Link href={`/albums/${albumId}`}>
          <div className="inline-flex items-center text-red-500 hover:text-red-400 text-lg font-semibold transition-all duration-300 ease-in-out cursor-pointer mb-4">
            <span className="mr-2 text-xl">←</span> Back to Album
          </div>
        </Link>
      </div>
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">

        {/* Album Cover */}
        <div className="w-full md:w-1/3">
          <Image
            src={coverImage}
            alt={`${title} Album Cover`}
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Song Info */}
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold text-red-500 mb-2">{title}</h1>
          <p className="text-lg text-gray-400">
            Album: <span className="font-medium text-gray-300">{album}</span>
          </p>
          <p className="text-lg text-gray-400">
            Artist: <span className="font-medium text-gray-300">{artist}</span>
          </p>

          {/* Player */}
          <audio
            controls
            className="mt-10 w-full outline-none rounded-md"
          >
            <source src={song.audioFile} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          {/* Release Date and Copyright */}
          <div className="mt-6">
            {writtenDate && (
              <p className="mt-6 text-sm text-gray-500">
                Written: {writtenDate}
              </p>
            )}
            {releaseDate && (
              <p className="mb-1 text-sm text-gray-500">
                Released: {releaseDate}
              </p>
            )}
            <p className="mt-1 text-sm text-gray-500">{copyright}</p>
          </div>
        </div>
      </div>

      {/* Streaming Links */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-red-500 mb-4 text-center">
          Stream On
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {streamingLinks.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 p-4 rounded-lg transition hover:scale-105 justify-center"
            >
              <platform.icon className="text-3xl text-red-500" />
              <span className="font-medium">{platform.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Credits */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Credits</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-300">
          {credits.map((credit, index) => (
            <div key={index} className="flex flex-col">
              <span className="font-medium text-gray-400">{credit.role}:</span>
              <span>{credit.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Lyrics */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Lyrics</h2>
        <pre className="whitespace-pre-wrap bg-neutral-900 p-4 rounded-lg shadow-md text-gray-300">
          {lyrics}
        </pre>
      </section>
    </div>
  );
};

export default SongPage;
