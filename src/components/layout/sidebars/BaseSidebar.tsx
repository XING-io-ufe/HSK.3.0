"use client";
import type { ReactNode } from 'react';

type BaseSidebarProps = {
    children: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
    width?: string;
    className?: string;
};

/**
 * BaseSidebar - Shared sidebar container with consistent styling
 * Provides the base structure for all sidebar variants
 */
export default function BaseSidebar({
    children,
    header,
    footer,
    width = 'w-72',
    className = '',
}: BaseSidebarProps) {
    return (
        <aside
            className={`
                relative z-20 ${width} h-full 
                border-r border-border-subtle 
                bg-surface-dark/90 backdrop-blur-xl 
                hidden md:flex flex-col
                ${className}
            `.trim()}
        >
            {/* Header Section */}
            {header && (
                <div className="h-20 flex items-center px-6 border-b border-border-muted shrink-0">
                    {header}
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-y-auto">
                {children}
            </div>

            {/* Footer Section */}
            {footer && (
                <div className="p-4 border-t border-border-muted shrink-0">
                    {footer}
                </div>
            )}
        </aside>
    );
}
