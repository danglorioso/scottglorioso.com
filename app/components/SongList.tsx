// app/components/SongList.tsx
import SongItem from './SongItem';

const SongList = ({ songs }) => {
  return (
    <section style={{ padding: '2rem', background: '#111', color: '#fff' }}>
      <h2 style={{ color: 'red', textAlign: 'center' }}>All Songs</h2>
      <div>
        {songs.map((song) => (
          <SongItem key={song.id} song={song} />
        ))}
      </div>
    </section>
  );
};

export default SongList;
