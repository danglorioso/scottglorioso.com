// app/components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section style={{ textAlign: 'center', padding: '2rem', background: '#111', color: '#fff' }}>
      {/* Using Next.js <Image /> component for optimized image loading */}
      <Image
        src="/images/scott-glorioso.png"  // Image path starting from public folder
        alt="Scott Glorioso"
        width={150}                        // Set width for the image
        height={150}                       // Set height for the image
        style={{ borderRadius: '50%' }}     // Optional styling (circular image)
      />
      <h1 style={{ color: 'red' }}>Scott Glorioso</h1>
      <p>Singer, Songwriter, Sound Engineer, Producer</p>
      {/* Additional content, such as social links or bio */}
      <div>
        <p>Listen on:</p>
        <a href="https://apple.com" target="_blank" rel="noopener noreferrer">Apple Music</a> |
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">Spotify</a> |
        <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">Amazon</a>
      </div>
      <p>
        Scott has been a music lover all of his life. He loves well-produced, catchy rock and pop...
      </p>
    </section>
  );
}
