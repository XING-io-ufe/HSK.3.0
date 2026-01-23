"use client";
import Link from 'next/link';
import {
    MdArrowBack,
    MdLocalFireDepartment,
    MdBolt,
} from '@/components/icons/material';
import type { ReactNode } from 'react';
import BaseSidebar from './BaseSidebar';
import SidebarUserProfile from './SidebarUserProfile';

type StatisticTileProps = {
    icon: ReactNode;
    value: string;
    label: string;
    iconBgClass?: string;
};

/**
 * StatisticTile - Display a stat with icon, value and label
 */
function StatisticTile({ icon, value, label, iconBgClass = 'bg-primary/20 text-primary' }: StatisticTileProps) {
    return (
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-border-muted">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBgClass}`}>
                {icon}
            </div>
            <div>
                <div className="text-lg font-bold text-white">{value}</div>
                <div className="text-xs text-text-muted">{label}</div>
            </div>
        </div>
    );
}

type CourseSidebarProps = {
    courseLevel?: number;
    courseName?: string;
    courseSubtitle?: string;
    progress?: number;
    progressMax?: number;
    userName?: string;
    userPlan?: string;
    userInitial?: string;
};

/**
 * CourseSidebar - Sidebar for course and lesson pages
 * Shows course progress, stats, and user profile
 */
export default function CourseSidebar({
    courseLevel = 1,
    courseName = 'HSK 1',
    courseSubtitle = 'Анхан шат • 150 ханз',
    progress = 45,
    progressMax = 150,
    userName = 'Батаа',
    userPlan = 'Pro Plan',
    userInitial = 'Б',
}: CourseSidebarProps) {
    const progressPercent = Math.round((progress / progressMax) * 100);

    const stats = [
        {
            icon: <MdLocalFireDepartment size={20} />,
            value: '12',
            label: 'Өдрийн streak',
            iconBgClass: 'bg-warning/20 text-warning',
        },
        {
            icon: <MdBolt size={20} />,
            value: '1,240',
            label: 'Нийт XP',
            iconBgClass: 'bg-primary/20 text-primary',
        },
    ];

    const header = (
        <Link
            href="/dashboard"
            className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors"
        >
            <MdArrowBack size={20} />
            <span className="text-sm font-medium">Буцах</span>
        </Link>
    );

    const footer = (
        <SidebarUserProfile
            name={userName}
            plan={userPlan}
            avatarInitial={userInitial}
            variant="gradient"
        />
    );

    return (
        <BaseSidebar
            width="w-72"
            header={header}
            footer={footer}
        >
            {/* Course Info */}
            <div className="p-4 border-b border-border-muted">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-primary/30">
                        {courseLevel}
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white">{courseName}</h2>
                        <p className="text-xs text-text-muted">{courseSubtitle}</p>
                    </div>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                        <span className="text-text-secondary">Явц</span>
                        <span className="text-primary font-medium">{progress} / {progressMax}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(19,236,37,0.5)]"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="p-4 space-y-3">
                {stats.map((stat, index) => (
                    <StatisticTile
                        key={index}
                        icon={stat.icon}
                        value={stat.value}
                        label={stat.label}
                        iconBgClass={stat.iconBgClass}
                    />
                ))}
            </div>
        </BaseSidebar>
    );
}
