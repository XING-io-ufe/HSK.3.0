export type RadicalInsight = {
    title: string;
    glyph: string;
    pinyin: string;
    meaning: string;
    radical: string;
    strokes: number;
    note?: string;
};

export type RadicalInsightGridProps = {
    items: RadicalInsight[];
};

export default function RadicalInsightGrid({ items }: RadicalInsightGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item) => (
                <div
                    key={item.title}
                    className="bg-[#1a1d24] border border-primary/20 rounded-2xl p-6 relative overflow-hidden group hover:border-primary transition-all duration-300"
                >
                    <div className="absolute -right-6 -top-4 text-[120px] font-black text-primary/5 group-hover:text-primary/10 transition-colors select-none">
                        {item.radical}
                    </div>
                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-3xl font-black text-primary shadow-[0_0_20px_rgba(0,255,0,0.15)]">
                                {item.glyph}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="text-sm text-text-muted">{item.pinyin} • {item.meaning}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-text-muted">
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Язгуур: {item.radical}</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Зураас: {item.strokes}</span>
                        </div>
                    </div>
                    {item.note && <p className="relative z-10 text-sm text-text-secondary leading-relaxed">{item.note}</p>}
                </div>
            ))}
        </div>
    );
}
