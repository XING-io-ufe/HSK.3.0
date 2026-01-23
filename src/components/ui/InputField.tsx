import type { ReactNode } from 'react';

type InputFieldProps = {
    label: string;
    placeholder: string;
    type?: string;
    icon?: ReactNode;
    className?: string;
};

export default function InputField({ label, placeholder, type = 'text', icon, className = '' }: InputFieldProps) {
    return (
        <div className={className}>
            <label className="mb-1 ml-1 block text-xs font-medium text-text-secondary">
                {label}
            </label>
            <div className="relative">
                {icon && (
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted">
                        {icon}
                    </div>
                )}
                <input
                    className={`block w-full rounded-lg border border-border-subtle bg-white/5 ${icon ? 'pl-10' : 'pl-3'} pr-3 py-3 text-sm text-text-primary placeholder-text-muted shadow-inner transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/60`}
                    placeholder={placeholder}
                    type={type}
                />
            </div>
        </div>
    );
}
