"use client";
import Link from 'next/link';

type SidebarBrandProps = {
    href?: string;
    showLogo?: boolean;
    logoText?: string;
};

/**
 * SidebarBrand - Brand header for sidebars
 * Displays the Hanzi.mn logo and wordmark
 */
export default function SidebarBrand({
    href = '/dashboard',
    showLogo = true,
    logoText = '汉',
}: SidebarBrandProps) {
    const content = (
        <div className="flex items-center gap-2">
            {showLogo && (
                <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-black font-bold text-xl">
                    {logoText}
                </div>
            )}
            <span className="text-xl font-bold tracking-tight text-white">
                Hanzi<span className="text-primary">.mn</span>
            </span>
        </div>
    );

    return href ? (
        <Link href={href} className="hover:opacity-80 transition-opacity">
            {content}
        </Link>
    ) : (
        content
    );
}
