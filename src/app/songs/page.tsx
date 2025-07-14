import React from "react";
import Link from "next/link";
import Image from "next/image";
import allSongData from "../data/allSongData";

const AllSongs: React.FC = () => {
  return (
    <div className="bg-black text-white px-8 py-12 max-w-screen-xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold text-red-500 mb-8 text-center">
        All Songs
      </h1>

      <div className="space-y-8">
        {/* Use Object.entries to iterate over the songs and sort alphabetically by title */}
        {Object.entries(allSongData)

          // Sort by song title alphabetically
          .sort((a, b) => a[1].title.localeCompare(b[1].title)) 

          // Iterate over each song to display
          .map(([songKey, song]) => (
            <div
              key={songKey} // Use the song key for the key prop
              className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-neutral-900 rounded-xl shadow-lg"
            >
              {/* Link to Full Song Page via Album Cover */}
              <Link href={`/songs/${songKey}`}>
                <Image
                  src={song.coverImage}
                  alt={`${song.title} Album Cover`}
                  width={175}
                  height={175}
                  className="rounded-lg shadow-lg"
                />
              </Link>

              {/* Song Info */}
              <div className="flex-1 w-full flex flex-col items-center sm:items-start text-center sm:text-left">
              <Link href={`/songs/${songKey}`}>
                <h3 className="text-2xl font-bold">{song.title}</h3>
                <p className="text-lg text-gray-400">{song.artist}</p>
              </Link>

                {/* Audio Player */}
                <audio controls className="mt-2 w-full outline-none rounded-md">
                  <source src={song.audioFile} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>

              {/* Button for Full Song Page */}
              <Link href={`/songs/${songKey}`}>
                <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 focus:outline-none transition duration-300 ease-in-out">
                  Lyrics & Credits
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllSongs;
