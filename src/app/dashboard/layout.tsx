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
    const isCourse = pathname?.startsWith('/dashboard/lessons');

    return (
        <div className="flex h-screen">
            {/* Sidebar - switches based on route */}
            {isCourse ? <CourseSidebar /> : <DashboardSidebar />}

            {/* Main content */}
            <main className={`relative z-10 flex-1 flex flex-col h-full ${isCourse ? 'overflow-auto' : 'overflow-hidden'}`}>
                {!isCourse && (
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