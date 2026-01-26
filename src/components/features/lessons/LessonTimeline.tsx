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
import { lessonsIndex } from '@/app/dashboard/lessons/data';

export default function LessonTimeline() {
    return (
        <div className="relative pl-8 md:pl-0 space-y-6">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-success via-primary to-[#282e39] md:-ml-[1px]" />

            {lessonsIndex.map((lesson, index) => (
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
                    stats={lesson.stats?.map((s, i) => ({
                        ...s,
                        icon: s.icon ?? (i === 0 ? <MdLibraryBooks className="text-[16px]" /> : <MdQuiz className="text-[16px]" />),
                    }))}
                    actionLabel="Эхлүүлэх"
                    actionHref={`/dashboard/lessons/${lesson.slug}`}
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
