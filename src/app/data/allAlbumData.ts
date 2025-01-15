import { Album } from '../types/album';

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
    },
};

export default allAlbumData;