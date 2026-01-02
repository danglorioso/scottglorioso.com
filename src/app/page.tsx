import Bio from './components/Bio';
import LatestAlbums from './components/LatestAlbums';
import AllSongs from './components/AllSongs';

export default function Home() {
  return (
    <div className="bg-black text-white max-w-screen-xl px-8 pb-12 mx-auto min-h-screen">
      <Bio />
      <LatestAlbums />
      <AllSongs />
    </div>
  );
}
