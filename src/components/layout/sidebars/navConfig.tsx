"use client";
import {
    MdDashboard,
    MdSchool,
    MdBarChart,
    MdSmartToy,
    MdSettings,
    MdLock,
} from '@/components/icons/material';
import { t } from '@/components/i18n/translations';
import type { Lang } from '@/components/i18n/translations';
import type { NavItem } from './SidebarNav';

/**
 * Centralized navigation configuration for dashboard sidebars
 * This ensures consistency across desktop sidebar and mobile menu
 */
export function getDashboardNavItems(lang: Lang): NavItem[] {
    return [
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
}
