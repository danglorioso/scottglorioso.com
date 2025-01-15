import { Song } from "../types/song";
import { FaApple, FaSpotify, FaAmazon, FaYoutube } from "react-icons/fa";

// Define the instance of the object that stores all song data, which has 
// strings of song titles as keys and Song objects as values
const allSongData: Record<string, Song> = {
  "its-all-about-me": {
    coverImage: "/album-covers/iaam.png",
    title: "It's All About Me",
    album: "It's All About Me - Single",
    artist: "Scott Glorioso",
    audioFile: "/audio/iaam.mp3",
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
  "up-side": {
    coverImage: "/album-covers/ftg.png",
    title: "Up Side",
    album: "For The Glory",
    artist: "Scott Glorioso",
    audioFile: "/audio/up-side.mp3",
    releaseDate: "",
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
    artist: "Scott Glorioso",
    audioFile: "/audio/ydir.mp3",
    releaseDate: "2011",
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
    artist: "Scott Glorioso",
    audioFile: "/audio/fsoy.mp3",
    releaseDate: "July 18, 2007",
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
    artist: "Scott Glorioso",
    audioFile: "/audio/cant-wait.mp3",
    releaseDate: "August 29, 2003",
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
    artist: "Scott Glorioso",
    audioFile: "/audio/bool.mp3",
    releaseDate: "February 2004",
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
    artist: "Scott Glorioso",
    audioFile: "/audio/someone-within.mp3",
    releaseDate: "June 8, 1981",
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
    artist: "Scott Glorioso",
    audioFile: "/audio/gwid.mp3",
    releaseDate: "2000",
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
    artist: "Scott Glorioso",
    audioFile: "/audio/tff.mp3",
    releaseDate: "",
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
    artist: "Scott Glorioso",
    audioFile: "/audio/music-in-me.mp3",
    releaseDate: "",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "", icon: FaAmazon },
      { name: "YouTube Music", url: "", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: ``,
  },
  "all-i-see": {
    coverImage: "/album-covers/mkos.png",
    title: "All I See",
    album: "My Kind of Success",
    artist: "Scott Glorioso",
    audioFile: "/audio/all-i-see.mp3",
    releaseDate: "",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "", icon: FaAmazon },
      { name: "YouTube Music", url: "", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: ``,
  },
  "my-kind-of-success": {
    coverImage: "/album-covers/mkos.png",
    title: "My Kind of Success",
    album: "My Kind of Success",
    artist: "Scott Glorioso",
    audioFile: "/audio/mkos.mp3",
    releaseDate: "",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "", icon: FaAmazon },
      { name: "YouTube Music", url: "", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: ``,
  },
  "sunshine-shining": {
    coverImage: "/album-covers/mkos.png",
    title: "Sunshine Shining (Octavate)",
    album: "My Kind of Success",
    artist: "Scott Glorioso",
    audioFile: "/audio/sunshine-shining.mp3",
    releaseDate: "",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "", icon: FaAmazon },
      { name: "YouTube Music", url: "", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Jack Prost" },
    ],
    lyrics: ``,
  },
  "it-takes-a-lot": {
    coverImage: "/album-covers/mkos.png",
    title: "It Takes a Lot",
    album: "My Kind of Success",
    artist: "Scott Glorioso",
    audioFile: "/audio/ital.mp3",
    releaseDate: "",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "", icon: FaAmazon },
      { name: "YouTube Music", url: "", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: ``,
  },
  "out-on-the-mountain": {
    coverImage: "/album-covers/mkos.png",
    title: "Out on the Mountain",
    album: "My Kind of Success",
    artist: "Scott Glorioso",
    audioFile: "/audio/ootm.mp3",
    releaseDate: "",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "", icon: FaAmazon },
      { name: "YouTube Music", url: "", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: ``,
  },
  "once-in-a-lifetime": {
    coverImage: "/album-covers/mkos.png",
    title: "Once in a Lifetime",
    album: "My Kind of Success",
    artist: "Scott Glorioso",
    audioFile: "/audio/oial.mp3",
    releaseDate: "",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "", icon: FaAmazon },
      { name: "YouTube Music", url: "", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: ``,
  },
  "no-fun-without-you": {
    coverImage: "/album-covers/mkos.png",
    title: "No Fun Without You",
    album: "My Kind of Success",
    artist: "Scott Glorioso",
    audioFile: "/audio/nfwy.mp3",
    releaseDate: "",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "", icon: FaAmazon },
      { name: "YouTube Music", url: "", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: ``,
  },
  "anothers-way": {
    coverImage: "/album-covers/mkos.png",
    title: "Another's Way",
    album: "My Kind of Success",
    artist: "Scott Glorioso",
    audioFile: "/audio/anothers-way.mp3",
    releaseDate: "",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "", icon: FaAmazon },
      { name: "YouTube Music", url: "", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: ``,
  },
  "queen-requiem": {
    coverImage: "/album-covers/mkos.png",
    title: "Queen Requiem",
    album: "My Kind of Success",
    artist: "Scott Glorioso",
    audioFile: "/audio/queen-requiem.mp3",
    releaseDate: "",
    copyright: "© 2025 Scott Glorioso",
    streamingLinks: [
      { name: "Apple Music", url: "", icon: FaApple },
      { name: "Spotify", url: "", icon: FaSpotify },
      { name: "Amazon Music", url: "", icon: FaAmazon },
      { name: "YouTube Music", url: "", icon: FaYoutube },
    ],
    credits: [
      { role: "Engineer & Producer", name: "Scott Glorioso" },
      { role: "Writer & Performer", name: "Scott Glorioso" },
    ],
    lyrics: ``,
  },
};

export default allSongData;