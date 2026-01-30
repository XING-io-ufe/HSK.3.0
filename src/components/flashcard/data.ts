export type Card = {
    char: string;
    pinyin: string;
    meaning: string;
};

export type CardBackDetail = {
    title?: string;
    radicalChar?: string;
    radicalTitle?: string;
    radicalDescription?: string;
    exampleSentence?: string;
    examplePinyin?: string;
    exampleTranslation?: string;
};

export const FLASHCARDS: Card[] = [
    { char: '学', pinyin: 'xué', meaning: 'Судлах' },
    { char: '我', pinyin: 'wǒ', meaning: 'Би' },
    { char: '你', pinyin: 'nǐ', meaning: 'Чи' },
    { char: '他', pinyin: 'tā', meaning: 'Тэр' },
    { char: '她', pinyin: 'tā', meaning: 'Эмэгтэй тэр' },
    { char: '是', pinyin: 'shì', meaning: 'Байх' },
    { char: '有', pinyin: 'yǒu', meaning: 'Байгаа' },
    { char: '好', pinyin: 'hǎo', meaning: 'Сайн' },
    { char: '人', pinyin: 'rén', meaning: 'Хүн' },
    { char: '大', pinyin: 'dà', meaning: 'Том' },
    { char: '小', pinyin: 'xiǎo', meaning: 'Жижиг' },
    { char: '多', pinyin: 'duō', meaning: 'Их' },
    { char: '少', pinyin: 'shǎo', meaning: 'Цөөхөн' },
    { char: '高', pinyin: 'gāo', meaning: 'Өндөр' },
    { char: '低', pinyin: 'dī', meaning: 'Намсгал' },
    { char: '长', pinyin: 'cháng', meaning: 'Урт' },
    { char: '短', pinyin: 'duǎn', meaning: 'Богино' },
    { char: '新', pinyin: 'xīn', meaning: 'Шинэ' },
    { char: '旧', pinyin: 'jiù', meaning: 'Хуучин' },
    { char: '快', pinyin: 'kuài', meaning: 'Хурдан' },
];

// Detailed back content for known cards; falls back to the basic meaning if data is missing.
export const CARD_BACK_CONTENT: Record<string, CardBackDetail> = {
    '学': {
        title: 'СУРАЛЦАХ, СУРАХ',
        radicalChar: '子',
        radicalTitle: '子 (Хүүхэд)',
        radicalDescription: 'Хүүхэд гэсэн утгатай язгуур нь сурч боловсрох, өсөж хөгжихийг бэлгэддэг.',
        exampleSentence: '我喜欢学中文',
        examplePinyin: 'Wǒ xǐhuān xué Zhōngwén',
        exampleTranslation: 'Би Хятад хэл сурах дуртай.',
    },
    '我': {
        title: 'БИ',
        radicalChar: '戈',
        radicalTitle: '戈 (Хутга, жад)',
        radicalDescription: 'Энэ язгуур нь зэвсэг гэсэн утгатай бөгөөд "Би" гэдэг утга нь зэвсэг барьж өөрийгөө хамгаалж буй хүн гэсэн эртний дүрсээс гаралтай.',
        exampleSentence: '我是蒙古人',
        examplePinyin: 'Wǒ shì Měnggǔrén',
        exampleTranslation: 'Би Монгол хүн.',
    },
    '你': {
        title: 'ЧИ',
        radicalChar: '亻',
        radicalTitle: '亻 (Хүн)',
        radicalDescription: 'Хүн (人) язгуурын хажуу талын хэлбэр. Бусад хүнийг зааж, харилцахад ашиглагддаг.',
        exampleSentence: '你好吗？',
        examplePinyin: 'Nǐ hǎo ma?',
        exampleTranslation: 'Чи сайн байна уу?',
    },
    '他': {
        title: 'ТЭР (Эрэгтэй)',
        radicalChar: '亻',
        radicalTitle: '亻 (Хүн)',
        radicalDescription: 'Хүн язгуур орсон бөгөөд "өөр нэгэн хүн" буюу гуравдагч этгээдийг зааж байна.',
        exampleSentence: '他在学中文',
        examplePinyin: 'Tā zài xué Zhōngwén',
        exampleTranslation: 'Тэр Хятад хэл сурч байна.',
    },
};

export const getCardDetail = (card: Card): CardBackDetail => {
    const detail = CARD_BACK_CONTENT[card.char];
    return {
        title: detail?.title ?? card.meaning,
        radicalChar: detail?.radicalChar,
        radicalTitle: detail?.radicalTitle,
        radicalDescription: detail?.radicalDescription,
        exampleSentence: detail?.exampleSentence,
        examplePinyin: detail?.examplePinyin,
        exampleTranslation: detail?.exampleTranslation,
    };
};
