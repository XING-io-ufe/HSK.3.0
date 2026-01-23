type CharacterConfig = {
    char: string;
    position: string;
    size: string;
    color?: string;
    delay?: string;
};

type FloatingCharactersProps = {
    characters?: CharacterConfig[];
};

const defaultCharacters: CharacterConfig[] = [
    { char: '中', position: 'top-[15%] left-[10%]', size: 'text-[120px]', color: 'text-white/5' },
    { char: '国', position: 'top-[25%] right-[15%]', size: 'text-[100px]', color: 'text-white/5', delay: 'delay-100' },
    { char: '学', position: 'bottom-[20%] left-[20%]', size: 'text-[140px]', color: 'text-white/5', delay: 'delay-200' },
    { char: '习', position: 'bottom-[30%] right-[10%]', size: 'text-[90px]', color: 'text-primary/10', delay: 'delay-300' },
];

export default function FloatingCharacters({ characters = defaultCharacters }: FloatingCharactersProps) {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex justify-center items-center">
            {characters.map((config, index) => (
                <div
                    key={index}
                    className={`absolute ${config.position} ${config.size} font-black ${config.color || 'text-white/5'} floating-char ${config.delay || ''} select-none`}
                >
                    {config.char}
                </div>
            ))}
        </div>
    );
}
