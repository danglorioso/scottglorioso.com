import React from "react";
import Image from "next/image";
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
    artist,
    releaseDate,
    copyright,
    streamingLinks,
    credits,
    lyrics,
  } = song;

  return (
    <div className="bg-black text-white px-8 py-12 max-w-screen-lg mx-auto">
      
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
            className="mt-4 w-full outline-none rounded-md"
          >
            <source src={song.audioFile} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          {/* Release Date and Copyright */}
          <div className="mt-6">
            {releaseDate && (
              <p className="mt-6 text-sm text-gray-500">
                Released: {releaseDate}
              </p>
            )}
            <p className="text-sm text-gray-500">{copyright}</p>
          </div>
        </div>
      </div>

      {/* Streaming Links */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-red-500 mb-4 text-center">
          Stream On
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {streamingLinks.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 p-4 rounded-lg transition hover:scale-105"
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
        <ul className="text-gray-300 space-y-2">
          {credits.map((credit, index) => (
            <li key={index}>
              <span className="font-medium text-gray-400">{credit.role}:</span>{" "}
              {credit.name}
            </li>
          ))}
        </ul>
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
