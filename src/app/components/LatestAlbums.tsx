import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import allAlbumData from '../data/allAlbumData';
import { Album } from '../types/album';

const LatestAlbums: React.FC = () => {
  // Fetch the latest 4 albums (dynamic)
  const albums = Object.values(allAlbumData)
    .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
    .slice(0, 4);

  return (
    <section className="bg-neutral-900 outline outline-neutral-800 p-10 mt-14 mb-14 rounded-xl shadow-lg max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold text-red-500 mb-6 text-center">Latest Albums</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {albums.map((album: Album) => (
          <Link href={`/albums/${album.id}`} key={album.id}>
            <div className="bg-neutral-800 hover:bg-neutral-700 transition-all p-6 rounded-lg shadow-lg flex flex-col items-center text-center cursor-pointer">
              <Image
                src={album.coverImage}
                alt={`${album.title} album cover`}
                width={200}
                height={200}
                className="rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-200 mb-2">{album.title}</h3>
              <p className="text-sm text-gray-400">{album.artist}</p>
              <p className="text-sm text-neutral-500">Released: {album.releaseDate}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestAlbums;
