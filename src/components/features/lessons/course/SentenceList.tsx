export type LessonSentence = {
    chinese: string;
    pinyin: string;
    translation: string;
};

export type SentenceListProps = {
    items: LessonSentence[];
};

export default function SentenceList({ items }: SentenceListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, index) => (
                <div
                    key={`${item.chinese}-${index}`}
                    className="p-6 rounded-2xl bg-[#1a1d24] border border-primary/20 hover:border-primary transition-all shadow-[0_0_15px_rgba(0,255,0,0.05)]"
                >
                    <div className="text-2xl font-bold text-primary mb-2">{item.chinese}</div>
                    <div className="text-sm text-text-muted mb-2">{item.pinyin}</div>
                    <div className="text-white">{item.translation}</div>
                </div>
            ))}
        </div>
    );
}
