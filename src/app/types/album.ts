export interface Album {
    id: string;
    title: string;
    artist: string;
    releaseDate: string;
    description: string;
    coverImage: string; // URL to the album cover image
    tracks: { id: string; title: string }[]; // List of track IDs and titles
  }
  