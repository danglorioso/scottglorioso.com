import { redirect } from 'next/navigation';

export default function AppleMusicRedirect() {
  // Server-side redirect - happens immediately, no page render
  redirect('https://open.spotify.com/artist/2r4EbUh8eNVrjHb4KAS5rp?si=yvBkF0F4SuymbAPO4VSClw');
}