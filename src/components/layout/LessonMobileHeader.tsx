"use client";
import React, { useState, useEffect } from 'react';
import { MdMenu, MdClose, MdArrowBack } from '@/components/icons/material';
import { useRouter, usePathname } from 'next/navigation';
import SidebarUserProfile from './sidebars/SidebarUserProfile';
import useUser from '@/lib/useUser';
import { CourseSidebarContent } from './sidebars/CourseSidebar';
import type { LessonNavItem } from './sidebars/CourseSidebar';

type LessonMobileHeaderProps = {
    title?: string;
    showBackButton?: boolean;
    courseLevel?: number;
    courseName?: string;
    courseSubtitle?: string;
    progress?: number;
    progressMax?: number;
    sections?: LessonNavItem[];
    showStats?: boolean;
    showSections?: boolean;
};

/**
 * LessonMobileHeader - Mobile header for lesson/course pages
 * Shows on mobile devices where the sidebar is hidden
 */
export default function LessonMobileHeader({
    title = 'Хичээл',
    showBackButton = true,
    courseLevel = 1,
    courseName = 'HSK 1',
    courseSubtitle = 'Анхан шат  150 ханз',
    progress = 45,
    progressMax = 150,
    sections,
    showStats = true,
    showSections = true,
}: LessonMobileHeaderProps) {
    const [open, setOpen] = useState(false);
    const user = useUser();
    const router = useRouter();
    const pathname = usePathname();

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

    const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.startsWith('#') ? href.slice(1) : href;
        const el = typeof document !== 'undefined' ? document.getElementById(id) : null;
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        try {
            const search = typeof window !== 'undefined' ? window.location.search : '';
            router.replace(`${pathname}${search}#${id}`);
        } catch (err) {
            // ignore replace failures
        }
        setOpen(false);
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
                    <span className="text-lg font-bold text-white truncate max-w-50">{title}</span>
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
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors"
                            aria-label="Go back to lessons"
                        >
                            <MdArrowBack size={20} />
                            <span className="text-sm font-medium">Буцах</span>
                        </button>
                        <button onClick={() => setOpen(false)} className="p-2 text-gray-300 hover:text-white" aria-label="Close menu">
                            <MdClose size={20} />
                        </button>
                    </div>

                    <div className="flex flex-col h-full">
                        <div className="flex-1 overflow-auto">
                            <CourseSidebarContent
                                courseLevel={courseLevel}
                                courseName={courseName}
                                courseSubtitle={courseSubtitle}
                                progress={progress}
                                progressMax={progressMax}
                                sections={sections}
                                showStats={showStats}
                                showSections={showSections}
                                onSectionClick={handleSectionClick}
                            />
                        </div>

                        <div className="p-4 border-t border-white/5">
                            <SidebarUserProfile name={user.name} plan={user.plan} avatarInitial={user.avatarInitial} variant="default" />
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}
