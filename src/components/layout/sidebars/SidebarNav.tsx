"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export type NavItem = {
    href: string;
    label: string;
    icon: ReactNode;
    disabled?: boolean;
    badge?: ReactNode;
};

type SidebarNavProps = {
    items: NavItem[];
    className?: string;
};

/**
 * SidebarNav - Reusable navigation component for sidebars
 * Handles active state and disabled items with tooltips
 */
export default function SidebarNav({ items, className = '' }: SidebarNavProps) {
    const pathname = usePathname();

    return (
        <nav className={`px-4 space-y-2 ${className}`}>
            {items.map((item) => {
                const isActive = pathname === item.href;
                const baseClasses = 'flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors';

                if (item.disabled) {
                    return (
                        <div key={item.href} className="relative group">
                            <span
                                className={`${baseClasses} text-text-muted cursor-not-allowed group-hover:bg-white/5`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                                {item.badge && <span className="ml-auto">{item.badge}</span>}
                            </span>
                        </div>
                    );
                }

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`
                            ${baseClasses}
                            ${isActive
                                ? 'bg-white/10 text-white'
                                : 'text-text-secondary hover:bg-white/5 hover:text-white'
                            }
                        `.trim()}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                        {item.badge && <span className="ml-auto">{item.badge}</span>}
                    </Link>
                );
            })}
        </nav>
    );
}
