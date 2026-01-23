import type { ReactNode } from 'react';

type LessonMarkerStatus = 'completed' | 'active' | 'locked' | 'accent';

type LessonMarkerProps = {
    icon: ReactNode;
    status?: LessonMarkerStatus;
    sizeClass?: string;
    className?: string;
};

const statusClasses: Record<LessonMarkerStatus, string> = {
    completed: 'bg-[#1a1d24] border-2 border-success text-success shadow-[0_0_15px_rgba(0,255,157,0.4)]',
    active: 'bg-primary border-4 border-[#1a1d24] text-white animate-pulse-glow shadow-[0_0_30px_rgba(37,106,244,0.15)]',
    locked: 'bg-[#111318] border border-gray-700 text-gray-500',
    accent: 'bg-[#1a1d24]/80 border border-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]',
};

export default function LessonMarker({
    icon,
    status = 'accent',
    sizeClass = 'h-12 w-12',
    className = '',
}: LessonMarkerProps) {
    return (
        <div
            className={`
                ${sizeClass} flex items-center justify-center rounded-full
                ${statusClasses[status]}
                ${className}
            `.trim()}
        >
            {icon}
        </div>
    );
}
