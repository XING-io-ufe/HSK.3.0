"use client";
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

const hideLayoutRoutes = ['/login', '/forget-password', '/dashboard'];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname() || '';
    const hideLayout = hideLayoutRoutes.some((route) => pathname.startsWith(route));

    return (
        <>
            {!hideLayout && <Navbar />}
            {children}
            {!hideLayout && <Footer />}
        </>
    );
}
