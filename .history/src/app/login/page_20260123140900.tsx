"use client";

import { useState } from "react";
import {
    MdLock,
    MdAlternateEmail,
    MdLockOpen,
    MdArrowForward,
} from "@/components/icon/Material_icon";

type AuthTab = "login" | "signup";

export default function LoginPage() {
    const [activeTab, setActiveTab] = useState<AuthTab>("login");

    const InputField = ({
        label,
        placeholder,
        type = "text",
        icon,
    }: {
        label: string;
        placeholder: string;
        type?: string;
        icon: React.ReactNode;
    }) => (
        <div>
            <label className="mb-1 ml-1 block text-xs font-medium text-gray-400">
                {label}
            </label>
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    {icon}
                </div>
                <input
                    className="block w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-3 py-3 text-sm text-white placeholder-gray-500 shadow-inner transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/60"
                    placeholder={placeholder}
                    type={type}
                />
            </div>
        </div>
    );

    const TabButton = ({ label, tab }: { label: string; tab: AuthTab }) => (
        <button
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-center text-sm sm:text-base font-semibold transition-all border-b-2 border-transparent ${
                activeTab === tab
                    ? "text-primary border-primary bg-white/5"
                    : "text-gray-400 hover:text-white"
            }`}
        >
            {label}
        </button>
    );

    return (
        <main className="relative overflow-hidden bg-background-dark text-white selection:bg-primary selection:text-black">
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
            </div>

            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden flex justify-center items-center">
                <div className="floating-char absolute top-[15%] left-[10%] select-none text-[120px] font-black text-white/5">
                    中
                </div>
                <div className="floating-char delay-100 absolute top-[25%] right-[15%] select-none text-[100px] font-black text-white/5">
                    国
                </div>
                <div className="floating-char delay-200 absolute bottom-[20%] left-[20%] select-none text-[140px] font-black text-white/5">
                    学
                </div>
                <div className="floating-char delay-300 absolute bottom-[30%] right-[10%] select-none text-[90px] font-black text-primary/10">
                    习
                </div>
            </div>

            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16">
                <div className="w-full max-w-2xl">
                    <div className="glass-card relative overflow-hidden rounded-2xl bg-black/30 shadow-2xl">
                        <div className="flex border-b border-white/5 bg-black/30">
                            <TabButton label="Нэвтрэх" tab="login" />
                            <TabButton label="Бүртгүүлэх" tab="signup" />
                        </div>

                        <div className="p-8">
                            {activeTab === "login" && (
                                <div className="space-y-8 animate-in fade-in">
                                    <div className="text-center">
                                        <h2 className="mb-2 text-2xl font-bold">Тавтай морил</h2>
                                        <p className="text-sm text-gray-400">
                                            Үргэлжлүүлэхийн тулд бүртгэлээрээ нэвтэрнэ үү
                                        </p>
                                    </div>

                                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                        <InputField
                                            label="Имэйл эсвэл Утасны дугаар"
                                            placeholder="name@example.com"
                                            icon={<MdAlternateEmail size={20} />}
                                        />
                                        <div>
                                            <InputField
                                                label="Нууц үг"
                                                placeholder="••••••••"
                                                type="password"
                                                icon={<MdLock size={20} />}
                                            />
                                            <div className="mt-2 flex justify-end">
                                                <a className="text-xs text-primary transition-colors hover:text-white" href="#">
                                                    Нууц үг мартсан?
                                                </a>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-base font-bold text-black transition-all hover:scale-[1.02] hover:bg-white neon-glow"
                                        >
                                            <span>НЭВТРЭХ</span>
                                            <MdArrowForward size={20} />
                                        </button>
                                    </form>

                                    <div className="relative text-sm text-gray-500">
                                        <div className="absolute inset-0 flex items-center" aria-hidden>
                                            <div className="w-full border-t border-white/10"></div>
                                        </div>
                                        <div className="relative flex justify-center">
                                            <span className="bg-[#121212] px-2">эсвэл</span>
                                        </div>
                                    </div>

                                    <button className="group flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/5 text-gray-200 transition-all hover:bg-white/10">
                                        <svg
                                            className="h-5 w-5 opacity-70 transition-opacity group-hover:opacity-100"
                                            viewBox="0 0 24 24"
                                            role="img"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                fill="#4285F4"
                                            ></path>
                                            <path
                                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                fill="#34A853"
                                            ></path>
                                            <path
                                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                fill="#FBBC05"
                                            ></path>
                                            <path
                                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                fill="#EA4335"
                                            ></path>
                                        </svg>
                                        <span>Google-ээр нэвтрэх</span>
                                    </button>
                                </div>
                            )}

                            {activeTab === "signup" && (
                                <div className="space-y-8 animate-in fade-in">
                                    <div className="text-center">
                                        <h2 className="mb-2 text-2xl font-bold">Шинэ бүртгэл</h2>
                                        <p className="text-sm text-gray-400">
                                            HSK 3.0 сургалтанд яг одоо нэгдээрэй
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/10 p-4">
                                        <MdLockOpen className="mt-0.5 text-primary" size={22} />
                                        <div className="text-xs leading-relaxed text-gray-200">
                                            <strong className="mb-1 block text-white">Төлбөр төлсөн үү?</strong>
                                            Бүртгүүлсний дараа QPay гүйлгээ автоматаар танигдаж, таны эрх шууд нээгдэнэ.
                                        </div>
                                    </div>

                                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                        <InputField
                                            label="Имэйл эсвэл Утасны дугаар"
                                            placeholder="name@example.com"
                                            icon={<MdAlternateEmail size={20} />}
                                        />
                                        <InputField
                                            label="Нууц үг"
                                            placeholder="••••••••"
                                            type="password"
                                            icon={<MdLock size={20} />}
                                        />
                                        <InputField
                                            label="Нууц үг давтах"
                                            placeholder="••••••••"
                                            type="password"
                                            icon={<MdLockOpen size={20} />}
                                        />
                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-base font-bold text-black transition-all hover:scale-[1.02] hover:bg-white neon-glow"
                                            >
                                                <span>БҮРТГҮҮЛЭХ</span>
                                                <MdArrowForward size={20} />
                                            </button>
                                        </div>
                                    </form>

                                    <div className="text-center text-xs text-gray-500">
                                        Бүртгүүлснээр та манай
                                        <a className="ml-1 underline text-gray-400 transition-colors hover:text-primary" href="#">
                                            Үйлчилгээний нөхцөл
                                        </a>
                                        -ийг зөвшөөрч байна.
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-8 text-center text-sm text-gray-500">
                        <div className="flex items-center justify-center gap-2">
                            <MdLock size={16} className="text-primary" />
                            <span>Таны мэдээлэл 100% найдвартай хамгаалагдсан.</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}