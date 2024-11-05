// app/components/SongItem.tsx
import React from 'react';
import Image from 'next/image';
import { Song } from '../types'; // Adjust the path if needed

interface SongItemProps {
  song: Song;
}

const SongItem: React.FC<SongItemProps> = ({ song }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0', background: '#222', padding: '1rem', borderRadius: '8px' }}>
      <Image
        src={song.image}
        alt={song.title}
        width={50}
        height={50}
        style={{ borderRadius: '50%', marginRight: '1rem' }}
      />
      <div>
        <h3>{song.title}</h3>
        <audio controls>
          <source src={song.audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button style={{ color: 'red' }}>Lyrics & Credits</button>
      </div>
    </div>
  );
};

export default SongItem;
