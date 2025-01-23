import { IconType } from "react-icons";

// Purpose: This file defines the overall interface for the Song object. Import
// this file in any component to access the interface that stores all data 
// relevant to a repsective song. 

// Define the interface for each streaming service, its link, and icon
export interface StreamingLink {
  name: string;
  url: string;
  icon: IconType; // Use icons from react-icon library (imported at top)
}

// Define the array of credits 
export interface Credit {
  role: string;
  name: string;
}

// Define the main Song interface
export interface Song {
  coverImage: string;
  title: string;
  album: string;
  artist: string;
  audioFile: string;
  writtenDate: string;
  releaseDate: string;
  copyright: string;
  streamingLinks: StreamingLink[]; // Defined above
  credits: Credit[]; // Defined above
  lyrics: string;
}
