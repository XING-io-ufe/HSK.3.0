type BackgroundEffectsProps = {
    variant?: 'default' | 'minimal';
};

export default function BackgroundEffects({ variant = 'default' }: BackgroundEffectsProps) {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />
            <div className="absolute inset-0 bg-linear-to-b from-background-dark via-transparent to-background-dark" />
            {variant === 'default' && (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full filter blur-[100px]" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full filter blur-[100px]" />
                </div>
            )}
        </div>
    );
}
