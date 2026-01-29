"use client";
import React, { useState } from 'react';
import { MdSmartToy, MdClose, MdBolt, MdSend } from '@/components/icons/material';

type ChatbotProps = {
    /** 'float' shows a floating panel (default), 'inline' renders as a normal block */
    position?: 'float' | 'inline';
    className?: string;
    /** CSS z-index for the wrapper (number). Use to prevent overlaying other UI. */
    zIndex?: number;
    /** Extra bottom offset (px or css) to keep the widget above page footer, e.g. '80px' or '4rem' */
    bottomOffset?: string | number;
    /** Whether to show the floating toggle button when minimized (default true) */
    showToggle?: boolean;
    /** Whether the chatbot is open by default */
    defaultOpen?: boolean;
};

export default function Chatbot({
    position = 'float',
    className = '',
    zIndex = 1000,
    bottomOffset = 0,
    showToggle = true,
    defaultOpen = false,
}: ChatbotProps) {
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
    const [minimized, setMinimized] = useState<boolean>(!defaultOpen);
    // When opened on small screens, make the widget fullscreen (inset-0).
    const mobileFullClass = position === 'float' && isOpen ? 'inset-0 md:inset-auto' : '';
    const wrapperClass =
        position === 'float'
            ? `${mobileFullClass} fixed bottom-0 right-0 w-full md:bottom-6 md:right-6 md:w-[420px] lg:w-[450px]`
            : 'relative w-full';



    // minimized state is managed directly in event handlers to avoid effect-triggered re-renders

    return (
        <>
            {/* Floating toggle button when minimized */}
            {showToggle && minimized && (
                <button
                    aria-label="Open chat"
                    onClick={() => {
                        setIsOpen(true);
                        setMinimized(false);
                    }}
                    className="fixed right-4 bottom-6 z-999 md:right-8 md:bottom-8 bg-primary rounded-full p-4 shadow-lg flex items-center justify-center"
                    style={{ zIndex: zIndex + 1 }}
                >
                    <MdSmartToy className="text-black" />
                </button>
            )}

            <div
                className={`${wrapperClass} ${className} transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
                    }`}
                style={{
                    zIndex,
                    // when mobileFullClass is active we use inset-0 and should not set bottom
                    ...(mobileFullClass ? {} : { bottom: typeof bottomOffset === 'number' ? `${bottomOffset}px` : bottomOffset }),
                }}
            >
                <div className={`flex flex-col bg-[#071007]/60 backdrop-blur-sm rounded-2xl border border-white/5 shadow-lg overflow-hidden ${position === 'float' && isOpen ? 'h-full' : 'max-h-[80vh]'}`}>
                    <header className="flex items-center justify-between px-4 py-3 border-b border-primary/10">
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <MdSmartToy className="text-primary text-xl" />
                            </div>
                            <h1 className="font-display font-bold text-sm tracking-wide uppercase">AI Ханз Тайлагч</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                aria-label={isOpen ? 'Minimize chat' : 'Open chat'}
                                onClick={() => {
                                    if (isOpen) {
                                        // minimize to floating dot
                                        setIsOpen(false);
                                        setMinimized(true);
                                    } else {
                                        setIsOpen(true);
                                        setMinimized(false);
                                    }
                                }}
                                className="size-8 rounded-full hover:bg-white/5 flex items-center justify-center transition-colors"
                            >
                                {isOpen ? <MdClose className="text-gray-400" /> : <MdSmartToy className="text-primary" />}
                            </button>
                        </div>
                    </header>

                    <div className="flex-1 overflow-auto p-4 space-y-4" style={{ WebkitOverflowScrolling: 'touch' }}>
                        <div className="flex gap-3 max-w-[85%]">
                            <div className="shrink-0 size-8 rounded-full bg-primary flex items-center justify-center text-black">
                                <MdBolt className="text-sm font-bold" />
                            </div>
                            <div className="bg-[#0f1a0f] border border-[#19261a] rounded-2xl rounded-tl-none p-3">
                                <p className="text-sm leading-relaxed">Сайн байна уу? Би таны AI туслагч байна. &quot;学&quot; (xué) ханзны талаар асуух зүйл байна уу?</p>
                                <span className="text-[10px] text-gray-500 mt-2 block">10:42 AM</span>
                            </div>
                        </div>

                        <div className="flex flex-row-reverse gap-3 max-w-[85%] ml-auto">
                            <div className="shrink-0 size-8 rounded-full bg-[#19261a] flex items-center justify-center overflow-hidden">
                                <div
                                    className="size-full bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNagyMxKBnXvTuUIJKL6UHN-l2ye8t6hbGyqdSWHrep_ykpTvQltJRc1j9qYSVF9oALKqxIuWShVPfonVOmBYTvcbUwAYvgAm7OWIC1GqBbqz0XaidTspGnIIZZyxMps_6u2D8WWcdyorG6iN20Yx0Hn-9W22-oonXhQIoFywstvCblYxcMw-8eNDFY-6CdwS22EF85wo7eZb1r4rE_wkJIiiO-cKgCXp0xbOz0VI81KZjmTT8jHSXCnrZj1uArsR2GnH7HQG1VcE")',
                                    }}
                                />
                            </div>
                            <div className="bg-primary text-black rounded-2xl rounded-tr-none p-3 shadow-sm shadow-primary/10">
                                <p className="text-sm font-medium">Энэ ханзны язгуур нь ямар утгатай вэ?</p>
                                <span className="text-[10px] opacity-60 mt-2 block text-right">10:43 AM</span>
                            </div>
                        </div>

                        <div className="flex gap-3 max-w-[85%]">
                            <div className="shrink-0 size-8 rounded-full bg-primary flex items-center justify-center text-black">
                                <MdBolt className="text-sm font-bold" />
                            </div>
                            <div className="bg-[#0f1a0f] border border-[#19261a] rounded-2xl rounded-tl-none p-3">
                                <p className="text-sm leading-relaxed">
                                    &quot;学&quot; ханзны язгуур нь <strong className="text-primary font-bold">子 (zǐ)</strong> буюу &quot;хүүхэд&quot; гэсэн утгатай юм.
                                </p>
                                <span className="text-[10px] text-gray-500 mt-2 block">10:43 AM</span>
                            </div>
                        </div>
                    </div>

                    <footer className="p-4 pt-2 bg-[#071007]/70 border-t border-primary/5">
                        <div className="flex gap-2 mb-3 overflow-x-auto pb-1 no-scrollbar">
                            <button className="whitespace-nowrap px-3 py-1 rounded-full bg-[#0f1a0f] border border-[#19261a] text-xs font-medium text-gray-300 hover:border-primary/40 hover:text-primary transition-all">
                                Бичих дараалал
                            </button>
                            <button className="whitespace-nowrap px-3 py-1 rounded-full bg-[#0f1a0f] border border-[#19261a] text-xs font-medium text-gray-300 hover:border-primary/40 hover:text-primary transition-all">
                                Түүх
                            </button>
                            <button className="whitespace-nowrap px-3 py-1 rounded-full bg-[#0f1a0f] border border-[#19261a] text-xs font-medium text-gray-300 hover:border-primary/40 hover:text-primary transition-all">
                                Утга задрал
                            </button>
                        </div>

                        <div className="relative flex items-end gap-2 bg-[#0f1a0f] border border-[#19261a] rounded-2xl p-2 focus-within:border-primary/50 transition-all">
                            <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                                <MdSend />
                            </button>
                            <textarea className="grow bg-transparent border-none focus:ring-0 text-sm py-2 resize-none placeholder:text-gray-600" placeholder="Асуултаа энд бичнэ үү..." rows={1} />
                            <button className="bg-primary text-black px-3 py-2 rounded-xl font-bold text-xs tracking-wider shadow-neon active:scale-95 transition-all">
                                ИЛГЭЭХ
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
