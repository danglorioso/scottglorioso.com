import { Song } from "../types/song";
import { FaApple, FaSpotify, FaAmazon, FaYoutube } from "react-icons/fa";

// Define the instance of the object that stores all song data, which has 
// strings of song titles as keys and Song objects as values
const allSongData: Record<string, Song> = {
  "its-all-about-me": {
    coverImage: "/album-covers/iaam.png",
    title: "It's All About Me",
    album: "It's All About Me - Single",
    albumId: "its-all-about-me",
    artist: "Scott Glorioso",
    audioFile: "/audio/iaam.mp3",
    writtenDate: "",
    releaseDate: "January 17, 2020",
    copyright: "© 2020 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/its-all-about-me/1637244261?i=1637244262", icon: FaApple },
      { name: "Spotify", url: "https://open.spotify.com/album/0DyNzLXaA6oUZCtbxnzRnj?si=XAJJ4LjfRxSJbJGJDK2JzA", icon: FaSpotify },
      { name: "Amazon Music", url: "https://www.amazon.com/music/player/albums/B0B7B9N5QD?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&trackAsin=B0B7BJSWFX&ref=sr_1_4&keywords=it%27s+all+about+me+scott+glorioso&crid=2VCHCR04E8BZC&sprefix=it%27s+all+about+me+scott+glorioso%2Caps%2C132&qid=1659159046&sr=8-4", icon: FaAmazon },
      { name: "YouTube Music", url: "https://www.youtube.com/watch?v=P_sV5Ss2ZM0", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
      { role: "Bass", name: "Josh Prost" },
      { role: "Drums", name: "Tom DuPree III" },
      { role: "Additional Vocals", name: "Tom Glorioso" },
    ],
    lyrics: `[Verse 1]
There’s empathy in all of us
Or so I thought
Sympathy and common sense
And decency are fraught
Where has it gone?
Why has it gone?
Can’t be another explanation
It’s demographic desperation

[Chorus]
It’s all about me
It’s not about need
It’s all about me
A brainwashed extreme
It is greed

[Verse 2]
I can’t explain it
What’s right on the new right
It makes no sense as humans to think like a parasite
What’s up with that?
How did we get here?
No other justification
Democratic annihilation

[Chorus]
It’s all about me
It’s not about need
It’s all about me
A brainwashed extreme
It’s pure greed

[Bridge]
Social media’s evil
Though it started out as fun
Pandora’s box wide open
Too many guns to be undone, dumb, we’re all-done

[Verse 3]
It’s not hard to be selfish, once in a while
But nearly impossible to choose every mile
It blows my mind how many are duped to stoop so low, uncouth
Facts are facts believe them, no clue what’s really true

[Chorus]
It’s all about me
It’s not about “We, The People”
It’s all about me
Feed corporatocracy
Capitalist greed

[Outro]
It’s all about me
It’s not about need
It’s all about me
A brainwashed extreme
Oligarch greed
Impeachment`,
  },
  "stay-united": {
    coverImage: "/album-covers/su.png",
    title: "Stay United",
    album: "Stay United - Single",
    albumId: "stay-united",
    artist: "Scott Glorioso",
    audioFile: "/audio/stay-united.mp3",
    writtenDate: "",
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
  "i-am-great": {
    coverImage: "/album-covers/ftg.png",
    title: "I Am Great",
    album: "For The Glory",
    albumId: "for-the-glory",
    artist: "Scott Glorioso",
    audioFile: "/audio/i-am-great.mp3",
    writtenDate: "November 3, 2009",
    releaseDate: "December 1, 2022",
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
  "up-side": {
    coverImage: "/album-covers/ftg.png",
    title: "Up Side",
    album: "For The Glory",
    albumId: "for-the-glory",
    artist: "Scott Glorioso",
    audioFile: "/audio/up-side.mp3",
    writtenDate: "",
    releaseDate: "December 1, 2022",
    copyright: "© 2022 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/up-side/1657880556?i=1657880559", icon: FaApple },
      { name: "Spotify", url: "https://open.spotify.com/track/76AL3bJaMOcIJIywq2OeAh?si=0500c891ec844d55", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0BNWH1DF4?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_YlJFE5ogWHmEKH5VvPoVdd64G&trackAsin=B0BNWGDGGC", icon: FaAmazon },
      { name: "YouTube Music", url: "https://youtu.be/P8HUtqdx-rI", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: `[Verse 1]
Living it right
Never lose sight
Dealing all day
Gonna find a way
It’s going okay
There is no shame
The same old mistake
Gotta take the blame

[Chorus]
Gotta grab the up side and don’t let go
Stay on top while letting it show
Grab the up side and don’t let go
Keep the Linda and ditch Yoko

[Verse 2]
For sure life is hard
Play your only card
Simple not to do
A complex excuse
One day at a time
All I can take
Sometimes a chore
Just to be awake

[Chorus]
Gotta grab the up side and don’t let go
Don’t let the down side get below
Grab the up side and don’t let go
The desire says “Yes”
Don’t take “No”

[Verse 3]
Wandering around
Naked in this town
Future plans hard to make
Could be a big mistake
Hollering back
Trying to make the sack
Staying on the attack
Won’t bring it back

[Chorus]
Keep the up side and don’t let go
Stay on top while letting it show
Grab the up side and don’t let go
Keep the Linda and ditch Yoko

[Outro]
Don’t forget about the up side
Never say goodbye to up side
Live for the up side
Only the up side`,
  },
  "you-do-it-right": {
    coverImage: "/album-covers/ftg.png",
    title: "You Do It Right",
    album: "For The Glory",
    albumId: "for-the-glory",
    artist: "Scott Glorioso",
    audioFile: "/audio/ydir.mp3",
    writtenDate: "2011",
    releaseDate: "December 1, 2022",
    copyright: "© 2022 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/up-side/1657880556?i=1657880559", icon: FaApple },
      { name: "Spotify", url: "https://open.spotify.com/track/76AL3bJaMOcIJIywq2OeAh?si=0500c891ec844d55", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0BNWH1DF4?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_YlJFE5ogWHmEKH5VvPoVdd64G&trackAsin=B0BNWGDGGC", icon: FaAmazon },
      { name: "YouTube Music", url: "https://youtu.be/P8HUtqdx-rI", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
      { role: "Guitar Solo", name: "Don Woodward" },
      { role: "Additional Vocals", name: "Shawn Valle" },
    ],
    lyrics: `[Verse 1]
Makin’ it for you is what I do
Gonna stuck around to see it through
Coming back to you in all I do
Keepin’ you for life
I’m no fool
You are the one and I’m with you
Days go by but it’s always new

[Bridge]
You are my wonderful

[Verse 2]
Your passion for the best is your only rule
Wanna look right
Not the fool
You are the one with the Krazy glue
Keep it all together for the family, it’s true
There’s no way to thank you enough
Life without you would be too tough

[Bridge]
You are my wonderful

[Chorus]
You do it right
Right where I belong
You’ve got it right
Known it all along
You do it right
Lovin’ so strong
You’ve got it right
And this is your song

[Verse 3]
How do you do it
It’s also so
Beauty all around no matter where you go
What your secret
Come on now
Put it in a bottle and show ’em how

[Bridge]
You are my wonderful

[Chorus]
You do it right
Right where I belong
You’ve got it right
Known it all along
You do it right
Lovin’ so strong
You got it right
And this is your song
You do it right
Right where I belong
You’ve got it right
Known it all along
You do it right
Lovin’ so strong
You got it right
And this is your song

[Break]
Even to the likes of you
Life can often be too cruel
Gotta make you understand
I’m always there to hold your hand

[Chorus]
You do it right
Right where I belong
You’ve got it right
Known it all along
You do it right
Lovin’ so strong
You’ve got it right
And this is your song

And you do it right
Right where I belong
You’ve got it right
Known it all along
You do it right
Lovin’ so strong
You’ve got it right
And this is your song`,
  },
  "free-spirit-of-youth": {
    coverImage: "/album-covers/ftg.png",
    title: "Free Spirit of Youth",
    album: "For The Glory",
    albumId: "for-the-glory",
    artist: "Scott Glorioso",
    audioFile: "/audio/fsoy.mp3",
    writtenDate: "July 18, 2007",
    releaseDate: "December 1, 2022",
    copyright: "© 2022 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/free-spirit-of-youth/1657880556?i=1657880562", icon: FaApple },
      { name: "Spotify", url: "https://open.spotify.com/track/5KqzA76jXTTR4TO6odYF2E?si=ea68fb77a65f4ff3", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0BNWH1DF4?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_8gUVasL4WtapHElvSH6fMCLqQ&trackAsin=B0BNWH6NWH", icon: FaAmazon },
      { name: "YouTube Music", url: "https://youtu.be/P8HUtqdx-rI", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: `[Verse 1]
Been doing all the family stuff
Kids in tow
Family, family
It’s great, don’t you know
I wouldn’t trade any of it away
Can’t wait for each new day
Come on, let’s go we’re gonna be late seems to be the way

[Bridge]
Part of me that misses how it all used to be
Freedom and activities
The show just for me

[Chorus]
Free spirit of youth
Care-free days
Sometimes makes you crazy
Thinking ’bout yesterday

[Verse 2]
Seeing it all again through new eyes
Love to see the growth
Revelations, wonder
Excitement of the youth
Where did it all go for me
My curiosity
Sometimes you know I’ve just got to rock for my sanity

[Bridge]
Many days I thirst for
How our lives used to be
Simple-times, recreation
Little to no responsibilities

[Chorus]
Free spirit of youth
Care-free days
Sometimes makes you crazy
Thinking ’bout yesterday

Seize the spirit of youth
Maximize your life
If you feel it fleeting
Get back on track to rock the night

Some times makes you crazy
Doing all the family stuff
Free spirit of youth
Free spirit of you

[Chorus]
Free spirit of youth
Care-free days
Sometimes makes you crazy
Thinking ’bout yesterday

[Outro]
Bring-on the spirit of youth
Everything that’s new
Goodbye to being jaded
Do it ’cause you’ve wanted to

Free spirit of youth
Care-free days
Grab some new inspiration
Forget about yesterday

Live on the spirit of youth
Care-free nights
Drive through spur of the moment
Rock it like it’s your last rite`,
  },
  "cant-wait": {
    coverImage: "/album-covers/ftg.png",
    title: "Can't Wait",
    album: "For The Glory",
    albumId: "for-the-glory",
    artist: "Scott Glorioso",
    audioFile: "/audio/cant-wait.mp3",
    writtenDate: "August 29, 2003",
    releaseDate: "December 1, 2022",
    copyright: "© 2022 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/cant-wait/1657880556?i=1657880563", icon: FaApple },
      { name: "Spotify", url: "https://open.spotify.com/track/0xOohFzx9fk4SOUqjUPn7N?si=393cc5cb15534fcd", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0BNWH1DF4?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_RDNZJQFb3VMHpmOOeNhK4AWWc&trackAsin=B0BNWHFZ2T", icon: FaAmazon },
      { name: "YouTube Music", url: "https://youtu.be/iVttp1iDX64?si=Mhg4UOqKfbqvCqCX", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: `[Verse 1]
Gotta get things done
Cause our world’s about to change
Gotta get it all done
There won’t be time later
Gotta do it right now
Cause it could be any day
Our world is gonna change in a great big way

[Verse 2]
Anxiety and fear is almost overwhelming
Our bond and resolve is strong and clear
No turning back
The commitment is here
Gonna start a new role in life this year

[Chorus]
I can’t wait, you can’t wait
To show the world to him
I can’t wait, you can’t wait
To be the one for him
I can’t wait, you can’t wait
For the joy only a parent can feel
I can’t wait, you can’t wait
So amazing it can’t be real

[Verse 3]
This is something we both always wanted
We hoped some day it would happen
The time is right here
In our faces
Waiting for the start of a new generation

[Chorus]
I can’t wait, you can’t wait
To show the world to him
I can’t wait, you can’t wait
To be the one for him
I can’t wait, we can’t wait
For the joy only a parent can feel
I can’t wait, you can’t wait
So amazing it can’t be real

[Bridge]
Let’s get on with the program
The introduction is over due
Bring on the main attraction
Let’s hear from you

[Verse 4]
Gotta get things done
Our world’s already changed
Got to get it all done
There isn’t time later
Got to do it right now
Though it should be every day
Our world is full of change in a wonderful way

[Chorus]
I can’t wait, we can’t wait
To show our world to him
I can’t wait, you can’t wait
To be the one for him
I can’t wait, we can’t wait
The pride a parent can feel
I can’t wait, you can’t wait

[Outro]
I can’t wait, we can’t wait
To show our love for him
I can’t wait, we can’t wait
To be the world to him
I can’t wait, we can’t wait
For the joy only a parent can feel
I can’t wait, you can’t wait
So amazing it can’t be real
So amazing it can’t be real`,
  },
  "baby-on-the-loose": {
    coverImage: "/album-covers/ftg.png",
    title: "Baby on the Loose",
    album: "For The Glory",
    albumId: "for-the-glory",
    artist: "Scott Glorioso",
    audioFile: "/audio/bool.mp3",
    writtenDate: "February 2004",
    releaseDate: "December 1, 2022",
    copyright: "© 2022 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/baby-on-the-loose/1657880556?i=1657880564", icon: FaApple },
      { name: "Spotify", url: "https://open.spotify.com/track/3rylzsfIX0aqOxVfBb40B9?si=452b76e591184de5", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0BNWH1DF4?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_FcWuEZheLtzQXQL1ebx1HaK1m&trackAsin=B0BNWHFYZY", icon: FaAmazon },
      { name: "YouTube Music", url: "https://www.youtube.com/watch?v=mRCFYC_frCs&list=OLAK5uy_mL1K_bK2bQM0zGcywDEg3_WtjRu06DfVY&index=8", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: `[Verse 1]
When he was small
Hardly did anything at all
When he was small
He was no trouble at all
Proud of him so much
Just for looking at you
We loved him so much
Everyone was touched

[Verse 2]
Like his favorite ball
He rolled over to the wall
With a little more gall
He turned it into a crawl
No longer sitting there
Proud of his new motion
Made us feel special
Imagine the commotion

[Chorus]
Baby on the loose
Baby on the loose
Hey, it’s you
Baby on the loose
Baby on the loose
Now it’s you
Got no evil plan
He’s just our little man

[Verse 3]
He grew a little more
Held to the coffee table
He got bored with the floor
He stood up to be able
To see more of his world
From two foot three
He put us in a whirl
Discovering what he could see

[Chorus]
Baby on the loose
Baby on the loose
Hey, it’s you
Baby on the loose
Baby on the loose
Now it’s you
Surrounded by his toys
He’s just our little boy

[Bridge]
The wondering is over
What could be has come true
We want to be so good for you
As good, good suits you

[Verse 4]
Then he’s not so small
Ventured forward left then right
He tried with all his might
He could walk to his delight
Two steps turned to more
Soon he’s dancing ‘cross the floor
He forgot how to walk
Now he just runs from door to door

[Chorus]
Baby on the loose
Baby on the loose
Hey, it’s you
Baby on the loose
Baby on the loose
Now it’s you
Surrounded by his toys
He’s just our little boy

Baby on the loose
Baby on the loose
It is you
Baby on the loose
Baby on the loose
Now it’s you
Got no evil plan
He’s just our little man

Baby on the loose
Baby on the loose
Hey, it’s you`,
  },
  "someone-within": {
    coverImage: "/album-covers/ftg.png",
    title: "Someone Within",
    album: "For The Glory",
    albumId: "for-the-glory",
    artist: "Scott Glorioso",
    audioFile: "/audio/someone-within.mp3",
    writtenDate: "June 8, 1981",
    releaseDate: "December 1, 2022",
    copyright: "© 2022 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/someone-within/1657880556?i=1657880565", icon: FaApple },
      { name: "Spotify", url: "https://open.spotify.com/track/2fyDOc24FKl2yTIcTfK5a7?si=1440498f9c0442c3", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0BNWH1DF4?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_mJS7uSnzHcmT1yYjyYxOwfSSb&trackAsin=B0BNWK2XXG", icon: FaAmazon },
      { name: "YouTube Music", url: "https://www.youtube.com/watch?v=Zdji0yQBlU0&list=OLAK5uy_mL1K_bK2bQM0zGcywDEg3_WtjRu06DfVY&index=9", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: `[Verse 1]
When I first met you
You appeared to be okay
Then as time went on
I seemed to find out more
You were like nothing else I had ever seen

[Chorus]
You went through problems you couldn’t face
You couldn’t handle things around this place
And so was released
Someone within
Someone within
Someone within

[Verse 2]
Sometimes you act alright
Other times you have a split personality
Your behavior is strange and I must say
You can’t get along this way

[Chorus]
You went through problems you couldn’t face
You couldn’t handle things around this place
And so was released
Someone within
Someone within
Someone within

[Verse 3]
There is a weakness with your ego
You can’t find anything you really like to do
You cover up your dying reign
You try to ease the pain and you go solo

[Chorus]
You went through problems you couldn’t face
You couldn’t handle things around this place
And so was released
Someone within
Someone within
Someone within

You went through problems you couldn’t face
You couldn’t handle things around this place
And so was released
Someone within (Nobody likes it)
Someone within (It’s not very clear)
Someone within (You gotta get beyond it)`,
  },
  "got-what-i-deserved": {
    coverImage: "/album-covers/ftg.png",
    title: "Got What I Deserved",
    album: "For The Glory",
    albumId: "for-the-glory",
    artist: "Scott Glorioso",
    audioFile: "/audio/gwid.mp3",
    writtenDate: "2000",
    releaseDate: "December 1, 2022",
    copyright: "© 2022 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/got-what-i-deserved/1657880556?i=1657880746", icon: FaApple },
      { name: "Spotify", url: "https://open.spotify.com/track/5wfYh3HcQcGBkeFMTGL1qO?si=114e95ef62754722", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0BNWH1DF4?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_fYPtc0SK5CGyJD42zZRuTO3xY&trackAsin=B0BNWH932L", icon: FaAmazon },
      { name: "YouTube Music", url: "https://www.youtube.com/watch?v=hO5Nr65Gb9U&list=OLAK5uy_mL1K_bK2bQM0zGcywDEg3_WtjRu06DfVY&index=10", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: `[Verse 1]
You know I’d do it all again if I had to
I’d do it all again just to get you
Into my life for the duration
You know I’d do it all again for your passion

[Bridge]
No bridge too long
No cost too high
No moral bind
No way denied

[Chorus]
Cause I got what I deserved
You know it’s you
Everyone observed
It should be you
You with me, permanently
Got what I deserved
An angel in you

[Verse 2]
When you talk about paying your dues
It’s something each of us had to do
We could have settled for mediocrity
But the scent of dynamic chemistry

[Bridge]
Drove us to explore
What we thought could be more (so much more)
Goodbye repressive lives (Goodbye)
Not to be denied

[Chorus]
Cause I got what I deserved
You know it’s true
Everyone observed
It should be you
You with me, permanently
Got what I deserved
An angel in you

[Verse 3]
It’s hard not to gloat when you’re a winner
Losers label winners as sinners
And I’d do it all again if I had to
I’d do it all again just to have you

[Bridge]
No mountain too high
No loss too permanent
No perception too curious
No way denied

[Chorus]
Cause I got what I deserved
You know it’s you
Everyone observed
It should be you
You with me, permanently
Got what I deserved
An angel in you

Got what I deserved
You know it’s true
Everyone observed
It should be you
You with me, permanently
Got what I deserved
An angel in you

[Outro]
An angel in you
An angel in you
An angel in you
Got what I deserved
An angel in you
You’re what I deserved
Got what I deserved
You’re what I deserved
Angel in you
Got what I deserved
Angel in you
Got what I deserved`,
  },
  "thanks-for-fools": {
    coverImage: "/album-covers/ftg.png",
    title: "Thanks for Fools",
    album: "For The Glory",
    albumId: "for-the-glory",
    artist: "Scott Glorioso",
    audioFile: "/audio/tff.mp3",
    writtenDate: "",
    releaseDate: "December 1, 2022",
    copyright: "© 2022 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/thanks-for-fools/1657880556?i=1657880747", icon: FaApple },
      { name: "Spotify", url: "https://open.spotify.com/track/3U7JVd02NRMm7HxBqDvGys?si=bf3f7525309648c9", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0BNWH1DF4?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_mgz0RwmncP85JQTJoRCCth35c&trackAsin=B0BNWH1X5B", icon: FaAmazon },
      { name: "YouTube Music", url: "https://www.youtube.com/watch?v=72_5psIZDHw&list=OLAK5uy_mL1K_bK2bQM0zGcywDEg3_WtjRu06DfVY&index=11", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Performer", name: "Scott Glorioso" },
      { role: "Music", name: "Scott Glorioso" },
      { role: "Lyrics", name: "Jarl Salmela" }
    ],
    lyrics: `[Verse 1]
Come along for good times today
What’s in store’s not far away
We dream of joy, we think of hope
We’re gonna have fun getting the joke
Come along we’ll show you life
Just be yourself and don’t you lie
For we’re all knowing and know the limit
Give us your mind for just one minute

[Chorus]
You can’t outlast your childish pranks
You’re of age and must be through
For we have thanks for fools
But not for fools like you

[Verse 2]
Stay out late if you dare
We’re all fed up and we don’t care
You’ve changed and must be alone
Cause for the moment your mind seems blown

[Chorus]
You can’t outlast your childish pranks
You’re of age and must be through
For we have thanks for fools
But not for fools like you

[Verse 3]
At last you’re gone, erased from society
Your gags went too far for your mentality
Just for kicks is what you said
You played too much and let it go to your head

[Chorus]
You can’t outlast your childish pranks
You’re of age and must be through
For we have thanks for fools
But not for fools like you

You can’t outlast your childish pranks
You’re of age and must be through
For we have thanks for fools
But not for fools like you`,
  },
  "music-in-me": {
    coverImage: "/album-covers/mkos.png",
    title: "Music in Me",
    album: "My Kind of Success",
    albumId: "my-kind-of-success",
    artist: "Scott Glorioso",
    audioFile: "/audio/music-in-me.mp3",
    writtenDate: "September 26, 2002",
    releaseDate: "January 16, 2025",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/music-in-me/1794922606?i=1794922607", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0DWDYBQ2P?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_B5CWJMrNyRkQ00burCk7iCUHt&trackAsin=B0DWDXWK2B", icon: FaAmazon },
      { name: "YouTube Music", url: "https://youtu.be/D-DDuIRn_YQ?si=ADxhPGjD5SL8-E4o", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: `[Verse 1]
Been running my life in overdrive
Cruising right down the center line
Something’s been gone that once was there
Having too much fun, I haven’t cared

[Bridge]
Oh, how it goes
By without even knowing
No choice of key or tempo
It just goes

[Verse 2]
Distractions all around 
It don’t come easy
Writers block makes me queasy
Nothing I can do but just sit down
Pick up my guitar and go to town

[Bridge]
Oh, how it flows
Every chord is my own
From one row to the coda
It just flows

[Chorus]
I’ve still got some music in me	
It’s right here, plain to see
I’ve still got the music in me

[Break]
Once I start to feel it in my bones
There’s no stopping this mighty tone
Then it starts dancing around my brain
There’s no telling what I might say

[Verse 3]
Don’t mind cliché, that’s ok
Got to get it out anyway
All I’ve been doing is thinking it over
Got to get on with the deal closer

[Bridge]
Oh, how it goes
By without even knowing
No choice of key or tempo
It just goes

[Chorus]
I’ve still got some music in me	
It’s right here, plain to see
I’ve still got the music in me

[Verse 4]
Got to be clever, quick and catchy
Can’t be too explicit, better sketchy
All the best hooks, keeping it simple
Not too cute, a new wrinkle 

[Bridge]
As far as pop goes
It's got to rock 'n' roll
It could be fast or slow
Strokes my ego

[Chorus]
I’ve still got some music in me	
It’s right here, plain to see
I’ve still got the music in me
I’ve still got some music in me	
It's right here, can't you see
I’ve still got the music in me

[Outro]
Running my life in overdrive
Cruising right down the center line
I've found some music in me
Could've been anywhere
It came back, that's all I care
I found some music in me
I've still got some music in me
It's right here, can't you see
I've still got the music in me`,
  },
  "all-i-see": {
    coverImage: "/album-covers/mkos.png",
    title: "All I See",
    album: "My Kind of Success",
    albumId: "my-kind-of-success",
    artist: "Scott Glorioso",
    audioFile: "/audio/all-i-see.mp3",
    writtenDate: "February 12, 1996",
    releaseDate: "January 16, 2025",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/all-i-see/1794922606?i=1794922608", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0DWDYBQ2P?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_FQgySqdrraviJB4WK9Qxy9cUX&trackAsin=B0DWDDQ9W2", icon: FaAmazon },
      { name: "YouTube Music", url: "https://youtu.be/L6OPzCxAGq4?si=ohDCTPL4bF6ayGs_", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: `[Verse 1]
Girl, you're thinking about it
You know you're thinking about it
You wanna do what's right for you and me
And girl you're looking inside it
You're gonna be behind it
You're searching for more freedom in your mind
And girl, you've analyzed it
You've almost paralyzed it
Now you've got to get on with the show

[Chorus]
And all I see 
Is you and me
Driving through this life together
It's A-B-C
It's 1-2-3
You and me were made to be together

[Verse 2]
Sometimes you drive me crazy
You keep telling me I'm lazy
But I know where we stand without thinking twice
Sometimes I drive you crazy
My detail is way too hazy
You've got to have it all out in front of you
Sometimes we get too excited
We push buttons to disguise it
Intentions never meant to go so far

[Chorus]
And all I see 
Is you and me
Riding on this flight together
(Not) Fantasy
Our reality 
You and me were made to be together

[Bridge]
Whoever said you must have your goals
Well they didn't mean
For every single thing
Everyday
Sometimes you've got to kick back
Just let life flow

[Chorus]
And all I see 
Is you and me
Living out our dreams together
It's destiny
In totality
You and me were made to be together

[Outro]
And all I see
Is you and me
Driving through this life together
Simple as A-B-C
Easy as 1-2-3
You and me were made to be forever`,
  },
  "my-kind-of-success": {
    coverImage: "/album-covers/mkos.png",
    title: "My Kind of Success",
    album: "My Kind of Success",
    albumId: "my-kind-of-success",
    artist: "Scott Glorioso",
    audioFile: "/audio/mkos.mp3",
    writtenDate: "January 17, 1997",
    releaseDate: "January 16, 2025",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/my-kind-of-success/1794922606?i=1794922759", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0DWDYBQ2P?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_yzJRQeeZVHCCkCQiytNdCDFpi&trackAsin=B0DWDGWL41", icon: FaAmazon },
      { name: "YouTube Music", url: "https://youtu.be/sZrkhc3ddyo?si=-X3VLX7Wm7y__3bx", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: `[Verse 1]
I used to write a new song every day
Easy to figure out what to say
My mind poured out on to the page
Youthful fear and doubt to fuel the rage
Nobody wants to hear how great
Everything around me is today
An occasional gray cloud dissipates
That’s about the extent of my rainy days

[Chorus]
My true measure of happiness
My kind of success
A true measure of happiness		
Not confused by success

[Verse 2]
The peak of my happiness you bring
But it leaves me only old songs to sing 	
I wouldn’t dream of changing one thing
Since the day you and I came to wear our rings

[Chorus]
My true measure of happiness
My kind of success
A true measure of happiness		
Not confused by success

[Break]
And why does pain bring inspiration?	
And why does it require confrontation?
Feeling elation with stable relations
Should be the source of prolific creation

[Verse 3]
Looking back on how I used to write
Was always based on love unrequited
It’s hard to even remember what that was like
For what we have now I am delighted

[Chorus]
My true measure of happiness
Stocks and bonds don't impress
A new measure of respect		
Not confused by success

My true measure of happiness		
My kind of success
A true measure of happiness
From inside, forget the rest

[Chorus]
My true measure of happiness		
Not monetary success
A new measure of respect
It’s my kind of success`,
  },
  "sunshine-rising": {
    coverImage: "/album-covers/mkos.png",
    title: "Sunshine Rising (Octavate)",
    album: "My Kind of Success",
    albumId: "my-kind-of-success",
    artist: "Scott Glorioso",
    audioFile: "/audio/sunshine-rising.mp3",
    writtenDate: "",
    releaseDate: "January 16, 2025",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/sunshine-rising-octavate/1794922606?i=1794922760", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0DWDYBQ2P?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_8BtqZqFgGH9a2fbxEcJy7bXvS&trackAsin=B0DWDX23LJ", icon: FaAmazon },
      { name: "YouTube Music", url: "https://youtu.be/IHjaH2PtACo?si=Fppcl1m5AJRd74vI", icon: FaYoutube },
    ],
    credits: [
      { role: "Writer & Performer", name: "Jack Prost" },
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Lead Vocals", name: "Scott Glorioso" },
      { role: "Guitars", name: "Jack Prost" },
      { role: "Lead Bass", name: "Jack Prost" },
      { role: "Keyboard", name: "Scott Glorioso" },
      { role: "Background Vocals", name: "Jack Prost" },
      { role: "Drums", name: "Tom DuPree III" },
    ],
    lyrics: `[Verse 1]
Free
My mind and body, my soul's alive
Agree
Sometimes it kicks into overdrive
We're living in the minute
In it just to win it
She
She never fails me, to blow my mind

[Bridge] 
You can help us turn this train around

[Chorus]
Sunshine rising
Promise not to bank it away
Sunshine setting
I am not regretting today

[Verse 2]
You
You've got the power of love inside
It's true
Sometimes it scares you to let it ride
We're living in the minute,
in it just to win it.
Do
Octavate everything you find
 
[Bridge] 
You can help us burn this terror down
Oh yeah

[Chorus]
Sunshine rising
Promise not to bank it away
Sunshine setting
I am not regretting today

Sunshine rising
Promise not to bank it away
Sunshine setting
I am not regretting today`,
  },
  "it-takes-a-lot": {
    coverImage: "/album-covers/mkos.png",
    title: "It Takes a Lot",
    album: "My Kind of Success",
    albumId: "my-kind-of-success",
    artist: "Scott Glorioso",
    audioFile: "/audio/ital.mp3",
    writtenDate: "June 2, 1993",
    releaseDate: "January 16, 2025",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/it-takes-a-lot/1794922606?i=1794922762", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0DWDYBQ2P?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_jNgXFjckSWvDMc19AJYUu154B&trackAsin=B0DWDSMXS8", icon: FaAmazon },
      { name: "YouTube Music", url: "https://youtu.be/gU4Jw-fKDno?si=uPh1wpnAeorhmssj", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: `[Verse 1]
Never would I say
"You've got to stay the same"
Everything must change
And go its own way
It's not always pleasant
Nor predictable
Sometimes it comes with pain
That never goes away

[Chorus]
We've been through a lot
It's not gonna stop
We've been through a lot
It ain't never gonna stop

[Verse 2]
No matter how we try 
To figure out why
It surprises our eyes
And even makes us cry
So go on live each day
To the fullest in every way
Don't let your passion ever fade
And make the time to play

[Chorus]
Oh, it takes a lot
To make it to the top
Oh, it takes a lot
To give it all you've got
And it takes a lot
To stay on top
Oh, it takes a lot
So give your best shot
Give it all you've got
Aim straight for the top

[Verse 3]
You can't be simply satisfied 
You must reach for the sky
If you don't you'll fall behind
And slowly you'll die
Take a look at where you are
And where you've been
If the two are both the same
Then pack up and start again

[Chorus]
We've been through a lot
It's not gonna stop
We've been through a lot
It ain't never gonna stop

And it takes a lot
To make it to the top
Oh, it takes a lot
To give it all you've got

We've been through a lot
Going straight to the top
And it takes a lot
There's no pit stops
When driving to the top
And it takes a lot

[Outro]
Never would I say
"Forever stay the same"`,
  },
  "out-on-the-mountain": {
    coverImage: "/album-covers/mkos.png",
    title: "Out on the Mountain",
    album: "My Kind of Success",
    albumId: "my-kind-of-success",
    artist: "Scott Glorioso",
    audioFile: "/audio/ootm.mp3",
    writtenDate: "January 1, 1993",
    releaseDate: "January 16, 2025",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/out-on-the-mountain/1794922606?i=1794922763", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0DWDYBQ2P?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_a7VA3pBaA1l2sJ3qrE7GdqyTD&trackAsin=B0DWDSWS4T", icon: FaAmazon },
      { name: "YouTube Music", url: "https://youtu.be/WZ29QOm8b-Y?si=fAehVADXslO3n7vp", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: `[Verse 1]
Well it seems that I've fallen into a working class trap
Once I was carefree, able to ignore the crap
Now it feels like a dance on my own
A slave to the email and the phone
When will I get back
To my favorite personal path

[Chorus]
Got to get out on the mountain
High above the streets
I've got to get out on the mountain
Where it's just me I've got to please

[Verse 2]
Lately all my dreams have been put on hold
In fact I can barely recall the way they go
But it's odd that I don't feel behind
An unfamiliar peace of mind
And a longing for freshly fallen snow

[Chorus]
Got to get out on the mountain
High above the trees
I've got to get out on the mountain
Where the air's cool bite and the frosty white
Above-this-world views and bluer than blues
Oh, out on the mountain
The sky, the sun, and the breeze
I've got to get out on the mountain
Where it's just me I've got to please

[Break]
Sometimes in my sleep
As I'm swishing between some trees
All my dreams
Return to me

[Verse 3]
Got to find a way to get away and avoid a working class trap
Then I can be carefree, oblivious of the crap
There's a freedom that I can't compare
To a perfect day up there		
I can't wait to get back to a day of making tracks

[Chorus]
I'm gonna get out on the mountain
As soon as it can be
I'm gonna get out on the mountain
Where it's just me I've got to please`,
  },
  "once-in-a-lifetime": {
    coverImage: "/album-covers/mkos.png",
    title: "Once in a Lifetime",
    album: "My Kind of Success",
    albumId: "my-kind-of-success",
    artist: "Scott Glorioso",
    audioFile: "/audio/oial.mp3",
    writtenDate: "July 1, 1999",
    releaseDate: "January 16, 2025",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/once-in-a-lifetime/1794922606?i=1794922764", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0DWDYBQ2P?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_iHMMl4n58qWWkNJdeOq1GIrRu&trackAsin=B0DWDM1T3K", icon: FaAmazon },
      { name: "YouTube Music", url: "https://youtu.be/HaYYAGq1IS8?si=ymJ4uS2n1IiefoxK", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: `[Verse 1]
I can't believe no one ever wrote a song for
You are the most beautiful woman I’ve 
Seen your heart and it shines more brightly than
Even the brightest ray of sun

[Chorus]
Once in a lifetime it happens
To those fortunate ones
Once a lifetime when it happens
You’ve got to go for it all

[Verse 2]
The way I feel about you is so very 
Finally we found our love and all it can
Before too long we’ll be together as 
One, eternally

[Chorus]
Once in a lifetime it happens
To those fortunate ones
Once a lifetime when it happens
You’ve got to go for it all

[Break]
We’ve been friends for so long
Without opportunity for more
It’s like our former relationships 
Were only practice for this love
We’ve never experienced anything like this before
No, not before
But we both longed for it deep in our souls		
And now the time is ours

[Chorus]
Once in a lifetime it happens
To those fortunate ones
Once a lifetime when it happens
You’ve got to go for it all

[Verse 3]
I’m proud to be the first one to ever write a song for
You deserve all the very finest of
Things are great whenever we are together doing
Whatever our synchronistic minds want to do

[Chorus]
Once in a lifetime it happens
To those fortunate ones
Once a lifetime when it happens
You’ve got to go for it all
And once in a lifetime it happens
To those fortunate ones
Once a lifetime when it happens
You better go for it all`,
  },
  "no-fun-without-you": {
    coverImage: "/album-covers/mkos.png",
    title: "No Fun Without You",
    album: "My Kind of Success",
    albumId: "my-kind-of-success",
    artist: "Scott Glorioso",
    audioFile: "/audio/nfwy.mp3",
    writtenDate: "August 7, 1997",
    releaseDate: "January 16, 2025",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/no-fun-without-you/1794922606?i=1794922765", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0DWDYBQ2P?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_4nFYYDXyQkygEgBaYyfEaQxkx&trackAsin=B0DWDM1T3K", icon: FaAmazon },
      { name: "YouTube Music", url: "https://youtu.be/Xf8kylB2Ozo?si=7t6sTcdjCIaRpis3", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: `[Verse 1]
I could travel all over the world
See all there is to see	
Swim in life’s vast oceans
Be the richest man I could be

[Bridge]
Go where free wind blows
Be what I wanna be
But it's

[Chorus]
No fun without you
It’s not great in any way
You’re the center of my universe
And it’s no fun without you

[Verse 2]
When you’re not around
I can’t even play
Instead I pace the halls
Waiting for you to return

[Bridge]
It’s pathetic, I know
But it’s so true
That it's

[Chorus]
No fun without you
It’s not great in any way
You’re the center of my universe
And it’s no fun without you

[Bridge]
Solitude’s not for me
Together is free

[Verse 3]
I don’t have to look too hard 		
To know you’re just the same
The love shines in your eyes
You see me the very same way

[Bridge]
I live by your side
In you I‘ll confide
That it's

[Chorus]
No fun without you
It’s not great in any way
You’re the center of my universe
And it’s no fun without you

And it's no fun without you
It's not great in any way 
We're the center of our universe
And it's no fun without you
And it's no fun without you`,
  },
  "anothers-way": {
    coverImage: "/album-covers/mkos.png",
    title: "Another's Way",
    album: "My Kind of Success",
    albumId: "my-kind-of-success",
    artist: "Scott Glorioso",
    audioFile: "/audio/anothers-way.mp3",
    writtenDate: "October 20, 1994",
    releaseDate: "January 16, 2025",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/anothers-way/1794922606?i=1794922766", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0DWDYBQ2P?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_njJxOW18hIOG3rHyFuGdEJMKq&trackAsin=B0DWDJQ2FY", icon: FaAmazon },
      { name: "YouTube Music", url: "https://youtu.be/eS4c1FZTFgY?si=2W4VFwIN6djU_57d", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: `[Verse 1]
When I hear of religious strife
Nations split and continue to fight
So many die without basic rights
I wonder what it takes to justify

[Chorus]
All of the pain 		
That surrounds us every day
People filled with rage	
Fighting eternal strain
It's truly insane		
Disrespect for the other's way

[Verse 2]
Days of peace are lessening
Children's cries are deafening
Life on Earth is shuddering
I wonder what the future can possibly bring

[Chorus]
All of the pain
Polarized shallow sight
Any way could be right
To explain the unknown
Much too quick to criticize
Another's theory of life

[Break]
Imagine history
When the world was flat not moving
So much we know about everything
Yet the meaning of life is still a mystery

[Chorus]
All of the pain
That surrounds us every day
People filled with rage
And hate for another's way
Wars between lives
Thousands of years behind
Separated by faith
A divided human race
So don't criticize
Another's theory of life`,
  },
  "queen-requiem": {
    coverImage: "/album-covers/mkos.png",
    title: "Queen Requiem",
    album: "My Kind of Success",
    albumId: "my-kind-of-success",
    artist: "Scott Glorioso",
    audioFile: "/audio/queen-requiem.mp3",
    writtenDate: "June 1992",
    releaseDate: "January 16, 2025",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/queen-requiem/1794922606?i=1794922767", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "https://music.amazon.com/albums/B0DWDYBQ2P?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_nm96oWHmsSyhnfx5owklngWib&trackAsin=B0DWDVJ978", icon: FaAmazon },
      { name: "YouTube Music", url: "https://youtu.be/g5gKUMmJkw0?si=gxE8HkBsftwFPV-j", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: `[Intro]
The Queen is dead
The King of Queen
The Queen is gone
The Killer Queen
And though he's gone, he cannot be forgotten

[Verse 1]
He started out a big dream kid
His friends did not see things the way he did
Then one day he said goodbye
The time had come to reach for the sky

[Chorus]
The Queen is dead
The King of Queen
The Queen is gone
The Killer Queen

[Verse 2]
Before he knew it, he became a superstar
The world stood up every time he took charge
The words rang out: "We Will Rock You"
The Champions of the World through and through

[Chorus]
The Queen is dead
The King of Queen
The Queen is gone
The Killer Queen
And though he's gone, he cannot be forgotten

[Break]
Against the odds of mainstream sexuality
His voice was heard for peace and decency
He was larger than life in the land of royalty
He lived for the show and all its pageantry

He carried a deep, dark secret for nearly seven years
A deadly disease ignored for homophobic fears
Not even his feline friends could suspect this demise
To a legendary hero with proportionate style

And though he's gone, he cannot be forgotten

[Verse 3]
Without their king, they go on right in stride
Make no attempt to replace, don't even try
Contribute to the world the popularity
To propagate a cure for society

[Chorus]
The Queen's not dead
The Queen's alive
In heart and song
The show must go on

Though his body's gone, his spirit still lives on`,
  },
};

export default allSongData;