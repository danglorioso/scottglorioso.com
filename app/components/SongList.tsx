// app/components/SongList.tsx
import React from 'react';
import SongItem from './SongItem';
import { Song } from '../types'; // Adjust the path if necessary

interface SongListProps {
  songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  return (
    <section style={{ padding: '2rem', background: '#111', color: '#fff' }}>
      <h2 style={{ color: 'red', textAlign: 'center' }}>All Songs</h2>
      <div>
        {songs.map((song) => (
          <SongItem key={song.title} song={song} />
        ))}
      </div>
    </section>
  );
};

export default SongList;
