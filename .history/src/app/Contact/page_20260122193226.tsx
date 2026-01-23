import Link from 'next/link';
import { JSX } from 'react';

export default function Contact(): JSX.Element {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/home">Contact</Link>
        </nav>
    );
}