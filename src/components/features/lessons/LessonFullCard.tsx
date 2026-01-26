import type { ReactNode } from 'react';
import Link from 'next/link';

type LessonFullCardProps = {
    layoutSide?: 'left' | 'right';
    marker: ReactNode;
    badgeLabel: string;
    badgeTone: 'success' | 'primary' | 'muted';
    progressValue: string;
    title: string;
    chinese: string;
    pinyin: string;
    description?: string;
    stats?: Array<{ icon: ReactNode; label: string }>;
    actionLabel?: string;
    actionIcon?: ReactNode;
    actionHref?: string;
};

const badgeToneClasses: Record<LessonFullCardProps['badgeTone'], string> = {
    success: 'text-success bg-success/10 border border-success/30',
    primary: 'text-primary bg-primary/10 border border-primary/20',
    muted: 'text-gray-500 bg-white/5 border border-white/10',
};

export default function LessonFullCard({
    layoutSide = 'left',
    marker,
    badgeLabel,
    badgeTone,
    progressValue,
    title,
    chinese,
    pinyin,
    description,
    stats,
    actionLabel,
    actionIcon,
    actionHref,
}: LessonFullCardProps) {
    const isRight = layoutSide === 'right';

    return (
        <div className={`relative mb-12 group md:flex md:justify-between md:items-center w-full ${isRight ? '' : 'md:flex-row-reverse'}`}>
            <div className={`absolute left-0 md:left-1/2 ${isRight ? '-ml-5' : '-ml-6'} z-20 flex items-center justify-center`}>
                {marker}
            </div>

            <div className={`ml-16 md:ml-0 md:w-[42%] ${isRight ? '' : ''}`}>
                <div
                    className={`border p-5 rounded-xl relative overflow-hidden transition-all duration-300 ${badgeTone === 'primary'
                            ? 'bg-[#1a1d24] border-primary'
                            : badgeTone === 'success'
                                ? 'bg-[#1a1d24]/80 border-success/30'
                                : 'bg-[#1a1d24]/40 border-white/5'
                        }`}
                >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl" />
                    <div className="flex justify-between items-start mb-2">
                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${badgeToneClasses[badgeTone]}`}>
                            {badgeLabel}
                        </span>
                        <span className="text-xs text-gray-500">{progressValue}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl font-serif text-primary/80">{chinese}</span>
                        <span className="text-sm text-gray-400">({pinyin})</span>
                    </div>
                    {description && <p className="text-sm text-gray-400 mb-5 leading-relaxed">{description}</p>}

                    {stats && (
                        <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                            {stats.map((item, index) => (
                                <div key={index} className="flex items-center gap-1">
                                    {item.icon}
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    )}

                    {actionLabel && actionHref && (
                        <Link
                            href={actionHref}
                            className="w-full py-3 bg-primary hover:bg-primary-glow text-white font-bold rounded-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all"
                        >
                            <span>{actionLabel}</span>
                            {actionIcon}
                        </Link>
                    )}
                </div>
            </div>

            <div className="hidden md:block md:w-[42%]" />
        </div>
    );
}
