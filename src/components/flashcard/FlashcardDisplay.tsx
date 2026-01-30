import type { ReactNode } from 'react';
import { MdCached } from '@/components/icons/material';
import type { Card } from './data';

export type FlashcardDisplayProps = {
    card: Card;
    isFlipped: boolean;
    onRotate: () => void;
    renderFront: (card: Card) => ReactNode;
    renderBack: (card: Card) => ReactNode;
    buttonLabelFront?: string;
    buttonLabelBack?: string;
};

export function FlashcardDisplay({
    card,
    isFlipped,
    onRotate,
    renderFront,
    renderBack,
    buttonLabelFront = 'ЭРГҮҮЛЭХ',
    buttonLabelBack = 'ДАРАА',
}: FlashcardDisplayProps) {
    return (
        <div className="w-full max-w-sm h-full relative">
            <div className={`flex-1 glass-panel rounded-[2.5rem] p-2 shadow-glass relative flex flex-col transition-transform duration-300 min-h-0`}>
                <div className="flex-1 min-h-0 flex justify-center items-stretch overflow-y-auto overscroll-contain px-1">
                    <div className="w-full">
                        {isFlipped ? renderBack(card) : renderFront(card)}
                    </div>
                </div>

                <div className="p-3 px-6 pb-6 shrink-0">
                    <button
                        onClick={onRotate}
                        className="w-full py-4 bg-primary text-black rounded-3xl font-bold text-lg flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(19,236,37,0.4)] hover:shadow-[0_0_35px_rgba(19,236,37,0.6)] active:scale-95 transition-all"
                    >
                        <MdCached className="font-bold" />
                        {isFlipped ? buttonLabelBack : buttonLabelFront}
                    </button>
                </div>
            </div>
        </div>
    );
}
