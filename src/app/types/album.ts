import { IconType } from 'react-icons';

// Define the interface for each streaming service, its link, and icon
export interface StreamingLink {
  name: string;
  url: string;
  icon: IconType; // Use icons from react-icon library (imported at top)
}

export interface Album {
    id: string;
    title: string;
    artist: string;
    releaseDate: string;
    description: string;
    coverImage: string; // URL to the album cover image
    tracks: { id: string; title: string }[]; // List of track IDs and titles
    streamingLinks: StreamingLink[]; // Defined above
}
