export type VocabularyItem = {
    hanzi: string;
    pinyin: string;
    meaning: string;
};

export type VocabularyTableProps = {
    items: VocabularyItem[];
};

export default function VocabularyTable({ items }: VocabularyTableProps) {
    return (
        <div className="glass-card rounded-2xl overflow-hidden border border-white/10">
            <table className="w-full text-left border-collapse">
                <thead className="bg-white/5 text-xs uppercase tracking-widest text-text-muted">
                    <tr>
                        <th className="px-4 py-3 font-semibold">Ханз</th>
                        <th className="px-4 py-3 font-semibold">Pinyin</th>
                        <th className="px-4 py-3 font-semibold">Монгол утга</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={`${item.hanzi}-${index}`} className="border-t border-white/5">
                            <td className="px-4 py-3 text-lg font-bold text-primary">{item.hanzi}</td>
                            <td className="px-4 py-3 text-text-secondary">{item.pinyin}</td>
                            <td className="px-4 py-3 text-white">{item.meaning}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
