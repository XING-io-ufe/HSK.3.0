type LessonSimplifiedRowProps = {
    title: string;
    chinese?: string;
    translation: string;
    layoutSide?: 'left' | 'right';
    opacity?: number;
};

export default function LessonSimplifiedRow({
    title,
    chinese,
    translation,
    layoutSide = 'left',
    opacity = 0.25,
}: LessonSimplifiedRowProps) {
    const isRight = layoutSide === 'right';

    return (
        <div
            className={`relative mb-4 group md:flex md:justify-between md:items-center w-full ${isRight ? '' : 'md:flex-row-reverse'} text-gray-500 transition-opacity duration-300`}
            style={{ opacity }}
        >
            <div className="absolute left-0 md:left-1/2 md:-ml-2 w-4 h-4 rounded-full bg-[#111318] border border-gray-800 z-10" />
            <div className="ml-16 md:ml-0 md:w-[42%] pl-4 py-2 border-l border-white/5">
                <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                <p className="text-xs text-gray-400 mt-1">
                    {translation}
                    {chinese && <span className="ml-2 text-xs font-serif text-gray-400">({chinese})</span>}
                </p>
            </div>
            <div className="hidden md:block md:w-[42%]" />
        </div>
    );
}
