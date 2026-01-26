import type { ReactNode } from 'react';

export type LessonHeroProps = {
    breadcrumb: string[];
    title: string;
    description: string;
    badge?: ReactNode;
};

export default function LessonHero({ breadcrumb, title, description, badge }: LessonHeroProps) {
    return (
        <header className="mb-10 space-y-3">
            <nav className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.2em]">
                {breadcrumb.map((item, index) => (
                    <div key={item} className="flex items-center gap-2">
                        <span>{item}</span>
                        {index < breadcrumb.length - 1 && (
                            <span className="text-[12px] text-text-muted">/</span>
                        )}
                    </div>
                ))}
            </nav>
            <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="space-y-2">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">{title}</h1>
                    <p className="text-lg text-text-secondary max-w-3xl leading-relaxed">{description}</p>
                </div>
                {badge}
            </div>
        </header>
    );
}
