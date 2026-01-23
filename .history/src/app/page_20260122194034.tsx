import Link from 'next/link';
import { JSX } from 'react';
import Home from '@/app/Home/page';

export default function Home(): JSX.Element {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/Contact">Contact</Link>
    </nav>
  );
}