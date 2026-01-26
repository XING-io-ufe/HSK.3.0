"use client";
import React, { useState, useEffect } from 'react';
import { MdMenu, MdClose, MdArrowBack } from '@/components/icons/material';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import SidebarNav from './sidebars/SidebarNav';
import SidebarBrand from './sidebars/SidebarBrand';
import SidebarUserProfile from './sidebars/SidebarUserProfile';
import useUser from '@/lib/useUser';
import { getDashboardNavItems } from './sidebars/navConfig';

type LessonMobileHeaderProps = {
    title?: string;
    showBackButton?: boolean;
};

/**
 * LessonMobileHeader - Mobile header for lesson/course pages
 * Shows on mobile devices where the sidebar is hidden
 */
export default function LessonMobileHeader({
    title = 'Хичээл',
    showBackButton = true,
}: LessonMobileHeaderProps) {
    const [open, setOpen] = useState(false);
    const { lang, mounted } = useLanguage();
    const user = useUser();
    const router = useRouter();
    const pathname = usePathname();

    const navItems = getDashboardNavItems(lang);

    // Close mobile menu when pathname changes to prevent stale state on navigation
    useEffect(() => {
        // Defer the state update to avoid calling setState synchronously within the effect
        const t = setTimeout(() => setOpen(false), 0);
        return () => clearTimeout(t);
    }, [pathname]);

    const handleBack = () => {
        if (pathname?.startsWith('/dashboard/lessons/')) {
            router.push('/dashboard/lessons');
        } else {
            router.push('/dashboard');
        }
    };

    return (
        <>
            {/* Mobile-only header */}
            <header className="md:hidden h-16 border-b border-border-muted bg-background-dark/50 backdrop-blur-md px-4 flex items-center justify-between shrink-0 sticky top-0 z-40">
                <div className="flex items-center gap-3">
                    {showBackButton && (
                        <button
                            onClick={handleBack}
                            className="p-2 text-text-secondary hover:text-white transition-colors"
                            aria-label="Go back"
                        >
                            <MdArrowBack size={20} />
                        </button>
                    )}
                    <span className="text-lg font-bold text-white truncate max-w-[200px]">{title}</span>
                </div>
                <button onClick={() => setOpen(true)} className="p-2 text-text-primary" aria-label="Open menu">
                    <MdMenu size={24} />
                </button>
            </header>

            {/* Mobile menu overlay */}
            <div className={`fixed inset-0 z-50 transition-opacity ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`} aria-hidden={!open}>
                <div onClick={() => setOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                <aside className={`absolute top-0 right-0 h-full w-72 bg-background-dark/95 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-modal="true">
                    <div className="flex items-center justify-between p-4 border-b border-white/5">
                        <h2 className="text-lg font-bold text-white">Меню</h2>
                        <button onClick={() => setOpen(false)} className="p-2 text-gray-300 hover:text-white" aria-label="Close menu">
                            <MdClose size={20} />
                        </button>
                    </div>
                    <div className="h-full overflow-auto">
                        <div className="p-4 border-b border-white/5">
                            <SidebarBrand />
                        </div>

                        <div className="p-4 space-y-6">
                            <SidebarUserProfile name={user.name} plan={user.plan} avatarInitial={user.avatarInitial} variant="default" />
                            {mounted && <SidebarNav items={navItems} />}
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}
