// app/components/SongItem.tsx
const SongItem = ({ song }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0', background: '#222', padding: '1rem', borderRadius: '8px' }}>
        <img src={song.image} alt={song.title} style={{ borderRadius: '50%', width: '50px', marginRight: '1rem' }} />
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
  