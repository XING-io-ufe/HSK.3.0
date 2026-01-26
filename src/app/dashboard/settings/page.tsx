'use client';
import React, { useState } from 'react';
import { MdCheck, MdClose, MdVisibility, MdVisibilityOff } from '@/components/icons/material';

type Theme = 'light' | 'dark';

type Settings = {
    username: string;
    email: string;
    emailNotifications: boolean;
    pushNotifications: boolean;
    theme: Theme;
    language: string;
};

export default function SettingsPage() {
    const [settings, setSettings] = useState<Settings>({
        username: 'Батаа',
        email: 'bataa@example.com',
        emailNotifications: true,
        pushNotifications: false,
        theme: 'dark',
        language: 'mn',
    });
    const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
    const [showPassword, setShowPassword] = useState(false);

    const update = <K extends keyof Settings>(key: K, value: Settings[K]) =>
        setSettings(prev => ({ ...prev, [key]: value }));

    const save = async (e?: React.FormEvent) => {
        e?.preventDefault();
        setStatus('saving');
        try {
            await new Promise(resolve => setTimeout(resolve, 700));
            setStatus('saved');
            setTimeout(() => setStatus('idle'), 2000);
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen overflow-auto bg-background-dark text-white p-6 md:p-8 pb-24 md:pb-32">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Тохиргоо</h1>
                <p className="text-gray-500 mb-8">Хэрэглэгчийн тохиргоогоо удирдах</p>

                <form onSubmit={save} className="space-y-8">
                    {/* Profile Section */}
                    <section className="glass-card rounded-2xl p-6 border border-white/10">
                        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">👤</span>
                            Профайл
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Хэрэглэгчийн нэр</label>
                                <input
                                    value={settings.username}
                                    onChange={e => update('username', e.target.value)}
                                    placeholder="Таны нэр"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Имэйл</label>
                                <input
                                    value={settings.email}
                                    onChange={e => update('email', e.target.value)}
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Password Section */}
                    <section className="glass-card rounded-2xl p-6 border border-white/10">
                        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">🔒</span>
                            Нууц үг солих
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-400 mb-2">Одоогийн нууц үг</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-10 text-gray-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                                </button>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Шинэ нууц үг</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Notifications Section */}
                    <section className="glass-card rounded-2xl p-6 border border-white/10">
                        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">🔔</span>
                            Мэдэгдэл
                        </h2>
                        <div className="space-y-4">
                            <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
                                <div>
                                    <span className="font-medium">Имэйл мэдэгдэл</span>
                                    <p className="text-sm text-gray-500">Шинэ хичээл, урамшуулалын мэдээлэл авах</p>
                                </div>
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={settings.emailNotifications}
                                        onChange={e => update('emailNotifications', e.target.checked)}
                                        className="sr-only"
                                    />
                                    <div className={`w-12 h-6 rounded-full transition-colors ${settings.emailNotifications ? 'bg-primary' : 'bg-white/10'}`}>
                                        <div className={`w-5 h-5 rounded-full bg-white shadow-lg transform transition-transform mt-0.5 ${settings.emailNotifications ? 'translate-x-6' : 'translate-x-0.5'}`} />
                                    </div>
                                </div>
                            </label>
                            <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
                                <div>
                                    <span className="font-medium">Push мэдэгдэл</span>
                                    <p className="text-sm text-gray-500">Өдөр тутмын сануулга авах</p>
                                </div>
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={settings.pushNotifications}
                                        onChange={e => update('pushNotifications', e.target.checked)}
                                        className="sr-only"
                                    />
                                    <div className={`w-12 h-6 rounded-full transition-colors ${settings.pushNotifications ? 'bg-primary' : 'bg-white/10'}`}>
                                        <div className={`w-5 h-5 rounded-full bg-white shadow-lg transform transition-transform mt-0.5 ${settings.pushNotifications ? 'translate-x-6' : 'translate-x-0.5'}`} />
                                    </div>
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* Appearance Section */}
                    <section className="glass-card rounded-2xl p-6 border border-white/10">
                        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">🎨</span>
                            Харагдах байдал
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-3">Загвар</label>
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => update('theme', 'light')}
                                        className={`flex-1 py-3 px-4 rounded-lg border transition-all flex items-center justify-center gap-2 ${settings.theme === 'light'
                                            ? 'border-primary bg-primary/10 text-primary'
                                            : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                                            }`}
                                    >
                                        ☀️ Цайвар
                                        {settings.theme === 'light' && <MdCheck size={18} />}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => update('theme', 'dark')}
                                        className={`flex-1 py-3 px-4 rounded-lg border transition-all flex items-center justify-center gap-2 ${settings.theme === 'dark'
                                            ? 'border-primary bg-primary/10 text-primary'
                                            : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                                            }`}
                                    >
                                        🌙 Бараан
                                        {settings.theme === 'dark' && <MdCheck size={18} />}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-3">Хэл</label>
                                <select
                                    value={settings.language}
                                    onChange={e => update('language', e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
                                >
                                    <option value="mn" className="bg-surface-dark">🇲🇳 Монгол</option>
                                    <option value="en" className="bg-surface-dark">🇺🇸 English</option>
                                    <option value="zh" className="bg-surface-dark">🇨🇳 中文</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            type="submit"
                            disabled={status === 'saving'}
                            className={`flex-1 py-4 rounded-lg font-bold text-base transition-all flex items-center justify-center gap-2 ${status === 'saved'
                                ? 'bg-green-500 text-white'
                                : 'bg-primary text-black hover:bg-white'
                                }`}
                        >
                            {status === 'saving' ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                    Хадгалж байна...
                                </>
                            ) : status === 'saved' ? (
                                <>
                                    <MdCheck size={20} />
                                    Хадгалагдлаа!
                                </>
                            ) : (
                                'Хадгалах'
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={() =>
                                setSettings({
                                    username: '',
                                    email: '',
                                    emailNotifications: true,
                                    pushNotifications: false,
                                    theme: 'dark',
                                    language: 'mn',
                                })
                            }
                            className="py-4 px-8 rounded-lg border border-white/10 text-gray-400 font-medium hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                            <MdClose size={18} />
                            Цэвэрлэх
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
