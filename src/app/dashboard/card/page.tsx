"use client";
import { useRouter } from 'next/navigation';
import { MdChevronLeft, MdAutoAwesome } from '@/components/icons/material';
import { FlashcardDisplay } from '@/components/flashcard/FlashcardDisplay';
import { useFlashcard } from '@/components/flashcard/useFlashcard';
import { FLASHCARDS, getCardDetail } from '@/components/flashcard/data';
import type { Card, CardBackDetail } from '@/components/flashcard/data';

export default function FlashCardPage() {
    const router = useRouter();
    const { card, currentIndex, isFlipped, handleRotate } = useFlashcard(FLASHCARDS);

    const handleBack = () => {
        router.push('/dashboard');
    };

    return (
        <div className="bg-background-dark text-white h-screen flex flex-col overflow-auto selection:bg-primary selection:text-black">
            {/* Header */}
            <header className="w-full px-4 pt-6 pb-2 z-50">
                <div className="max-w-md mx-auto flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <button onClick={handleBack} className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                            <MdChevronLeft className="text-2xl" />
                            <span className="text-sm font-medium">Буцах</span>
                        </button>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-primary tracking-widest uppercase">Хичээл 1</span>
                        </div>
                        <div className="w-8"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-end">
                            <span className="text-xs text-gray-500 font-medium tracking-wide">Явц</span>
                            <span className="text-sm font-bold text-white">
                                {currentIndex + 1} <span className="text-gray-500">/ {FLASHCARDS.length} ханз</span>
                            </span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary rounded-full transition-all duration-300"
                                style={{ width: `${((currentIndex + 1) / FLASHCARDS.length) * 100}%`, boxShadow: '0 0 8px rgba(19,236,37,0.5)' }}
                            ></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="grow flex items-center justify-center px-4 py-2 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

                <FlashcardDisplay
                    card={card}
                    isFlipped={isFlipped}
                    onRotate={handleRotate}
                    renderFront={(c) => <FrontSide card={c} />}
                    renderBack={(c) => <BackSide card={c} detail={getCardDetail(c)} />}
                    maxHeightClass="max-h-[600px]"
                />
            </main>

            {/* Floating Action Button */}
            <div className="fixed bottom-5 right-25 z-50">
                <button className="w-14 h-14 bg-surface-dark border border-primary/30 rounded-2xl flex items-center justify-center text-primary shadow-[0_0_20px_rgba(19,236,37,0.2)] hover:shadow-[0_0_30px_rgba(19,236,37,0.4)] transition-all group active:scale-90">
                    <MdAutoAwesome className="text-3xl group-hover:scale-110 transition-transform" />
                </button>
            </div>

            {/* Bottom Separator */}
            <div className="w-full h-1 bg-white/5 max-w-30 mx-auto mb-2 rounded-full"></div>
        </div>
    );
}

function FrontSide({ card }: { card: Card }) {
    return (
        <div className="grow flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-2">
                <span className="text-6xl md:text-9xl font-bold text-white tracking-tighter">{card.char}</span>
            </div>
            <div>
                <span className="text-2xl md:text-3xl font-medium text-primary tracking-widest">{card.pinyin}</span>
            </div>
        </div>
    );
}

function BackSide({ card, detail }: { card: Card; detail: CardBackDetail }) {
    return (
        <div className="flex flex-col h-full px-4 pt-4 pb-2 gap-3 overflow-hidden">
            <div className="text-center">
                <span className="text-gray-400 text-xl font-light block">{card.char}</span>
                <h2 className="text-2xl font-bold text-primary leading-tight tracking-wide">
                    {detail.title ?? card.meaning}
                </h2>
            </div>

            <div className="bg-[#1c271c] border border-[#28392a] rounded-2xl p-3 flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-[9px] text-[#9db99f] uppercase tracking-widest font-bold">Дуудлага</span>
                    <span className="text-3xl font-bold text-white tracking-wide">{card.pinyin}</span>
                </div>
                <div className="size-12 bg-primary text-black rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold">⏵</span>
                </div>
            </div>

            <div className="h-px bg-linear-to-r from-transparent via-[#28392a] to-transparent shrink-0" />

            <div className="space-y-4 grow flex flex-col justify-start overflow-hidden">
                {(detail.radicalChar || detail.radicalTitle || detail.radicalDescription) && (
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-[#9db99f]">
                            <span className="text-base text-primary">🧩</span>
                            <h4 className="text-[10px] uppercase tracking-widest font-bold">Язгуур</h4>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-xl bg-[#111812]/50 border border-[#28392a]">
                            <div className="shrink-0 size-10 rounded-lg bg-[#28392a] flex items-center justify-center text-primary border border-primary/20">
                                <span className="text-xl font-bold">{detail.radicalChar}</span>
                            </div>
                            <div className="grow">
                                <p className="font-bold text-white text-sm">{detail.radicalTitle}</p>
                                <p className="text-[#9db99f] text-[11px] leading-relaxed mt-0.5 line-clamp-2">{detail.radicalDescription}</p>
                            </div>
                        </div>
                    </div>
                )}

                {(detail.exampleSentence || detail.exampleTranslation) && (
                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-[#9db99f]">
                            <span className="text-base text-primary">💬</span>
                            <h4 className="text-[10px] uppercase tracking-widest font-bold">Жишээ өгүүлбэр</h4>
                        </div>
                        <div className="p-3 rounded-xl bg-[#111812]/50 border border-[#28392a] space-y-1">
                            <p className="text-base text-white font-medium">{detail.exampleSentence}</p>
                            {detail.examplePinyin && <p className="text-primary/80 text-xs italic">{detail.examplePinyin}</p>}
                            <div className="pt-2 border-t border-[#28392a]">
                                <p className="text-[#9db99f] text-[11px] font-medium">{detail.exampleTranslation}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}