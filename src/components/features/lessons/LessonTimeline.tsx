import {
    MdLibraryBooks,
    MdQuiz,
    MdPlayArrow,
    MdArrowForward,
    MdEmojiEvents,
} from '@/components/icons/material';
import LessonFullCard from './LessonFullCard';
import LessonMarker from './LessonMarker';
import LessonFinalExam from './LessonFinalExam';

const lessonPlan = [
    {
        title: 'Lesson 1: Сайн байна уу',
        chinese: '你好',
        pinyin: 'Nǐ hǎo',
        description: 'Сайн танилцаж, өдөр тутмын мэндчилгээ, анхан шатны үг хэллэгийг давтах хичээл.',
        stats: [
            { icon: <MdLibraryBooks className="text-[16px]" />, label: '10 үг' },
            { icon: <MdQuiz className="text-[16px]" />, label: 'Шалгалт' },
        ],
    },
    {
        title: 'Lesson 2: Би',
        chinese: '我',
        pinyin: 'Wǒ',
        description: 'Өөрийгөө танилцуулах болон хувь хүний тухай хэллэгүүдийг сурах.',
    },
    {
        title: 'Lesson 3: Тоо тоолол',
        chinese: '一二三',
        pinyin: 'Yī èr sān',
        description: 'Тоо тоолол болон өгөх, авах хэллэгүүдийг давтах.',
    },
    {
        title: 'Lesson 4: Гэр бүл',
        chinese: '家',
        pinyin: 'Jiā',
        description: 'Гэр бүлийн гишүүд болон танилцуулгын хэрэгцээтэй үгс.',
    },
    {
        title: 'Lesson 5: Сургууль дээр',
        chinese: '学校',
        pinyin: 'Xuéxiào',
        description: 'Сургуулийн орчин, хичээлийн нэр томьёог сурах.',
    },
    {
        title: 'Lesson 6: Хоол хүнс',
        chinese: '饭',
        pinyin: 'Fàn',
        description: 'Хоол хүнс захиалах, дэлгүүрт ярилцах.',
    },
    {
        title: 'Lesson 7: Цаг хугацаа',
        chinese: '时间',
        pinyin: 'Shíjiān',
        description: 'Цаг, өдрүүд болон хуваарьтай холбоотой харилцаа.',
    },
    {
        title: 'Lesson 8: Дэлгүүр хэсэх',
        chinese: '买',
        pinyin: 'Mǎi',
        description: 'Дэлгүүрт худалдан авалт хийх, үнэ асуух.',
    },
    {
        title: 'Lesson 9: Байршил',
        chinese: '在哪儿',
        pinyin: 'Zài nǎr',
        description: 'Байршил асуух, заах хэллэгүүд.',
    },
    {
        title: 'Lesson 10: Цаг агаар',
        chinese: '天气',
        pinyin: 'Tiānqì',
        description: 'Цаг агаарын төлөв болон урьдчилсан мэдээ.',
    },
    {
        title: 'Lesson 11: Ажил төрөл',
        chinese: '工作',
        pinyin: 'Gōngzuò',
        description: 'Ажлын байранд хэрэглэгддэг үгс болон мэндчилгээ.',
    },
    {
        title: 'Lesson 12: Эрүүл мэнд',
        chinese: '健康',
        pinyin: 'Jiànkāng',
        description: 'Эрүүл мэндийн асуултууд болон зөвлөгөө.',
    },
    {
        title: 'Lesson 13: Яармаг',
        chinese: '市场',
        pinyin: 'Shìchǎng',
        description: 'Зах худалдаа, үнэ хэлэх, хямдрал.',
    },
    {
        title: 'Lesson 14: Холбоо барих',
        chinese: '电话',
        pinyin: 'Diànhuà',
        description: 'Утасны дугаар солилцох, захиалга өгөх.',
    },
    {
        title: 'Lesson 15: Шалгалт',
        chinese: '考试',
        pinyin: 'Kǎoshì',
        description: 'Анхан шатны шалгалт, үг, тогтоолын давталт.',
    },
];

export default function LessonTimeline() {
    return (
        <div className="relative pl-8 md:pl-0 space-y-6">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-success via-primary to-[#282e39] md:-ml-[1px]" />

            {lessonPlan.map((lesson, index) => (
                <LessonFullCard
                    key={lesson.title}
                    layoutSide={index % 2 === 0 ? 'right' : 'left'}
                    marker={(
                        <LessonMarker
                            status="active"
                            icon={<MdPlayArrow className="text-2xl" />}
                            sizeClass="h-12 w-12"
                        />
                    )}
                    badgeLabel="Нээлттэй"
                    badgeTone="primary"
                    progressValue="0%"
                    title={lesson.title}
                    chinese={lesson.chinese}
                    pinyin={lesson.pinyin}
                    description={lesson.description}
                    stats={lesson.stats}
                    actionLabel="Эхлүүлэх"
                    actionIcon={<MdArrowForward className="text-lg" />}
                />
            ))}
            <LessonFinalExam
                icon={<MdEmojiEvents className="text-3xl" />}
                title="Lesson 15: Шалгалт"
                description="Final Exam (考试)" />
        </div>
    );
}
