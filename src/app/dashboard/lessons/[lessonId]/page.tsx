import { notFound } from 'next/navigation';
import { MdMenuBook, MdPsychology, MdQuiz } from '@/components/icons/material';
import FloatingCharacters from '@/components/ui/FloatingCharacters';
import LessonHero from '@/components/features/lessons/course/LessonHero';
import LessonSectionHeader from '@/components/features/lessons/course/LessonSectionHeader';
import VocabularyTable from '@/components/features/lessons/course/VocabularyTable';
import RadicalInsightGrid from '@/components/features/lessons/course/RadicalInsightGrid';
import SentenceList from '@/components/features/lessons/course/SentenceList';
import Link from 'next/link';
import QuizList from '@/components/features/lessons/course/QuizList';
import { lessonContentMap, lessonsIndex } from '../data';

type Props = {
    params: {
        lessonId: string;
    };
};

export default async function LessonDetailPage({ params }: Props) {
    const { lessonId } = await params;
    const lesson = lessonContentMap[lessonId];

    if (!lesson) {
        return notFound();
    }

    const currentIndex = lessonsIndex.findIndex((l) => l.slug === lessonId);
    const nextLesson = currentIndex >= 0 && currentIndex < lessonsIndex.length - 1
        ? lessonsIndex[currentIndex + 1].slug
        : null;

    const { vocabulary, radicals, sentences, quiz, overview, badge, levelLabel, title } = lesson;

    const lessonNumber = currentIndex >= 0 ? currentIndex + 1 : null;
    const badgeNode = (
        <div className="flex items-center gap-3">
            {badge ? badge : null}
            {lessonNumber && (
                <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold">
                    Хичээл {lessonNumber}
                </div>
            )}
        </div>
    );

    return (
        <div className="relative h-full overflow-auto bg-background-dark">
            <FloatingCharacters />

            <main className="relative z-10 flex-1 overflow-y-auto">
                <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
                    <LessonHero
                        breadcrumb={[levelLabel ?? 'HSK 1', title]}
                        title={title}
                        description={lesson.description}
                        badge={badgeNode}
                    />

                    {overview && (
                        <section id="overview" className="scroll-mt-24">
                            <div className="glass-card rounded-2xl border border-white/10 p-6 md:p-8">
                                <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary">
                                    {overview.map((item) => (
                                        <div key={item.label}>
                                            <div className="text-xs uppercase tracking-widest text-primary font-semibold">{item.label}</div>
                                            <div className="text-white">{item.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    <section className="space-y-8" aria-labelledby="vocab-title">
                        <LessonSectionHeader
                            id="vocab"
                            icon={<MdMenuBook className="text-lg" />}
                            title="Шинэ үгс"
                            eyebrow={levelLabel ?? 'HSK 1'}
                        />
                        <VocabularyTable items={vocabulary} />
                    </section>

                    <section className="space-y-8" aria-labelledby="radicals-title">
                        <LessonSectionHeader
                            id="radicals"
                            icon={<MdPsychology className="text-lg" />}
                            title="Язгуур түвшний тайлбар"
                            eyebrow="Ханзны бүтэц"
                        />
                        <RadicalInsightGrid items={radicals} />
                    </section>

                    <section className="space-y-8" aria-labelledby="sentences-title">
                        <LessonSectionHeader
                            id="sentences"
                            icon={<MdMenuBook className="text-lg" />}
                            title="Өгүүлбэрүүд"
                            eyebrow="Практик хэрэглээ"
                        />
                        <SentenceList items={sentences} />
                    </section>

                    <section className="space-y-8 mb-12" aria-labelledby="practice-title">
                        <LessonSectionHeader
                            id="practice"
                            icon={<MdQuiz className="text-lg" />}
                            title="Асуултууд"
                            eyebrow="Давтлага"
                        />
                        <QuizList items={quiz} />
                        {nextLesson && (
                            <div className="flex justify-center">
                                <Link href={`/dashboard/lessons/${nextLesson}`} className="px-6 py-3 rounded-lg bg-primary text-black font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                                    Дараагийн хичээл рүү шилжих
                                </Link>
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </div>
    );
}