export type VocabularyItem = {
    hanzi: string;
    pinyin: string;
    meaning: string;
};

export type RadicalInsight = {
    title: string;
    glyph: string;
    pinyin: string;
    meaning: string;
    radical: string;
    strokes: number;
    note?: string;
};

export type LessonSentence = {
    chinese: string;
    pinyin: string;
    translation: string;
};

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

export type LessonContent = {
    slug: string;
    title: string;
    chinese: string;
    pinyin: string;
    description: string;
    badge?: string;
    levelLabel?: string;
    overview?: { label: string; value: string }[];
    vocabulary: VocabularyItem[];
    radicals: RadicalInsight[];
    sentences: LessonSentence[];
    quiz: QuizItem[];
};

export const lessonsIndex = [
    {
        slug: 'lesson-1',
        title: 'Lesson 1: Сайн байна уу',
        chinese: '你好',
        pinyin: 'Nǐ hǎo',
        description: 'Сайн танилцаж, өдөр тутмын мэндчилгээ, анхан шатны үг хэллэгийг давтах хичээл.',
        stats: [
            { icon: null, label: '10 үг' },
            { icon: null, label: 'Шалгалт' },
        ],
    },
    {
        slug: 'lesson-2',
        title: 'Lesson 2: Танилцах',
        chinese: '你叫什么名字？',
        pinyin: 'Nǐ jiào shénme míngzì?',
        description: 'Өөрийн нэрийг хэлэх болон бусдын нэрийг асууж сурах хичээл.',
        stats: [{ icon: null, label: '12 үг' }, { icon: null, label: 'Харилцан яриа' }]
    },
    {
        slug: 'lesson-3',
        title: 'Lesson 3: Тоо тоолох',
        chinese: '一，二，三',
        pinyin: 'Yī, èr, sān',
        description: '0-100 хүртэлх тоо тоолох, утасны дугаар болон нас хэлж сурах.',
        stats: [{ icon: null, label: '15 үг' }, { icon: null, label: 'Дасгал' }]
    },
    {
        slug: 'lesson-4',
        title: 'Lesson 4: Гэр бүл',
        chinese: '我的家人',
        pinyin: 'Wǒ de jiārén',
        description: 'Аав, ээж болон гэр бүлийн гишүүдийн нэршил, "байгаа" гэх утгыг сурах.',
        stats: [{ icon: null, label: '10 үг' }, { icon: null, label: 'Зурагт карт' }]
    },
    {
        slug: 'lesson-5',
        title: 'Lesson 5: Он, сар, өдөр',
        chinese: '今天星期几？',
        pinyin: 'Jīntiān xīngqíjǐ?',
        description: 'Долоо хоногийн өдрүүд, сар болон одоо цагийг илэрхийлэх.',
        stats: [{ icon: null, label: '14 үг' }, { icon: null, label: 'Шалгалт' }]
    },
    {
        slug: 'lesson-6',
        title: 'Lesson 6: Хоол хүнс',
        chinese: '我喜欢米饭',
        pinyin: 'Wǒ xǐhuān mǐfàn',
        description: 'Түгээмэл хоол хүнс, жимс болон "дуртай" гэх илэрхийллийг сурах.',
        stats: [{ icon: null, label: '18 үг' }, { icon: null, label: 'Дасгал' }]
    },
    {
        slug: 'lesson-7',
        title: 'Lesson 7: Уух зүйлс',
        chinese: '你想喝什么？',
        pinyin: 'Nǐ xiǎng hē shénme?',
        description: 'Цай, кофе, ус зэрэг ундаа захиалах, "хүсэх" үйлийг ашиглах.',
        stats: [{ icon: null, label: '10 үг' }, { icon: null, label: 'Харилцан яриа' }]
    },
    {
        slug: 'lesson-8',
        title: 'Lesson 8: Дэлгүүр хэсэх',
        chinese: '多少钱？',
        pinyin: 'Duōshǎo qián?',
        description: 'Үнэ асуух, мөнгөн тэмдэгтүүд болон бараа бүтээгдэхүүн худалдан авах.',
        stats: [{ icon: null, label: '15 үг' }, { icon: null, label: 'Шалгалт' }]
    },
    {
        slug: 'lesson-9',
        title: 'Lesson 9: Байршил ба Зүг чиг',
        chinese: '在哪儿？',
        pinyin: 'Zài nǎr?',
        description: 'Хаана байгааг асуух, зүүн, баруун, дээр, доор гэх байршлын үгс.',
        stats: [{ icon: null, label: '12 үг' }, { icon: null, label: 'Зурагт карт' }]
    },
    {
        slug: 'lesson-10',
        title: 'Lesson 10: Тээврийн хэрэгсэл',
        chinese: '坐出租车',
        pinyin: 'Zuò chūzū chē',
        description: 'Такси, автобус, онгоцоор зорчих болон замын хөдөлгөөний үгс.',
        stats: [{ icon: null, label: '13 үг' }, { icon: null, label: 'Дасгал' }]
    },
    {
        slug: 'lesson-11',
        title: 'Lesson 11: Өдөр тутмын хэв маяг',
        chinese: '起床和睡觉',
        pinyin: 'Qǐchuáng hé shuìjiào',
        description: 'Босох, унтах, ажилдаа явах зэрэг өдөр тутам хийдэг үйлдлүүд.',
        stats: [{ icon: null, label: '16 үг' }, { icon: null, label: 'Шалгалт' }]
    },
    {
        slug: 'lesson-12',
        title: 'Lesson 12: Хобби ба Сонирхол',
        chinese: '我的爱好',
        pinyin: 'Wǒ de àihào',
        description: 'Спорт, хөгжим, кино үзэх зэрэг чөлөөт цагаа хэрхэн өнгөрүүлэх тухай.',
        stats: [{ icon: null, label: '14 үг' }, { icon: null, label: 'Харилцан яриа' }]
    },
    {
        slug: 'lesson-13',
        title: 'Lesson 13: Цаг агаар',
        chinese: '今天天气怎么样？',
        pinyin: 'Jīntiān tiānqì zěnmeyàng?',
        description: 'Халуун, хүйтэн, бороотой, цастай зэрэг байгалийн үзэгдлүүд.',
        stats: [{ icon: null, label: '11 үг' }, { icon: null, label: 'Дасгал' }]
    },
    {
        slug: 'lesson-14',
        title: 'Lesson 14: Биеийн байдал',
        chinese: '我生病了',
        pinyin: 'Wǒ shēngbìng le',
        description: 'Бие өвдөх, эмнэлэг явах болон биеийн хэсгүүдийн нэршил.',
        stats: [{ icon: null, label: '15 үг' }, { icon: null, label: 'Зурагт карт' }]
    },
    {
        slug: 'lesson-15',
        title: 'Lesson 15: Төгсөлтийн давтлага',
        chinese: '我会说汉语',
        pinyin: 'Wǒ huì shuō Hànyǔ',
        description: 'Өмнөх бүх хичээлийг нэгтгэсэн нийтлэг ярианы дасгал ба дүгнэлт.',
        stats: [{ icon: null, label: '20 үг' }, { icon: null, label: 'Том шалгалт' }]
    }
    // ...Array.from({ length: 14 }).map((_, idx) => {
    //     const n = idx + 2;
    //     return {
    //         slug: `lesson-${n}`,
    //         title: `Lesson ${n}`,
    //         chinese: '—',
    //         pinyin: '—',
    //         description: 'Тун удахгүй.',
    //     };
    // }),
];

