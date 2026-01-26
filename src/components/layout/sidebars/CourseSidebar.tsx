"use client";

import { usePathname, useRouter } from 'next/navigation';
import type { MouseEvent, ReactNode } from 'react';

import {
    MdArrowBack,
    MdMenuBook,
    MdPsychology,
    MdQuiz,
    MdPlayArrow,
    MdLocalFireDepartment,
    MdBolt,
} from '@/components/icons/material';
import BaseSidebar from './BaseSidebar';
import SidebarUserProfile from './SidebarUserProfile';
import useUser from '@/lib/useUser';

type LessonNavItem = {
    href: string;
    label: string;
    icon: ReactNode;
};

type CourseSidebarProps = {
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
 * CourseSidebar - Sidebar for course and lesson pages
 * Shows course progress and quick navigation links for the lesson
 */
export default function CourseSidebar({
    courseLevel = 1,
    courseName = 'HSK 1',
    courseSubtitle = 'Анхан шат  150 ханз',
    progress = 45,
    progressMax = 150,
    sections,
    showStats = true,
    showSections = true,
}: CourseSidebarProps) {
    const user = useUser();
    const router = useRouter();
    const pathname = usePathname();
    const progressPercent = Math.min(100, Math.round((progress / progressMax) * 100));

    const stats = [
        {
            icon: <MdLocalFireDepartment size={20} />,
            value: '12',
            label: 'Өдрийн streak',
            iconBgClass: 'bg-warning/20 text-warning',
        },
        {
            icon: <MdBolt size={20} />,
            value: '1,240',
            label: 'Нийт XP',
            iconBgClass: 'bg-primary/20 text-primary',
        },
    ];

    const sectionLinks: LessonNavItem[] = sections ?? [
        { href: '#overview', label: 'Товч танилцуулга', icon: <MdPlayArrow size={18} /> },
        { href: '#vocab', label: 'Шинэ үгс', icon: <MdMenuBook size={18} /> },
        { href: '#radicals', label: 'Язгуур түвшин', icon: <MdPsychology size={18} /> },
        { href: '#sentences', label: 'Өгүүлбэрүүд', icon: <MdMenuBook size={18} /> },
        { href: '#practice', label: 'Асуултууд', icon: <MdQuiz size={18} /> },
    ];

    const handleBack = (e?: MouseEvent<HTMLAnchorElement>) => {
        e?.preventDefault();
        const ref = typeof document !== 'undefined' ? document.referrer : '';
        const current = pathname || '';

        try {
            if (ref && ref.startsWith(window.location.origin)) {
                if (ref.includes('/dashboard/lessons')) {
                    router.push('/dashboard/lessons');
                    return;
                }
                if (ref.includes('/dashboard')) {
                    router.push('/dashboard');
                    return;
                }
                // if external ref, just go back in history
                router.back();
                return;
            }
        } catch (err) {
            // ignore and fallback to path-based logic
        }

        // No ref available (direct entry). Decide based on current route.
        if (current.startsWith('/dashboard/lessons/lesson-')) {
            router.push('/dashboard/lessons');
            return;
        }
        if (current === '/dashboard/lessons') {
            router.push('/dashboard');
            return;
        }

        router.push('/dashboard');
    };

    const handleSectionClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.startsWith('#') ? href.slice(1) : href;
        const el = typeof document !== 'undefined' ? document.getElementById(id) : null;
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        try {
            const search = typeof window !== 'undefined' ? window.location.search : '';
            router.replace(`${pathname}${search}#${id}`);
        } catch (err) {
            // ignore
        }
    };

    const header = (
        <a
            href="/dashboard/lessons"
            onClick={handleBack}
            className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors"
        >
            <MdArrowBack size={20} />
            <span className="text-sm font-medium">Буцах</span>
        </a>
    );

    const footer = (
        <SidebarUserProfile
            name={user.name}
            plan={user.plan}
            avatar={user.avatar}
            avatarInitial={user.avatarInitial}
            variant="default"
        />
    );

    return (
        <BaseSidebar
            width="w-72"
            header={header}
            footer={footer}
        >
            {/* Course Info */}
            <div className="p-4 border-b border-border-muted">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-primary/30">
                        {courseLevel}
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white">{courseName}</h2>
                        <p className="text-xs text-text-muted">{courseSubtitle}</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                        <span className="text-text-secondary">Явц</span>
                        <span className="text-primary font-medium">{progress} / {progressMax}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(19,236,37,0.5)]"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                </div>
            </div>

            {showStats && (
                <div className="pt-4 space-y-2">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-border-muted"
                        >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.iconBgClass}`}>
                                {stat.icon}
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-text-muted">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {showSections && (
                <div className="p-4 space-y-3">
                    <div className="text-xs uppercase tracking-widest text-text-muted font-semibold px-2">Хичээлийн бүтэц</div>
                    <div className="space-y-1">
                        {sectionLinks.map((section) => (
                            <a
                                key={section.href}
                                href={section.href}
                                onClick={(e) => handleSectionClick(e, section.href)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                            >
                                <span className="text-primary">{section.icon}</span>
                                <span>{section.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </BaseSidebar>
    );
}
