import { IconType } from "react-icons";

export interface StreamingLink {
  name: string;
  url: string;
  icon: IconType; // Keep this as IconType
}

export interface Credit {
  role: string;
  name: string;
}

export interface Song {
  coverImage: string;
  title: string;
  album: string;
  artist: string;
  audioFile: string;
  releaseDate: string;
  copyright: string;
  streamingLinks: StreamingLink[]; // StreamingLink now expects IconType for icon
  credits: Credit[];
  lyrics: string;
}
