"use client";
import { useLanguage } from '@/components/i18n/LanguageProvider';
import BaseSidebar from './BaseSidebar';
import SidebarNav from './SidebarNav';
import SidebarUserProfile from './SidebarUserProfile';
import useUser from '@/lib/useUser';
import SidebarBrand from './SidebarBrand';
import { getDashboardNavItems } from './navConfig';

/**
 * DashboardSidebar - Main dashboard navigation sidebar
 * Used for the primary dashboard pages (not course/lesson pages)
 */
export default function DashboardSidebar() {
    const { lang, mounted } = useLanguage();
    const user = useUser();

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return (
            <aside className="relative z-20 w-72 h-full border-r border-border-subtle bg-surface-dark/90 backdrop-blur-xl hidden md:flex flex-col">
                {/* Skeleton placeholder */}
                <div className="h-20 flex items-center px-6 border-b border-border-muted shrink-0">
                    <div className="h-8 w-32 bg-white/5 rounded animate-pulse" />
                </div>
                <div className="flex-1 p-4 space-y-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="h-12 bg-white/5 rounded-lg animate-pulse" />
                    ))}
                </div>
            </aside>
        );
    }

    const navItems = getDashboardNavItems(lang);

    return (
        <BaseSidebar
            header={<SidebarBrand />}
            footer={<SidebarUserProfile name={user.name} plan={user.plan} avatarInitial={user.avatarInitial} variant="default" />}
        >
            <div className="mt-8">
                <SidebarNav items={navItems} />
            </div>
        </BaseSidebar>
    );
}
