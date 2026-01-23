"use client";

import Link from 'next/link';
import type { ReactNode } from 'react';
import { MdAlternateEmail, MdArrowForward } from '@/components/icon/Material_icon';

function InputField({ label, placeholder, icon }: { label: string; placeholder: string; icon: ReactNode }) {
    return (
        <div>
            <label className="mb-1 ml-1 block text-xs font-medium text-gray-400">{label}</label>
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">{icon}</div>
                <input
                    className="block w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-3 py-3 text-sm text-white placeholder-gray-500 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/60"
                    placeholder={placeholder}
                    type="text"
                />
            </div>
        </div>
    );
}

export default function ForgetPasswordPage() {
    return (
        <main className="relative overflow-hidden bg-background-dark text-white selection:bg-primary selection:text-black min-h-screen flex items-center justify-center py-24 px-4">
            <div className="w-full max-w-lg">
                <div className="glass-card rounded-2xl bg-black/30 p-8 shadow-2xl">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold">Нууц үг сэргээх</h1>
                        <p className="text-sm text-gray-400">Имэйл эсвэл утасны дугаараа оруулаад сэргээх зааврыг илгээнэ үү.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <InputField label="Имэйл эсвэл Утасны дугаар" placeholder="name@example.com" icon={<MdAlternateEmail size={18} />} />

                        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-black neon-glow hover:scale-[1.02] transition">
                            Илгээх
                            <MdArrowForward size={18} />
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-400">
                        <Link href="/login" className="text-primary underline hover:text-white">
                            Буцах — Нэвтрэх хуудас
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
