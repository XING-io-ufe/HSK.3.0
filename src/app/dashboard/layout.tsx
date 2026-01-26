"use client";
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { t } from '@/components/i18n/translations';
import { DashboardSidebar, CourseSidebar, DashboardHeader } from '@/components/layout';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { lang } = useLanguage();
    const pathname = usePathname();
    const isLessonsRoute = pathname?.startsWith('/dashboard/lessons');
    const isCoursePage = pathname?.startsWith('/dashboard/lessons/course')
        || pathname?.startsWith('/dashboard/lessons/lesson-');

    return (
        <div className="flex h-screen">
            {/* Sidebar - switches based on route */}
            {isLessonsRoute ? <CourseSidebar showStats={!isCoursePage} showSections={isCoursePage} /> : <DashboardSidebar />}

            {/* Main content */}
            <main className={`relative z-10 flex-1 flex flex-col h-full ${isLessonsRoute ? 'overflow-auto' : 'overflow-hidden'}`}>
                {!isLessonsRoute && (
                    <DashboardHeader
                        title={t(lang, 'dashboardNavMain')}
                        subtitle={t(lang, 'dashboardNavAIAssistant')}
                    />
                )}

                {children}
            </main>
        </div>
    );
}