< !DOCTYPE html >
    <html class="dark" lang="mn"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Бидний тухай - Hanzi.mn &amp; Yargaitech</title>
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
                <div class="absolute top-[10%] left-[5%] text-[150px] font-black text-white/5 floating-char select-none">技</div>
                <div class="absolute bottom-[15%] right-[5%] text-[150px] font-black text-white/5 floating-char delay-200 select-none">术</div>
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
                                <a class="text-sm font-medium text-primary transition-colors" href="#">Бидний тухай</a>
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
                    <section class="relative w-full py-20 lg:py-28 overflow-hidden">
                        <div class="container mx-auto px-4 flex flex-col items-center text-center max-w-4xl">
                            <div class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-8 backdrop-blur-sm">
                                <span class="material-symbols-outlined text-primary text-sm">code</span>
                                <span class="text-xs font-bold text-primary uppercase tracking-widest">Powered by Yargaitech</span>
                            </div>
                            <h1 class="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                                Ирээдүйн Боловсролыг <br class="hidden md:block" />
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary neon-text-glow">Технологиор Бүтээнэ</span>
                            </h1>
                            <p class="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
                                Hanzi.mn бол Монгол оюутнуудад HSK 2.0 шалгалтыг амжилттай өгөхөд зориулагдсан, Yargaitech-ийн хөгжүүлсэн ухаалаг сургалтын платформ юм.
                            </p>
                        </div>
                    </section>
                    <section class="w-full py-16 relative">
                        <div class="container mx-auto px-4 max-w-6xl">
                            <div class="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden border border-primary/20">
                                <div class="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-[80px] pointer-events-none"></div>
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                            <span class="material-symbols-outlined text-primary text-4xl">timer</span>
                                            Бидний даалгавар
                                        </h2>
                                        <h3 class="text-xl text-primary font-medium mb-4 uppercase tracking-wide">HSK 2.0: 2026 оны 7-р сар</h3>
                                        <p class="text-gray-300 mb-6 leading-relaxed">
                                            2026 оны зун HSK шалгалтын систем бүрэн шинэчлэгдэж "HSK 3.0" руу шилжинэ. Энэ нь суралцах ёстой ханзны тоог 3 дахин нэмэгдүүлж, шалгалтыг эрс хүндрүүлэх юм.
                                        </p>
                                        <p class="text-gray-300 mb-8 leading-relaxed">
                                            Yargaitech-ийн баг энэхүү эгзэгтэй цаг үед Монгол залуустаа туслах зорилгоор Hanzi.mn-ийг бүтээсэн. Бидний алгоритм таныг хамгийн бага хугацаанд, хамгийн өндөр үр дүнтэйгээр хуучин системээр шалгалтаа өгч амжихад төвлөрдөг.
                                        </p>
                                        <div class="flex gap-4">
                                            <div class="px-4 py-2 rounded bg-white/5 border border-white/10 text-sm font-mono text-gray-400">
                                                Status: <span class="text-primary">CRITICAL</span>
                                            </div>
                                            <div class="px-4 py-2 rounded bg-white/5 border border-white/10 text-sm font-mono text-gray-400">
                                                Deadline: <span class="text-white">2026.07.01</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative">
                                        <div class="relative z-10 glass-card p-6 rounded-xl border border-white/10 bg-black/40">
                                            <div class="flex justify-between items-end mb-2">
                                                <span class="text-sm text-gray-400">Боломжит хугацаа</span>
                                                <span class="text-2xl font-bold text-primary">72%</span>
                                            </div>
                                            <div class="w-full h-3 bg-gray-800 rounded-full overflow-hidden mb-6">
                                                <div class="h-full bg-primary neon-glow w-[72%] relative">
                                                    <div class="absolute right-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
                                                </div>
                                            </div>
                                            <ul class="space-y-4">
                                                <li class="flex items-center gap-3 text-sm text-gray-300">
                                                    <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                        <span class="material-symbols-outlined text-lg">school</span>
                                                    </div>
                                                    Тэтгэлгийн боломж хаагдахаас өмнө
                                                </li>
                                                <li class="flex items-center gap-3 text-sm text-gray-300">
                                                    <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                        <span class="material-symbols-outlined text-lg">trending_up</span>
                                                    </div>
                                                    Хамгийн хялбар аргаар оноо авах
                                                </li>
                                                <li class="flex items-center gap-3 text-sm text-gray-300">
                                                    <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                        <span class="material-symbols-outlined text-lg">rocket_launch</span>
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
                    <section class="w-full py-20 bg-background-dark relative">
                        <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
                        <div class="container mx-auto px-4 max-w-5xl relative z-10">
                            <div class="text-center mb-16">
                                <span class="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">EST. 2025</span>
                                <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">Yargaitech-ийн тухай</h2>
                                <div class="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
                                <p class="text-gray-400 max-w-2xl mx-auto">
                                    Боловсролын салбарт технологийн хувьсгал хийхээр 2025 онд байгуулагдсан Yargaitech нь Монгол залуусын сурч боловсрох арга барилыг шинэчилж байна.
                                </p>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div class="glass-card p-8 rounded-xl border-t border-white/10 hover:-translate-y-1 transition-transform duration-300">
                                    <span class="material-symbols-outlined text-4xl text-gray-300 mb-6">terminal</span>
                                    <h3 class="text-xl font-bold text-white mb-3">Технологи</h3>
                                    <p class="text-sm text-gray-400 leading-relaxed">
                                        Бид орчин үеийн вэб технологи, SRS алгоритм, болон өгөгдлийн шинжилгээг ашиглан суралцагч бүрт тохирсон хувийн сургалтын замыг зурдаг.
                                    </p>
                                </div>
                                <div class="glass-card p-8 rounded-xl border-t border-primary/30 hover:-translate-y-1 transition-transform duration-300 bg-white/[0.02]">
                                    <span class="material-symbols-outlined text-4xl text-primary mb-6">group</span>
                                    <h3 class="text-xl font-bold text-white mb-3">Баг хамт оллон</h3>
                                    <p class="text-sm text-gray-400 leading-relaxed">
                                        Манай баг Бээжин, Шанхай хотуудад боловсрол эзэмшсэн инженерүүд болон хэл шинжлэлийн эрдэмтдээс бүрдсэн хүчирхэг нэгдэл юм.
                                    </p>
                                </div>
                                <div class="glass-card p-8 rounded-xl border-t border-white/10 hover:-translate-y-1 transition-transform duration-300">
                                    <span class="material-symbols-outlined text-4xl text-gray-300 mb-6">visibility</span>
                                    <h3 class="text-xl font-bold text-white mb-3">Алсын хараа</h3>
                                    <p class="text-sm text-gray-400 leading-relaxed">
                                        Технологиор дамжуулан дэлхийн боловсролыг Монгол хүүхэд бүрт тэгш хүртээмжтэй, хялбар, сонирхолтой болгох нь бидний зорилго.
                                    </p>
                                </div>
                            </div>
                            <div class="mt-16 border border-white/5 rounded-lg p-6 bg-black/50 font-mono text-xs text-gray-500 overflow-hidden">
                                <div class="flex gap-2 mb-4 border-b border-white/5 pb-2">
                                    <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                                    <span class="ml-2 opacity-50">build_log.txt</span>
                                </div>
                                <div class="space-y-1">
                                    <p>&gt; Yargaitech Core Systems initialized...</p>
                                    <p>&gt; Loading Learning Modules... <span class="text-primary">DONE</span></p>
                                    <p>&gt; Integrating HSK 2.0 Dataset... <span class="text-primary">DONE</span></p>
                                    <p>&gt; User: Mongolian Students</p>
                                    <p>&gt; Mission: Accelerate Learning Curve by 300%</p>
                                    <p class="animate-pulse">&gt; _</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="w-full py-20 relative overflow-hidden border-t border-white/5">
                        <div class="absolute inset-0 bg-primary/5 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
                        <div class="container mx-auto px-4 text-center relative z-10">
                            <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Ирээдүйгээ хамтдаа бүтээцгээе</h2>
                            <p class="text-gray-400 mb-10 max-w-xl mx-auto">Yargaitech болон Hanzi.mn таны амжилтын гүүр болоход бэлэн.</p>
                            <button class="h-14 px-10 rounded-lg bg-primary text-black font-bold text-lg hover:bg-white transition-all transform hover:scale-105 neon-glow">
                                ҮНЭГҮЙ ЭХЛЭХ
                            </button>
                        </div>
                    </section>
                </main>
                <footer class="border-t border-white/5 bg-black py-10">
                    <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div class="flex items-center gap-2">
                            <div class="flex h-6 w-6 items-center justify-center rounded bg-gray-800 text-white font-bold text-xs">
                                汉
                            </div>
                            <span class="text-lg font-bold text-gray-500">Hanzi.mn <span class="text-xs font-normal opacity-50">by Yargaitech</span></span>
                        </div>
                        <div class="text-sm text-gray-600">
                            © 2025 Yargaitech. Бүх эрх хуулиар хамгаалагдсан.
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