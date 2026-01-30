"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { CSSProperties } from 'react';
import { MdArrowBack, MdSettings, MdCached, MdVisibility, MdChevronRight, MdArrowForward } from '@/components/icons/material';
import { FLASHCARDS } from '@/components/flashcard/data';
import { useFlashcard } from '@/components/flashcard/useFlashcard';
import type { Card } from '@/components/flashcard/data';

const gridBackground: CSSProperties = {
    backgroundImage:
        'linear-gradient(to right, rgba(19, 236, 37, 0.1) 1px, transparent 1px),' +
        'linear-gradient(to bottom, rgba(19, 236, 37, 0.1) 1px, transparent 1px),' +
        'linear-gradient(45deg, rgba(19, 236, 37, 0.05) 1px, transparent 1px),' +
        'linear-gradient(-45deg, rgba(19, 236, 37, 0.05) 1px, transparent 1px)',
    backgroundSize: '50% 50%, 50% 50%, 100% 100%, 100% 100%',
    backgroundPosition: 'center',
};

const glassPanelStyle: CSSProperties = {
    backdropFilter: 'blur(16px)',
    background: 'rgba(10, 15, 10, 0.85)',
    border: '1px solid rgba(19, 236, 37, 0.2)',
};

const neonGlow: CSSProperties = {
    boxShadow: '0 0 20px rgba(19, 236, 37, 0.4)',
};

export default function HanziPracticePage() {
    const router = useRouter();
    const { card, setCurrentIndex } = useFlashcard(FLASHCARDS);
    const [isReview, setIsReview] = useState(false);

    const handlePrimary = () => {
        if (!isReview) {
            setIsReview(true);
        } else {
            setCurrentIndex((prev) => (prev + 1) % FLASHCARDS.length);
            setIsReview(false);
        }
    };

    const handleBack = () => {
        router.push('/dashboard');
    };

    return (
        <div className="bg-background-dark text-white min-h-screen relative overflow-y-auto selection:bg-primary selection:text-black">
            <div className="fixed top-[-10%] left-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="fixed bottom-[-5%] right-[-5%] w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex h-full min-h-screen flex-col items-center overflow-auto pb-20 px-4">
                <Header onBack={handleBack} isReview={isReview} />

                <main className="flex w-full max-w-225 flex-col px-6 gap-10">
                    {isReview ? <ReviewView card={card} /> : <PracticeView card={card} />}

                    <Controls disabled={isReview} />
                </main>

                <Footer onNext={handlePrimary} isReview={isReview} />
            </div>
        </div>
    );
}

function Header({ onBack, isReview }: { onBack: () => void; isReview: boolean }) {
    return (
        <header className="w-full max-w-225 flex items-center justify-between px-6 py-4 z-10">
            <button onClick={onBack} className="text-white/70 hover:text-primary transition-colors flex items-center gap-1">
                <MdArrowBack className="text-xl" />
            </button>
            <div className="flex flex-col items-center text-center">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">{isReview ? 'AI Оношлогоо' : 'Дадлага'}</span>
                <h2 className="text-sm font-bold uppercase tracking-widest">{isReview ? 'Үнэлгээ' : 'Түвшин 1: Үндсэн'}</h2>
            </div>
            <div className="flex gap-3 text-white/70">
                <MdSettings />
            </div>
        </header>
    );
}

function PracticeView({ card }: { card: Card }) {
    const strokePercent = '50.5%';

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col items-start pt-2">
                    <div className="relative">
                        <h1 className="text-white text-[72px] font-bold leading-tight mb-0">{card.char}</h1>
                        <div className="absolute -top-2 -right-6 bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded border border-primary/30 font-bold uppercase tracking-wider">HSK 1</div>
                    </div>
                    <div className="flex flex-col items-start gap-1 mt-2">
                        <h2 className="text-primary text-xl font-bold tracking-widest">{card.pinyin}</h2>
                        <p className="text-white/60 text-base font-medium">{card.meaning}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <div className="flex justify-between items-end">
                        <p className="text-white/50 text-xs font-medium uppercase tracking-tighter">Зураасны дараалал</p>
                        <p className="text-primary text-xs font-bold">3 / 8</p>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: strokePercent, ...neonGlow }}></div>
                    </div>
                </div>

                <div className="text-left h-6">
                    <p className="text-primary/80 text-xs font-medium tracking-wide italic">Дээрээс нь доош зураарай...</p>
                </div>
            </div>

            <div className="relative aspect-square w-full rounded-xl overflow-hidden border-2 border-white/5 shadow-2xl" style={gridBackground}>
                <svg className="absolute w-[90%] h-[90%] flex justify-center items-center opacity-10 pointer-events-none" viewBox="0 0 100 100">
                    <text fill="white" fontFamily="serif" fontSize="90" textAnchor="middle" x="55%" y="85%">
                        {card.char}
                    </text>
                </svg>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[25%] left-[30%] flex flex-col items-center animate-pulse">
                        <span className="bg-primary text-black text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center mb-1">4</span>
                        <span className="material-symbols-outlined text-primary text-2xl" style={{ transform: 'rotate(135deg)' }}>
                            ➡️
                        </span>
                    </div>
                </div>

                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                    <path className="opacity-40" d="M120,100 L180,100" fill="none" stroke="#13ec25" strokeLinecap="round" strokeWidth="8"></path>
                    <path className="opacity-40" d="M220,100 L280,100" fill="none" stroke="#13ec25" strokeLinecap="round" strokeWidth="8"></path>
                    <path className="opacity-40" d="M200,80 Q210,140 200,200" fill="none" stroke="#13ec25" strokeLinecap="round" strokeWidth="12"></path>
                </svg>

                <div className="absolute top-[45%] left-[48%] pointer-events-none">
                    <span className="material-symbols-outlined text-white text-3xl opacity-80 drop-shadow-lg">👆</span>
                </div>
            </div>
        </div>
    );
}

