import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      background: '#000',
      color: '#fff',
      fontFamily: 'FA, sans-serif', // Use the Font Awesome font family
    }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ color: 'red', fontSize: '1.5rem', margin: 0 }}>Scott Glorioso</h1>
        <p style={{ color: '#a8a8a8', margin: 0, fontSize: '0.875rem' }}>
          Singer, Songwriter, Sound Engineer, Producer
        </p>
      </div>
      <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.875rem' }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link href="/songs" style={{ color: '#fff', textDecoration: 'none' }}>All Songs</Link>
        <Link href="/album" style={{ color: '#fff', textDecoration: 'none' }}>For the Glory – Album</Link>
        <Link href="/live" style={{ color: '#fff', textDecoration: 'none' }}>Live</Link>
        <Link href="/store" style={{ color: '#fff', textDecoration: 'none' }}>Store</Link>
      </nav>
    </header>
  );
}
