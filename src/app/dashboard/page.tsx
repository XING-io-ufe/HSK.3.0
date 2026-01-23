import { MdMenuBook, MdTimer, MdSync, MdLayers } from '@/components/icons/material';

export default function DashboardPage() {
    return (
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-[80px] pointer-events-none"></div>
                        <div className="flex justify-between items-end mb-4">
                            <div>
                                <span className="text-primary text-sm font-bold tracking-widest uppercase mb-1 block">Одоо сурч буй</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">HSK 1 - Анхан шат</h2>
                            </div>
                            <div className="text-right">
                                <span className="text-3xl font-bold text-primary neon-text-glow">12%</span>
                                <span className="text-gray-500 text-sm block">Гүйцэтгэл</span>
                            </div>
                        </div>
                        <div className="relative w-full h-4 bg-gray-800 rounded-full overflow-hidden mb-4 border border-white/5">
                            <div className="absolute top-0 left-0 h-full bg-primary progress-glow rounded-full transition-all duration-1000 ease-out" style={{ width: '12%' }}></div>
                        </div>
                        <div className="flex gap-6 mt-2">
                            <div className="flex items-center gap-2">
                                <MdMenuBook className="text-gray-400 text-sm" />
                                <span className="text-sm text-gray-300">14/150 Үг</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdTimer className="text-gray-400 text-sm" />
                                <span className="text-sm text-gray-300">2.5 Цаг зарцуулсан</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card rounded-2xl p-6 relative flex flex-col items-center text-center justify-between border-t border-primary/20">
                        <div className="absolute top-2 right-2 text-xs font-bold text-primary border border-primary/30 px-2 py-0.5 rounded-full">Өдрийн ханз</div>
                        <div className="mt-4 mb-6 relative w-full flex-1 flex items-center justify-center">
                            <div className="relative z-10">
                                <h3 className="text-7xl md:text-8xl font-black text-white mb-2">爱</h3>
                                <p className="text-gray-400 text-lg">Ài</p>
                            </div>
                            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full transform scale-50 z-0"></div>
                        </div>
                        <button className="w-full py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all flex items-center justify-center gap-2 group">
                            <MdSync className="group-hover:rotate-180 transition-transform duration-500" />
                            Эргүүлэх (Flip)
                        </button>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <MdLayers className="text-primary" />
                        Сургалтын хөтөлбөр
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="glass-card p-6 rounded-xl border border-primary/50 relative group overflow-hidden hover:bg-white/5 transition-all cursor-pointer">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full z-0 transition-all group-hover:scale-150 duration-500"></div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-black">
                                        <span className="text-lg font-bold">1</span>
                                    </div>
                                    <div className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary border border-primary/20">{/* badge */} Нээлттэй</div>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-1">HSK 1 Түвшин</h4>
                                <p className="text-sm text-gray-400 mb-6">Анхан шат</p>
                                <div className="flex items-center justify-between text-xs font-medium text-gray-400 mb-4">
                                    <span>Ханзны тоо</span>
                                    <span>150</span>
                                </div>
                                <button className="w-full py-2.5 rounded-lg bg-primary text-black font-bold text-sm">Үргэлжлүүлэх</button>
                            </div>
                        </div>

                        {/* Locked cards */}
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="glass-card p-6 rounded-xl border border-white/5 relative overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                        <span className="text-lg font-bold">{i + 2}</span>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-gray-300 mb-1">HSK {i + 2} Түвшин</h4>
                                <p className="text-sm text-gray-500 mb-6">Анхан шатны {[300, 600, 1200, 2500, 5000][i]} үг</p>
                                <button className="w-full py-2.5 rounded-lg bg-white/5 text-gray-400 font-bold text-sm border border-white/10 hover:bg-white/10 transition-colors">
                                    Идэвхжүүлэх
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
