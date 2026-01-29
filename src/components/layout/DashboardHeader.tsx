"use client";
import React, { useState, useEffect } from 'react';
import { MdNotifications, MdMenu, MdClose } from '@/components/icons/material';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import SidebarNav from './sidebars/SidebarNav';
import SidebarBrand from './sidebars/SidebarBrand';
import SidebarUserProfile from './sidebars/SidebarUserProfile';
import useUser from '@/lib/useUser';
import { getDashboardNavItems } from './sidebars/navConfig';

type DashboardHeaderProps = {
    title: string;
    subtitle?: string;
    actions?: ReactNode;
    showNotifications?: boolean;
    showUpgradeButton?: boolean;
    upgradeButtonText?: string;
    onUpgrade?: () => void;
};

/**
 * DashboardHeader - Consistent header for dashboard pages
 * Includes title, subtitle, notifications, and action buttons
 */
export default function DashboardHeader({
    title,
    subtitle,
    actions,
    showNotifications = true,
    showUpgradeButton = true,
    upgradeButtonText = 'Upgrade Pro',
    onUpgrade,
}: DashboardHeaderProps) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const { lang, mounted } = useLanguage();
    const user = useUser();

    // Close mobile menu when pathname changes to prevent stale state on navigation
    useEffect(() => {
        // Defer the state update to avoid calling setState synchronously within the effect
        const t = setTimeout(() => setOpen(false), 0);
        return () => clearTimeout(t);
    }, [pathname]);

    // Get nav items from centralized config
    const navItems = getDashboardNavItems(lang);

    return (
        <>
            <header className="h-20 border-b border-border-muted bg-background-dark/50 backdrop-blur-md px-8 flex items-center justify-between shrink-0">
                <div>
                    <h1 className="text-xl font-bold text-text-primary">{title}</h1>
                    {subtitle && <p className="text-sm text-text-muted">{subtitle}</p>}
                </div>
                <div className="flex items-center gap-4">
                    {showNotifications && (
                        <button className="p-2 text-text-secondary hover:text-text-primary transition-colors relative">
                            <MdNotifications />
                            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary"></span>
                        </button>
                    )}
                    {showUpgradeButton && (
                        <button
                            onClick={onUpgrade}
                            className="hidden md:flex h-9 items-center justify-center rounded-lg border border-border-accent text-primary px-4 text-sm font-bold hover:bg-primary hover:text-black transition-all"
                        >
                            {upgradeButtonText}
                        </button>
                    )}
                    {actions}
                    <button onClick={() => setOpen(true)} className="md:hidden p-2 text-text-primary" aria-label="Open menu">
                        <MdMenu />
                    </button>
                </div>
            </header>

            {/* Mobile menu overlay */}
            <div className={`fixed inset-0 z-50 transition-opacity ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`} aria-hidden={!open}>
                <div onClick={() => setOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                <aside className={`absolute top-0 right-0 h-full w-72 bg-background-dark/95 overflow-y-auto no-scrollbar backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-modal="true">
                    <div className="flex items-center justify-between p-4 border-b border-white/5">
                        <div>
                            <h2 className="text-lg font-bold text-white">Меню</h2>
                        </div>
                        <button onClick={() => setOpen(false)} className="p-2 text-gray-300 hover:text-white" aria-label="Close menu">
                            <MdClose size={20} />
                        </button>
                    </div>
                    <div className="p-0 h-full overflow-auto">
                        <div className="p-4 border-b border-white/5">
                            <SidebarBrand />
                        </div>

                        <div className="p-4 space-y-6">
                            <div>
                                <SidebarUserProfile name={user.name} plan={user.plan} avatarInitial={user.avatarInitial} variant="default" />
                            </div>
                            <div>
                                {mounted && <SidebarNav items={navItems} />}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}
