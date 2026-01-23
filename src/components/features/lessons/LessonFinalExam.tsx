import type { ReactNode } from 'react';

type LessonFinalExamProps = {
    icon: ReactNode;
    title: string;
    description: string;
};

export default function LessonFinalExam({ icon, title, description }: LessonFinalExamProps) {
    return (
        <div className="relative mb-12 group md:flex md:justify-center w-full">
            <div className="absolute left-0 md:left-1/2 md:-ml-8 flex items-center justify-center z-10">
                <div className="rounded-full bg-[#1a1d24] border-2 border-dashed border-gray-600 text-gray-600 flex items-center justify-center w-16 h-16">
                    {icon}
                </div>
            </div>
            <div className="ml-20 md:ml-0 pt-2 md:pt-20 text-center">
                <h3 className="text-xl font-bold text-gray-500">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
}
