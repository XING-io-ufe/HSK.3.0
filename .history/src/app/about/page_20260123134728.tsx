import React from 'react';
import {
    MdCode,
    MdTimer,
    MdSchool,
    MdTrendingUp,
    MdRocketLaunch,
    MdTerminal,
    MdGroup,
    MdVisibility,
} from 'react-icons/md';

export default function AboutPage() {
    return (
        <div className="bg-background-dark text-white overflow-x-hidden selection:bg-primary selection:text-black">
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]"></div>
                <div className="absolute inset-0 bg-linear-to-b from-background-dark via-transparent to-background-dark"></div>
            </div>

            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex justify-center items-center">
                <div className="absolute top-[10%] left-[5%] text-[150px] font-black text-white/5 floating-char select-none">技</div>
                <div className="absolute bottom-[15%] right-[5%] text-[150px] font-black text-white/5 floating-char delay-200 select-none">术</div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <main className="grow flex flex-col items-center w-full">
                    <section className="relative w-full py-20 lg:py-28 overflow-hidden">
                        <div className="container mx-auto px-4 flex flex-col items-center text-center max-w-4xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-8 backdrop-blur-sm">
                                <MdCode className="text-primary text-sm" />
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">Powered by Yargaitech</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                                Ирээдүйн Боловсролыг <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-white to-primary neon-text-glow">Технологиор Бүтээнэ</span>
                            </h1>

                            <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
                                Hanzi.mn бол Монгол оюутнуудад HSK 2.0 шалгалтыг амжилттай өгөхөд зориулагдсан, Yargaitech-ийн хөгжүүлсэн ухаалаг сургалтын платформ юм.
                            </p>
                        </div>
                    </section>

                    <section className="w-full py-16 relative">
                        <div className="container mx-auto px-4 max-w-6xl">
                            <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden border border-primary/20">
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-[80px] pointer-events-none"></div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                            <MdTimer className="text-primary text-4xl" />
                                            Бидний даалгавар
                                        </h2>
                                        <h3 className="text-xl text-primary font-medium mb-4 uppercase tracking-wide">HSK 2.0: 2026 оны 7-р сар</h3>
                                        <p className="text-gray-300 mb-6 leading-relaxed">
                                            2026 оны зун HSK шалгалтын систем бүрэн шинэчлэгдэж "HSK 3.0" руу шилжинэ. Энэ нь суралцах ёстой ханзны тоог 3 дахин нэмэгдүүлж, шалгалтыг эрс хүндрүүлэх юм.
                                        </p>
                                        <p className="text-gray-300 mb-8 leading-relaxed">
                                            Yargaitech-ийн баг энэхүү эгзэгтэй цаг үед Монгол залуустаа туслах зорилгоор Hanzi.mn-ийг бүтээсэн. Бидний алгоритм таныг хамгийн бага хугацаанд, хамгийн өндөр үр дүнтэйгээр хуучин системээр шалгалтаа өгч амжихад төвлөрдөг.
                                        </p>

                                        <div className="flex gap-4">
                                            <div className="px-4 py-2 rounded bg-white/5 border border-white/10 text-sm font-mono text-gray-400">
                                                Status: <span className="text-primary">CRITICAL</span>
                                            </div>
                                            <div className="px-4 py-2 rounded bg-white/5 border border-white/10 text-sm font-mono text-gray-400">
                                                Deadline: <span className="text-white">2026.07.01</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="relative z-10 glass-card p-6 rounded-xl border border-white/10 bg-black/40">
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-sm text-gray-400">Боломжит хугацаа</span>
                                                <span className="text-2xl font-bold text-primary">72%</span>
                                            </div>
                                            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden mb-6">
                                                <div className="h-full bg-primary neon-glow w-[72%] relative">
                                                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
                                                </div>
                                            </div>

                                            <ul className="space-y-4">
                                                <li className="flex items-center gap-3 text-sm text-gray-300">
                                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                        <MdSchool className="text-lg" />
                                                    </div>
                                                    Тэтгэлгийн боломж хаагдахаас өмнө
                                                </li>
                                                <li className="flex items-center gap-3 text-sm text-gray-300">
                                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                        <MdTrendingUp className="text-lg" />
                                                    </div>
                                                    Хамгийн хялбар аргаар оноо авах
                                                </li>
                                                <li className="flex items-center gap-3 text-sm text-gray-300">
                                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                        <MdRocketLaunch className="text-lg" />
                                                    </div>
                                                    Хиймэл оюун ухаанд суурилсан бэлтгэл
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="w-full py-20 bg-background-dark relative">
                        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
                        <div className="container mx-auto px-4 max-w-5xl relative z-10">
                            <div className="text-center mb-16">
                                <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">EST. 2025</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Yargaitech-ийн тухай</h2>
                                <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
                                <p className="text-gray-400 max-w-2xl mx-auto">
                                    Боловсролын салбарт технологийн хувьсгал хийхээр 2025 онд байгуулагдсан Yargaitech нь Монгол залуусын сурч боловсрох арга барилыг шинэчилж байна.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="glass-card p-8 rounded-xl border-t border-white/10 hover:-translate-y-1 transition-transform duration-300">
                                    <MdTerminal className="text-4xl text-gray-300 mb-6" />
                                    <h3 className="text-xl font-bold text-white mb-3">Технологи</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Бид орчин үеийн вэб технологи, SRS алгоритм, болон өгөгдлийн шинжилгээг ашиглан суралцагч бүрт тохирсон хувийн сургалтын замыг зурдаг.
                                    </p>
                                </div>

                                <div className="glass-card p-8 rounded-xl border-t border-primary/30 hover:-translate-y-1 transition-transform duration-300 bg-white/2">
                                    <MdGroup className="text-4xl text-primary mb-6" />
                                    <h3 className="text-xl font-bold text-white mb-3">Баг хамт оллон</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Манай баг Бээжин, Шанхай хотуудад боловсрол эзэмшсэн инженерүүд болон хэл шинжлэлийн эрдэмтдээс бүрдсэн хүчирхэг нэгдэл юм.
                                    </p>
                                </div>

                                <div className="glass-card p-8 rounded-xl border-t border-white/10 hover:-translate-y-1 transition-transform duration-300">
                                    <MdVisibility className="text-4xl text-gray-300 mb-6" />
                                    <h3 className="text-xl font-bold text-white mb-3">Алсын хараа</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Технологиор дамжуулан дэлхийн боловсролыг Монгол хүүхэд бүрт тэгш хүртээмжтэй, хялбар, сонирхолтой болгох нь бидний зорилго.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16 border border-white/5 rounded-lg p-6 bg-black/50 font-mono text-xs text-gray-500 overflow-hidden">
                                <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                    <span className="ml-2 opacity-50">build_log.txt</span>
                                </div>
                                <div className="space-y-1">
                                    <p>&gt; Yargaitech Core Systems initialized...</p>
                                    <p>&gt; Loading Learning Modules... <span className="text-primary">DONE</span></p>
                                    <p>&gt; Integrating HSK 2.0 Dataset... <span className="text-primary">DONE</span></p>
                                    <p>&gt; User: Mongolian Students</p>
                                    <p>&gt; Mission: Accelerate Learning Curve by 300%</p>
                                    <p className="animate-pulse">&gt; _</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="w-full py-20 relative overflow-hidden border-t border-white/5">
                        <div className="absolute inset-0 bg-primary/5 opacity-50 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
                        <div className="container mx-auto px-4 text-center relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ирээдүйгээ хамтдаа бүтээцгээе</h2>
                            <p className="text-gray-400 mb-10 max-w-xl mx-auto">Yargaitech болон Hanzi.mn таны амжилтын гүүр болоход бэлэн.</p>
                            <button className="h-14 px-10 rounded-lg bg-primary text-black font-bold text-lg hover:bg-white transition-all transform hover:scale-105 neon-glow">
                                ҮНЭГҮЙ ЭХЛЭХ
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}