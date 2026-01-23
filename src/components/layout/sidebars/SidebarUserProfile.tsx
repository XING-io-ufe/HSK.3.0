"use client";
import { MdPerson } from '@/components/icons/material';

type SidebarUserProfileProps = {
    name: string;
    plan: string;
    avatar?: string;
    avatarInitial?: string;
    showUpgradeButton?: boolean;
    upgradeButtonText?: string;
    onUpgrade?: () => void;
    variant?: 'default' | 'gradient';
};

/**
 * SidebarUserProfile - Reusable user profile component for sidebars
 * Supports avatar images, initials, and optional upgrade CTA
 */
export default function SidebarUserProfile({
    name,
    plan,
    avatar,
    avatarInitial,
    showUpgradeButton = false,
    upgradeButtonText = 'Upgrade Pro',
    onUpgrade,
    variant = 'default',
}: SidebarUserProfileProps) {
    const avatarClasses = variant === 'gradient'
        ? 'bg-linear-to-br from-primary to-emerald-600 text-black font-bold'
        : 'bg-linear-to-br from-gray-700 to-gray-900 border border-border-subtle';

    return (
        <div className="space-y-3">
            <div className="glass-card p-3 rounded-xl flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${avatarClasses}`}>
                    {avatar ? (
                        <img src={avatar} alt={name} className="h-full w-full rounded-full object-cover" />
                    ) : avatarInitial ? (
                        <span>{avatarInitial}</span>
                    ) : (
                        <MdPerson className="text-text-secondary" />
                    )}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-white truncate">{name}</div>
                    <div className="text-xs text-text-muted">{plan}</div>
                </div>
            </div>

            {showUpgradeButton && (
                <button
                    onClick={onUpgrade}
                    className="w-full py-2.5 rounded-lg border border-primary/30 text-primary text-sm font-bold hover:bg-primary hover:text-black transition-all"
                >
                    {upgradeButtonText}
                </button>
            )}
        </div>
    );
}
