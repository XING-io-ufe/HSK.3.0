"use client";
import { MdBookmark, MdCancel, MdCheckCircle, MdPlayArrow, MdSmartToy, MdOutlineAbc } from '@/components/icons/material';

export default function GrammarPage() {
    return (
        <div className="bg-background-dark font-display text-white min-h-screen relative overflow-x-hidden">
            {/* Top Navigation */}
            <div className="relative flex w-full flex-col group/design-root">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                            {/* Breadcrumbs */}
                            <div className="flex flex-wrap gap-2 px-4 mb-2">
                                <a className="text-white/40 hover:text-primary text-sm font-medium transition-colors" href="#">
                                    Хичээл 1
                                </a>
                                <span className="text-white/20 text-sm">/</span>
                                <span className="text-primary text-sm font-medium">Хэлзүйн тайлбар</span>
                            </div>

                            {/* Main Content Area */}
                            <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4">
                                {/* Left Content Section */}
                                <div className="lg:col-span-8 space-y-6">
                                    {/* Page Heading */}
                                    <div className="flex flex-wrap justify-between items-start gap-4">
                                        <div className="flex flex-col gap-2">
                                            <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
                                                Хэлзүй: Өгүүлбэрийн бүтэц <br />
                                                <span className="text-primary/80 font-mono">(Subject + Verb + Object)</span>
                                            </h1>
                                            <p className="text-white/60 text-lg">Хятад хэлний үндсэн өгүүлбэрийн бүтцийг ойлгох</p>
                                        </div>
                                        <button className="flex items-center justify-center gap-2 rounded-lg h-11 px-6 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-bold text-sm">
                                            <MdBookmark className="text-lg" />
                                            <span className="truncate">Хадгалах</span>
                                        </button>
                                    </div>

                                    {/* Grammar Document Body */}
                                    <div className="glass-panel rounded-2xl p-8 border-l-4 border-l-primary/50 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-30 pointer-events-none text-6xl">
                                            <MdOutlineAbc />
                                        </div>
                                        <h2 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
                                            <span className="w-8 h-1 bg-primary rounded-full" />
                                            Дүрмийн тайлбар
                                        </h2>
                                        <p className="text-white/80 text-lg leading-relaxed mb-8">
                                            Хятад хэлний өгүүлбэр зүй нь монгол хэлнээс ялгаатай нь{' '}
                                            <span className="text-primary font-bold">үйл үг</span> нь тусагдахууныхаа өмнө ордог.
                                            Энэхүү бүтцийг <span className="bg-primary/20 px-2 py-0.5 rounded text-primary font-mono">SVO</span> (Subject-Verb-Object) гэж нэрлэдэг.
                                        </p>

                                        {/* High-Tech Logic Box */}
                                        <div className="relative py-12 px-4 bg-black/40 rounded-xl border border-white/5 overflow-hidden">
                                            <div className="flex flex-col md:flex-row items-center justify-around gap-8 relative z-10">
                                                {/* Subject */}
                                                <div className="flex flex-col items-center gap-2 group">
                                                    <div className="w-32 h-32 rounded-xl border-2 border-primary/30 flex items-center justify-center bg-primary/5 group-hover:border-primary transition-all duration-500 neon-glow">
                                                        <span className="text-primary font-bold text-lg">Эзэн бие</span>
                                                    </div>
                                                    <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Subject</span>
                                                </div>

                                                {/* Plus Connector */}
                                                <div className="text-primary animate-pulse text-4xl">
                                                    +
                                                </div>

                                                {/* Verb */}
                                                <div className="flex flex-col items-center gap-2 group">
                                                    <div className="w-32 h-32 rounded-xl border-2 border-primary/30 flex items-center justify-center bg-primary/5 group-hover:border-primary transition-all duration-500 neon-glow">
                                                        <span className="text-primary font-bold text-lg">Үйл үг</span>
                                                    </div>
                                                    <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Verb</span>
                                                </div>

                                                {/* Plus Connector */}
                                                <div className="text-primary animate-pulse text-4xl">
                                                    +
                                                </div>

                                                {/* Object */}
                                                <div className="flex flex-col items-center gap-2 group">
                                                    <div className="w-32 h-32 rounded-xl border-2 border-primary/30 flex items-center justify-center bg-primary/5 group-hover:border-primary transition-all duration-500 neon-glow">
                                                        <span className="text-primary font-bold text-lg">Тусагдахуун</span>
                                                    </div>
                                                    <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Object</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Comparison Table Section */}
                                    <div className="glass-panel rounded-2xl p-8 border border-white/5">
                                        <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-3">
                                            <span>⇄</span>
                                            Жишээ харьцуулалт
                                        </h3>
                                        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
                                            <table className="w-full text-left">
                                                <thead className="bg-white/5">
                                                    <tr>
                                                        <th className="p-4 text-white/50 font-medium text-sm">Төрөл</th>
                                                        <th className="p-4 text-white font-bold text-sm">Өгүүлбэр</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-white/5">
                                                    <tr>
                                                        <td className="p-4 text-white/50 text-sm italic">Хятад ханз</td>
                                                        <td className="p-4 text-2xl font-bold text-primary neon-text tracking-widest">我 学习 汉语</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 text-white/50 text-sm">Пиньинь</td>
                                                        <td className="p-4 text-lg font-mono text-white/80 italic">Wǒ xuéxí hànyǔ</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-4 text-white/50 text-sm italic">Монгол орчуулга</td>
                                                        <td className="p-4 text-lg text-white font-medium">Би Хятад хэл сурдаг</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Sidebar / AI Tip Section */}
                                <aside className="lg:col-span-4 space-y-6">
                                    {/* AI Insight Card */}
                                    <div className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-emerald-500/50 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                                        <div className="relative glass-panel rounded-2xl p-6 border border-primary/20">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="bg-primary/20 p-2 rounded-lg">
                                                    <MdSmartToy className="text-primary" />
                                                </div>
                                                <h4 className="text-white font-bold text-lg">AI Зөвлөмж</h4>
                                            </div>
                                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                                Монгол хэлтэй хүмүүсийн гаргадаг нийтлэг алдаа бол үйл үгийг өгүүлбэрийн төгсгөлд хэрэглэх явдал юм.
                                            </p>
                                            <div className="space-y-3">
                                                <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-lg flex items-start gap-3">
                                                    <MdCancel className="text-red-400 text-sm mt-0.5" />
                                                    <div>
                                                        <p className="text-red-300 text-xs font-bold uppercase mb-1">Буруу бүтэц</p>
                                                        <p className="text-white/80 text-sm font-mono">我 汉语 学习 (S O V)</p>
                                                    </div>
                                                </div>
                                                <div className="bg-primary/10 border border-primary/20 p-3 rounded-lg flex items-start gap-3">
                                                    <MdCheckCircle className="text-primary text-sm mt-0.5" />
                                                    <div>
                                                        <p className="text-primary/70 text-xs font-bold uppercase mb-1">Зөв бүтэц</p>
                                                        <p className="text-white font-mono text-sm">我 学习 汉语 (S V O)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Tracker */}
                                    <div className="glass-panel rounded-2xl p-6 border border-white/5">
                                        <h4 className="text-white font-bold mb-4 flex items-center justify-between">
                                            <span>Хичээлийн явц</span>
                                            <span className="text-primary text-sm">45%</span>
                                        </h4>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mb-6">
                                            <div className="bg-primary h-full rounded-full neon-glow" style={{ width: '45%' }} />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 text-sm text-white/40">
                                                <span>✓</span>
                                                <span>Шинэ үгс</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-primary font-bold">
                                                <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                                </div>
                                                <span>Хэлзүйн тайлбар</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-white/40">
                                                <span>○</span>
                                                <span>Дасгал ажил</span>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </main>

                            {/* Bottom Action Footer */}
                            <footer className="mt-8 mb-20 px-4">
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <button className="w-full sm:w-auto min-w-[200px] h-14 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 transition-all font-bold tracking-wide text-lg flex items-center justify-center gap-2">
                                        Ойлголоо
                                    </button>
                                    <button className="w-full sm:w-auto min-w-[240px] h-14 rounded-xl bg-primary text-black hover:scale-105 active:scale-95 transition-all font-bold tracking-wide text-lg neon-glow flex items-center justify-center gap-2">
                                        <MdPlayArrow />
                                        Дасгал ажиллах
                                    </button>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}