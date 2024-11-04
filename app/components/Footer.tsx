// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#222', 
      color: '#aaa', 
      padding: '2rem 0', 
      textAlign: 'center', 
      fontSize: '0.9rem'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        {/* Navigation Links */}
        <Link href="/" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link href="/all-songs" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>All Songs</Link>
        <Link href="/for-the-glory-album" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>For The Glory – Album</Link>
        <Link href="/live" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Live</Link>
        <Link href="/store" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Store</Link>
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        {/* Social Media Links */}
        <a href="https://apple.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem', color: '#aaa' }}>
          {/* <img src="/svg/apple.svg" alt="Apple Music" width="20" height="20" /> */}
        </a>
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem', color: '#aaa' }}>
          {/* <img src="/svg/spotify.svg" alt="Spotify" width="20" height="20" /> */}
        </a>
        <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem', color: '#aaa' }}>
          {/* <img src="/svg/amazon.svg" alt="Amazon Music" width="20" height="20" /> */}
        </a>
      </div>

      <div>
        {/* Copyright Information */}
        <p style={{ color: '#666' }}>
          &copy; {new Date().getFullYear()} Scott Glorioso. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
