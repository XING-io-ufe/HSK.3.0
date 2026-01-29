import React from 'react';
import { MdTrendingUp, MdPeople, MdAccessTime, MdBarChart } from '@/components/icons/material';

type Stats = {
    users: number;
    active: number;
    sessions: number;
    growth: number;
    history: number[];
};

async function getStats(): Promise<Stats> {
    return {
        users: 12840,
        active: 3241,
        sessions: 8742,
        growth: 12.6,
        history: [10, 12, 9, 14, 18, 15, 20, 22, 19, 24],
    };
}

function Sparkline({ data, width = 200, height = 40 }: { data: number[]; width?: number; height?: number }) {
    if (!data || data.length === 0) return null;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const step = width / (data.length - 1);
    const points = data
        .map((v, i) => {
            const x = i * step;
            const y = height - ((v - min) / range) * height;
            return `${x},${y}`;
        })
        .join(' ');
    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden>
            <defs>
                <linearGradient id="sparklineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#13ec25" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                </linearGradient>
            </defs>
            <polyline
                fill="none"
                stroke="url(#sparklineGradient)"
                strokeWidth={2.5}
                points={points}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function StatCard({
    title,
    value,
    subtitle,
    icon,
    iconBg,
    trend,
}: {
    title: string;
    value: string;
    subtitle: string;
    icon: React.ReactNode;
    iconBg: string;
    trend?: { value: string; positive: boolean };
}) {
    return (
        <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}>
                    {icon}
                </div>
                {trend && (
                    <div className={`flex items-center gap-1 text-sm font-medium ${trend.positive ? 'text-primary' : 'text-red-400'}`}>
                        <MdTrendingUp size={16} className={!trend.positive ? 'rotate-180' : ''} />
                        {trend.value}
                    </div>
                )}
            </div>
            <div className="text-3xl font-bold text-white mb-1">{value}</div>
            <div className="text-sm text-gray-500">{subtitle}</div>
            <div className="text-xs text-gray-600 mt-2">{title}</div>
        </div>
    );
}

export default async function StatisticsPage() {
    const stats = await getStats();

    return (
        <div className="flex-1 min-h-0 bg-background-dark overflow-auto text-white p-6 md:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">Статистик</h1>
                    <p className="text-gray-500">Сургалтын үзүүлэлтүүдийн хураангуй</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard
                        title="Нийт хэрэглэгч"
                        value={stats.users.toLocaleString()}
                        subtitle="Бүртгэлтэй"
                        icon={<MdPeople size={24} className="text-blue-400" />}
                        iconBg="bg-blue-500/20"
                        trend={{ value: '+12%', positive: true }}
                    />
                    <StatCard
                        title="Идэвхтэй"
                        value={stats.active.toLocaleString()}
                        subtitle="Энэ долоо хоногт"
                        icon={<MdTrendingUp size={24} className="text-primary" />}
                        iconBg="bg-primary/20"
                        trend={{ value: '+8%', positive: true }}
                    />
                    <StatCard
                        title="Sessions"
                        value={stats.sessions.toLocaleString()}
                        subtitle="Нийт хандалт"
                        icon={<MdAccessTime size={24} className="text-orange-400" />}
                        iconBg="bg-orange-500/20"
                    />
                    <StatCard
                        title="Өсөлт"
                        value={`${stats.growth}%`}
                        subtitle="Сарын өсөлт"
                        icon={<MdBarChart size={24} className="text-purple-400" />}
                        iconBg="bg-purple-500/20"
                        trend={{ value: `+${stats.growth}%`, positive: true }}
                    />
                </div>

                {/* Activity Chart */}
                <div className="glass-card rounded-2xl p-6 border border-white/10 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-lg font-semibold">Хэрэглэгчийн идэвхжилт</h2>
                            <p className="text-sm text-gray-500">Сүүлийн {stats.history.length} үе</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>Дундаж:</span>
                            <span className="text-primary font-medium">
                                {Math.round(stats.history.reduce((a, b) => a + b, 0) / stats.history.length)}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <Sparkline data={stats.history} width={300} height={60} />
                        <div className="hidden md:flex flex-col gap-2 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-primary" />
                                <span className="text-gray-400">Идэвхтэй хэрэглэгчид</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-white/20" />
                                <span className="text-gray-500">Өмнөх үе</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-card rounded-2xl p-6 border border-white/10">
                        <h3 className="text-lg font-semibold mb-4">Түвшин тархалт</h3>
                        <div className="space-y-4">
                            {[
                                { level: 'HSK 1', count: 4521, percent: 35 },
                                { level: 'HSK 2', count: 3200, percent: 25 },
                                { level: 'HSK 3', count: 2560, percent: 20 },
                                { level: 'HSK 4', count: 1540, percent: 12 },
                                { level: 'HSK 5+', count: 1019, percent: 8 },
                            ].map((item) => (
                                <div key={item.level} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">{item.level}</span>
                                        <span className="text-white font-medium">{item.count.toLocaleString()}</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-linear-to-r from-primary to-emerald-400 rounded-full"
                                            style={{ width: `${item.percent}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card rounded-2xl p-6 border border-white/10">
                        <h3 className="text-lg font-semibold mb-4">Сүүлийн идэвхжилт</h3>
                        <div className="space-y-4">
                            {[
                                { action: 'Шинэ бүртгэл', time: '2 минутын өмнө', icon: '👤' },
                                { action: 'HSK 1 дуусгалаа', time: '15 минутын өмнө', icon: '🎉' },
                                { action: 'Флаш карт 50+', time: '1 цагийн өмнө', icon: '📚' },
                                { action: 'Pro болсон', time: '2 цагийн өмнө', icon: '⭐' },
                                { action: 'Streak 30 хоног', time: '3 цагийн өмнө', icon: '🔥' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-lg">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-white">{item.action}</div>
                                        <div className="text-xs text-gray-500">{item.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
