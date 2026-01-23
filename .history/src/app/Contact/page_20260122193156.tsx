import Link from 'next/link';

export default function Contact() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    );
}