export const lessonContentMap: Record<string, LessonContent> = {
    'lesson-1': {
        slug: 'lesson-1',
        title: 'Сайн байна уу',
        chinese: '你好',
        pinyin: 'Nǐ hǎo',
        description: 'Анхны мэндчилгээ, асуулт-хариултын бүтцийг сурна.',
        badge: 'Хичээл 1-1 • Анхан',
        levelLabel: 'HSK 1',
        overview: [
            { label: 'Зорилго', value: 'Өдөр тутмын мэндчилгээг зөв дуудах, асуулт-хариултын суурь бүтцийг ойлгох.' },
            { label: 'Шинэ ханз', value: '8 шинэ ханз, 3 язгуурын тайлбар' },
            { label: 'Дүрэм', value: 'Асуултын төгсгөлд 吗 хэрэглээ, 不 үгүйсгэл' },
        ],
        vocabulary: [
            { hanzi: '你', pinyin: 'nǐ', meaning: 'Чи, та' },
            { hanzi: '好', pinyin: 'hǎo', meaning: 'Сайн' },
            { hanzi: '你好', pinyin: 'nǐ hǎo', meaning: 'Сайн байна уу' },
            { hanzi: '吗', pinyin: 'ma', meaning: 'уу? (асуултын үг)' },
            { hanzi: '我', pinyin: 'wǒ', meaning: 'Би' },
            { hanzi: '很', pinyin: 'hěn', meaning: 'Маш, их' },
            { hanzi: '不', pinyin: 'bù', meaning: 'Үгүй, биш' },
            { hanzi: '忙', pinyin: 'máng', meaning: 'Завгүй' },
        ],
        radicals: [
            {
                title: '你 (nǐ)',
                glyph: '你',
                pinyin: 'nǐ',
                meaning: 'Чи, та',
                radical: '亻',
                strokes: 7,
                note: '亻 радикал нь "хүн" гэсэн утгатай бөгөөд хүмүүсийг илэрхийлсэн ханзанд ихэвчлэн хэрэглэгддэг.',
            },
            {
                title: '好 (hǎo)',
                glyph: '好',
                pinyin: 'hǎo',
                meaning: 'Сайн',
                radical: '女',
                strokes: 6,
                note: 'Зүүн талын 女 нь "эмэгтэй", баруун талын 子 нь "хүүхэд" гэсэн утгатай. Эх хүүхэд хамтдаа сайн сайхныг илэрхийлдэг.',
            },
            {
                title: '吗 (ma)',
                glyph: '吗',
                pinyin: 'ma',
                meaning: 'Асуултын үг',
                radical: '口',
                strokes: 6,
                note: '口 радикал нь ам, яриатай холбоотойг илтгэдэг бөгөөд асуултын төгсгөлд ашиглагддаг частица юм.',
            },
        ],
        sentences: [
            { chinese: '你好！', pinyin: 'Nǐ hǎo!', translation: 'Сайн байна уу!' },
            { chinese: '你好吗？', pinyin: 'Nǐ hǎo ma?', translation: 'Та сайн уу?' },
            { chinese: '我很好，谢谢。', pinyin: 'Wǒ hěn hǎo, xièxie.', translation: 'Би маш сайн, баярлалаа.' },
            { chinese: '你忙吗？', pinyin: 'Nǐ máng ma?', translation: 'Та завгүй юу?' },
            { chinese: '我不忙。', pinyin: 'Wǒ bù máng.', translation: 'Би завгүй биш.' },
        ],
        quiz: [
            {
                id: 'q1',
                orderLabel: 'Асуулт 1/5',
                points: '+10 Оноо',
                question: "'Сайн байна уу' гэдгийг хятад хэлээр яаж хэлэх вэ?",
                choices: [
                    { label: 'A', text: '再见' },
                    { label: 'B', text: '你好', isCorrect: true },
                    { label: 'C', text: '很好' },
                    { label: 'D', text: '你忙' },
                ],
            },
            {
                id: 'q2',
                orderLabel: 'Асуулт 2/5',
                question: "'Би маш сайн' гэсэн утгатай өгүүлбэрийг сонгоно уу.",
                choices: [
                    { label: 'A', text: '我很好', isCorrect: true },
                    { label: 'B', text: '我不好' },
                    { label: 'C', text: '你很好' },
                    { label: 'D', text: '我忙' },
                ],
            },
            {
                id: 'q3',
                orderLabel: 'Асуулт 3/5',
                question: "'你好吗？' гэдэг нь юу гэсэн үг вэ?",
                choices: [
                    { label: 'A', text: 'Чи завгүй юу?' },
                    { label: 'B', text: 'Сайн байна уу' },
                    { label: 'C', text: 'Та сайн уу? (Сонин сайхан юу байна?)', isCorrect: true },
                    { label: 'D', text: 'Би сайн' },
                ],
            },
            {
                id: 'q4',
                orderLabel: 'Асуулт 4/5',
                question: "'好' (Сайн) ханзны бүтцийг сонгоно уу.",
                choices: [
                    { label: 'A', text: '人 (Хүн) + 子 (Хүүхэд)' },
                    { label: 'B', text: '口 (Ам) + 女 (Эмэгтэй)' },
                    { label: 'C', text: '女 (Эмэгтэй) + 子 (Хүүхэд)', isCorrect: true },
                    { label: 'D', text: '女 (Эмэгтэй) + 口 (Ам)' },
                ],
            },
            {
                id: 'q5',
                orderLabel: 'Асуулт 5/5',
                question: "'Би завгүй биш' гэдгийг хятадаар хэрхэн хэлэх вэ?",
                choices: [
                    { label: 'A', text: '我很忙' },
                    { label: 'B', text: '我不忙', isCorrect: true },
                    { label: 'C', text: '我不很好' },
                    { label: 'D', text: '你忙吗' },
                ],
            },
        ],
    },

    'lesson-2': {
        slug: 'lesson-2',
        title: 'Таны нэр хэн бэ?',
        chinese: '你叫什么名字？',
        pinyin: 'Nǐ jiào shénme míngzì?',
        description: 'Хүнтэй танилцах, нэрээ хэлэх болон асуух бүтцийг сурна.',
        badge: 'Хичээл 1-2 • Анхан',
        levelLabel: 'HSK 1',
        overview: [
            { label: 'Зорилго', value: 'Өөрийгөө танилцуулах, бусдын нэрийг соёлтойгоор асууж сурах.' },
            { label: 'Шинэ ханз', value: '10 шинэ ханз, 2 язгуурын тайлбар' },
            { label: 'Дүрэм', value: '什么 (юу) асуултын төлөөний үг, 叫 үйл үг' },
        ],
        vocabulary: [
            { hanzi: '叫', pinyin: 'jiào', meaning: 'гэж дуудах, нэрлэх' },
            { hanzi: '什么', pinyin: 'shénme', meaning: 'юу' },
            { hanzi: '名字', pinyin: 'míngzì', meaning: 'нэр' },
            { hanzi: '我', pinyin: 'wǒ', meaning: 'би' },
            { hanzi: '老师', pinyin: 'lǎoshī', meaning: 'багш' },
            { hanzi: '学生', pinyin: 'xuésheng', meaning: 'оюутан, сурагч' },
            { hanzi: '人', pinyin: 'rén', meaning: 'хүн' },
            { hanzi: '谁', pinyin: 'shéi', meaning: 'хэн' },
        ],
        radicals: [
            {
                title: '名 (míng)',
                glyph: '名',
                pinyin: 'míng',
                meaning: 'Нэр',
                radical: '口',
                strokes: 6,
                note: 'Дээд талын 夕 нь "үдэш", доод талын 口 нь "ам". Харанхуйд хүн рүү нэрээр нь дуудахыг бэлгэддэг.',
            },
            {
                title: '人 (rén)',
                glyph: '人',
                pinyin: 'rén',
                meaning: 'Хүн',
                radical: '人',
                strokes: 2,
                note: 'Хүн хоёр хөл дээрээ зогсож буй дүрсийг илэрхийлсэн үндсэн язгуур.',
            }
        ],
        sentences: [
            { chinese: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzì?', translation: 'Таны нэр хэн бэ?' },
            { chinese: '我叫巴特。', pinyin: 'Wǒ jiào Bate.', translation: 'Намайг Бат гэдэг.' },
            { chinese: '他是谁？', pinyin: 'Tā shì shéi?', translation: 'Тэр хэн бэ?' },
            { chinese: '他是我的老师。', pinyin: 'Tā shì wǒ de lǎoshī.', translation: 'Тэр бол миний багш.' },
        ],
        quiz: [
            {
                id: 'q1',
                orderLabel: 'Асуулт 1/5',
                question: "'Нэр' гэдэг үгийг Хятадаар сонгоно уу.",
                choices: [
                    { label: 'A', text: '什么' },
                    { label: 'B', text: '名字', isCorrect: true },
                    { label: 'C', text: '老师' },
                    { label: 'D', text: '学生' },
                ],
            }
        ],
    },
    'lesson-3': {
        slug: 'lesson-3',
        title: 'Тоо тоолох',
        chinese: '一，二，三',
        pinyin: 'Yī, èr, sān',
        description: '0-10 хүртэлх тоо болон нас асуух үндсийг сурна.',
        badge: 'Хичээл 1-3 • Анхан',
        levelLabel: 'HSK 1',
        overview: [
            { label: 'Зорилго', value: 'Тоог зөв дуудах, нас болон утасны дугаар хэлж сурах.' },
            { label: 'Шинэ ханз', value: '11 шинэ ханз' },
            { label: 'Дүрэм', value: '几 (хэд) асуултын үг, 岁 (нас) хэрэглээ' },
        ],
        vocabulary: [
            { hanzi: '一', pinyin: 'yī', meaning: 'нэг' },
            { hanzi: '二', pinyin: 'èr', meaning: 'хоёр' },
            { hanzi: '三', pinyin: 'sān', meaning: 'гурав' },
            { hanzi: '十', pinyin: 'shí', meaning: 'арав' },
            { hanzi: '岁', pinyin: 'suì', meaning: 'нас' },
            { hanzi: '几', pinyin: 'jǐ', meaning: 'хэд' },
            { hanzi: '多大', pinyin: 'duō dà', meaning: 'хэдэн настай' },
            { hanzi: '零', pinyin: 'líng', meaning: 'тэг' },
        ],
        radicals: [
            {
                title: '十 (shí)',
                glyph: '十',
                pinyin: 'shí',
                meaning: 'Арав',
                radical: '十',
                strokes: 2,
                note: 'Энэ нь тооны системийн үндсэн язгуур юм.',
            }
        ],
        sentences: [
            { chinese: '你几岁了？', pinyin: 'Nǐ jǐ suì le?', translation: 'Чи (хүүхэд) хэдэн настай вэ?' },
            { chinese: '我二十岁。', pinyin: 'Wǒ èrshí suì.', translation: 'Би хорин настай.' },
            { chinese: '你的电话是多少？', pinyin: 'Nǐ de diànhuà shì duōshǎo?', translation: 'Таны утасны дугаар хэд вэ?' },
        ],
        quiz: [
            {
                id: 'q1',
                orderLabel: 'Асуулт 1/5',
                question: "'6' гэсэн тоог Хятадаар юу гэх вэ?",
                choices: [
                    { label: 'A', text: '四 (sì)' },
                    { label: 'B', text: '六 (liù)', isCorrect: true },
                    { label: 'C', text: '八 (bā)' },
                    { label: 'D', text: '五 (wǔ)' },
                ],
            }
        ],
    },
    'lesson-4': {
        slug: 'lesson-4',
        title: 'Гэр бүл',
        chinese: '我的家人',
        pinyin: 'Wǒ de jiārén',
        description: 'Гэр бүлийн гишүүдийн нэршил болон "байгаа" гэсэн утгыг сурна.',
        badge: 'Хичээл 1-4 • Анхан',
        levelLabel: 'HSK 1',
        overview: [
            { label: 'Зорилго', value: 'Гэр бүлийн гишүүдийг нэрлэж, ам бүлийн тоогоо хэлж сурах.' },
            { label: 'Шинэ ханз', value: '9 шинэ ханз' },
            { label: 'Дүрэм', value: '有 (байгаа) ба 没有 (байхгүй) хэрэглээ' },
        ],
        vocabulary: [
            { hanzi: '爸爸', pinyin: 'bàba', meaning: 'аав' },
            { hanzi: '妈妈', pinyin: 'māma', meaning: 'ээж' },
            { hanzi: '哥哥', pinyin: 'gēge', meaning: 'ах' },
            { hanzi: '姐姐', pinyin: 'jiějie', meaning: 'эгч' },
            { hanzi: '弟弟', pinyin: 'dìdi', meaning: 'эрэгтэй дүү' },
            { hanzi: '妹妹', pinyin: 'mèimei', meaning: 'эмэгтэй дүү' },
            { hanzi: '有', pinyin: 'yǒu', meaning: 'байгаа' },
            { hanzi: '口', pinyin: 'kǒu', meaning: 'ам (ам бүл тоолох нэгж)' },
        ],
        radicals: [
            {
                title: '父 (fù)',
                glyph: '父',
                pinyin: 'fù',
                meaning: 'Эцэг',
                radical: '父',
                strokes: 4,
                note: 'Аав (爸爸) ханзны дээд талд ордог язгуур.',
            }
        ],
        sentences: [
            { chinese: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', translation: 'Танай ам бүл хэдүүлээ вэ?' },
            { chinese: '我家有五口人。', pinyin: 'Wǒ jiā yǒu wǔ kǒu rén.', translation: 'Манайх ам бүл тавуулаа.' },
            { chinese: '我有两个妹妹。', pinyin: 'Wǒ yǒu liǎng gè mèimei.', translation: 'Би хоёр эмэгтэй дүүтэй.' },
        ],
        quiz: [
            {
                id: 'q1',
                orderLabel: 'Асуулт 1/5',
                question: "'Ээж' гэдгийг Хятадаар юу гэдэг вэ?",
                choices: [
                    { label: 'A', text: '爸爸' },
                    { label: 'B', text: '妈妈', isCorrect: true },
                    { label: 'C', text: '姐姐' },
                    { label: 'D', text: '哥哥' },
                ],
            }
        ],
    },
    'lesson-5': {
        slug: 'lesson-5',
        title: 'Цаг хугацаа',
        chinese: '现在几点？',
        pinyin: 'Xiànzài jǐ diǎn?',
        description: 'Одоо хэдэн цаг болж байгаа болон өдрийн дэглэмийн үгсийг сурна.',
        badge: 'Хичээл 1-5 • Анхан',
        levelLabel: 'HSK 1',
        overview: [
            { label: 'Зорилго', value: 'Цаг асуух, өглөө, өдөр, оройг ялгаж сурах.' },
            { label: 'Шинэ ханз', value: '10 шинэ ханз' },
            { label: 'Дүрэм', value: 'Цаг (点) болон минут (分)-ын бүтэц' },
        ],
        vocabulary: [
            { hanzi: '现在', pinyin: 'xiànzài', meaning: 'одоо' },
            { hanzi: '点', pinyin: 'diǎn', meaning: 'цаг' },
            { hanzi: '分', pinyin: 'fēn', meaning: 'минут' },
            { hanzi: '中午', pinyin: 'zhōngwǔ', meaning: 'үд дунд' },
            { hanzi: '吃饭', pinyin: 'chīfàn', meaning: 'хоол идэх' },
            { hanzi: '时候', pinyin: 'shíhou', meaning: 'үед, цагт' },
            { hanzi: '回', pinyin: 'huí', meaning: 'буцах' },
            { hanzi: '家', pinyin: 'jiā', meaning: 'гэр' },
        ],
        radicals: [
            {
                title: '日 (rì)',
                glyph: '日',
                pinyin: 'rì',
                meaning: 'Нар/Өдөр',
                radical: '日',
                strokes: 4,
                note: 'Цаг хугацаатай холбоотой ханзнуудад ихэвчлэн ордог.',
            }
        ],
        sentences: [
            { chinese: '现在几点？', pinyin: 'Xiànzài jǐ diǎn?', translation: 'Одоо хэдэн цаг болж байна?' },
            { chinese: '现在十点十分。', pinyin: 'Xiànzài shí diǎn shí fēn.', translation: 'Одоо 10 цаг 10 минут болж байна.' },
            { chinese: '你什么时候回家？', pinyin: 'Nǐ shénme shíhou huí jiā?', translation: 'Чи хэзээ гэртээ харих вэ?' },
        ],
        quiz: [
            {
                id: 'q1',
                orderLabel: 'Асуулт 1/5',
                question: "'Одоо' гэсэн утгатай үгийг сонгоно уу.",
                choices: [
                    { label: 'A', text: '时候' },
                    { label: 'B', text: '现在', isCorrect: true },
                    { label: 'C', text: '今天' },
                    { label: 'D', text: '点' },
                ],
            }
        ],
    },
    'lesson-6': {
        slug: 'lesson-6',
        title: 'Хоол хүнс',
        chinese: '你想吃什么？',
        pinyin: 'Nǐ xiǎng chī shénme?',
        description: 'Хоолны нэршил, дуртай зүйлээ илэрхийлж сурна.',
        badge: 'Хичээл 1-6 • Анхан',
        levelLabel: 'HSK 1',
        overview: [
            { label: 'Зорилго', value: 'Хоол захиалах, идэх хүслээ илэрхийлэх.' },
            { label: 'Шинэ ханз', value: '12 шинэ ханз' },
            { label: 'Дүрэм', value: '想 (хүсэх) туслах үйл үгийн хэрэглээ' },
        ],
        vocabulary: [
            { hanzi: '吃', pinyin: 'chī', meaning: 'идэх' },
            { hanzi: '喝', pinyin: 'hē', meaning: 'уух' },
            { hanzi: '米饭', pinyin: 'mǐfàn', meaning: 'агшаасан будаа' },
            { hanzi: '面条', pinyin: 'miàntiáo', meaning: 'гоймон' },
            { hanzi: '水', pinyin: 'shuǐ', meaning: 'ус' },
            { hanzi: '茶', pinyin: 'chá', meaning: 'цай' },
            { hanzi: '想', pinyin: 'xiǎng', meaning: 'хүсэх, бодох' },
            { hanzi: '喜欢', pinyin: 'xǐhuan', meaning: 'дуртай байх' },
        ],
        radicals: [
            {
                title: '口 (kǒu)',
                glyph: '口',
                pinyin: 'kǒu',
                meaning: 'Ам',
                radical: '口',
                strokes: 3,
                note: 'Идэх (吃) ба уух (喝) ханзанд амны язгуур ордог.',
            }
        ],
        sentences: [
            { chinese: '我想吃米饭。', pinyin: 'Wǒ xiǎng chī mǐfàn.', translation: 'Би будаа идмээр байна.' },
            { chinese: '你想喝什么？', pinyin: 'Nǐ xiǎng hē shénme?', translation: 'Чи юу уумаар байна?' },
            { chinese: '我不喜欢喝茶。', pinyin: 'Wǒ bù xǐhuan hē chá.', translation: 'Би цай уух дургүй.' },
        ],
        quiz: [
            {
                id: 'q1',
                orderLabel: 'Асуулт 1/5',
                question: "'Ус' гэдэг ханзыг сонгоно уу.",
                choices: [
                    { label: 'A', text: '米' },
                    { label: 'B', text: '水', isCorrect: true },
                    { label: 'C', text: '茶' },
                    { label: 'D', text: '面' },
                ],
            }
        ],
    },
    'lesson-7': {
        slug: 'lesson-7',
        title: 'Дэлгүүр хэсэх',
        chinese: '这个多少钱？',
        pinyin: 'Zhège duōshǎo qián?',
        description: 'Барааны үнэ асуух, мөнгөн тэмдэгт болон худалдан авалт хийх.',
        badge: 'Хичээл 1-7 • Анхан',
        levelLabel: 'HSK 1',
        overview: [
            { label: 'Зорилго', value: 'Үнэ асууж сурах, Хятадын мөнгөн тэмдэгтийг нэрлэх.' },
            { label: 'Шинэ ханз', value: '9 шинэ ханз' },
            { label: 'Дүрэм', value: '多少 (хэд) асуултын үг, 个 заах нэгж' },
        ],
        vocabulary: [
            { hanzi: '钱', pinyin: 'qián', meaning: 'мөнгө' },
            { hanzi: '多少', pinyin: 'duōshǎo', meaning: 'хэд, хэр их' },
            { hanzi: '块', pinyin: 'kuài', meaning: 'юань (ярианы хэлэнд)' },
            { hanzi: '这', pinyin: 'zhè', meaning: 'энэ' },
            { hanzi: '那', pinyin: 'nà', meaning: 'тэр' },
            { hanzi: '买', pinyin: 'mǎi', meaning: 'худалдаж авах' },
            { hanzi: '水果', pinyin: 'shuǐguǒ', meaning: 'жимс' },
            { hanzi: '苹果', pinyin: 'píngguǒ', meaning: 'алим' },
        ],
        radicals: [
            {
                title: '钅 (jīn)',
                glyph: '钅',
                pinyin: 'jīn',
                meaning: 'Металл/Алт',
                radical: '钅',
                strokes: 5,
                note: 'Мөнгө (钱) ханзны зүүн талд орсон нь эрт дээр үед зоосон мөнгө металлаар хийгддэг байсныг илтгэнэ.',
            }
        ],
        sentences: [
            { chinese: '这个多少钱？', pinyin: 'Zhège duōshǎo qián?', translation: 'Энэ хэдэн төгрөг вэ?' },
            { chinese: '五块钱。', pinyin: 'Wǔ kuài qián.', translation: '5 юань.' },
            { chinese: '你要买什么？', pinyin: 'Nǐ yào mǎi shénme?', translation: 'Та юу авахыг хүсэж байна вэ?' },
        ],
        quiz: [
            {
                id: 'q1',
                orderLabel: 'Асуулт 1/5',
                question: "'Мөнгө' гэсэн утгатай ханзыг сонгоно уу.",
                choices: [
                    { label: 'A', text: '钱', isCorrect: true },
                    { label: 'B', text: '水' },
                    { label: 'C', text: '买' },
                    { label: 'D', text: '个' },
                ],
            }
        ],
    },
    'lesson-8': {
        slug: 'lesson-8',
        title: 'Байршил',
        chinese: '你在在哪儿？',
        pinyin: 'Nǐ zài nǎr?',
        description: 'Хаана байгааг асуух, дээр, доор, дотор гэх байршлын үгс.',
        badge: 'Хичээл 1-8 • Анхан',
        levelLabel: 'HSK 1',
        overview: [
            { label: 'Зорилго', value: 'Юмсын байршлыг зааж сурах.' },
            { label: 'Шинэ ханз', value: '10 шинэ ханз' },
            { label: 'Дүрэм', value: '在 (байх) үйл үгийн хэрэглээ' },
        ],
        vocabulary: [
            { hanzi: '在', pinyin: 'zài', meaning: '-д байх' },
            { hanzi: '哪儿', pinyin: 'nǎr', meaning: 'хаана' },
            { hanzi: '学校', pinyin: 'xuéxiào', meaning: 'сургууль' },
            { hanzi: '医院', pinyin: 'yīyuàn', meaning: 'эмнэлэг' },
            { hanzi: '桌子', pinyin: 'zhuōzi', meaning: 'ширээ' },
            { hanzi: '上', pinyin: 'shàng', meaning: 'дээр' },
            { hanzi: '下', pinyin: 'xià', meaning: 'доор' },
            { hanzi: '里', pinyin: 'lǐ', meaning: 'дотор' },
        ],
        radicals: [
            {
                title: '土 (tǔ)',
                glyph: '土',
                pinyin: 'tǔ',
                meaning: 'Шороо/Газар',
                radical: '土',
                strokes: 3,
                note: 'Байх (在) ханзанд газар шорооны язгуур орсон нь оршин тогтнохыг илэрхийлнэ.',
            }
        ],
        sentences: [
            { chinese: '你在哪儿？', pinyin: 'Nǐ zài nǎr?', translation: 'Чи хаана байна вэ?' },
            { chinese: '我在学校。', pinyin: 'Wǒ zài xuéxiào.', translation: 'Би сургууль дээр байна.' },
            { chinese: '书在桌子上。', pinyin: 'Shū zài zhuōzi shàng.', translation: 'Ном ширээн дээр байна.' },
        ],
        quiz: [
            {
                id: 'q1',
                orderLabel: 'Асуулт 1/5',
                question: "'Сургууль' гэдгийг Хятадаар юу гэдэг вэ?",
                choices: [
                    { label: 'A', text: '学校', isCorrect: true },
                    { label: 'B', text: '医院' },
                    { label: 'C', text: '家' },
                    { label: 'D', text: '桌子' },
                ],
            }
        ],
    },
    'lesson-9': {
        slug: 'lesson-9',
        title: 'Цаг агаар',
        chinese: '今天天气怎么样？',
        pinyin: 'Jīntiān tiānqì zěnmeyàng?',
        description: 'Цаг агаар тодорхойлох, халуун хүйтнийг хэлж сурах.',
        badge: 'Хичээл 1-9 • Анхан',
        levelLabel: 'HSK 1',
        overview: [
            { label: 'Зорилго', value: 'Цаг агаарын байдлыг асууж, хариулж сурах.' },
            { label: 'Шинэ ханз', value: '8 шинэ ханз' },
            { label: 'Дүрэм', value: '怎么样 (ямар) асуултын бүтэц' },
        ],
        vocabulary: [
            { hanzi: '天气', pinyin: 'tiānqì', meaning: 'цаг агаар' },
            { hanzi: '怎么样', pinyin: 'zěnmeyàng', meaning: 'ямар' },
            { hanzi: '太...了', pinyin: 'tài...le', meaning: 'дэндүү...' },
            { hanzi: '热', pinyin: 'rè', meaning: 'халуун' },
            { hanzi: '冷', pinyin: 'lěng', meaning: 'хүйтэн' },
            { hanzi: '下雨', pinyin: 'xiàyǔ', meaning: 'бороо орох' },
            { hanzi: '水', pinyin: 'shuǐ', meaning: 'ус' },
            { hanzi: '身体', pinyin: 'shēntǐ', meaning: 'бие' },
        ],
        radicals: [
            {
                title: '灬 (huǒ)',
                glyph: '灬',
                pinyin: 'huǒ',
                meaning: 'Гал',
                radical: '灬',
                strokes: 4,
                note: 'Халуун (热) ханзны доод талд байгаа 4 цэг нь галыг илэрхийлдэг.',
            }
        ],
        sentences: [
            { chinese: '今天天气怎么样？', pinyin: 'Jīntiān tiānqì zěnmeyàng?', translation: 'Өнөөдөр цаг агаар ямар байна?' },
            { chinese: '太热了！', pinyin: 'Tài rè le!', translation: 'Дэндүү халуун байна!' },
            { chinese: '明天会下雨吗？', pinyin: 'Míngtiān huì xiàyǔ ma?', translation: 'Маргааш бороо орох болов уу?' },
        ],
        quiz: [
            {
                id: 'q1',
                orderLabel: 'Асуулт 1/5',
                question: "'Хүйтэн' гэсэн утгатай ханзыг сонгоно уу.",
                choices: [
                    { label: 'A', text: '热' },
                    { label: 'B', text: '冷', isCorrect: true },
                    { label: 'C', text: '好' },
                    { label: 'D', text: '大' },
                ],
            }
        ],
    },
    'lesson-10': {
        slug: 'lesson-10',
        title: 'Тээвэр ба Явах',
        chinese: '你怎么去？',
        pinyin: 'Nǐ zěnme qù?',
        description: 'Тээврийн хэрэгсэл болон "явах" үйлийг сурна.',
        badge: 'Хичээл 1-10 • Анхан',
        levelLabel: 'HSK 1',
        overview: [
            { label: 'Зорилго', value: 'Хэрхэн явах болон тээврийн хэрэгслийн нэрийг сурах.' },
            { label: 'Шинэ ханз', value: '11 шинэ ханз' },
            { label: 'Дүрэм', value: '去 (явах) болон 来 (ирэх) хэрэглээ' },
        ],
        vocabulary: [
            { hanzi: '去', pinyin: 'qù', meaning: 'явах' },
            { hanzi: '来', pinyin: 'lái', meaning: 'ирэх' },
            { hanzi: '坐', pinyin: 'zuò', meaning: 'суух (унаанд)' },
            { hanzi: '出租车', pinyin: 'chūzūchē', meaning: 'такси' },
            { hanzi: '飞机', pinyin: 'fēijī', meaning: 'онгоц' },
            { hanzi: '开', pinyin: 'kāi', meaning: 'жолоодох, нээх' },
            { hanzi: '看见', pinyin: 'kànjiàn', meaning: 'харах' },
            { hanzi: '后面', pinyin: 'hòumiàn', meaning: 'ар тал' },
        ],
        radicals: [
            {
                title: '车 (chē)',
                glyph: '车',
                pinyin: 'chē',
                meaning: 'Тэрэг/Машин',
                radical: '车',
                strokes: 4,
                note: 'Дугуйтай тээврийн хэрэгслийг илэрхийлэх үндсэн язгуур.',
            }
        ],
        sentences: [
            { chinese: '你怎么去学校？', pinyin: 'Nǐ zěnme qù xuéxiào?', translation: 'Чи сургууль руугаа яаж явах вэ?' },
            { chinese: '我坐出租车去。', pinyin: 'Wǒ zuò chūzūchē qù.', translation: 'Би таксигаар явна.' },
            { chinese: '他在开开。', pinyin: 'Tā zài kāichē.', translation: 'Тэр машин барьж байна.' },
        ],
        quiz: [
            {
                id: 'q1',
                orderLabel: 'Асуулт 1/5',
                question: "'Онгоц' гэдгийг Хятадаар юу гэдэг вэ?",
                choices: [
                    { label: 'A', text: '飞机', isCorrect: true },
                    { label: 'B', text: '车' },
                    { label: 'C', text: '出租车' },
                    { label: 'D', text: '去' },
                ],
            }
        ],
    },
    'lesson-11': {
        slug: 'lesson-11',
        title: 'Утсаар ярих',
        chinese: '喂，请 Christian...',
        pinyin: 'Wèi, qǐng wèn...',
        description: 'Утсаар ярих соёл болон соёлтой хүсэлт тавих.',
        badge: 'Хичээл 1-11 • Анхан',
        levelLabel: 'HSK 1',
        overview: [
            { label: 'Зорилго', value: 'Утсаар ярих үед хэрэглэгддэг тусгай үгсийг сурах.' },
            { label: 'Шинэ ханз', value: '7 шинэ ханз' },
            { label: 'Дүрэм', value: '请 (гуйх) соёлтой хэрэглээ' },
        ],
        vocabulary: [
            { hanzi: '喂', pinyin: 'wèi', meaning: 'байна уу (утсаар)' },
            { hanzi: '请', pinyin: 'qǐng', meaning: 'гуйх, урих' },
            { hanzi: '问', pinyin: 'wèn', meaning: 'асуух' },
            { hanzi: '请问', pinyin: 'qǐngwèn', meaning: 'асууж болох уу' },
            { hanzi: '打电话', pinyin: 'dǎ diànhuà', meaning: 'утасдах' },
            { hanzi: '在', pinyin: 'zài', meaning: 'байх' },
            { hanzi: '认识', pinyin: 'rènshi', meaning: 'таних' },
        ],
        radicals: [
            {
                title: '讠 (yán)',
                glyph: '讠',
                pinyin: 'yán',
                meaning: 'Хэл/Яриа',
                radical: '讠',
                strokes: 2,
                note: 'Асуух (问) ба гуйх (请) ханзанд ярианы язгуур ордог.',
            }
        ],
        sentences: [
            { chinese: '喂，你在哪儿？', pinyin: 'Wèi, nǐ zài nǎr?', translation: 'Байна уу, чи хаана байна?' },
            { chinese: '他在打电话。', pinyin: 'Tā zài dǎ diànhuà.', translation: 'Тэр утсаар ярьж байна.' },
            { chinese: '请问，他在吗？', pinyin: 'Qǐngwèn, tā zài ma?', translation: 'Асууж болох уу, тэр байна уу?' },
        ],
        quiz: [
            {
                id: 'q1',
                orderLabel: 'Асуулт 1/5',
                question: "Утсаар 'Байна уу' гэж юу гэж хэлэх вэ?",
                choices: [
                    { label: 'A', text: '你好' },
                    { label: 'B', text: '喂', isCorrect: true },
                    { label: 'C', text: '请' },
                    { label: 'D', text: '谢谢' },
                ],
            }
        ],
    },
    'lesson-12': {
        slug: 'lesson-12',
        title: 'Хобби ба Чадвар',
        chinese: '你会说汉语吗？',
        pinyin: 'Nǐ huì shuō Hànyǔ ma?',
        description: 'Юм хийж чадах эсэх болон өөрийн сонирхлоо илэрхийлэх.',
        badge: 'Хичээл 1-12 • Анхан',
        levelLabel: 'HSK 1',
        overview: [
            { label: 'Зорилго', value: 'Чадвар (хэл сурах, хоол хийх г.м) болон хобби хэлж сурах.' },
            { label: 'Шинэ ханз', value: '8 шинэ ханз' },
            { label: 'Дүрэм', value: '会 (чадах) туслах үйл үгийн хэрэглээ' },
        ],
        vocabulary: [
            { hanzi: '会', pinyin: 'huì', meaning: 'чадах (сурсан зүйл)' },
            { hanzi: '说', pinyin: 'shuō', meaning: 'ярих' },
            { hanzi: '汉语', pinyin: 'Hànyǔ', meaning: 'Хятад хэл' },
            { hanzi: '写', pinyin: 'xiě', meaning: 'бичих' },
            { hanzi: '汉字', pinyin: 'Hànzì', meaning: 'Хятад ханз' },
            { hanzi: '做', pinyin: 'zuò', meaning: 'хийх' },
            { hanzi: '菜', pinyin: 'cài', meaning: 'хоол, ногоо' },
            { hanzi: '好学', pinyin: 'hǎoxué', meaning: 'сурах дуртай' },
        ],
        radicals: [
            {
                title: '讠 (yán)',
                glyph: '讠',
                pinyin: 'yán',
                meaning: 'Хэл/Яриа',
                radical: '讠',
                strokes: 2,
                note: 'Ярих (说) болон Хэл (语) ханзанд ярианы язгуур ордог.',
            }
        ],
        sentences: [
            { chinese: '你会说汉语吗？', pinyin: 'Nǐ huì shuō Hànyǔ ma?', translation: 'Чи Хятадаар ярьж чадах уу?' },
            { chinese: '我会做中国菜。', pinyin: 'Wǒ huì zuò Zhōngguó cài.', translation: 'Би Хятад хоол хийж чадна.' },
            { chinese: '你会写汉字吗？', pinyin: 'Nǐ huì xiě Hànzì ma?', translation: 'Чи ханз бичиж чадах уу?' },
        ],
        quiz: [
            {
                id: 'q1',
                orderLabel: 'Асуулт 1/5',
                question: "'Ярих' гэсэн утгатай ханзыг сонгоно уу.",
                choices: [
                    { label: 'A', text: '说', isCorrect: true },
                    { label: 'B', text: '写' },
                    { label: 'C', text: '做' },
                    { label: 'D', text: '读' },
                ],
            }
        ],
    },
    'lesson-13': {
        slug: 'lesson-13',
        title: 'Биеийн байдал',
        chinese: '我身体不太好',
        pinyin: 'Wǒ shēntǐ bù tài hǎo',
        description: 'Биеийн байдал, өвчин болон эмнэлэг явах тухай.',
        badge: 'Хичээл 1-13 • Анхан',
        levelLabel: 'HSK 1',
        overview: [
            { label: 'Зорилго', value: 'Өөрийн биеийн байдлыг илэрхийлэх, эмнэлэгт тусламж хүсэх.' },
            { label: 'Шинэ ханз', value: '9 шинэ ханз' },
            { label: 'Дүрэм', value: '太...了 (дэндүү) бүтцийн үгүйсгэл' },
        ],
        vocabulary: [
            { hanzi: '身体', pinyin: 'shēntǐ', meaning: 'бие' },
            { hanzi: '医生', pinyin: 'yīshēng', meaning: 'эмч' },
            { hanzi: '医院', pinyin: 'yīyuàn', meaning: 'эмнэлэг' },
            { hanzi: '看', pinyin: 'kàn', meaning: 'үзэх, харах' },
            { hanzi: '舒服', pinyin: 'shūfu', meaning: 'тухтай, аятайхан' },
            { hanzi: '想', pinyin: 'xiǎng', meaning: 'хүсэх' },
            { hanzi: '多', pinyin: 'duō', meaning: 'их, олон' },
            { hanzi: '喝水', pinyin: 'hē shuǐ', meaning: 'ус уух' },
        ],
        radicals: [
            {
                title: '亻 (rén)',
                glyph: '亻',
                pinyin: 'rén',
                meaning: 'Хүн',
                radical: '亻',
                strokes: 2,
                note: 'Бие (体) ханзны зүүн талд хүн байгаа нь бие махбодийг илэрхийлнэ.',
            }
        ],
        sentences: [
            { chinese: '你身体怎么样？', pinyin: 'Nǐ shēntǐ zěnmeyàng?', translation: 'Таны бие ямар байна?' },
            { chinese: '我身体不太好。', pinyin: 'Wǒ shēntǐ bù tài hǎo.', translation: 'Миний бие нэг л сайн биш байна.' },
            { chinese: '我想去医院看医生。', pinyin: 'Wǒ xiǎng qù yīyuàn kàn yīshēng.', translation: 'Би эмнэлэг явж эмчид үзүүлмээр байна.' },
        ],
        quiz: [
            {
                id: 'q1',
                orderLabel: 'Асуулт 1/5',
                question: "'Эмч' гэдгийг Хятадаар юу гэдэг вэ?",
                choices: [
                    { label: 'A', text: '老师' },
                    { label: 'B', text: '学生' },
                    { label: 'C', text: '医生', isCorrect: true },
                    { label: 'D', text: '朋友' },
                ],
            }
        ],
    },
    'lesson-14': {
        slug: 'lesson-14',
        title: 'Ажил мэргэжил',
        chinese: '你是做什么工作的？',
        pinyin: 'Nǐ shì zuò shénme gōngzuò de?',
        description: 'Хүмүүсийн мэргэжлийг асуух болон өөрийн ажлыг тайлбарлах.',
        badge: 'Хичээл 1-14 • Анхан',
        levelLabel: 'HSK 1',
        overview: [
            { label: 'Зорилго', value: 'Түгээмэл мэргэжлүүдийг нэрлэж сурах.' },
            { label: 'Шинэ ханз', value: '8 шинэ ханз' },
            { label: 'Дүрэм', value: '是...的 бүтэц (тодотгох)' },
        ],
        vocabulary: [
            { hanzi: '工作', pinyin: 'gōngzuò', meaning: 'ажил' },
            { hanzi: '同学', pinyin: 'tóngxué', meaning: 'ангийн найз' },
            { hanzi: '朋友', pinyin: 'péngyou', meaning: 'найз' },
            { hanzi: '认识', pinyin: 'rènshi', meaning: 'танилцах' },
            { hanzi: '高兴', pinyin: 'gāoxìng', meaning: 'баяртай' },
            { hanzi: '在', pinyin: 'zài', meaning: '-д (ажиллах)' },
            { hanzi: '学校', pinyin: 'xuéxiào', meaning: 'сургууль' },
        ],
        radicals: [
            {
                title: '工 (gōng)',
                glyph: '工',
                pinyin: 'gōng',
                meaning: 'Ажил/Хөдөлмөр',
                radical: '工',
                strokes: 3,
                note: 'Ажил (工作) ханзны язгуур бөгөөд багаж хэрэгсэл барьсан дүрсийг илэрхийлдэг.',
            }
        ],
        sentences: [
            { chinese: '你是做什么工作的？', pinyin: 'Nǐ shì zuò shénme gōngzuò de?', translation: 'Чи ямар ажил хийдэг вэ?' },
            { chinese: '我是老师。', pinyin: 'Wǒ shì lǎoshī.', translation: 'Би багш.' },
            { chinese: '认识你很高兴。', pinyin: 'Rènshi nǐ hěn gāoxìng.', translation: 'Тантай танилцсандаа баяртай байна.' },
        ],
        quiz: [
            {
                id: 'q1',
                orderLabel: 'Асуулт 1/5',
                question: "'Найз' гэсэн утгатай үгийг сонгоно уу.",
                choices: [
                    { label: 'A', text: '同学' },
                    { label: 'B', text: '朋友', isCorrect: true },
                    { label: 'C', text: '老师' },
                    { label: 'D', text: '学生' },
                ],
            }
        ],
    },
    'lesson-15': {
        slug: 'lesson-15',
        title: 'Төгсөлтийн давтлага',
        chinese: '我会说一点汉语',
        pinyin: 'Wǒ huì shuō yìdiǎnr Hànyǔ',
        description: 'Өмнөх бүх хичээлийг нэгтгэн дүгнэх ерөнхий ярианы хичээл.',
        badge: 'Хичээл 1-15 • Төгсөлт',
        levelLabel: 'HSK 1',
        overview: [
            { label: 'Зорилго', value: 'Суралцсан бүх дүрэм, үгсээ ашиглан цогц яриа өрнүүлэх.' },
            { label: 'Шинэ ханз', value: '5 шинэ ханз' },
            { label: 'Дүрэм', value: 'Нийлмэл өгүүлбэрийн бүтэц' },
        ],
        vocabulary: [
            { hanzi: '一点儿', pinyin: 'yìdiǎnr', meaning: 'жаахан, бага зэрэг' },
            { hanzi: '再见', pinyin: 'zàijiàn', meaning: 'баяртай' },
            { hanzi: '谢谢', pinyin: 'xièxie', meaning: 'баярлалаа' },
            { hanzi: '不客气', pinyin: 'bú kèqi', meaning: 'зүгээрээ' },
            { hanzi: '对不起', pinyin: 'duìbuqǐ', meaning: 'уучлаарай' },
            { hanzi: '没关系', pinyin: 'méi guānxi', meaning: 'зүгээрээ (уучлахад)' },
        ],
        radicals: [
            {
                title: '见 (jiàn)',
                glyph: '见',
                pinyin: 'jiàn',
                meaning: 'Харах/Уулзах',
                radical: '见',
                strokes: 4,
                note: 'Баяртай (再见) буюу "Дахин уулзацгаая" гэсэн ханзанд ордог.',
            }
        ],
        sentences: [
            { chinese: '我会说一点儿汉语。', pinyin: 'Wǒ huì shuō yìdiǎnr Hànyǔ.', translation: 'Би жаахан Хятадаар ярьж чадна.' },
            { chinese: '谢谢你。- 不客气。', pinyin: 'Xièxie nǐ. - Bú kèqi.', translation: 'Баярлалаа. - Зүгээрээ.' },
            { chinese: '对不起。- 没关系。', pinyin: 'Duìbuqǐ. - Méi guānxi.', translation: 'Уучлаарай. - Зүгээрээ.' },
        ],
        quiz: [
            {
                id: 'q1',
                orderLabel: 'Асуулт 1/5',
                question: "'Баяртай' гэдгийг Хятадаар юу гэдэг вэ?",
                choices: [
                    { label: 'A', text: '再见', isCorrect: true },
                    { label: 'B', text: '谢谢' },
                    { label: 'C', text: '对不起' },
                    { label: 'D', text: '你好' },
                ],
            }
        ],
    },
};