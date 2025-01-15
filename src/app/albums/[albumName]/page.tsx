import { Metadata } from "next";
import AlbumPage from '../../components/AlbumPage';
import { notFound } from "next/navigation";
import allAlbumData from "../../data/allAlbumData"; 

export async function generateMetadata(props: { params: Promise<{ albumName: string }> }): Promise<Metadata> {
  const params = await props.params;
  const albumName = await params.albumName;
  const album = allAlbumData[albumName];

  // Case for no album
  if (!album) return { title: 'Album Not Found' };

  return {
    title: `${album.title} - ${album.artist}`,
    description: `Listen to ${album.title} by ${album.artist}`,
  };
}

// Generate static paths (URLs) for all albums
export async function generateStaticParams() {
  return Object.keys(allAlbumData).map((albumName) => ({ albumName }));
}

export default async function AlbumNamePage(props: { params: Promise<{ albumName: string }> }) {
  const params = await props.params;
  const albumName = await params.albumName;
  const album = allAlbumData[albumName];

  if (!album) { notFound(); }

  return <AlbumPage album={album} />;
}
