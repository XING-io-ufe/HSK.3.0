"use client";

import { useState } from 'react';
import { MdArrowForward, MdSmartToy, MdSkipNext, MdCheck, MdInfo } from '@/components/icons/material';

interface WordChip {
    id: string;
    char: string;
    pinyin: string;
    meaning: string;
    type: 'subject' | 'verb' | 'object';
}

const WORD_CHIPS: WordChip[] = [
    { id: '1', char: '我', pinyin: 'Wǒ', meaning: 'I', type: 'subject' },
    { id: '2', char: '汉语', pinyin: 'Hànyǔ', meaning: 'Chinese', type: 'object' },
    { id: '3', char: '学习', pinyin: 'Xuéxí', meaning: 'Study', type: 'verb' },
];

const EXERCISE_PROGRESS = { current: 3, total: 10, percent: 30 };

export default function SVOExercisePage() {
    const [placed, setPlaced] = useState<{ [slot: string]: string | null }>({
        subject: null,
        verb: null,
        object: null,
    });
    const [draggedId, setDraggedId] = useState<string | null>(null);

    const handleDragStart = (id: string) => {
        setDraggedId(id);
    };

    const handleDragEnd = () => {
        setDraggedId(null);
    };

    const handleDrop = (slot: 'subject' | 'verb' | 'object' | 'pool') => {
        if (draggedId) {
            const word = WORD_CHIPS.find((w) => w.id === draggedId);
            if (!word) {
                setDraggedId(null);
                return;
            }

            const clearPrevious = (updated: typeof placed) => {
                Object.keys(updated).forEach((key) => {
                    if (updated[key] === draggedId) {
                        updated[key] = null;
                    }
                });
            };

            setPlaced((prev) => {
                const updated = { ...prev };
                clearPrevious(updated);
                if (slot !== 'pool') {
                    updated[slot] = draggedId;
                }
                return updated;
            });

            setDraggedId(null);
        }
    };

    const handleCheck = () => {
        if (placed.subject && placed.verb && placed.object) {
            alert('checked!');
        }
    };

    const handleSkip = () => {
        alert('skiped!');
    };

    const placedWords = {
        subject: WORD_CHIPS.find((w) => w.id === placed.subject),
        verb: WORD_CHIPS.find((w) => w.id === placed.verb),
        object: WORD_CHIPS.find((w) => w.id === placed.object),
    };

    return (
        <div className="bg-background-dark text-white h-screen flex flex-col overflow-y-auto">
            {/* Background Grid Effect */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-15" style={{
                backgroundImage: 'linear-gradient(to right, #1f2e1f 1px, transparent 1px), linear-gradient(to bottom, #1f2e1f 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            }} />

            {/* Main Content */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 md:p-8 w-full max-w-5xl mx-auto">
                {/* Progress Section */}
                <div className="w-full mb-8 md:mb-12">
                    <div className="flex justify-between items-end mb-2 px-1">
                        <span className="text-white font-medium">
                            Дасгал {EXERCISE_PROGRESS.current}/{EXERCISE_PROGRESS.total}
                        </span>
                        <span className="text-[#9cba9e] text-sm font-light">{EXERCISE_PROGRESS.percent}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#1e2e1f] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{
                                width: `${EXERCISE_PROGRESS.percent}%`,
                                boxShadow: '0 0 10px rgba(37, 244, 54, 0.3)',
                            }}
                        />
                    </div>
                </div>

                {/* Exercise Content Container */}
                <div className="w-full flex flex-col gap-8 md:gap-12">
                    {/* Heading & Hints */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                                Өгүүлбэрийг зөв дараалалд оруулна уу
                            </h1>
                            <div className="flex items-center gap-2 text-[#9cba9e]">
                                <MdInfo className="text-sm" />
                                <p className="text-sm font-normal">S + V + O (Subject + Verb + Object)</p>
                            </div>
                        </div>
                        {/* AI Help Button (Desktop) */}
                        <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 transition-all text-primary text-sm font-medium group">
                            <MdSmartToy className="text-lg group-hover:animate-pulse" />
                            AI Тусламж
                        </button>
                    </div>

                    {/* Target Sentence Hint */}
                    <div
                        className="rounded-xl p-6 text-center border-l-4 border-l-primary"
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <p className="text-[#9cba9e] text-sm uppercase tracking-widest mb-2">Орчуулга</p>
                        <p className="text-white text-xl md:text-2xl font-medium">&quot;Би Хятад хэл сурдаг&quot;</p>
                    </div>

                    {/* Interactive Area */}
                    <div className="flex flex-col gap-10 py-4">
                        {/* Drop Zones */}
                        <div className="flex flex-wrap justify-center gap-3 md:gap-6 min-h-30 items-center p-4 rounded-2xl bg-[#0f160f]/50 border border-dashed border-[#283929]">
                            {(['subject', 'verb', 'object'] as const).map((slot, idx) => (
                                <div key={slot} className="flex items-center">
                                    <DropZone
                                        slot={slot}
                                        word={placedWords[slot]}
                                        onDrop={() => handleDrop(slot)}
                                        onDragStartWord={handleDragStart}
                                    />
                                    {idx < 2 && <MdArrowForward className="text-[#283929] hidden sm:block mx-3" />}
                                </div>
                            ))}
                        </div>

                        {/* Draggable Chips Source */}
                        <div
                            className="flex flex-wrap justify-center gap-4 md:gap-6"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={() => handleDrop('pool')}
                            data-slot="pool"
                        >
                            {WORD_CHIPS.map((word) => (
                                <DraggableChip
                                    key={word.id}
                                    word={word}
                                    isDragging={draggedId === word.id}
                                    isPlaced={Object.values(placed).includes(word.id)}
                                    onDragStart={() => handleDragStart(word.id)}
                                    onDragEnd={handleDragEnd}
                                    onTouchDrop={(slot) => handleDrop(slot as 'subject' | 'verb' | 'object' | 'pool')}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Actions */}
            <footer className="relative bottom-0 z-20 w-full bg-background-dark/90 backdrop-blur-lg border-t border-[#283929]">
                <div className="max-w-5xl mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
                    <button
                        onClick={handleSkip}
                        className="px-6 py-3 rounded-xl border border-[#3b543d] text-[#9cba9e] hover:text-white hover:bg-[#3b543d]/30 transition-colors font-medium text-base flex items-center gap-2"
                    >
                        <MdSkipNext />
                        <span className="hidden sm:inline">Алгасах</span>
                    </button>

                    <button className="md:hidden flex items-center justify-center size-12 rounded-full border border-primary/30 bg-primary/10 text-primary">
                        <MdSmartToy />
                    </button>

                    <button
                        onClick={handleCheck}
                        className="px-8 py-3 rounded-xl bg-primary hover:bg-[#1fd62e] text-[#0B120B] font-bold text-base transition-all shadow-[0_0_20px_rgba(37,244,54,0.4)] hover:shadow-[0_0_30px_rgba(37,244,54,0.6)] flex items-center gap-2 active:scale-95"
                    >
                        <span>Шалгах</span>
                        <MdCheck className="font-bold" />
                    </button>
                </div>
            </footer>
        </div>
    );
}

function DropZone({ slot, word, onDrop, onDragStartWord }: { slot: string; word?: WordChip; onDrop: () => void; onDragStartWord: (id: string) => void }) {
    return (
        <div
            draggable={false}
            data-slot={slot}
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            className="relative w-32 h-20 md:w-40 md:h-24 rounded-xl border-2 border-[#283929] bg-[#111811] flex items-center justify-center transition-colors hover:border-primary/50 group cursor-drop"
        >
            {word ? (
                <div
                    draggable
                    onTouchStart={() => onDragStartWord(word.id)}
                    onDragStart={(e) => {
                        e.dataTransfer!.effectAllowed = 'move';
                        onDragStartWord(word.id);
                    }}
                    onDragEnd={(e) => {
                        e.dataTransfer!.dropEffect = 'move';
                    }}
                    className="flex flex-col items-center cursor-grab active:cursor-grabbing w-full h-full rounded-lg hover:bg-white/5 transition-colors justify-center"
                >
                    <span className="text-3xl md:text-4xl text-white font-serif mb-1">{word.char}</span>
                    <span className="text-[10px] text-[#9cba9e] uppercase tracking-wider">{word.pinyin}</span>
                </div>
            ) : (
                <span className="text-[#283929] text-xs font-bold uppercase tracking-widest group-hover:text-primary/50">
                    {slot === 'subject' ? 'Subject' : slot === 'verb' ? 'Verb' : 'Object'}
                </span>
            )}
        </div>
    );
}

function DraggableChip({
    word,
    isDragging,
    isPlaced,
    onDragStart,
    onDragEnd,
    onTouchDrop,
}: {
    word: WordChip;
    isDragging: boolean;
    isPlaced: boolean;
    onDragStart: () => void;
    onDragEnd: () => void;
    onTouchDrop: (slot: string) => void;
}) {
    const handleTouchStart = () => {
        onDragStart();
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touch = e.changedTouches[0];
        const element = document.elementFromPoint(touch.clientX, touch.clientY);
        const slot = element?.getAttribute('data-slot') || 'pool';
        onTouchDrop(slot);
        onDragEnd();
    };

    return (
        <div
            draggable
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            className={`cursor-grab active:cursor-grabbing transition-all transform hover:-translate-y-1 w-32 h-20 md:w-40 md:h-24 rounded-xl flex flex-col items-center justify-center relative group select-none shadow-lg ${isPlaced ? 'opacity-40 cursor-not-allowed' : ''
                }`}
            style={{
                background: isDragging ? 'rgba(19, 236, 37, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: isDragging ? '1px solid rgba(19, 236, 37, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: isDragging ? '0 0 10px rgba(37, 244, 54, 0.3)' : '0 4px 30px rgba(0, 0, 0, 0.1)',
            }}
        >
            <span className="text-3xl md:text-4xl text-white font-serif mb-1">{word.char}</span>
            <span className="text-[10px] text-[#9cba9e] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                {word.meaning} ({word.pinyin})
            </span>
        </div>
    );
}