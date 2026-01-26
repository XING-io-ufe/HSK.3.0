import type { ReactNode } from 'react';

export type QuizChoice = {
    label: string;
    text: string;
    isCorrect?: boolean;
};

export type QuizItem = {
    id: string;
    orderLabel: string;
    points?: string;
    question: string;
    choices: QuizChoice[];
};

export type QuizListProps = {
    items: QuizItem[];
    icon?: ReactNode;
};

const baseCardClass = 'p-6 rounded-2xl bg-white/5 border border-white/10';
const choiceClass = 'p-4 rounded-xl bg-[#1a1d24] border border-white/10 transition-all text-left';

export default function QuizList({ items }: QuizListProps) {
    return (
        <div className="space-y-6">
            {items.map((item) => (
                <div key={item.id} className={baseCardClass}>
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">{item.orderLabel}</span>
                        {item.points && <span className="text-xs text-gray-500">{item.points}</span>}
                    </div>
                    <p className="text-lg mb-6 font-bold text-white">{item.question}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {item.choices.map((choice) => {
                            const isCorrect = choice.isCorrect;
                            const activeClasses = isCorrect
                                ? 'border border-primary text-primary font-bold'
                                : 'hover:border-primary/60';

                            return (
                                <button
                                    key={`${item.id}-${choice.label}`}
                                    className={`${choiceClass} ${activeClasses}`.trim()}
                                    type="button"
                                    aria-label={`Сонголт ${choice.label}`}
                                >
                                    <span className="font-semibold mr-2">{choice.label}.</span>
                                    <span className="align-middle">{choice.text}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}
