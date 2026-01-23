import React from 'react';
import {
    MdSchool,
    MdStyle,
    MdArrowForward,
    MdClose,
    MdCheck,
    MdAccountTree,
    MdExtension,
    MdHistoryEdu,
    MdAutoStories,
    MdRocketLaunch,
} from 'react-icons/md';

export default function LessonPage() {
    return (
        <div className="bg-background-dark text-white overflow-x-hidden selection:bg-primary selection:text-black">
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]"></div>
                <div className="absolute inset-0 bg-linear-to-b from-background-dark via-transparent to-background-dark"></div>
            </div>

            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex justify-center items-center">
                <div className="absolute top-[15%] left-[10%] text-[120px] font-black text-white/5 floating-char select-none">中</div>
                <div className="absolute top-[25%] right-[15%] text-[100px] font-black text-white/5 floating-char delay-100 select-none">国</div>
                <div className="absolute bottom-[20%] left-[20%] text-[140px] font-black text-white/5 floating-char delay-200 select-none">学</div>
                <div className="absolute bottom-[30%] right-[10%] text-[90px] font-black text-primary/10 floating-char delay-300 select-none">习</div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <main className="grow flex flex-col items-center w-full py-12 lg:py-20">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="mb-16 text-center">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6 backdrop-blur-sm">
                                <MdSchool className="text-primary text-sm" />
                                <span className="text-xs font-medium text-primary uppercase tracking-wider">Сургалтын хөтөлбөр</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Хичээлүүд</h1>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Хятад хэлийг шинжлэх ухаанч арга барилаар, цогцоор нь сурах гурван тулгуур багана.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                            <div className="lg:col-span-7 flex flex-col gap-6">
                                <div className="glass-card p-1 rounded-3xl border border-white/10 relative group h-full">
                                    <div className="absolute -inset-0.5 bg-linear-to-br from-primary/30 to-blue-600/30 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                                    <div className="relative bg-[#0F0F0F] rounded-[22px] p-8 h-full flex flex-col justify-between overflow-hidden">
                                        <div className="flex justify-between items-start mb-10 z-10 relative">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                    <MdStyle />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-bold text-white">Флаш Карт</h2>
                                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Smart Repetition System</p>
                                                </div>
                                            </div>
                                            <div className="px-3 py-1 rounded border border-white/10 bg-white/5 text-xs text-gray-400 font-mono">HSK 1-6</div>
                                        </div>

                                        <div className="grow flex justify-center items-center py-6 relative z-10">
                                            <div className="w-full max-w-sm aspect-3/4 bg-surface-dark border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col">
                                                <div className="px-4 py-3 border-b border-white/5 flex justify-between items-center bg-black/20">
                                                    <span className="text-[10px] text-gray-500 font-mono">ID: #2049</span>
                                                    <div className="flex gap-1">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                    </div>
                                                </div>

                                                <div className="flex-grow flex flex-col items-center justify-center p-6 text-center group/card cursor-pointer">
                                                    <div className="relative mb-6">
                                                        <div className="absolute inset-0 border border-dashed border-primary/20 opacity-30 pointer-events-none"></div>
                                                        <div className="absolute top-1/2 w-full h-px bg-primary/10 -translate-y-1/2 pointer-events-none"></div>
                                                        <div className="absolute left-1/2 h-full w-px bg-primary/10 -translate-x-1/2 pointer-events-none"></div>
                                                        <h1 className="text-8xl md:text-9xl font-black text-white relative z-10 drop-shadow-2xl">明</h1>
                                                    </div>
                                                    <div className="space-y-2 transition-opacity duration-300">
                                                        <p className="text-2xl text-primary font-mono tracking-wide">míng</p>
                                                        <p className="text-lg text-gray-300">Гэрэлтэй, тод, маргааш</p>
                                                    </div>
                                                </div>

                                                <div className="p-4 bg-black/40 backdrop-blur-sm border-t border-white/5 grid grid-cols-2 gap-3">
                                                    <button className="py-2.5 rounded-lg border border-red-500/20 text-red-500 hover:bg-red-500/10 transition text-sm font-bold flex items-center justify-center gap-2">
                                                        <MdClose className="text-[18px]" /> Мэдэхгүй
                                                    </button>
                                                    <button className="py-2.5 rounded-lg bg-primary/20 text-primary border border-primary/20 hover:bg-primary hover:text-black transition text-sm font-bold flex items-center justify-center gap-2">
                                                        <MdCheck className="text-[18px]" /> Мэднэ
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="absolute w-full max-w-sm aspect-[3/4] bg-surface-dark/50 border border-white/5 rounded-2xl -z-10 rotate-3 scale-95 translate-x-4"></div>
                                            <div className="absolute w-full max-w-sm aspect-[3/4] bg-surface-dark/30 border border-white/5 rounded-2xl -z-20 -rotate-2 scale-90 -translate-x-4"></div>
                                        </div>

                                        <div className="mt-8 text-center lg:text-left z-10">
                                            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                                                Манай <span className="text-primary">SRS (Spaced Repetition System)</span> алгоритм нь таныг мартах гэж байх үед дахин сануулж, санах ойд тань үүрд хадгалах боломжийг олгоно. Өдөрт 20 минут зарцуулахад л хангалттай.
                                            </p>
                                        </div>

                                        <div className="absolute inset-0 bg-grid opacity-[0.1] pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5 flex flex-col gap-6 h-full">
                                <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary/40 transition-all duration-300 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <MdAccountTree className="text-6xl text-white" />
                                    </div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                            <MdExtension />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Язгуур &amp; Логик</h3>
                                    </div>

                                    <div className="bg-black/30 rounded-xl p-5 border border-white/5 mb-6">
                                        <div className="flex items-center justify-center gap-4 text-center">
                                            <div className="flex flex-col items-center group/char">
                                                <div className="w-12 h-12 rounded bg-surface-dark border border-white/10 flex items-center justify-center text-2xl font-bold mb-2 transition-colors">日</div>
                                                <span className="text-[10px] text-gray-500 uppercase">Нар</span>
                                            </div>
                                            <span className="text-gray-600 text-xl font-bold">+</span>
                                            <div className="flex flex-col items-center group/char">
                                                <div className="w-12 h-12 rounded bg-surface-dark border border-white/10 flex items-center justify-center text-2xl font-bold mb-2 transition-colors">月</div>
                                                <span className="text-[10px] text-gray-500 uppercase">Сар</span>
                                            </div>
                                            <span className="text-primary text-xl font-bold">=</span>
                                            <div className="flex flex-col items-center">
                                                <div className="w-16 h-16 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-4xl font-black mb-2 text-white neon-text-glow">明</div>
                                                <span className="text-[10px] text-primary uppercase font-bold">Гэрэлтэй</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm mb-4">
                                        Ханз бол зураг биш, харин логик юм. 214 язгуурыг ойлгосноор та шинэ үгийг хараад утгыг нь тааварлах чадвартай болно.
                                    </p>

                                    <a className="inline-flex items-center text-blue-400 text-sm font-bold hover:text-white transition-colors" href="#">
                                        Дэлгэрэнгүй үзэх <MdArrowForward className="ml-1" />
                                    </a>
                                </div>

                                <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary/40 transition-all duration-300 relative overflow-hidden flex-grow flex flex-col justify-between group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <MdHistoryEdu className="text-6xl text-white" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                                                <MdAutoStories />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Хэлзүй (Grammar)</h3>
                                        </div>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center gap-3 text-sm p-3 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors cursor-default">
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400">HSK 1</span>
                                                <span className="text-gray-300">S + V + O (Энгийн өгүүлбэр)</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm p-3 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors cursor-default">
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-400">HSK 2</span>
                                                <span className="text-gray-300">Time + Location + Verb</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm p-3 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors cursor-default">
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-400">HSK 3</span>
                                                <span className="text-gray-300">把 (Bǎ) өгүүлбэрийн бүтэц</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-400 text-sm">Монгол хэлний логиктой харьцуулсан тайлбар. Дүрмийг цээжлэх биш, хэрэглэж сур.</p>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <div className="flex items-center justify-between">
                                            <div className="flex -space-x-2">
                                                <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-surface-dark flex items-center justify-center text-[10px] font-bold">L1</div>
                                                <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-surface-dark flex items-center justify-center text-[10px] font-bold">L2</div>
                                                <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-surface-dark flex items-center justify-center text-[10px] text-gray-500 font-bold">+4</div>
                                            </div>
                                            <button className="text-sm font-bold text-white bg-purple-500/20 hover:bg-purple-500 px-4 py-2 rounded-lg transition-colors">Хөтөлбөр үзэх</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <button className="h-14 px-10 rounded-xl bg-primary text-black font-bold text-lg hover:bg-white transition-all transform hover:scale-105 neon-glow flex items-center gap-2 mx-auto">
                                <MdRocketLaunch /> СУРАЛЦАЖ ЭХЛЭХ
                            </button>
                            <p className="text-gray-500 text-sm mt-4">7 хоногийн үнэгүй эрхтэй. Кредит карт шаардлагагүй.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}