function ReviewView({ card }: { card: Card }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="flex flex-col items-start pt-4 gap-2 opacity-40">
                <div className="relative">
                    <h1 className="text-white text-[72px] font-bold leading-tight mb-0">{card.char}</h1>
                    <div className="absolute -top-2 -right-6 bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded border border-primary/30 font-bold uppercase tracking-wider">HSK 1</div>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <h2 className="text-primary text-xl font-bold tracking-widest uppercase">{card.pinyin}</h2>
                    <p className="text-white/60 text-base font-medium">{card.meaning}</p>
                </div>
            </div>

            <div className="relative aspect-square w-full rounded-xl overflow-hidden border-2 border-white/5 shadow-2xl">
                <div className="absolute inset-0 opacity-30" style={gridBackground}></div>
                <svg className="absolute inset-0 w-full h-full p-[10%]" viewBox="0 0 100 100">
                    <path className="drop-shadow-[0_0_8px_#13ec25]" d="M20,25 Q30,22 45,25" fill="none" stroke="#13ec25" strokeLinecap="round" strokeWidth="6"></path>
                    <path className="drop-shadow-[0_0_8px_#13ec25]" d="M55,25 Q70,22 80,25" fill="none" stroke="#13ec25" strokeLinecap="round" strokeWidth="6"></path>
                    <path className="drop-shadow-[0_0_8px_#13ec25]" d="M30,45 L70,45 L70,55 Q70,60 65,60 L35,60 Q30,60 30,55 Z" fill="none" stroke="#13ec25" strokeLinecap="round" strokeWidth="6"></path>
                    <path className="drop-shadow-[0_0_8px_#13ec25]" d="M50,60 L50,85 Q50,90 40,90" fill="none" stroke="#13ec25" strokeLinecap="round" strokeWidth="6"></path>
                    <path className="drop-shadow-[0_0_8px_#f97316]" d="M48,15 L52,35" fill="none" stroke="#f97316" strokeLinecap="round" strokeWidth="7"></path>
                    <circle className="animate-pulse" cx="50" cy="25" fill="#f97316" r="4"></circle>
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center" style={glassPanelStyle}>
                    <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'radial-gradient(closest-side, #0a0f0a 79%, transparent 80% 100%), conic-gradient(#13ec25 92%, rgba(255,255,255,0.1) 0)',
                                ...neonGlow,
                            }}
                        />
                        <div className="relative z-10 flex flex-col items-center">
                            <span className="text-3xl font-bold text-primary" style={{ textShadow: '0 0 10px rgba(19, 236, 37, 0.5)' }}>
                                92%
                            </span>
                            <span className="text-[10px] uppercase font-bold text-white/60 tracking-tighter">Оноо</span>
                        </div>
                    </div>

                    <div className="space-y-3 mb-8">
                        <h3 className="text-primary font-bold text-lg tracking-wide uppercase">Маш сайн!</h3>
                        <p className="text-sm leading-relaxed text-white/90 font-medium px-2">
                            Зураасны дараалал болон харьцаа тун зөв байна.
                            <span className="text-primary font-semibold"> Зүүн талын цэгийг</span> бага зэрэг сунгаж бичээрэй.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        <button className="w-full bg-white/5 border border-white/20 text-white h-12 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all uppercase text-xs tracking-wider">
                            <MdCached className="text-sm" />
                            Дахин бичих
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Controls({ disabled }: { disabled: boolean }) {
    const baseClasses = disabled ? 'opacity-20 pointer-events-none' : '';

    return (
        <div className={`grid grid-cols-3 gap-4 items-center mt-auto pb-10 ${baseClasses}`}>
            <button className="flex flex-col items-center gap-2 group">
                <div className="size-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-all">
                    <MdCached className="text-white/70 group-hover:text-white" />
                </div>
                <span className="text-[10px] text-white/50 font-bold uppercase tracking-tighter">Дахин эхлэх</span>
            </button>
            <button className="flex flex-col items-center gap-2 group">
                <div className="size-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-all">
                    <MdVisibility className="text-primary" />
                </div>
                <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">Харах</span>
            </button>
            <button className="flex flex-col items-center gap-2 group">
                <div className="size-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-all">
                    <MdChevronRight className="text-white/70 group-hover:text-white" />
                </div>
                <span className="text-[10px] text-white/50 font-bold uppercase tracking-tighter">Алгасах</span>
            </button>
        </div>
    );
}

function Footer({ onNext, isReview }: { onNext: () => void; isReview: boolean }) {
    return (
        <footer className="w-full max-w-120 px-6 pb-8 z-10">
            <button
                onClick={onNext}
                className="w-full bg-primary text-black h-14 rounded-xl font-bold flex items-center justify-center gap-3"
                style={neonGlow}
            >
                <span>{isReview ? 'Дараагийн ханз' : 'Дараагийн ханз'}</span>
                <MdArrowForward />
            </button>
        </footer>
    );
}