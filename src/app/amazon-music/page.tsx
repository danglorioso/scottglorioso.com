import { redirect } from 'next/navigation';

export default function AppleMusicRedirect() {
  // Server-side redirect - happens immediately, no page render
  redirect('https://music.amazon.com/artists/B0B4B279BW/scott-glorioso');
}