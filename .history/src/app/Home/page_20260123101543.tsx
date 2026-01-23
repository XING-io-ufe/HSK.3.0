export default function HomePage() {
    return (
        <div className="bg-background-dark text-white overflow-x-hidden selection:bg-primary selection:text-black">
            {/* Background grid overlays */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]"></div>
                <div className="absolute inset-0 bg-linear-to-b from-background-dark via-transparent to-background-dark"></div>
            </div>

            {/* Floating background characters */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex justify-center items-center">
                <div className="absolute top-[15%] left-[10%] text-[120px] font-black text-white/5 floating-char select-none">中</div>
                <div className="absolute top-[25%] right-[15%] text-[100px] font-black text-white/5 floating-char delay-100 select-none">国</div>
                <div className="absolute bottom-[20%] left-[20%] text-[140px] font-black text-white/5 floating-char delay-200 select-none">学</div>
                <div className="absolute bottom-[30%] right-[10%] text-[90px] font-black text-primary/10 floating-char delay-300 select-none">习</div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-black font-bold text-xl">汉</div>
                                <span className="text-xl font-bold tracking-tight text-white">
                                    Hanzi
                                    <span className="text-primary">.mn</span>
                                </span>
                            </div>
                            <nav className="hidden md:flex items-center gap-8">
                                <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Нүүр</a>
                                <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Бидний тухай</a>
                                <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Хичээлүүд</a>
                                <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Блог</a>
                                <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Холбоо барих</a>
                            </nav>
                            <div className="flex items-center gap-4">
                                <button className="hidden sm:flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-black transition-transform hover:scale-105 hover:bg-white neon-glow">
                                    Эхлэх
                                </button>
                                <button className="md:hidden p-2 text-gray-400 hover:text-white" aria-label="Menu">
                                    <span className="material-symbols-outlined">menu</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="grow flex flex-col items-center w-full">
                    {/* Hero */}
                    <section className="relative w-full py-20 lg:py-32 overflow-hidden">
                        <div className="container mx-auto px-4 flex flex-col items-center text-center max-w-5xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 mb-8 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-xs font-medium text-primary uppercase tracking-wider">Шинэ элсэлт эхэллээ</span>
                            </div>

                              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-transparent bg-clip-text bg-linear-to-br from-white via-white to-gray-500">
                                HSK 2.0 – СУРАЛЦАХ <br className="hidden md:block" />
                                <span className="text-primary neon-text-glow">СҮҮЛЧИЙН БОЛОМЖ</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
                                2026 он гэхэд HSK систем бүрэн өөрчлөгдөнө. Шинэ системээс өмнө амжиж, ирээдүйгээ баталгаажуул.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 w-full">
                                <button className="h-12 px-8 rounded-lg bg-primary text-black font-bold text-base hover:bg-white transition-all transform hover:scale-105 neon-glow flex items-center gap-2">
                                    <span>ЭХЛЭХ</span>
                                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                </button>
                                <button className="h-12 px-8 rounded-lg border border-white/20 bg-white/5 text-white font-bold text-base hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm">
                                    <span>ЯАГААД HANZI.MN ВЭ?</span>
                                </button>
                            </div>

                            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-3xl glass-card p-6 rounded-xl border-t border-white/10">
                                <div className="flex flex-col items-center">
                                    <span className="text-3xl font-bold text-white font-mono">465</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Өдөр</span>
                                </div>
                                <div className="flex flex-col items-center border-l border-white/5">
                                    <span className="text-3xl font-bold text-white font-mono">12</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Цаг</span>
                                </div>
                                <div className="flex flex-col items-center border-l border-white/5">
                                    <span className="text-3xl font-bold text-white font-mono">30</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Минут</span>
                                </div>
                                <div className="flex flex-col items-center border-l border-white/5">
                                    <span className="text-3xl font-bold text-primary font-mono animate-pulse">45</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Секунд</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Programs */}
                    <section className="w-full py-20 relative bg-background-dark">
                        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
                        <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
                        <div className="container mx-auto px-4 max-w-6xl relative z-10">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Сургалтын хөтөлбөр</h2>
                                <p className="text-gray-400 max-w-xl mx-auto">Өөрийн түвшинг сонгоод яг одоо суралцаж эхлээрэй.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                {/* Card: HSK 1 */}
                                <div className="glass-card rounded-2xl p-6 border border-primary/50 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 neon-glow">
                                    <div className="absolute top-0 right-0 p-4">
                                        <span className="inline-flex items-center rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-medium text-primary border border-primary/20">Нээлттэй</span>
                                    </div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-black shadow-lg shadow-primary/30">
                                            <span className="text-lg font-bold">1</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">HSK 1</h3>
                                            <p className="text-sm text-gray-400">Анхан шат</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-xs font-medium text-gray-400">
                                            <span>Явц</span>
                                            <span className="text-primary">45 / 150 ханз</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary w-[30%] shadow-[0_0_10px_rgba(19,236,37,0.5)]"></div>
                                        </div>
                                    </div>
                                    <button className="w-full h-10 rounded-lg bg-primary text-black font-bold text-sm hover:bg-white transition-colors flex items-center justify-center gap-2">
                                        <span>Үргэлжлүүлэх</span>
                                        <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                                    </button>
                                </div>

                                {/* Card: HSK 2 (locked) */}
                                <div className="glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-300 hover:scale-[1.02] bg-[#1a1a1a]">
                                    <div className="absolute top-4 right-4 text-yellow-500/80">
                                        <span className="material-symbols-outlined">lock</span>
                                    </div>
                                    <div className="flex items-center gap-4 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                            <span className="text-lg font-bold">2</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">HSK 2</h3>
                                            <p className="text-sm text-gray-500">Анхан дунд</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3 mb-6 opacity-40">
                                        <div className="flex justify-between text-xs font-medium text-gray-500">
                                            <span>Ханзны тоо</span>
                                            <span>300</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full"></div>
                                    </div>
                                    <button className="w-full h-10 rounded-lg border border-white/10 text-gray-500 font-medium text-sm cursor-not-allowed flex items-center justify-center gap-2 bg-black/20">
                                        Түгжигдсэн
                                    </button>
                                </div>

                                {/* Card: HSK 3 (locked) */}
                                <div className="glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-300 hover:scale-[1.02] bg-[#1a1a1a]">
                                    <div className="absolute top-4 right-4 text-yellow-500/80">
                                        <span className="material-symbols-outlined">lock</span>
                                    </div>
                                    <div className="flex items-center gap-4 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                            <span className="text-lg font-bold">3</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">HSK 3</h3>
                                            <p className="text-sm text-gray-500">Дунд шат</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3 mb-6 opacity-40">
                                        <div className="flex justify-between text-xs font-medium text-gray-500">
                                            <span>Ханзны тоо</span>
                                            <span>600</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full"></div>
                                    </div>
                                    <button className="w-full h-10 rounded-lg border border-white/10 text-gray-500 font-medium text-sm cursor-not-allowed flex items-center justify-center gap-2 bg-black/20">
                                        Түгжигдсэн
                                    </button>
                                </div>

                                {/* Card: HSK 4 (locked) */}
                                <div className="glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-300 hover:scale-[1.02] bg-[#1a1a1a]">
                                    <div className="absolute top-4 right-4 text-yellow-500/80">
                                        <span className="material-symbols-outlined">lock</span>
                                    </div>
                                    <div className="flex items-center gap-4 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                            <span className="text-lg font-bold">4</span>
                                        </div>
                                        <div>
                                              <h3 className="text-xl font-bold text-white">HSK 4</h3>
                                            <p className="text-sm text-gray-500">Дунд гүнзгий</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3 mb-6 opacity-40">
                                        <div className="flex justify-between text-xs font-medium text-gray-500">
                                            <span>Ханзны тоо</span>
                                            <span>1200</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full"></div>
                                    </div>
                                    <button className="w-full h-10 rounded-lg border border-white/10 text-gray-500 font-medium text-sm cursor-not-allowed flex items-center justify-center gap-2 bg-black/20">
                                        Түгжигдсэн
                                    </button>
                                </div>

                                {/* Card: HSK 5 (locked) */}
                                <div className="glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-300 hover:scale-[1.02] bg-[#1a1a1a]">
                                    <div className="absolute top-4 right-4 text-yellow-500/80">
                                        <span className="material-symbols-outlined">lock</span>
                                    </div>
                                    <div className="flex items-center gap-4 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                            <span className="text-lg font-bold">5</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">HSK 5</h3>
                                            <p className="text-sm text-gray-500">Гүнзгий шат</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3 mb-6 opacity-40">
                                        <div className="flex justify-between text-xs font-medium text-gray-500">
                                            <span>Ханзны тоо</span>
                                            <span>2500</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full"></div>
                                    </div>
                                    <button className="w-full h-10 rounded-lg border border-white/10 text-gray-500 font-medium text-sm cursor-not-allowed flex items-center justify-center gap-2 bg-black/20">
                                        Түгжигдсэн
                                    </button>
                                </div>

                                {/* Card: HSK 6 (locked) */}
                                <div className="glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-300 hover:scale-[1.02] bg-[#1a1a1a]">
                                    <div className="absolute top-4 right-4 text-yellow-500/80">
                                        <span className="material-symbols-outlined">lock</span>
                                    </div>
                                    <div className="flex items-center gap-4 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                            <span className="text-lg font-bold">6</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">HSK 6</h3>
                                            <p className="text-sm text-gray-500">Төгс эзэмших</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3 mb-6 opacity-40">
                                        <div className="flex justify-between text-xs font-medium text-gray-500">
                                            <span>Ханзны тоо</span>
                                            <span>5000+</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full"></div>
                                    </div>
                                    <button className="w-full h-10 rounded-lg border border-white/10 text-gray-500 font-medium text-sm cursor-not-allowed flex items-center justify-center gap-2 bg-black/20">
                                        Түгжигдсэн
                                    </button>
                                </div>
                            </div>

                            <div className="w-full glass-card rounded-2xl p-8 border border-primary/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">
                                <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="flex items-center gap-6 relative z-10">
                                      <div className="h-16 w-16 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-500/20 shrink-0">
                                        <span className="material-symbols-outlined text-black text-3xl">workspace_premium</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">Бүрэн эрхээ идэвхжүүлэх</h3>
                                        <p className="text-gray-400">HSK 1-6 түвшин, 5000+ ханз, шалгалтын материалуудад хязгааргүй хандаарай.</p>
                                    </div>
                                </div>
                                <button className="relative z-10 h-14 px-10 rounded-lg bg-primary text-black font-bold text-lg hover:bg-white transition-all transform hover:scale-105 neon-glow flex items-center gap-2 whitespace-nowrap">
                                    <span className="material-symbols-outlined">lock_open</span>
                                    Бүх түвшинг нээх
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Comparison */}
                    <section className="w-full py-20 relative">
                        <div className="container mx-auto px-4 max-w-6xl">
                            <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
                                <div className="flex-1 glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full filter blur-[60px] pointer-events-none"></div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                              <h3 className="text-2xl font-bold text-white mb-1">HSK 2.0</h3>
                                            <p className="text-sm text-primary font-medium tracking-wide">ОДООГИЙН БОЛОМЖ</p>
                                        </div>
                                        <div className="bg-primary/20 p-2 rounded-lg text-primary">
                                            <span className="material-symbols-outlined">check_circle</span>
                                        </div>
                                    </div>
                                    <div className="flex items-baseline gap-2 mb-8">
                                        <span className="text-4xl font-bold text-white">Хялбар</span>
                                        <span className="text-gray-400 text-sm">/ Одоо</span>
                                    </div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check</span>
                                            <span className="text-gray-300 text-sm">Цөөн ханз (1200 үгтэй)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check</span>
                                            <span className="text-gray-300 text-sm">Тодорхой шалгалт, хурдан бэлтгэл</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check</span>
                                            <span className="text-gray-300 text-sm">Тэтгэлэгт хамрагдах өндөр боломж</span>
                                        </li>
                                    </ul>
                                    <button className="w-full h-12 rounded-lg bg-primary/10 text-primary border border-primary/20 font-bold hover:bg-primary hover:text-black transition-all">Эхлэх</button>
                                </div>

                                <div className="flex-1 glass-card rounded-2xl p-8 relative overflow-hidden border-red-500/10 hover:border-red-500/30 transition-colors duration-300">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full filter blur-[60px] pointer-events-none"></div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1">HSK 3.0</h3>
                                            <p className="text-sm text-red-400 font-medium tracking-wide">ИРЭЭДҮЙН БЭРХШЭЭЛ</p>
                                        </div>
                                        <div className="bg-red-500/10 p-2 rounded-lg text-red-400">
                                            <span className="material-symbols-outlined">warning</span>
                                        </div>
                                    </div>
                                    <div className="flex items-baseline gap-2 mb-8">
                                        <span className="text-4xl font-bold text-white">Хэцүү</span>
                                        <span className="text-gray-400 text-sm">/ 2026 оноос</span>
                                    </div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-red-400 text-[20px] mt-0.5">close</span>
                                            <span className="text-gray-400 text-sm">Олон ханз (3000+ үгтэй)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-red-400 text-[20px] mt-0.5">close</span>
                                              <span className="text-gray-400 text-sm">Орчуулгын хүнд даалгаварууд нэмэгдэнэ</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-red-400 text-[20px] mt-0.5">close</span>
                                            <span className="text-gray-400 text-sm">Урт хугацааны бэлтгэл шаардлагатай</span>
                                        </li>
                                    </ul>
                                    <button className="w-full h-12 rounded-lg bg-white/5 text-gray-400 border border-white/10 font-bold hover:bg-white/10 hover:text-white transition-all">Дэлгэрэнгүй</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Features */}
                    <section className="w-full py-20 bg-background-dark relative">
                        <div className="container mx-auto px-4 max-w-6xl">
                            <div className="mb-12 text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Сургалтын онцлог</h2>
                                <p className="text-gray-400 max-w-xl">Технологид суурилсан хятад хэл сурах шилдэг арга барил. Бид зөвхөн хэл заадаггүй, сурах арга барилыг заадаг.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all group">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-2xl">psychology</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">SRS Систем</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">Марталтыг зогсоох ухаалаг давтамжийн систем. Тархины ажиллагаанд тохируулсан алгоритмаар үг цээжлэх.</p>
                                </div>
                                <div className="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all group">
                                    <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                                        <span className="material-symbols-outlined text-blue-400 text-2xl">smart_display</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Видео хичээлүүд</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">Анхан шатнаас гүнзгийрүүлсэн ойлгомжтой тайлбар. Хэзээ ч, хаана ч үзэх боломжтой 4K чанартай хичээлүүд.</p>
                                </div>
                                <div className="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all group">
                                    <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                                        <span className="material-symbols-outlined text-purple-400 text-2xl">draw</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Бичих дадлага</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">Ханз бичих зурлага, дарааллыг зөв сурах интерактив дасгалууд. Гараа зүгшрүүлэх шилдэг арга.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="w-full py-20 relative overflow-hidden border-t border-white/5">
                        <div className="absolute inset-0 bg-primary/5 opacity-50 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
                        <div className="container mx-auto px-4 text-center relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Бэлэн үү?</h2>
                            <p className="text-gray-400 mb-10 max-w-xl mx-auto">Яг одоо бүртгүүлээд эхний хичээлээ үнэгүй үзээрэй.</p>
                            <button className="h-14 px-10 rounded-lg bg-primary text-black font-bold text-lg hover:bg-white transition-all transform hover:scale-105 neon-glow">ҮНЭГҮЙ ЭХЛЭХ</button>
                            <p className="text-xs text-gray-600 mt-6">Кредит карт шаардлагагүй. 7 хоног үнэгүй.</p>
                        </div>
                    </section>
                </main>

                <footer className="border-t border-white/5 bg-black py-10">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-gray-800 text-white font-bold text-xs">汉</div>
                            <span className="text-lg font-bold text-gray-500">Hanzi.mn</span>
                        </div>
                        <div className="text-sm text-gray-600">© 2024 Hanzi.mn. Бүх эрх хуулиар хамгаалагдсан.</div>
                        <div className="flex gap-4">
                            <a className="text-gray-600 hover:text-white transition-colors" href="#"><span className="sr-only">Facebook</span>FB</a>
                            <a className="text-gray-600 hover:text-white transition-colors" href="#"><span className="sr-only">Instagram</span>IG</a>
                            <a className="text-gray-600 hover:text-white transition-colors" href="#"><span className="sr-only">Twitter</span>TW</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}