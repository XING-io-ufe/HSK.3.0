< !DOCTYPE html >
    <html class="dark" lang="mn"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Нэвтрэх болон Бүртгүүлэх - Hanzi.mn</title>
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
        }.form-input {
                background - color: rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: white;
            transition: all 0.3s ease;
        }
            .form-input:focus {
                border - color: #13ec25;
            box-shadow: 0 0 0 1px #13ec25;
            outline: none;
        }#tab-login:checked ~ .panels #panel-login {
                display: block;
            animation: fadeIn 0.5s ease-out;
        }
            #tab-signup:checked ~ .panels #panel-signup {
                display: block;
            animation: fadeIn 0.5s ease-out;
        }
            #tab-login:checked ~ .tabs-nav label[for="tab-login"] {
                color: #13ec25;
            border-bottom-color: #13ec25;
            background: rgba(255,255,255,0.05);
        }
            #tab-signup:checked ~ .tabs-nav label[for="tab-signup"] {
                color: #13ec25;
            border-bottom-color: #13ec25;
            background: rgba(255,255,255,0.05);
        }
            @keyframes fadeIn {
                from {opacity: 0; transform: translateY(10px); }
            to {opacity: 1; transform: translateY(0); }
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
                                <a class="text-xl font-bold tracking-tight text-white" href="#">Hanzi<span class="text-primary">.mn</span></a>
                            </div>
                            <nav class="hidden md:flex items-center gap-8">
                                <a class="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Нүүр</a>
                                <a class="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Бидний тухай</a>
                                <a class="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Хичээлүүд</a>
                                <a class="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Блог</a>
                            </nav>
                            <div class="flex items-center gap-4">
                                <a class="text-sm font-medium text-white hover:text-primary transition-colors" href="#">Тусламж</a>
                            </div>
                        </div>
                    </div>
                </header>
                <main class="flex-grow flex items-center justify-center w-full px-4 py-12 relative z-10">
                    <div class="w-full max-w-md">
                        <div class="glass-card rounded-2xl overflow-hidden shadow-2xl relative">
                            <input checked="" class="hidden" id="tab-login" name="auth-tab" type="radio" />
                            <input class="hidden" id="tab-signup" name="auth-tab" type="radio" />
                            <div class="tabs-nav flex border-b border-white/5 bg-black/20">
                                <label class="flex-1 py-4 text-center cursor-pointer text-gray-400 font-medium hover:text-white transition-all border-b-2 border-transparent" for="tab-login">
                                    Нэвтрэх
                                </label>
                                <label class="flex-1 py-4 text-center cursor-pointer text-gray-400 font-medium hover:text-white transition-all border-b-2 border-transparent" for="tab-signup">
                                    Бүртгүүлэх
                                </label>
                            </div>
                            <div class="panels relative">
                                <div class="hidden p-8" id="panel-login">
                                    <div class="text-center mb-8">
                                        <h2 class="text-2xl font-bold text-white mb-2">Тавтай морил</h2>
                                        <p class="text-gray-400 text-sm">Үргэлжлүүлэхийн тулд бүртгэлээрээ нэвтэрнэ үү</p>
                                    </div>
                                    <form class="space-y-5" onsubmit="event.preventDefault();">
                                        <div>
                                            <label class="block text-xs font-medium text-gray-400 mb-1 ml-1">Имэйл эсвэл Утасны дугаар</label>
                                            <div class="relative">
                                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span class="material-symbols-outlined text-gray-500 text-[20px]">person</span>
                                                </div>
                                                <input class="form-input block w-full pl-10 pr-3 py-3 rounded-lg sm:text-sm placeholder-gray-600" placeholder="name@example.com" type="text" />
                                            </div>
                                        </div>
                                        <div>
                                            <label class="block text-xs font-medium text-gray-400 mb-1 ml-1">Нууц үг</label>
                                            <div class="relative">
                                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span class="material-symbols-outlined text-gray-500 text-[20px]">lock</span>
                                                </div>
                                                <input class="form-input block w-full pl-10 pr-3 py-3 rounded-lg sm:text-sm placeholder-gray-600" placeholder="••••••••" type="password" />
                                            </div>
                                            <div class="flex justify-end mt-2">
                                                <a class="text-xs text-primary hover:text-white transition-colors" href="#">Нууц үг мартсан?</a>
                                            </div>
                                        </div>
                                        <button class="w-full h-12 rounded-lg bg-primary text-black font-bold text-base hover:bg-white transition-all transform hover:scale-[1.02] neon-glow flex items-center justify-center gap-2 mt-2" type="submit">
                                            <span>НЭВТРЭХ</span>
                                            <span class="material-symbols-outlined text-[20px]">login</span>
                                        </button>
                                    </form>
                                    <div class="relative my-8">
                                        <div class="absolute inset-0 flex items-center">
                                            <div class="w-full border-t border-white/10"></div>
                                        </div>
                                        <div class="relative flex justify-center text-sm">
                                            <span class="px-2 bg-[#121212] text-gray-500">эсвэл</span>
                                        </div>
                                    </div>
                                    <button class="w-full h-12 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-3 group">
                                        <svg class="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                        </svg>
                                        <span>Google-ээр нэвтрэх</span>
                                    </button>
                                </div>
                                <div class="hidden p-8" id="panel-signup">
                                    <div class="text-center mb-6">
                                        <h2 class="text-2xl font-bold text-white mb-2">Шинэ бүртгэл</h2>
                                        <p class="text-gray-400 text-sm">HSK 2.0 сургалтанд яг одоо нэгдээрэй</p>
                                    </div>
                                    <div class="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6 flex gap-3 items-start">
                                        <span class="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">verified_user</span>
                                        <div class="text-xs text-gray-300 leading-relaxed">
                                            <strong class="text-white block mb-0.5">Төлбөр төлсөн үү?</strong>
                                            Бүртгүүлсний дараа QPay гүйлгээ автоматаар танигдаж, таны эрх шууд нээгдэнэ.
                                        </div>
                                    </div>
                                    <form class="space-y-4" onsubmit="event.preventDefault();">
                                        <div>
                                            <label class="block text-xs font-medium text-gray-400 mb-1 ml-1">Имэйл эсвэл Утасны дугаар</label>
                                            <div class="relative">
                                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span class="material-symbols-outlined text-gray-500 text-[20px]">person</span>
                                                </div>
                                                <input class="form-input block w-full pl-10 pr-3 py-3 rounded-lg sm:text-sm placeholder-gray-600" placeholder="name@example.com" type="text" />
                                            </div>
                                        </div>
                                        <div>
                                            <label class="block text-xs font-medium text-gray-400 mb-1 ml-1">Нууц үг</label>
                                            <div class="relative">
                                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span class="material-symbols-outlined text-gray-500 text-[20px]">lock</span>
                                                </div>
                                                <input class="form-input block w-full pl-10 pr-3 py-3 rounded-lg sm:text-sm placeholder-gray-600" placeholder="••••••••" type="password" />
                                            </div>
                                        </div>
                                        <div>
                                            <label class="block text-xs font-medium text-gray-400 mb-1 ml-1">Нууц үг давтах</label>
                                            <div class="relative">
                                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <span class="material-symbols-outlined text-gray-500 text-[20px]">lock_reset</span>
                                                </div>
                                                <input class="form-input block w-full pl-10 pr-3 py-3 rounded-lg sm:text-sm placeholder-gray-600" placeholder="••••••••" type="password" />
                                            </div>
                                        </div>
                                        <div class="pt-2">
                                            <button class="w-full h-12 rounded-lg bg-primary text-black font-bold text-base hover:bg-white transition-all transform hover:scale-[1.02] neon-glow flex items-center justify-center gap-2" type="submit">
                                                <span>БҮРТГҮҮЛЭХ</span>
                                                <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
                                            </button>
                                        </div>
                                    </form>
                                    <div class="mt-6 text-center">
                                        <p class="text-xs text-gray-500">
                                            Бүртгүүлснээр та манай <a class="text-gray-400 underline hover:text-primary" href="#">Үйлчилгээний нөхцөл</a>-ийг зөвшөөрч байна.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-8">
                            <p class="text-sm text-gray-500 flex items-center justify-center gap-1">
                                <span class="material-symbols-outlined text-lg">lock</span>
                                Таны мэдээлэл 100% найдвартай хамгаалагдсан.
                            </p>
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