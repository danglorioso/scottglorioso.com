import Bio from './components/Bio';
import LatestAlbums from './components/LatestAlbums';

export default function Home() {
  return (
    <div className="bg-black text-white max-w-screen-xl px-8 mx-auto min-h-screen">
      <Bio />
      <LatestAlbums />
    </div>
  );
}
