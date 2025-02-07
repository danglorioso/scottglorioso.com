import { Album } from '../types/album';
import { FaApple, FaSpotify, FaItunes, FaAmazon, FaYoutube } from "react-icons/fa";

// Define the instance of the Album type object that contains the data for each album
const allAlbumData: Record<string, Album> = {
    "its-all-about-me": {
        id: 'its-all-about-me',
        title: 'It\'s All About Me - Single',
        artist: 'Scott Glorioso',
        releaseDate: 'January 17, 2020',
        description: '',
        coverImage: '/album-covers/iaam.png',
        tracks: [
          { id: "its-all-about-me", title: 'It\'s All About Me' },
        ],
          streamingLinks: [
          { name: "Apple Music", url: "https://music.apple.com/us/album/its-all-about-me/1637244261?i=1637244262", icon: FaApple },
          { name: "Spotify", url: "https://open.spotify.com/album/0DyNzLXaA6oUZCtbxnzRnj?si=XAJJ4LjfRxSJbJGJDK2JzA", icon: FaSpotify },
          { name: "iTunes", url: "https://music.apple.com/us/album/its-all-about-me-single/1637244261", icon: FaItunes },
          { name: "Amazon Music", url: "https://amazon.com/music/player/albums/B0B7B9N5QD?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_ljANVPV8SFV8IOf0OrytQbAeZ", icon: FaAmazon },
          { name: "YouTube Music", url: "https://www.youtube.com/watch?v=P_sV5Ss2ZM0", icon: FaYoutube },
          ],
      },
      "stay-united": {
        id: 'stay-united',
        title: 'Stay United - Single',
        artist: 'Scott Glorioso',
        releaseDate: 'January 6, 2021',
        description: '',
        coverImage: '/album-covers/su.png',
        tracks: [
          { id: "stay-united", title: 'Stay United' },
        ],
          streamingLinks: [
          { name: "Apple Music", url: "https://music.apple.com/us/album/stay-united-single/1638913902", icon: FaApple },
          { name: "Spotify", url: "https://open.spotify.com/album/1fpINs3ffUJw95r6iPqWt8", icon: FaSpotify },
          { name: "iTunes", url: "https://music.apple.com/us/album/stay-united-single/1638913902", icon: FaItunes },
          { name: "Amazon Music", url: "https://amazon.com/music/player/albums/B0B8FTJH1B?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_Bk0hbhIcwBrxTdF2i5QUvmUYK", icon: FaAmazon },
          { name: "YouTube Music", url: "https://www.youtube.com/watch?v=QzaXwwCCEb8", icon: FaYoutube },
          ],
      },
    "for-the-glory": {
      id: 'for-the-glory',
      title: 'For the Glory',
      artist: 'Scott Glorioso',
      releaseDate: 'December 1, 2022',
      description: '',
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
      releaseDate: 'January 16, 2025',
      description: '',
      coverImage: '/album-covers/mkos.png',
      tracks: [
        { id: "music-in-me", title: 'Music in Me' },
        { id: "all-i-see", title: 'All I See' },
        { id: "my-kind-of-success", title: 'My Kind of Success' },
        { id: "sunshine-rising", title: 'Sunshine Rising (Octavate)' },
        { id: "it-takes-a-lot", title: 'It Takes a Lot' },
        { id: "out-on-the-mountain", title: 'Out on the Mountain' },
        { id: "once-in-a-lifetime", title: 'Once in a Lifetime' },
        { id: "no-fun-without-you", title: 'No Fun Without You' },
        { id: "anothers-way", title: 'Another\'s Way' },
        { id: "queen-requiem", title: 'Queen Requiem' },
      ],
      streamingLinks: [
        { name: "Apple Music", url: "https://music.apple.com/us/album/my-kind-of-success/1794922606", icon: FaApple },
        { name: "Spotify", url: "", icon: FaSpotify },
        { name: "iTunes", url: "https://music.apple.com/us/album/my-kind-of-success/1794922606", icon: FaItunes },
        { name: "Amazon Music", url: "https://music.amazon.com/albums/B0DWDYBQ2P?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_aCOMDUeyDzeMygxzrS1sOejRT", icon: FaAmazon },
        { name: "YouTube Music", url: "https://youtube.com/playlist?list=OLAK5uy_ks9d6kIoJe8hU3rgLfrlma9rrYWa3KHic&si=VeWYxfnqktfXwsOU", icon: FaYoutube },
        ],
    },
};

export default allAlbumData;