import { FaApple, FaSpotify, FaAmazon, FaYoutube } from "react-icons/fa";
import { Song } from "../types/song";

// Define the songs object
const allSongData: Record<string, Song> = {
  "i-am-great": {
    coverImage: "/album-covers/ftg.png",
    title: "I Am Great",
    album: "For The Glory",
    artist: "Scott Glorioso",
    audioFile: "/audio/i-am-great.mp3",
    releaseDate: "November 3, 2009",
    copyright: "© 2022 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/i-am-great/1657880556?i=1657880557", icon: FaApple },
      { name: "Spotify", url: "https://open.spotify.com/track/7Id3qEimEllBl7WyJoTAgN?si=29c0e452df5a4309", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0BNWH1DF4?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_wK9PXSO3lyY3sOOuB9t52T4qw&trackAsin=B0BNWJKWSH", icon: FaAmazon },
      { name: "YouTube Music", url: "https://www.youtube.com/watch?v=IY5beIqF_Po&list=OLAK5uy_mL1K_bK2bQM0zGcywDEg3_WtjRu06DfVY&index=1", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer", name: "Scott Glorioso" },
      { role: "Additional Vocals", name: "Dan Glorioso" },
    ],
    lyrics: `[Verse 1]
Caught in a rut
And I can’t get out
Wish I knew what it was all about
Trying so hard to be over my fright
Struggled so long that I’m losing sight
Above and beyond
Another sleepless night
I cannot recall what feels right
What, why me
Trying not to pout
Feeling sorry for myself makes me wanna shout

[Chorus]
I am great
Too humble puts you last
I am great
My modesty in the past
I am great
Nothing makes me shake
I am great
Hard to be humble when you’re great

[Verse 2]
Music, not me, should be in a funk
Stoke my fire
Bring out the punk
Drag myself to the top of a heap
Get out of the way
No time to weep

[Chorus]
I am great
That was my own fight song
I am great
I’ve known it for so long
I am great
Nothin’ makes me shake
I am great
A fleeting rumble, not a quake

[Bridge]
I’m coming back
Going all of the way
Got pumped up with plenty to say
Gonna make it right
Do it like I can
Build a new bridge across the quick sand

[Chorus]
I am great
Oh no, never fate
I am great
Try to be humble when you’re great

[Verse 3]
Don’t like to boast or be first in line
Sometimes you gotta make up your mind
If you’re gonna survive the stress of the day
You’ve gotta decide to be okay

[Outro]
I am great
So goes my own fight song
I am great
It cannot be wrong
I am great
Nothin’ makes me shake
I am great
Hard to be humble
I am great
Do what it takes to get along
I am great
Is my new favorite song
I am great
Nothin’ makes me shake
I am great
Hard to be humble cause I’m great`,
  },
  "stay-united": {
    coverImage: "/album-covers/su.png",
    title: "Stay United",
    album: "Stay United - Single",
    artist: "Scott Glorioso",
    audioFile: "/audio/stay-united.mp3",
    releaseDate: "January 6, 2021",
    copyright: "© 2021 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/stay-united-single/1638913902", icon: FaApple },
      { name: "Spotify", url: "https://open.spotify.com/album/1fpINs3ffUJw95r6iPqWt8", icon: FaSpotify },
      { name: "Amazon Music", url: "https://amazon.com/music/player/albums/B0B8FTJH1B?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_Bk0hbhIcwBrxTdF2i5QUvmUYK", icon: FaAmazon },
      { name: "YouTube Music", url: "https://www.youtube.com/watch?v=QzaXwwCCEb8", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer", name: "Scott Glorioso" },
    ],
    lyrics: `[Verse 1]
I’m going all around, gonna kneel right down
I’m gonna stay, not going away
I’m going downtown, gonna hear my sound
I will proclaim, sign gonna wave
I will stay all day, cement my plan along the way
Still you better pray
Can’t be all about us, the world will remind us

[Chorus]
Gonna fight it, got to stay united
All invited, still so divided

[Verse 2]
For freedom to resound, gonna wipe off my frown
Not gonna fray, not gonna fray
Lay ’em all down, disarm the clowns
Make a play, try to behave
We will survive another day
A melting pot of peace, our way
Thrive beyond today
Divisive leaders out, our country rebounding

[Chorus]
Gonna fight it, got to stay united
All invited, still so divided
Gonna fight it, got to stay united
All invited, here to decide it

[Verse 3]
The fringe will berate, open wounds of hate
Go away, stay away
History on our side, demographics can’t hide
A new day, a brand new day
A million miles wide
The gap between our minds and the sky
Fly, aim high
Be a better steward of life for all times

[Chorus]
Gonna fight it, got to stay united
All invited, still so divided
Gonna fight it, got to stay united
All invited, we’re here to decide it

[Bridge]
Looking all around at the s- going down
I’m blown away, I’m blown away
It can’t be all about us, the world will remind us

[Chorus]
Gonna fight it, got to stay united
All invited, still so divided
Gonna fight it, got to stay united
All invited, we’re here to decide it

[Outro]
Gonna fight it, got to stay united
All invited, still so divided
Gonna fight it, got to stay united
Our hearts collided, now it’s decided`,
  },
};

export default allSongData;