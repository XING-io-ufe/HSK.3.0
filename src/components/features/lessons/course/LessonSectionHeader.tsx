import type { ReactNode } from 'react';

export type LessonSectionHeaderProps = {
    id: string;
    icon: ReactNode;
    title: string;
    eyebrow?: string;
};

export default function LessonSectionHeader({ id, icon, title, eyebrow }: LessonSectionHeaderProps) {
    const headingId = `${id}-title`;

    return (
        <div id={id} className="flex items-center gap-3 mb-6 scroll-mt-24">
            <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                {icon}
            </div>
            <div>
                {eyebrow && <div className="text-xs uppercase tracking-widest text-primary font-bold">{eyebrow}</div>}
                <h2 id={headingId} className="text-2xl font-bold text-white">{title}</h2>
            </div>
        </div>
    );
}
