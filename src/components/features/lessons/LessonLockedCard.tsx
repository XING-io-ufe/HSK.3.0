import type { ReactNode } from 'react';
import { MdLock } from '@/components/icons/material';
import LessonMarker from './LessonMarker';

type LessonLockedCardProps = {
    layoutSide?: 'left' | 'right';
    title: string;
    chinese?: string;
    badge?: string;
    markerIcon?: ReactNode;
};

export default function LessonLockedCard({
    layoutSide = 'left',
    title,
    chinese,
    badge = 'Түгжээтэй',
    markerIcon,
}: LessonLockedCardProps) {
    const isRight = layoutSide === 'right';
    const icon = markerIcon ?? <MdLock className="text-sm" />;

    return (
        <div className={`relative mb-8 group md:flex md:justify-between md:items-center w-full ${isRight ? '' : 'md:flex-row-reverse'} opacity-70 hover:opacity-100 transition-opacity duration-300`}>
            <div className="absolute left-0 md:left-1/2 md:-ml-4 z-10">
                <LessonMarker status="locked" icon={icon} sizeClass="h-10 w-10" />
            </div>

            <div className="ml-16 md:ml-0 md:w-[42%]">
                <div className="bg-[#1a1d24]/40 backdrop-blur-sm border border-white/5 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider border border-white/5 px-2 py-0.5 rounded text-gray-500">
                            {badge}
                        </span>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-300">{title}</h3>
                        {chinese && (
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-serif text-gray-500">{chinese}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="hidden md:block md:w-[42%]" />
        </div>
    );
}
