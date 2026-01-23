import { ReactNode } from 'react';

type GlassCardProps = {
    children: ReactNode;
    className?: string;
    withGlow?: boolean;
};

export default function GlassCard({ children, className = '', withGlow = false }: GlassCardProps) {
    return (
        <div className={`glass-card rounded-2xl border border-border-subtle ${withGlow ? 'relative group' : ''} ${className}`}>
            {withGlow && (
                <div className="absolute -inset-0.5 bg-linear-to-br from-primary/30 to-info/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 -z-10" />
            )}
            {children}
        </div>
    );
}

