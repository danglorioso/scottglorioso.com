import { redirect } from 'next/navigation';

export default function AppleMusicRedirect() {
  // Server-side redirect - happens immediately, no page render
  redirect('https://music.youtube.com/channel/UCkqGZJSTGraAMd_mRRWKS_w');
}