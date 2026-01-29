"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdSearch, MdFilterList, MdVolumeUp, MdViewInAr, MdClose, MdStar, MdAccountTree, MdDraw, MdPlayArrow, MdFormatQuote, MdHistoryEdu, MdGridView, MdTranslate, MdQuiz } from '@/components/icons/material';

export default function DictionaryPage() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 1024px)');
        const sync = (match: boolean) => {
            setIsDesktop(match);
            setDrawerOpen(match); // desktop shows by default; mobile closed until toggled
        };
        sync(mq.matches);
        const listener = (e: MediaQueryListEvent) => sync(e.matches);
        mq.addEventListener('change', listener);
        return () => mq.removeEventListener('change', listener);
    }, []);

    const showDrawer = drawerOpen;
    return (
        <div className="bg-background-dark font-display text-white flex flex-col h-screen overflow-hidden">
            <div className="flex flex-1 overflow-hidden">
                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8">
                    {/* Search Section */}
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold text-primary">HSK 1: Ханзны толь</h1>
                            <p className="text-white/60 text-sm">Нийт 150 үндсэн ханз болон тэдгээрийн язгуур бүтцийг судлах.</p>
                        </div>

                        {/* Search Input */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/10 blur-xl group-focus-within:bg-primary/20 transition-all rounded-xl"></div>
                            <div className="relative flex items-center bg-[#1a2318] border border-primary/30 rounded-xl overflow-hidden px-4 h-16 shadow-2xl">
                                <MdSearch className="text-primary/60 mr-4 text-xl" />
                                <input
                                    className="bg-transparent border-none focus:ring-0 text-white w-full text-lg placeholder:text-white/30 font-display"
                                    placeholder="Ханз, пиньинь эсвэл Монгол утгаар хайх"
                                    type="text"
                                />
                                <div className="flex gap-2">
                                    <kbd className="px-2 py-1 bg-white/5 rounded text-[10px] text-white/40 border border-white/10 uppercase">Ctrl</kbd>
                                    <kbd className="px-2 py-1 bg-white/5 rounded text-[10px] text-white/40 border border-white/10 uppercase">K</kbd>
                                </div>
                            </div>
                        </div>

                        {/* Radical Filters */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between px-1">
                                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-widest flex items-center gap-2">
                                    <MdFilterList className="text-primary text-sm" />
                                    Язгуураар шүүх
                                </h3>
                                <button className="text-xs text-primary/80 hover:text-primary">Бүгдийг харах</button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <button className="px-4 py-2 rounded-lg bg-primary text-background-dark font-bold text-sm flex items-center gap-2">亻 Хүн</button>
                                <button className="px-4 py-2 rounded-lg bg-[#1a2318] border border-white/10 text-white/70 hover:border-primary/50 hover:text-white transition-all text-sm">口 Ам</button>
                                <button className="px-4 py-2 rounded-lg bg-[#1a2318] border border-white/10 text-white/70 hover:border-primary/50 hover:text-white transition-all text-sm">讠 Хэл</button>
                                <button className="px-4 py-2 rounded-lg bg-[#1a2318] border border-white/10 text-white/70 hover:border-primary/50 hover:text-white transition-all text-sm">女 Эмэгтэй</button>
                                <button className="px-4 py-2 rounded-lg bg-[#1a2318] border border-white/10 text-white/70 hover:border-primary/50 hover:text-white transition-all text-sm">日 Нар</button>
                                <button className="px-4 py-2 rounded-lg bg-[#1a2318] border border-white/10 text-white/70 hover:border-primary/50 hover:text-white transition-all text-sm">月 Сар</button>
                                <button className="px-4 py-2 rounded-lg bg-[#1a2318] border border-white/10 text-white/70 hover:border-primary/50 hover:text-white transition-all text-sm">木 Мод</button>
                                <button className="px-4 py-2 rounded-lg bg-[#1a2318] border border-white/10 text-white/70 hover:border-primary/50 hover:text-white transition-all text-sm">水 Ус</button>
                                <button className="px-4 py-2 rounded-lg bg-[#1a2318] border border-white/10 text-white/70 hover:border-primary/50 hover:text-white transition-all text-sm">火 Гал</button>
                            </div>
                        </div>
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto pb-20">
                        {/* Character Card 1 */}
                        <div className="glass-card aspect-square rounded-xl p-4 flex flex-col items-center justify-between group cursor-pointer border border-primary/10">
                            <div className="w-full flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="text-primary hover:scale-110 transition-transform"><MdVolumeUp className="text-xl" /></button>
                                <button className="text-primary hover:scale-110 transition-transform"><MdViewInAr className="text-xl" /></button>
                            </div>
                            <div className="text-6xl font-display text-white group-hover:text-primary transition-colors">我</div>
                            <div className="w-full text-center">
                                <p className="text-primary font-bold text-sm">wǒ</p>
                                <p className="text-white/50 text-xs">Би</p>
                            </div>
                        </div>

                        {/* Character Card 2 */}
                        <div className="glass-card aspect-square rounded-xl p-4 flex flex-col items-center justify-between group cursor-pointer border border-primary/10">
                            <div className="w-full flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="text-primary hover:scale-110 transition-transform"><MdVolumeUp className="text-xl" /></button>
                                <button className="text-primary hover:scale-110 transition-transform"><MdViewInAr className="text-xl" /></button>
                            </div>
                            <div className="text-6xl font-display text-white group-hover:text-primary transition-colors">你</div>
                            <div className="w-full text-center">
                                <p className="text-primary font-bold text-sm">nǐ</p>
                                <p className="text-white/50 text-xs">Чи</p>
                            </div>
                        </div>

                        {/* Character Card 3 (Selected State) */}
                        <div className="glass-card aspect-square rounded-xl p-4 flex flex-col items-center justify-between group cursor-pointer border-primary shadow-[0_0_20px_rgba(60,249,26,0.2)] bg-primary/10">
                            <div className="w-full flex justify-between opacity-100">
                                <button className="text-primary"><MdVolumeUp className="text-xl" /></button>
                                <button className="text-primary"><MdViewInAr className="text-xl" /></button>
                            </div>
                            <div className="text-6xl font-display text-primary">谢</div>
                            <div className="w-full text-center">
                                <p className="text-primary font-bold text-sm">xiè</p>
                                <p className="text-white/80 text-xs">Талархах</p>
                            </div>
                        </div>

                        {/* Character Cards 4-10 */}
                        <div className="glass-card aspect-square rounded-xl p-4 flex flex-col items-center justify-between group cursor-pointer border border-primary/10">
                            <div className="text-6xl font-display text-white group-hover:text-primary transition-colors">好</div>
                            <div className="w-full text-center"><p className="text-primary font-bold text-sm">hǎo</p><p className="text-white/50 text-xs">Сайн</p></div>
                        </div>
                        <div className="glass-card aspect-square rounded-xl p-4 flex flex-col items-center justify-between group cursor-pointer border border-primary/10">
                            <div className="text-6xl font-display text-white group-hover:text-primary transition-colors">是</div>
                            <div className="w-full text-center"><p className="text-primary font-bold text-sm">shì</p><p className="text-white/50 text-xs">Мөн/Байх</p></div>
                        </div>
                        <div className="glass-card aspect-square rounded-xl p-4 flex flex-col items-center justify-between group cursor-pointer border border-primary/10">
                            <div className="text-6xl font-display text-white group-hover:text-primary transition-colors">不</div>
                            <div className="w-full text-center"><p className="text-primary font-bold text-sm">bù</p><p className="text-white/50 text-xs">Үгүй</p></div>
                        </div>
                        <div className="glass-card aspect-square rounded-xl p-4 flex flex-col items-center justify-between group cursor-pointer border border-primary/10">
                            <div className="text-6xl font-display text-white group-hover:text-primary transition-colors">人</div>
                            <div className="w-full text-center"><p className="text-primary font-bold text-sm">rén</p><p className="text-white/50 text-xs">Хүн</p></div>
                        </div>
                        <div className="glass-card aspect-square rounded-xl p-4 flex flex-col items-center justify-between group cursor-pointer border border-primary/10">
                            <div className="text-6xl font-display text-white group-hover:text-primary transition-colors">大</div>
                            <div className="w-full text-center"><p className="text-primary font-bold text-sm">dà</p><p className="text-white/50 text-xs">Том</p></div>
                        </div>
                        <div className="glass-card aspect-square rounded-xl p-4 flex flex-col items-center justify-between group cursor-pointer border border-primary/10">
                            <div className="text-6xl font-display text-white group-hover:text-primary transition-colors">小</div>
                            <div className="w-full text-center"><p className="text-primary font-bold text-sm">xiǎo</p><p className="text-white/50 text-xs">Жижиг</p></div>
                        </div>
                        <div className="glass-card aspect-square rounded-xl p-4 flex flex-col items-center justify-between group cursor-pointer border border-primary/10">
                            <div className="text-6xl font-display text-white group-hover:text-primary transition-colors">多</div>
                            <div className="w-full text-center"><p className="text-primary font-bold text-sm">duō</p><p className="text-white/50 text-xs">Их</p></div>
                        </div>
                    </div>
                </main>

                {/* Detail Drawer */}
                {showDrawer && !isDesktop && (
                    <div className="fixed inset-0 z-20 bg-black/40 backdrop-blur-sm" onClick={() => setDrawerOpen(false)} />
                )}
                <aside
                    className={`
                        ${showDrawer ? '' : 'hidden'}
                        ${isDesktop ? 'w-[400px] border-l border-[#2a3a27] bg-[#0d140c] hidden lg:block' : 'fixed inset-0 z-30 w-full bg-[#0d140c]'}
                        overflow-y-auto
                    `.trim()}
                >
                    <div className="p-6 space-y-8">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">Дэлгэрэнгүй мэдээлэл</span>
                            <button className="text-white/40 hover:text-white" onClick={() => setDrawerOpen(false)}><MdClose /></button>
                        </div>

                        {/* Main Preview */}
                        <div className="flex flex-col items-center gap-4 py-8 border-b border-white/5">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-50"></div>
                                <div className="relative w-48 h-48 bg-[#1a2318] border-2 border-primary rounded-2xl flex items-center justify-center text-8xl font-display shadow-2xl">
                                    谢
                                </div>
                            </div>
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-white">xièxiè</h2>
                                <p className="text-primary text-lg">Баярлалаа / Талархах</p>
                            </div>
                            <div className="flex gap-4 mt-2">
                                <button className="p-3 bg-[#2a3a27] hover:bg-primary hover:text-background-dark rounded-full transition-all">
                                    <MdVolumeUp />
                                </button>
                                <button className="p-3 bg-[#2a3a27] hover:bg-primary hover:text-background-dark rounded-full transition-all">
                                    <MdStar />
                                </button>
                            </div>
                        </div>

                        {/* Radical Breakdown */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-white/80 flex items-center gap-2">
                                <MdAccountTree className="text-primary text-sm" />
                                Язгуурын бүтэц
                            </h4>
                            <div className="bg-black/30 p-4 rounded-xl flex items-center justify-around border border-white/5">
                                <div className="text-center">
                                    <div className="text-2xl text-primary mb-1">讠</div>
                                    <div className="text-[10px] text-white/40">Хэл</div>
                                </div>
                                <div className="text-white/20 text-xl">+</div>
                                <div className="text-center">
                                    <div className="text-2xl text-primary mb-1">身</div>
                                    <div className="text-[10px] text-white/40">Бие</div>
                                </div>
                                <div className="text-white/20 text-xl">+</div>
                                <div className="text-center">
                                    <div className="text-2xl text-primary mb-1">寸</div>
                                    <div className="text-[10px] text-white/40">Хуруу</div>
                                </div>
                            </div>
                        </div>

                        {/* Stroke Order */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-white/80 flex items-center gap-2">
                                <MdDraw className="text-primary text-sm" />
                                Бичих дараалал
                            </h4>
                            <div className="relative aspect-video bg-[#1a2318] rounded-xl overflow-hidden border border-white/10 group cursor-pointer">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <MdPlayArrow className="text-primary text-4xl" />
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 rounded text-[10px] text-white/60">
                                    12 зураас
                                </div>
                                <Image
                                    alt="Chinese character stroke order animation"
                                    className="object-cover opacity-20"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeJexR5Lztbr90Oeuf1dPrJtSBo2IsZR6NpBjLaSxHJq9uNIWHZMnWbcDXkTdaMlgZ0t6TSzwusDtyQHQvo53BB435mCaudMSLviNG8WzXwP9iEvLJdBKhNd5tJFyxHt5wy-5mFIDJpgmoLeu24kwa11PcHURq463VE0q06v9J75DnexFX_ZzQgZAUfx3-EntLeY3zL8ILVuLA3nN9QlFy_WIFSRWBuzC3pDUXRLH46ati_NihQSjaBOARPUsK6auwjqMehcW5Btw"
                                    fill
                                />
                            </div>
                        </div>

                        {/* Example Sentences */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-white/80 flex items-center gap-2">
                                <MdFormatQuote className="text-primary text-sm" />
                                Жишээ өгүүлбэр
                            </h4>
                            <div className="space-y-3">
                                <div className="p-3 bg-white/5 rounded-lg border-l-2 border-primary">
                                    <p className="text-white text-sm">谢谢你的帮助。</p>
                                    <p className="text-white/40 text-xs mt-1 italic">Тусалсанд тань баярлалаа.</p>
                                </div>
                                <div className="p-3 bg-white/5 rounded-lg border-l-2 border-white/20">
                                    <p className="text-white text-sm">不客气！</p>
                                    <p className="text-white/40 text-xs mt-1 italic">Зүгээр ээ, зүгээр.</p>
                                </div>
                            </div>
                        </div>

                        {/* Historical Evolution */}
                        <div className="space-y-4 pb-10">
                            <h4 className="text-sm font-bold text-white/80 flex items-center gap-2">
                                <MdHistoryEdu className="text-primary text-sm" />
                                Түүхэн хувьсал
                            </h4>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="bg-black/30 p-3 rounded-lg text-center border border-white/5">
                                    <div className="text-xs text-white/30 mb-2">Оракт</div>
                                    <Image
                                        alt="Oracle bone script representation"
                                        className="mx-auto w-8 h-8 invert opacity-50"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbCRxLf767oEbRjpm8t9CDuwvv3meTOWZz5xy3oBzyHEaH9gKeHCxPOdBGqz8sIjNS1no53UjmZ4JgwBB-9PQT8WjwL8BbxLiXJmbm7aUllpAXuWbW5Ck60P0bBeiNaIAMgif4PloqqOql1r63GmOSDhLURwfqo-9_nFHMbcjD8QwlqwUVYwt342Tv_fM5qvl67W984VqANf4H0_LXlsxSVWnLriZrNg4uTrlDOXaXr2ls9-lMwyid35-IzMsISIDrbp4ECdtTfJM"
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <div className="bg-black/30 p-3 rounded-lg text-center border border-white/5">
                                    <div className="text-xs text-white/30 mb-2">Бронз</div>
                                    <Image
                                        alt="Bronze script representation"
                                        className="mx-auto w-8 h-8 invert opacity-50"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_y00rLsCqkFrM2zG0LDNZmCwAfZFJLEYXw_AwjBNXdUd-SAdGkIZUq8oFNytpHK51Qdf0EYOQNNsBUU7MUSaJRRDBu6hlF48xf4r3qsf5J5niJeL5WAFkNN8uOpNt47BQnsFpCCnWikWuUjBHeN7ssOvZ_L5-Zkt8PDhPWr8L6pgxNDQtGBCusHZuq7dORxX1b_d6dEvd3njBMKCgphsDTrZ-1OXE19TVGW4j-cNotmIuNEdogkW7MrGso5Vp7VkjwrR6bR88Tk0"
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <div className="bg-black/30 p-3 rounded-lg text-center border border-white/5">
                                    <div className="text-xs text-white/30 mb-2">Одоо</div>
                                    <div className="text-2xl text-primary font-display">谢</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Floating Mobile Controls */}
            <div className="fixed bottom-6 left-1/2 lg:left-auto lg:right-6 -translate-x-1/2 lg:translate-x-0 flex gap-4 bg-background-dark/90 backdrop-blur-xl p-4 rounded-2xl border border-primary/20 shadow-2xl z-30">
                <button
                    className="w-12 h-12 rounded-xl bg-primary text-background-dark flex items-center justify-center font-bold"
                    onClick={() => setDrawerOpen(true)}
                >
                    <MdGridView />
                </button>
                <button className="w-12 h-12 rounded-xl bg-[#2a3a27] text-white flex items-center justify-center font-bold">
                    <MdTranslate />
                </button>
                <button className="w-12 h-12 rounded-xl bg-[#2a3a27] text-white flex items-center justify-center font-bold">
                    <MdQuiz />
                </button>
            </div>
        </div>
    );
}