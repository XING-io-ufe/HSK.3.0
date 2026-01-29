"use client";
import React from 'react';
import { MdWorkspacePremium, MdEmojiEvents, MdPeople, MdArrowForward } from '@/components/icons/material';

export default function LeaderboardPage() {
    return (
        <div className="flex-1 min-h-0 flex flex-col bg-grid bg-background-dark text-white font-display selection:bg-primary selection:text-black">
            {/* Main Content Area */}
            <main className="relative flex-1 w-full overflow-auto">
                {/* Decorative particles */}
                <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary/20 blur-[1px]" />
                <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-primary/10 blur-[2px]" />
                <div className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-white/20" />

                <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto px-4 py-8 pb-32">
                    {/* Page Heading & Subtitle */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">Шилдэг суралцагчид</h1>
                        <p className="text-[#9cba9e] text-lg">Таны сурлагын амжилт бусадтай харьцуулахад</p>
                    </div>

                    {/* Tabs */}
                    <div className="w-full max-w-md mx-auto mb-12">
                        <div className="flex rounded-xl bg-[#111811] border border-[#283929] p-1">
                            <button className="flex-1 py-2 px-4 rounded-lg bg-[#283929] text-white shadow-sm transition-all">
                                <span className="text-sm font-bold">Энэ долоо хоног</span>
                            </button>
                            <button className="flex-1 py-2 px-4 rounded-lg text-[#9cba9e] hover:text-white hover:bg-[#283929]/50 transition-all">
                                <span className="text-sm font-medium">Өнгөрсөн 7 хоног</span>
                            </button>
                            <button className="flex-1 py-2 px-4 rounded-lg text-[#9cba9e] hover:text-white hover:bg-[#283929]/50 transition-all">
                                <span className="text-sm font-medium">Бүх цаг үе</span>
                            </button>
                        </div>
                    </div>

                    {/* Podium (Top 3) */}
                    <div className="flex items-end justify-center gap-4 md:gap-8 mb-16 w-full max-w-3xl">
                        {/* 2nd Place */}
                        <div className="flex flex-col items-center order-1 w-1/3 max-w-40">
                            <div className="relative mb-4">
                                <MdEmojiEvents className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#C0C0C0] text-3xl" />
                                <div className="size-20 md:size-24 rounded-full border-4 border-[#C0C0C0] p-1 bg-[#111811] glow-silver relative z-10">
                                    <div
                                        className="w-full h-full rounded-full bg-cover bg-center"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLwNV3X4IshfCa7y2r9ESD6-6-SXuyNtmCi2x8i1bpFG0MXOifV4Q4w8F0VtguqcKNUO42QSnGAjRxJYkNPiiCsTWoSh77FWkipnQmpzNKWhW06P741S7fZKHqZ2jMKy5BAMpyfO1LR-1iMnOv5Fg8mw7XO6C1wGAMmMrLZK9d4AcfKncKMr8sijlPanuFGOWgZgYAdP1wGUOkIRd6gNv57ZZN7nn3KxbxkFYQj0yBZCXkt8CT7WML1sKNw-eF5SDsrLh5ekhS4NU')" }}
                                    />
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#C0C0C0] text-black text-xs font-bold px-2 py-0.5 rounded-full border-2 border-[#111811]">#2</div>
                                </div>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-1 truncate w-full text-center">Билгүүн</h3>
                            <p className="text-[#9cba9e] font-mono text-sm">12,450 XP</p>
                            <div className="w-full h-24 mt-4 bg-linear-to-b from-[#C0C0C0]/20 to-transparent rounded-t-lg border-t border-[#C0C0C0]/30 backdrop-blur-sm" />
                        </div>

                        {/* 1st Place */}
                        <div className="flex flex-col items-center order-2 w-1/3 max-w-45 -mb-4 z-20">
                            <div className="relative mb-4">
                                <MdWorkspacePremium className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#FFD700] text-5xl drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
                                <div className="size-28 md:size-32 rounded-full border-4 border-[#FFD700] p-1 bg-[#111811] glow-gold relative z-10">
                                    <div
                                        className="w-full h-full rounded-full bg-cover bg-center"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5lS_7lh7X9y1GC4gpnHIDGXDzF5ZzNH9FDVHlJ_wJ25-CjXzQC3G3RVvjpMH0mVUSsvlqQeko012iceDgwXSYhH8ICQYYyGhJ1xzjM1qc1RpG1SSDluOl4_glJTyRpvJtX7T1vOAq4z_9_NhHDCNKlZBVZVAoJW9oFBjk45DzpFLAvhxVOuucVAHhnaGniSGE6tvTZd-YlLEXxCvlaOvV7cMX3o9mnTxx_hCLsmtFLU9ER9HAQBJfsC3cungmhVeyMj5rX5tDv-M')" }}
                                    />
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black text-sm font-black px-3 py-0.5 rounded-full border-2 border-[#111811] shadow-[0_0_10px_rgba(255,215,0,0.6)]">#1</div>
                                </div>
                            </div>
                            <h3 className="text-white font-bold text-xl mb-1 truncate w-full text-center">Саруул</h3>
                            <p className="text-primary font-mono font-bold text-base">15,200 XP</p>
                            <div className="w-full h-32 mt-4 bg-linear-to-b from-[#FFD700]/20 to-transparent rounded-t-lg border-t border-[#FFD700]/30 backdrop-blur-sm shadow-[0_-10px_40px_rgba(255,215,0,0.1)]" />
                        </div>

                        {/* 3rd Place */}
                        <div className="flex flex-col items-center order-3 w-1/3 max-w-40">
                            <div className="relative mb-4">
                                <MdEmojiEvents className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#cd7f32] text-3xl" />
                                <div className="size-20 md:size-24 rounded-full border-4 border-[#cd7f32] p-1 bg-[#111811] glow-bronze relative z-10">
                                    <div
                                        className="w-full h-full rounded-full bg-cover bg-center"
                                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC43ySR2GaFeVBYypqzxQiZLQMUoG1kgyoki8sKl6ocniz8AZC8ujZoPW-un1KzV6GMQpSyEN_pF_ekIiNKfPtu7_OpreYnEfNGnwVS58f69Jy9CT_oK9NDtxA3ySX2jMKy5BAMpyfO1LR-1iMnOv5Fg8mw7XO6C1wGAMmMrLZK9d4AcfKncKMr8sijlPanuFGOWgZgYAdP1wGUOkIRd6gNv57ZZN7nn3KxbxkFYQj0yBZCXkt8CT7WML1sKNw-eF5SDsrLh5ekhS4NU')" }}
                                    />
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#cd7f32] text-black text-xs font-bold px-2 py-0.5 rounded-full border-2 border-[#111811]">#3</div>
                                </div>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-1 truncate w-full text-center">Тэмүүлэн</h3>
                            <p className="text-[#9cba9e] font-mono text-sm">10,800 XP</p>
                            <div className="w-full h-20 mt-4 bg-linear-to-b from-[#cd7f32]/20 to-transparent rounded-t-lg border-t border-[#cd7f32]/30 backdrop-blur-sm" />
                        </div>
                    </div>

                    {/* Leaderboard List (Glassmorphism) */}
                    <div className="w-full flex flex-col gap-3">
                        {/* Header Row */}
                        <div className="flex items-center px-6 py-2 text-xs font-bold text-[#9cba9e] uppercase tracking-wider">
                            <div className="w-12 text-center">#</div>
                            <div className="flex-1">Суралцагч</div>
                            <div className="w-32 text-right">XP Оноо</div>
                        </div>

                        {/* Rank list items (example entries) */}
                        {[
                            { rank: 4, name: 'Болд', xp: '9,500', percent: '85%', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCut2GwQG-prhu2ed5DP1-eqJGRYAq6HPZsRx1pnbeOTsENAmjI9XepOX1BfGKEp5Qq24s8c1pSAt2sMZ1iN_AahN-MiFe72tsEO-ZqqICthXxCw8EW6SoM0yxhnvz-ut-MzbZa5quGAAfCYbh6uF6OMCQDUw9lTLSgoaCzH5fvFHBVMq-h9_KvzyY6lGlTVwvU2SaNze2Mcox3NgQdPa4B9H73sPKCDAgPEbDw3c45dFdnWSmCaSldf7Wn_P6eX_ps-_NowvUlBI4' },
                            { rank: 5, name: 'Цэцэг', xp: '8,950', percent: '78%', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmSieyalZ_s7bMlVgUb03uiT2CTq9yZHIkrv2mAPX-Ox6vsf2eAcLuEd7oa9rJJ78aiK-tKuG_bqk1S8Nz3FQdvyIB7fuK-BPI52U3tnkVvfaanVoJe6ywm6cULg5LnDS_m5cB7GIV8-3ZMItzoYm1nuqKIyR9YMuzghyuDMcbuKJxfCWtUhhqgcF8lChMEu4wDQm67uLIVGd25OYWZOWYHiEy3OnXu68fPzr9ERDenQ2LzwqHsJ2aVJM77ZM5mVI_9fg31_YOcKg' },
                            { rank: 6, name: 'Мөнхөө', xp: '8,200', percent: '70%', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjVWHBbsaT9TWYeIzvGVBhQibWH3Ok_wSn7b5L2UyJGqUb71gSxTAg8-FNQXzb-2f-f_SaVUjZu6SsFVcGRkh1Twx4bDC3gimw8auiZTFRAl85xpFoW8IwKFrWk9MIQy4HFnQb_arUIwwJ8s9gfmhmnGi09hg-UNePBcSFedstUVRNdJl4lo0b1SCxzuE7pR-QZwFqnkdxpX_xYKXB0QwHEAhy0CtvVUMHbsY9SoQ0-1zX73pZ6kTAzLm7JP2W2JH0iAWOmjYrf5s' },
                            { rank: 7, name: 'Ану', xp: '7,850', percent: '65%', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgocVr2tuN2l_6p8lE6HPxFOLtRZbWeTO7BrRjUgBFKL7k5bA_4DJOTH10dovt3JpehNUsebE4OrQiKM6Rdc91xZWkJEcMwpOuphPv56fGlZg7kMnFxirqLvjRCO0cu6hD_yYcCsXOSUoOntWP-S_fRRMIh3yyTGCTAZzQqpYv29swTfxOCtK5nBI0PYN_oWlks7cU_xggV0Bo8uD5jEgtk-FSGXnXmasyxVodxlCwbawFIwOIw63WIGhUXR1YGSoDjNtS9uawG0s' },
                            { rank: 8, name: 'Дорж', xp: '7,400', percent: '60%', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZRmDtZA34CfEWLRzTIlDUvz768-Ygr4YkygrbGsMj7zijwuSQVqgocv-3eIoczNCgMK6XEHpYCIlOEEThtnLY_nQAvEnSuRLGgy3cZsgiqcIUG0QPKnr1zDm-EdFn8DKKsybp6PH74pwwKMp6H3GlwQvRHi-E2cUtdeTAHSHM8fb74-APwGrp9xId29dMYam_DXIK9D3k6-93x6eTjl7epR0KZvt9YnIhrxaOyJQy3rBm8P9fhfy35zUBCuZ4-cTeEHo7SkCnJ-Q' },
                        ].map((item) => (
                            <div key={item.rank} className="group flex items-center gap-4 glass-card px-4 py-3 rounded-xl hover:bg-[#283929]/40 transition-colors cursor-pointer">
                                <div className="w-8 text-center font-bold text-[#9cba9e] text-lg">{item.rank}</div>
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="size-10 rounded-full bg-cover bg-center border border-[#283929]" style={{ backgroundImage: `url(${item.avatar})` }} aria-hidden />
                                    <div className="flex flex-col">
                                        <p className="text-white font-medium text-base">{item.name}</p>
                                        <div className="w-24 h-1 bg-[#283929] rounded-full mt-1 overflow-hidden">
                                            <div className="h-full bg-[#9cba9e]" style={{ width: item.percent }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right font-mono text-white font-bold">{item.xp}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Sticky User Rank Bar */}
            <div className="fixed bottom-0 left-0 w-full z-40 px-4 pb-4 md:left-72 md:w-[calc(100%-18rem)]">
                <div className="mx-auto max-w-5xl">
                    <div className="relative flex items-center gap-4 bg-[#111811] border border-primary/40 px-4 py-3 rounded-xl glow-green shadow-2xl overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                        <div className="w-8 text-center font-black text-primary text-xl">42</div>
                        <div className="flex items-center gap-4 flex-1">
                            <div className="relative">
                                <div className="size-12 rounded-full bg-cover bg-center border-2 border-primary" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXAYD-MgOc9HOxGNISwwymBV7CJyrE3GcjJx0NYaEPXkcN2YgPw1o0_t5e6HPRwI7iIC1tf9hqWEhab3vmGuFpUIo_w0gffJJkIrkDnA5wsyK3hxQU82LiTbWKZSHjCI1q1zX9UTaBy2AF_qQK3Rw-IGpL2jy8PSLO1p4bD7Tu-QTesMHsgfZY9thZXi0qbhMLRGSXoDhkt8KU51dBHTXoHNnHSoPFgIDz7YPM3wFyYBRIary8kYth4U-JEGaDtE9OYts1ZWSxhLM')" }} />
                                <div className="absolute -bottom-1 -right-1 bg-primary text-black rounded-full p-0.5">
                                    <MdArrowForward className="text-[14px] font-bold block" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-white font-bold text-base">Та (Бат-Эрдэнэ)</p>
                                <p className="text-primary/80 text-xs font-mono">Тэргүүлэгч болоход 3,200 XP дутуу</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-white font-mono font-bold text-lg">5,650 XP</span>
                            <span className="text-[#9cba9e] text-xs">Нийт оноо</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Button (FAB) - Invite Friends */}
            <div className="fixed bottom-30 right-5 md:right-10 z-50">
                <button className="flex items-center gap-2 bg-primary hover:bg-green-400 text-black font-bold py-3 px-6 rounded-full shadow-[0_0_20px_rgba(37,244,54,0.3)] transition-all transform hover:scale-105 active:scale-95 group">
                    <MdPeople className="group-hover:animate-pulse" />
                    <span>Найзуудаа урих</span>
                </button>
            </div>
        </div>
    );
}
