import { redirect } from 'next/navigation';

export default function AppleMusicRedirect() {
  // Server-side redirect - happens immediately, no page render
  redirect('https://music.apple.com/us/artist/scott-glorioso/1637244084');
}
