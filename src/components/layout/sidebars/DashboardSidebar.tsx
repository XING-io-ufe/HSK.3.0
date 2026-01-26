"use client";
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { t } from '@/components/i18n/translations';
import {
    MdDashboard,
    MdSchool,
    MdBarChart,
    MdSmartToy,
    MdSettings,
    MdLock,
} from '@/components/icons/material';
import BaseSidebar from './BaseSidebar';
import SidebarNav, { type NavItem } from './SidebarNav';
import SidebarUserProfile from './SidebarUserProfile';
import useUser from '@/lib/useUser';
import SidebarBrand from './SidebarBrand';

/**
 * DashboardSidebar - Main dashboard navigation sidebar
 * Used for the primary dashboard pages (not course/lesson pages)
 */
export default function DashboardSidebar() {
    const { lang } = useLanguage();

    const user = useUser();

    const navItems: NavItem[] = [
        {
            href: '/dashboard',
            label: t(lang, 'dashboardNavMain'),
            icon: <MdDashboard className="text-[20px]" />,
        },
        {
            href: '/dashboard/lessons',
            label: t(lang, 'dashboardNavLevels'),
            icon: <MdSchool className="text-[20px]" />,
        },
        {
            href: '/dashboard/statistics',
            label: t(lang, 'dashboardNavProgress'),
            icon: <MdBarChart className="text-[20px]" />,
        },
        {
            href: '#',
            label: t(lang, 'dashboardNavAIAssistant'),
            icon: <MdSmartToy className="text-[20px]" />,
            disabled: true,
            badge: <MdLock className="text-[16px]" />,
        },
        {
            href: '/dashboard/settings',
            label: t(lang, 'dashboardNavSettings'),
            icon: <MdSettings className="text-[20px]" />,
        },
    ];

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
