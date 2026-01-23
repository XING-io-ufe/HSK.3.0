"use client";
import { MdNotifications, MdMenu } from '@/components/icons/material';
import type { ReactNode } from 'react';

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
    return (
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
                <button className="md:hidden p-2 text-text-primary">
                    <MdMenu />
                </button>
            </div>
        </header>
    );
}
