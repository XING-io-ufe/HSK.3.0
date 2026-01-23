< !DOCTYPE html >
    <html class="dark" lang="mn"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Hanzi.mn - HSK Түвшин Сонголт</title>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script id="tailwind-config">
            tailwind.config = {
                darkMode: "class",
            theme: {
                extend: {
                colors: {
                "primary": "#13ec25",
            "primary-dark": "#0fb81d",
            "background-light": "#f6f8f6",
            "background-dark": "#0A0A0A",
            "surface-dark": "#111111",
            "surface-glass": "rgba(20, 20, 20, 0.6)",
                    },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"]
                    },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)",
                    }
                },
            },
        }
        </script>
        <style>
            .glass-card {
                background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
            .neon-glow {
                box - shadow: 0 0 20px rgba(19, 236, 37, 0.3);
        }
            .neon-text-glow {
                text - shadow: 0 0 10px rgba(19, 236, 37, 0.5);
        }
            .bg-grid {
                background - size: 40px 40px;
            mask-image: linear-gradient(to bottom, transparent, black, transparent);
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
        }@keyframes float {
                0 % { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
            50% {transform: translateY(-20px) rotate(5deg); opacity: 0.3; }
            100% {transform: translateY(0px) rotate(0deg); opacity: 0.1; }
        }
            .floating-char {
                animation: float 6s ease-in-out infinite;
        }
            .delay-100 {animation - delay: 1s; }
            .delay-200 {animation - delay: 2s; }
            .delay-300 {animation - delay: 3s; }
            body {
                font - family: "Space Grotesk", sans-serif;
        }
        </style>
    </head>
        <body class="bg-background-dark text-white overflow-x-hidden selection:bg-primary selection:text-black">
            <div class="fixed inset-0 pointer-events-none z-0">
                <div class="absolute inset-0 bg-grid-pattern opacity-[0.07]"></div>
                <div class="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark"></div>
            </div>
            <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden flex justify-center items-center">
                <div class="absolute top-[15%] left-[10%] text-[120px] font-black text-white/5 floating-char select-none">中</div>
                <div class="absolute top-[25%] right-[15%] text-[100px] font-black text-white/5 floating-char delay-100 select-none">国</div>
                <div class="absolute bottom-[20%] left-[20%] text-[140px] font-black text-white/5 floating-char delay-200 select-none">学</div>
                <div class="absolute bottom-[30%] right-[10%] text-[90px] font-black text-primary/10 floating-char delay-300 select-none">习</div>
            </div>
            <div class="relative z-10 flex flex-col min-h-screen">
                <header class="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
                    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex h-16 items-center justify-between">
                            <div class="flex items-center gap-2">
                                <div class="flex h-8 w-8 items-center justify-center rounded bg-primary text-black font-bold text-xl">
                                    汉
                                </div>
                                <span class="text-xl font-bold tracking-tight text-white">Hanzi<span class="text-primary">.mn</span></span>
                            </div>
                            <nav class="hidden md:flex items-center gap-8">
                                <a class="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Нүүр</a>
                                <a class="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Бидний тухай</a>
                                <a class="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Хичээлүүд</a>
                                <a class="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Блог</a>
                                <a class="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Холбоо барих</a>
                            </nav>
                            <div class="flex items-center gap-4">
                                <button class="hidden sm:flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-black transition-transform hover:scale-105 hover:bg-white neon-glow">
                                    Эхлэх
                                </button>
                                <button class="md:hidden p-2 text-gray-400 hover:text-white">
                                    <span class="material-symbols-outlined">menu</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <main class="flex-grow flex flex-col items-center w-full">
                    <section class="relative w-full py-20 lg:py-32 overflow-hidden">
                        <div class="container mx-auto px-4 flex flex-col items-center text-center max-w-5xl">
                            <div class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 mb-8 backdrop-blur-sm">
                                <span class="relative flex h-2 w-2">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span class="text-xs font-medium text-primary uppercase tracking-wider">Шинэ элсэлт эхэллээ</span>
                            </div>
                            <h1 class="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">
                                HSK 2.0 – СУРАЛЦАХ <br class="hidden md:block" />
                                <span class="text-primary neon-text-glow">СҮҮЛЧИЙН БОЛОМЖ</span>
                            </h1>
                            <p class="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
                                2026 он гэхэд HSK систем бүрэн өөрчлөгдөнө. Шинэ системээс өмнө амжиж, ирээдүйгээ баталгаажуул.
                            </p>
                            <div class="flex flex-wrap justify-center gap-4 w-full">
                                <button class="h-12 px-8 rounded-lg bg-primary text-black font-bold text-base hover:bg-white transition-all transform hover:scale-105 neon-glow flex items-center gap-2">
                                    <span>ЭХЛЭХ</span>
                                    <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
                                </button>
                                <button class="h-12 px-8 rounded-lg border border-white/20 bg-white/5 text-white font-bold text-base hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm">
                                    <span>ЯАГААД HANZI.MN ВЭ?</span>
                                </button>
                            </div>
                            <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-3xl glass-card p-6 rounded-xl border-t border-white/10">
                                <div class="flex flex-col items-center">
                                    <span class="text-3xl font-bold text-white font-mono">465</span>
                                    <span class="text-xs text-gray-500 uppercase tracking-widest mt-1">Өдөр</span>
                                </div>
                                <div class="flex flex-col items-center border-l border-white/5">
                                    <span class="text-3xl font-bold text-white font-mono">12</span>
                                    <span class="text-xs text-gray-500 uppercase tracking-widest mt-1">Цаг</span>
                                </div>
                                <div class="flex flex-col items-center border-l border-white/5">
                                    <span class="text-3xl font-bold text-white font-mono">30</span>
                                    <span class="text-xs text-gray-500 uppercase tracking-widest mt-1">Минут</span>
                                </div>
                                <div class="flex flex-col items-center border-l border-white/5">
                                    <span class="text-3xl font-bold text-primary font-mono animate-pulse">45</span>
                                    <span class="text-xs text-gray-500 uppercase tracking-widest mt-1">Секунд</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="w-full py-20 relative bg-background-dark">
                        <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
                        <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                        <div class="container mx-auto px-4 max-w-6xl relative z-10">
                            <div class="text-center mb-16">
                                <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">Сургалтын хөтөлбөр</h2>
                                <p class="text-gray-400 max-w-xl mx-auto">Өөрийн түвшинг сонгоод яг одоо суралцаж эхлээрэй.</p>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                <div class="glass-card rounded-2xl p-6 border border-primary/50 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 neon-glow">
                                    <div class="absolute top-0 right-0 p-4">
                                        <span class="inline-flex items-center rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-medium text-primary border border-primary/20">
                                            Нээлттэй
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-4 mb-6">
                                        <div class="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-black shadow-lg shadow-primary/30">
                                            <span class="text-lg font-bold">1</span>
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-bold text-white">HSK 1</h3>
                                            <p class="text-sm text-gray-400">Анхан шат</p>
                                        </div>
                                    </div>
                                    <div class="space-y-3 mb-6">
                                        <div class="flex justify-between text-xs font-medium text-gray-400">
                                            <span>Явц</span>
                                            <span class="text-primary">45 / 150 ханз</span>
                                        </div>
                                        <div class="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div class="h-full bg-primary w-[30%] shadow-[0_0_10px_rgba(19,236,37,0.5)]"></div>
                                        </div>
                                    </div>
                                    <button class="w-full h-10 rounded-lg bg-primary text-black font-bold text-sm hover:bg-white transition-colors flex items-center justify-center gap-2">
                                        <span>Үргэлжлүүлэх</span>
                                        <span class="material-symbols-outlined text-[18px]">play_arrow</span>
                                    </button>
                                </div>
                                <div class="glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-300 hover:scale-[1.02] bg-[#1a1a1a]">
                                    <div class="absolute top-4 right-4 text-yellow-500/80">
                                        <span class="material-symbols-outlined">lock</span>
                                    </div>
                                    <div class="flex items-center gap-4 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <div class="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                            <span class="text-lg font-bold">2</span>
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-bold text-white">HSK 2</h3>
                                            <p class="text-sm text-gray-500">Анхан дунд</p>
                                        </div>
                                    </div>
                                    <div class="space-y-3 mb-6 opacity-40">
                                        <div class="flex justify-between text-xs font-medium text-gray-500">
                                            <span>Ханзны тоо</span>
                                            <span>300</span>
                                        </div>
                                        <div class="h-2 w-full bg-white/5 rounded-full"></div>
                                    </div>
                                    <button class="w-full h-10 rounded-lg border border-white/10 text-gray-500 font-medium text-sm cursor-not-allowed flex items-center justify-center gap-2 bg-black/20">
                                        Түгжигдсэн
                                    </button>
                                </div>
                                <div class="glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-300 hover:scale-[1.02] bg-[#1a1a1a]">
                                    <div class="absolute top-4 right-4 text-yellow-500/80">
                                        <span class="material-symbols-outlined">lock</span>
                                    </div>
                                    <div class="flex items-center gap-4 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <div class="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                            <span class="text-lg font-bold">3</span>
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-bold text-white">HSK 3</h3>
                                            <p class="text-sm text-gray-500">Дунд шат</p>
                                        </div>
                                    </div>
                                    <div class="space-y-3 mb-6 opacity-40">
                                        <div class="flex justify-between text-xs font-medium text-gray-500">
                                            <span>Ханзны тоо</span>
                                            <span>600</span>
                                        </div>
                                        <div class="h-2 w-full bg-white/5 rounded-full"></div>
                                    </div>
                                    <button class="w-full h-10 rounded-lg border border-white/10 text-gray-500 font-medium text-sm cursor-not-allowed flex items-center justify-center gap-2 bg-black/20">
                                        Түгжигдсэн
                                    </button>
                                </div>
                                <div class="glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-300 hover:scale-[1.02] bg-[#1a1a1a]">
                                    <div class="absolute top-4 right-4 text-yellow-500/80">
                                        <span class="material-symbols-outlined">lock</span>
                                    </div>
                                    <div class="flex items-center gap-4 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <div class="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                            <span class="text-lg font-bold">4</span>
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-bold text-white">HSK 4</h3>
                                            <p class="text-sm text-gray-500">Дунд гүнзгий</p>
                                        </div>
                                    </div>
                                    <div class="space-y-3 mb-6 opacity-40">
                                        <div class="flex justify-between text-xs font-medium text-gray-500">
                                            <span>Ханзны тоо</span>
                                            <span>1200</span>
                                        </div>
                                        <div class="h-2 w-full bg-white/5 rounded-full"></div>
                                    </div>
                                    <button class="w-full h-10 rounded-lg border border-white/10 text-gray-500 font-medium text-sm cursor-not-allowed flex items-center justify-center gap-2 bg-black/20">
                                        Түгжигдсэн
                                    </button>
                                </div>
                                <div class="glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-300 hover:scale-[1.02] bg-[#1a1a1a]">
                                    <div class="absolute top-4 right-4 text-yellow-500/80">
                                        <span class="material-symbols-outlined">lock</span>
                                    </div>
                                    <div class="flex items-center gap-4 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <div class="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                            <span class="text-lg font-bold">5</span>
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-bold text-white">HSK 5</h3>
                                            <p class="text-sm text-gray-500">Гүнзгий шат</p>
                                        </div>
                                    </div>
                                    <div class="space-y-3 mb-6 opacity-40">
                                        <div class="flex justify-between text-xs font-medium text-gray-500">
                                            <span>Ханзны тоо</span>
                                            <span>2500</span>
                                        </div>
                                        <div class="h-2 w-full bg-white/5 rounded-full"></div>
                                    </div>
                                    <button class="w-full h-10 rounded-lg border border-white/10 text-gray-500 font-medium text-sm cursor-not-allowed flex items-center justify-center gap-2 bg-black/20">
                                        Түгжигдсэн
                                    </button>
                                </div>
                                <div class="glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-300 hover:scale-[1.02] bg-[#1a1a1a]">
                                    <div class="absolute top-4 right-4 text-yellow-500/80">
                                        <span class="material-symbols-outlined">lock</span>
                                    </div>
                                    <div class="flex items-center gap-4 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <div class="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                            <span class="text-lg font-bold">6</span>
                                        </div>
                                        <div>
                                            <h3 class="text-xl font-bold text-white">HSK 6</h3>
                                            <p class="text-sm text-gray-500">Төгс эзэмших</p>
                                        </div>
                                    </div>
                                    <div class="space-y-3 mb-6 opacity-40">
                                        <div class="flex justify-between text-xs font-medium text-gray-500">
                                            <span>Ханзны тоо</span>
                                            <span>5000+</span>
                                        </div>
                                        <div class="h-2 w-full bg-white/5 rounded-full"></div>
                                    </div>
                                    <button class="w-full h-10 rounded-lg border border-white/10 text-gray-500 font-medium text-sm cursor-not-allowed flex items-center justify-center gap-2 bg-black/20">
                                        Түгжигдсэн
                                    </button>
                                </div>
                            </div>
                            <div class="w-full glass-card rounded-2xl p-8 border border-primary/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">
                                <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div class="flex items-center gap-6 relative z-10">
                                    <div class="h-16 w-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg shadow-yellow-500/20 shrink-0">
                                        <span class="material-symbols-outlined text-black text-3xl">workspace_premium</span>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold text-white mb-1">Бүрэн эрхээ идэвхжүүлэх</h3>
                                        <p class="text-gray-400">HSK 1-6 түвшин, 5000+ ханз, шалгалтын материалуудад хязгааргүй хандаарай.</p>
                                    </div>
                                </div>
                                <button class="relative z-10 h-14 px-10 rounded-lg bg-primary text-black font-bold text-lg hover:bg-white transition-all transform hover:scale-105 neon-glow flex items-center gap-2 whitespace-nowrap">
                                    <span class="material-symbols-outlined">lock_open</span>
                                    Бүх түвшинг нээх
                                </button>
                            </div>
                        </div>
                    </section>
                    <section class="w-full py-20 relative">
                        <div class="container mx-auto px-4 max-w-6xl">
                            <div class="flex flex-col md:flex-row gap-8 items-stretch justify-center">
                                <div class="flex-1 glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                                    <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full filter blur-[60px] pointer-events-none"></div>
                                    <div class="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 class="text-2xl font-bold text-white mb-1">HSK 2.0</h3>
                                            <p class="text-sm text-primary font-medium tracking-wide">ОДООГИЙН БОЛОМЖ</p>
                                        </div>
                                        <div class="bg-primary/20 p-2 rounded-lg text-primary">
                                            <span class="material-symbols-outlined">check_circle</span>
                                        </div>
                                    </div>
                                    <div class="flex items-baseline gap-2 mb-8">
                                        <span class="text-4xl font-bold text-white">Хялбар</span>
                                        <span class="text-gray-400 text-sm">/ Одоо</span>
                                    </div>
                                    <ul class="space-y-4 mb-8">
                                        <li class="flex items-start gap-3">
                                            <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">check</span>
                                            <span class="text-gray-300 text-sm">Цөөн ханз (1200 үгтэй)</span>
                                        </li>
                                        <li class="flex items-start gap-3">
                                            <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">check</span>
                                            <span class="text-gray-300 text-sm">Тодорхой шалгалт, хурдан бэлтгэл</span>
                                        </li>
                                        <li class="flex items-start gap-3">
                                            <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">check</span>
                                            <span class="text-gray-300 text-sm">Тэтгэлэгт хамрагдах өндөр боломж</span>
                                        </li>
                                    </ul>
                                    <button class="w-full h-12 rounded-lg bg-primary/10 text-primary border border-primary/20 font-bold hover:bg-primary hover:text-black transition-all">
                                        Эхлэх
                                    </button>
                                </div>
                                <div class="flex-1 glass-card rounded-2xl p-8 relative overflow-hidden border-red-500/10 hover:border-red-500/30 transition-colors duration-300">
                                    <div class="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full filter blur-[60px] pointer-events-none"></div>
                                    <div class="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 class="text-2xl font-bold text-white mb-1">HSK 3.0</h3>
                                            <p class="text-sm text-red-400 font-medium tracking-wide">ИРЭЭДҮЙН БЭРХШЭЭЛ</p>
                                        </div>
                                        <div class="bg-red-500/10 p-2 rounded-lg text-red-400">
                                            <span class="material-symbols-outlined">warning</span>
                                        </div>
                                    </div>
                                    <div class="flex items-baseline gap-2 mb-8">
                                        <span class="text-4xl font-bold text-white">Хэцүү</span>
                                        <span class="text-gray-400 text-sm">/ 2026 оноос</span>
                                    </div>
                                    <ul class="space-y-4 mb-8">
                                        <li class="flex items-start gap-3">
                                            <span class="material-symbols-outlined text-red-400 text-[20px] mt-0.5">close</span>
                                            <span class="text-gray-400 text-sm">Олон ханз (3000+ үгтэй)</span>
                                        </li>
                                        <li class="flex items-start gap-3">
                                            <span class="material-symbols-outlined text-red-400 text-[20px] mt-0.5">close</span>
                                            <span class="text-gray-400 text-sm">Орчуулгын хүнд даалгаварууд нэмэгдэнэ</span>
                                        </li>
                                        <li class="flex items-start gap-3">
                                            <span class="material-symbols-outlined text-red-400 text-[20px] mt-0.5">close</span>
                                            <span class="text-gray-400 text-sm">Урт хугацааны бэлтгэл шаардлагатай</span>
                                        </li>
                                    </ul>
                                    <button class="w-full h-12 rounded-lg bg-white/5 text-gray-400 border border-white/10 font-bold hover:bg-white/10 hover:text-white transition-all">
                                        Дэлгэрэнгүй
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="w-full py-20 bg-background-dark relative">
                        <div class="container mx-auto px-4 max-w-6xl">
                            <div class="mb-12 text-center md:text-left">
                                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Сургалтын онцлог</h2>
                                <p class="text-gray-400 max-w-xl">Технологид суурилсан хятад хэл сурах шилдэг арга барил. Бид зөвхөн хэл заадаггүй, сурах арга барилыг заадаг.</p>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div class="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all group">
                                    <div class="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <span class="material-symbols-outlined text-primary text-2xl">psychology</span>
                                    </div>
                                    <h3 class="text-xl font-bold text-white mb-2">SRS Систем</h3>
                                    <p class="text-sm text-gray-400 leading-relaxed">
                                        Марталтыг зогсоох ухаалаг давтамжийн систем. Тархины ажиллагаанд тохируулсан алгоритмаар үг цээжлэх.
                                    </p>
                                </div>
                                <div class="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all group">
                                    <div class="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                                        <span class="material-symbols-outlined text-blue-400 text-2xl">smart_display</span>
                                    </div>
                                    <h3 class="text-xl font-bold text-white mb-2">Видео хичээлүүд</h3>
                                    <p class="text-sm text-gray-400 leading-relaxed">
                                        Анхан шатнаас гүнзгийрүүлсэн ойлгомжтой тайлбар. Хэзээ ч, хаана ч үзэх боломжтой 4K чанартай хичээлүүд.
                                    </p>
                                </div>
                                <div class="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all group">
                                    <div class="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                                        <span class="material-symbols-outlined text-purple-400 text-2xl">draw</span>
                                    </div>
                                    <h3 class="text-xl font-bold text-white mb-2">Бичих дадлага</h3>
                                    <p class="text-sm text-gray-400 leading-relaxed">
                                        Ханз бичих зурлага, дарааллыг зөв сурах интерактив дасгалууд. Гараа зүгшрүүлэх шилдэг арга.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="w-full py-20 relative overflow-hidden border-t border-white/5">
                        <div class="absolute inset-0 bg-primary/5 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
                        <div class="container mx-auto px-4 text-center relative z-10">
                            <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Бэлэн үү?</h2>
                            <p class="text-gray-400 mb-10 max-w-xl mx-auto">Яг одоо бүртгүүлээд эхний хичээлээ үнэгүй үзээрэй.</p>
                            <button class="h-14 px-10 rounded-lg bg-primary text-black font-bold text-lg hover:bg-white transition-all transform hover:scale-105 neon-glow">
                                ҮНЭГҮЙ ЭХЛЭХ
                            </button>
                            <p class="text-xs text-gray-600 mt-6">Кредит карт шаардлагагүй. 7 хоног үнэгүй.</p>
                        </div>
                    </section>
                </main>
                <footer class="border-t border-white/5 bg-black py-10">
                    <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div class="flex items-center gap-2">
                            <div class="flex h-6 w-6 items-center justify-center rounded bg-gray-800 text-white font-bold text-xs">
                                汉
                            </div>
                            <span class="text-lg font-bold text-gray-500">Hanzi.mn</span>
                        </div>
                        <div class="text-sm text-gray-600">
                            © 2024 Hanzi.mn. Бүх эрх хуулиар хамгаалагдсан.
                        </div>
                        <div class="flex gap-4">
                            <a class="text-gray-600 hover:text-white transition-colors" href="#"><span class="sr-only">Facebook</span>FB</a>
                            <a class="text-gray-600 hover:text-white transition-colors" href="#"><span class="sr-only">Instagram</span>IG</a>
                            <a class="text-gray-600 hover:text-white transition-colors" href="#"><span class="sr-only">Twitter</span>TW</a>
                        </div>
                    </div>
                </footer>
            </div>

        </body></html>