import FloatingCharacters from '@/components/ui/FloatingCharacters';
import LessonIntro from '@/components/features/lessons/LessonIntro';
import LessonTimeline from '@/components/features/lessons/LessonTimeline';

export default function LessonsPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-white overflow-hidden h-screen flex flex-col">
            <div className="flex flex-1 overflow-hidden relative">
                <FloatingCharacters />
                <main className="flex-1 overflow-y-auto relative scroll-smooth z-10 px-4 py-8 lg:px-12">
                    <div className="max-w-3xl mx-auto pb-20">
                        <LessonIntro />
                        <LessonTimeline />
                    </div>
                </main>
            </div>
        </div>
    );
}
