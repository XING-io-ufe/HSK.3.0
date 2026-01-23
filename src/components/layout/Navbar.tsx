"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { MdMenu, MdClose } from '@/components/icons/material';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { t } from '@/components/i18n/translations';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname() || '/';
    const { lang, toggleLang } = useLanguage();

    const isActive = (href: string) => {
        if (!href || href === '#') return false;
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    const baseDesktop = 'text-sm font-medium transition-colors cursor-pointer';
    const inactiveDesktop = 'text-gray-300 hover:text-primary';
    const baseMobile = 'block text-lg font-medium transition-colors cursor-pointer';
    const inactiveMobile = 'text-gray-200 hover:text-white';

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Image src="/logo.png" alt="Hanzi.mn" width={40} height={40} className="h-12 w-12 object-contain" />
                            <span className="text-xl font-bold tracking-tight text-white">
                                Hanzi
                                <span className="text-primary">.mn</span>
                            </span>
                        </div>
                        <nav className="hidden md:flex items-center gap-8">
                            <Link className={`${baseDesktop} ${isActive('/') ? 'text-primary' : inactiveDesktop}`} href="/">{t(lang, 'navHome')}</Link>
                            <Link className={`${baseDesktop} ${isActive('/about') ? 'text-primary' : inactiveDesktop}`} href="/about">{t(lang, 'navAbout')}</Link>
                            <Link className={`${baseDesktop} ${isActive('/lesson') ? 'text-primary' : inactiveDesktop}`} href="/lesson">{t(lang, 'navLesson')}</Link>
                            <Link className={`${baseDesktop} ${isActive('/contact') ? 'text-primary' : inactiveDesktop}`} href="/contact">{t(lang, 'navContact')}</Link>
                        </nav>
                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                onClick={toggleLang}
                                className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-gray-200 hover:border-primary hover:text-white transition"
                                aria-label="Toggle language"
                            >
                                <span>{lang === 'mn' ? 'MN' : 'EN'}</span>
                                <span className="text-[11px] text-gray-400">{t(lang, 'langToggleLabel')}</span>
                            </button>
                            {(!pathname || !pathname.startsWith('/login')) && (
                                <Link href="/login" className="hidden sm:inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-black transition-transform hover:scale-105 hover:bg-white neon-glow">
                                    {t(lang, 'navStart')}
                                </Link>
                            )}
                            <button onClick={() => setOpen(true)} className="md:hidden p-2 text-gray-400 hover:text-white" aria-label="Menu">
                                <MdMenu size={22} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-50 transition-opacity ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`} aria-hidden={!open}>
                <div onClick={() => setOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

                {/* Sliding panel from right */}
                <aside className={`absolute top-0 right-0 h-full w-72 bg-background-dark/95 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-modal="true">
                    <div className="flex items-center justify-between p-4 border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <Image src="/logo.png" alt="Hanzi.mn" width={40} height={40} className="h-12 w-12 object-contain" />
                            <span className="text-xl font-bold tracking-tight text-white">
                                Hanzi
                                <span className="text-primary">.mn</span>
                            </span>
                        </div>
                        <button onClick={() => setOpen(false)} className="p-2 text-gray-300 hover:text-white" aria-label="Close menu">
                            <MdClose size={20} />
                        </button>
                    </div>
                    <nav className="p-4 space-y-4">
                        <Link onClick={() => setOpen(false)} className={`${baseMobile} ${isActive('/') ? 'text-primary' : inactiveMobile}`} href="/">{t(lang, 'navHome')}</Link>
                        <Link onClick={() => setOpen(false)} className={`${baseMobile} ${isActive('/about') ? 'text-primary' : inactiveMobile}`} href="/about">{t(lang, 'navAbout')}</Link>
                        <Link onClick={() => setOpen(false)} className={`${baseMobile} ${isActive('/lesson') ? 'text-primary' : inactiveMobile}`} href="/lesson">{t(lang, 'navLesson')}</Link>
                        <Link onClick={() => setOpen(false)} className={`${baseMobile} ${isActive('/contact') ? 'text-primary' : inactiveMobile}`} href="/contact">{t(lang, 'navContact')}</Link>
                        <button
                            type="button"
                            onClick={() => { toggleLang(); setOpen(false); }}
                            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-semibold text-gray-200 hover:border-primary hover:text-white transition"
                        >
                            <span>{lang === 'mn' ? 'MN' : 'EN'}</span>
                            <span className="text-[12px] text-gray-400">{t(lang, 'langToggleLabel')}</span>
                        </button>
                    </nav>
                </aside>
            </div>
        </>
    );
}
