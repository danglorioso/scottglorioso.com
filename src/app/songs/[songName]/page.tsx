import { Metadata } from "next";
import SongPage from "../../components/SongPage";
import { notFound } from "next/navigation";
import allSongData from "../../data/allSongData";

// Generate metadata dynamically for each song
export async function generateMetadata(props: { params: Promise<{ songName: string }> }): Promise<Metadata> {
  const params = await props.params;
  const songName = await params.songName; // Ensure params are awaited
  const song = allSongData[songName];

  // Case for no song
  if (!song) return { title: "Song Not Found" };

  return {
    title: `${song.title} - ${song.artist}`, // Ex: "I Am Great - Scott Glorioso"
    description: `Listen to ${song.title} by ${song.artist}`,
  };
}

// Generate static paths (URLs) for all songs
export async function generateStaticParams() {
  return Object.keys(allSongData).map((songName) => ({ songName }));
}

// Main component for the song page
export default async function SongNamePage(props: { params: Promise<{ songName: string }> }) {
  // Note: using "next-async-request-api" codemod to fix async prop function in Next.js 15
  const params = await props.params;
  const songName = await params.songName;
  const song = allSongData[songName];

  if (!song) { notFound(); }

  // Render SongPage component using song's props
  return <SongPage song={song} />;
}
