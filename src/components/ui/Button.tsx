import type { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    children: ReactNode;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    fullWidth?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-black font-bold hover:bg-white neon-glow hover:scale-105',
    secondary: 'border border-border-subtle bg-white/5 text-text-primary font-bold hover:bg-white/10 backdrop-blur-sm',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-white/5',
    outline: 'border border-border-accent text-primary font-bold hover:bg-primary hover:text-black',
};

export default function Button({
    variant = 'primary',
    children,
    icon,
    iconPosition = 'right',
    fullWidth = false,
    className = '',
    ...props
}: ButtonProps) {
    return (
        <button
            className={`
                h-12 px-8 rounded-lg text-base transition-all flex items-center justify-center gap-2
                ${variantStyles[variant]}
                ${fullWidth ? 'w-full' : ''}
                ${className}
            `}
            {...props}
        >
            {icon && iconPosition === 'left' && icon}
            <span>{children}</span>
            {icon && iconPosition === 'right' && icon}
        </button>
    );
}
