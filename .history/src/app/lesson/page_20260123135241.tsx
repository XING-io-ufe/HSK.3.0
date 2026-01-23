< !DOCTYPE html >
    <html class="dark" lang="mn"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Hanzi.mn - Хичээлүүд &amp; Хөтөлбөр</title>
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
            .neon-border-glow:hover {
                box - shadow: 0 0 15px rgba(19, 236, 37, 0.2), inset 0 0 10px rgba(19, 236, 37, 0.1);
            border-color: rgba(19, 236, 37, 0.4);
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
            .radical-line {
                position: absolute;
            height: 2px;
            background: #333;
            z-index: 1;
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
                                <a class="text-sm font-medium text-primary transition-colors" href="#">Хичээлүүд</a>
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
                <main class="flex-grow flex flex-col items-center w-full py-12 lg:py-20">
                    <div class="container mx-auto px-4 max-w-7xl">
                        <div class="mb-16 text-center">
                            <div class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6 backdrop-blur-sm">
                                <span class="material-symbols-outlined text-primary text-sm">school</span>
                                <span class="text-xs font-medium text-primary uppercase tracking-wider">Сургалтын хөтөлбөр</span>
                            </div>
                            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Хичээлүүд</h1>
                            <p class="text-lg text-gray-400 max-w-2xl mx-auto">
                                Хятад хэлийг шинжлэх ухаанч арга барилаар, цогцоор нь сурах гурван тулгуур багана.
                            </p>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                            <div class="lg:col-span-7 flex flex-col gap-6">
                                <div class="glass-card p-1 rounded-3xl border border-white/10 relative group h-full">
                                    <div class="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-blue-600/30 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                                    <div class="relative bg-[#0F0F0F] rounded-[22px] p-8 h-full flex flex-col justify-between overflow-hidden">
                                        <div class="flex justify-between items-start mb-10 z-10 relative">
                                            <div class="flex items-center gap-3">
                                                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                    <span class="material-symbols-outlined">style</span>
                                                </div>
                                                <div>
                                                    <h2 class="text-2xl font-bold text-white">Флаш Карт</h2>
                                                    <p class="text-xs text-gray-500 uppercase tracking-widest">Smart Repetition System</p>
                                                </div>
                                            </div>
                                            <div class="px-3 py-1 rounded border border-white/10 bg-white/5 text-xs text-gray-400 font-mono">
                                                HSK 1-6
                                            </div>
                                        </div>
                                        <div class="flex-grow flex justify-center items-center py-6 relative z-10">
                                            <div class="w-full max-w-sm aspect-[3/4] bg-surface-dark border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col">
                                                <div class="px-4 py-3 border-b border-white/5 flex justify-between items-center bg-black/20">
                                                    <span class="text-[10px] text-gray-500 font-mono">ID: #2049</span>
                                                    <div class="flex gap-1">
                                                        <div class="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                                        <div class="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                                        <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow flex flex-col items-center justify-center p-6 text-center group/card cursor-pointer">
                                                    <div class="relative mb-6">
                                                        <div class="absolute inset-0 border border-dashed border-primary/20 opacity-30 pointer-events-none"></div>
                                                        <div class="absolute top-1/2 w-full h-px bg-primary/10 -translate-y-1/2 pointer-events-none"></div>
                                                        <div class="absolute left-1/2 h-full w-px bg-primary/10 -translate-x-1/2 pointer-events-none"></div>
                                                        <h1 class="text-8xl md:text-9xl font-black text-white relative z-10 drop-shadow-2xl">
                                                            明
                                                        </h1>
                                                    </div>
                                                    <div class="space-y-2 transition-opacity duration-300">
                                                        <p class="text-2xl text-primary font-mono tracking-wide">míng</p>
                                                        <p class="text-lg text-gray-300">Гэрэлтэй, тод, маргааш</p>
                                                    </div>
                                                </div>
                                                <div class="p-4 bg-black/40 backdrop-blur-sm border-t border-white/5 grid grid-cols-2 gap-3">
                                                    <button class="py-2.5 rounded-lg border border-red-500/20 text-red-500 hover:bg-red-500/10 transition text-sm font-bold flex items-center justify-center gap-2">
                                                        <span class="material-symbols-outlined text-[18px]">close</span> Мэдэхгүй
                                                    </button>
                                                    <button class="py-2.5 rounded-lg bg-primary/20 text-primary border border-primary/20 hover:bg-primary hover:text-black transition text-sm font-bold flex items-center justify-center gap-2">
                                                        <span class="material-symbols-outlined text-[18px]">check</span> Мэднэ
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="absolute w-full max-w-sm aspect-[3/4] bg-surface-dark/50 border border-white/5 rounded-2xl -z-10 rotate-3 scale-95 translate-x-4"></div>
                                            <div class="absolute w-full max-w-sm aspect-[3/4] bg-surface-dark/30 border border-white/5 rounded-2xl -z-20 -rotate-2 scale-90 -translate-x-4"></div>
                                        </div>
                                        <div class="mt-8 text-center lg:text-left z-10">
                                            <p class="text-gray-400 text-sm leading-relaxed max-w-lg">
                                                Манай <span class="text-primary">SRS (Spaced Repetition System)</span> алгоритм нь таныг мартах гэж байх үед дахин сануулж, санах ойд тань үүрд хадгалах боломжийг олгоно. Өдөрт 20 минут зарцуулахад л хангалттай.
                                            </p>
                                        </div>
                                        <div class="absolute inset-0 bg-grid opacity-[0.1] pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="lg:col-span-5 flex flex-col gap-6 h-full">
                                <div class="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary/40 transition-all duration-300 relative overflow-hidden group">
                                    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span class="material-symbols-outlined text-6xl text-white">account_tree</span>
                                    </div>
                                    <div class="flex items-center gap-3 mb-6">
                                        <div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                            <span class="material-symbols-outlined">extension</span>
                                        </div>
                                        <h3 class="text-xl font-bold text-white">Язгуур &amp; Логик</h3>
                                    </div>
                                    <div class="bg-black/30 rounded-xl p-5 border border-white/5 mb-6">
                                        <div class="flex items-center justify-center gap-4 text-center">
                                            <div class="flex flex-col items-center group/char">
                                                <div class="w-12 h-12 rounded bg-surface-dark border border-white/10 flex items-center justify-center text-2xl font-bold mb-2 group-hover/char:text-blue-400 group-hover/char:border-blue-400 transition-colors">
                                                    日
                                                </div>
                                                <span class="text-[10px] text-gray-500 uppercase">Нар</span>
                                            </div>
                                            <span class="text-gray-600 text-xl font-bold">+</span>
                                            <div class="flex flex-col items-center group/char">
                                                <div class="w-12 h-12 rounded bg-surface-dark border border-white/10 flex items-center justify-center text-2xl font-bold mb-2 group-hover/char:text-blue-400 group-hover/char:border-blue-400 transition-colors">
                                                    月
                                                </div>
                                                <span class="text-[10px] text-gray-500 uppercase">Сар</span>
                                            </div>
                                            <span class="text-primary text-xl font-bold">=</span>
                                            <div class="flex flex-col items-center">
                                                <div class="w-16 h-16 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-4xl font-black mb-2 text-white neon-text-glow">
                                                    明
                                                </div>
                                                <span class="text-[10px] text-primary uppercase font-bold">Гэрэлтэй</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-gray-400 text-sm mb-4">
                                        Ханз бол зураг биш, харин логик юм. 214 язгуурыг ойлгосноор та шинэ үгийг хараад утгыг нь тааварлах чадвартай болно.
                                    </p>
                                    <a class="inline-flex items-center text-blue-400 text-sm font-bold hover:text-white transition-colors" href="#">
                                        Дэлгэрэнгүй үзэх <span class="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                    </a>
                                </div>
                                <div class="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary/40 transition-all duration-300 relative overflow-hidden flex-grow flex flex-col justify-between group">
                                    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span class="material-symbols-outlined text-6xl text-white">history_edu</span>
                                    </div>
                                    <div>
                                        <div class="flex items-center gap-3 mb-6">
                                            <div class="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                                                <span class="material-symbols-outlined">auto_stories</span>
                                            </div>
                                            <h3 class="text-xl font-bold text-white">Хэлзүй (Grammar)</h3>
                                        </div>
                                        <div class="space-y-3 mb-6">
                                            <div class="flex items-center gap-3 text-sm p-3 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors cursor-default">
                                                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400">HSK 1</span>
                                                <span class="text-gray-300">S + V + O (Энгийн өгүүлбэр)</span>
                                            </div>
                                            <div class="flex items-center gap-3 text-sm p-3 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors cursor-default">
                                                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-400">HSK 2</span>
                                                <span class="text-gray-300">Time + Location + Verb</span>
                                            </div>
                                            <div class="flex items-center gap-3 text-sm p-3 rounded-lg bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors cursor-default">
                                                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-400">HSK 3</span>
                                                <span class="text-gray-300">把 (Bǎ) өгүүлбэрийн бүтэц</span>
                                            </div>
                                        </div>
                                        <p class="text-gray-400 text-sm">
                                            Монгол хэлний логиктой харьцуулсан тайлбар. Дүрмийг цээжлэх биш, хэрэглэж сур.
                                        </p>
                                    </div>
                                    <div class="mt-6 pt-6 border-t border-white/10">
                                        <div class="flex items-center justify-between">
                                            <div class="flex -space-x-2">
                                                <div class="w-8 h-8 rounded-full bg-gray-700 border-2 border-surface-dark flex items-center justify-center text-[10px] font-bold">L1</div>
                                                <div class="w-8 h-8 rounded-full bg-gray-700 border-2 border-surface-dark flex items-center justify-center text-[10px] font-bold">L2</div>
                                                <div class="w-8 h-8 rounded-full bg-gray-800 border-2 border-surface-dark flex items-center justify-center text-[10px] text-gray-500 font-bold">+4</div>
                                            </div>
                                            <button class="text-sm font-bold text-white bg-purple-500/20 hover:bg-purple-500 px-4 py-2 rounded-lg transition-colors">
                                                Хөтөлбөр үзэх
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-12 text-center">
                            <button class="h-14 px-10 rounded-xl bg-primary text-black font-bold text-lg hover:bg-white transition-all transform hover:scale-105 neon-glow flex items-center gap-2 mx-auto">
                                <span class="material-symbols-outlined">rocket_launch</span>
                                СУРАЛЦАЖ ЭХЛЭХ
                            </button>
                            <p class="text-gray-500 text-sm mt-4">7 хоногийн үнэгүй эрхтэй. Кредит карт шаардлагагүй.</p>
                        </div>
                    </div>
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