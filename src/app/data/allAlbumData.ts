import { Album } from '../types/album';
import { FaApple, FaSpotify, FaItunes, FaAmazon, FaYoutube } from "react-icons/fa";

// Define the instance of the Album type object that contains the data for each album
const allAlbumData: Record<string, Album> = {
    "for-the-glory": {
      id: 'for-the-glory',
      title: 'For the Glory',
      artist: 'Scott Glorioso',
      releaseDate: 'December 1, 2022',
      description: 'A collection of inspiring tracks.',
      coverImage: '/album-covers/ftg.png',
      tracks: [
        { id: "i-am-great", title: 'I Am Great' },
        { id: "stay-united", title: 'Stay United' },
        { id: "up-side", title: 'Up Side' },
        { id: "its-all-about-me", title: 'It’s All About Me' },
        { id: "you-do-it-right", title: 'You Do It Right' },
        { id: "free-spirit-of-youth", title: 'Free Spirit of Youth' },
        { id: "cant-wait", title: 'Can’t Wait' },
        { id: "baby-on-the-loose", title: 'Baby on the Loose' },
        { id: "someone-within", title: 'Someone Within' },
        { id: "got-what-i-deserved", title: 'Got What I Deserved' },
        { id: "thanks-for-fools", title: 'Thanks for Fools' },
      ],
        streamingLinks: [
        { name: "Apple Music", url: "https://music.apple.com/us/album/for-the-glory/1657880556", icon: FaApple },
        { name: "Spotify", url: "https://open.spotify.com/album/0HHVF1ncC8oKOgtxYm6yLi?si=0B4qqB4rTFyu9OMS2TJJgQ", icon: FaSpotify },
        { name: "iTunes", url: "https://music.apple.com/us/album/for-the-glory/1657880556", icon: FaItunes },
        { name: "Amazon Music", url: "https://music.amazon.com/albums/B0BNWH1DF4", icon: FaAmazon },
        { name: "YouTube Music", url: "https://www.youtube.com/playlist?list=OLAK5uy_mL1K_bK2bQM0zGcywDEg3_WtjRu06DfVY", icon: FaYoutube },
        ],
    },
    "my-kind-of-success": {
      id: 'my-kind-of-success',
      title: 'My Kind of Success',
      artist: 'Scott Glorioso',
      releaseDate: 'January 18, 2025',
      description: 'An album celebrating personal triumphs.',
      coverImage: '/album-covers/mkos.png',
      tracks: [
        { id: "music-in-me", title: 'Music in Me' },
        { id: "all-i-see", title: 'All I See' },
        { id: "my-kind-of-success", title: 'My Kind of Success' },
        { id: "sunshine-shining", title: 'Sunshine Rising (Octavate)' },
        { id: "it-takes-a-lot", title: 'It Takes a Lot' },
        { id: "out-on-the-mountain", title: 'Out on the Mountain' },
        { id: "once-in-a-lifetime", title: 'Once in a Lifetime' },
        { id: "no-fun-without-you", title: 'No Fun Without You' },
        { id: "anothers-way", title: 'Another\'s Way' },
        { id: "queen-requiem", title: 'Queen Requiem' },
      ],
      streamingLinks: [
        { name: "Apple Music", url: "", icon: FaApple },
        { name: "Spotify", url: "", icon: FaSpotify },
        { name: "iTunes", url: "", icon: FaItunes },
        { name: "Amazon Music", url: "", icon: FaAmazon },
        { name: "YouTube Music", url: "", icon: FaYoutube },
        ],
    },
};

export default allAlbumData;