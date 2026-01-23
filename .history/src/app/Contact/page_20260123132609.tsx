import { MdAlternateEmail, MdSupportAgent, MdLocationOn, MdSend } from '@/components/icon/Material_icon';

export default function ContactPage() {
    return (
        <main className="grow flex flex-col items-center w-full">
            <section className="w-full py-16 lg:py-24 relative">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Холбоо барих</h1>
                        <p className="text-xl md:text-2xl text-primary font-medium tracking-wide neon-text-glow opacity-90">
                            Бид Монгол хүмүүстээ туслахад бэлэн
                        </p>
                        <div className="h-1 w-24 bg-primary mx-auto mt-6 rounded-full opacity-50"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        <div className="lg:col-span-7">
                            <div className="glass-card p-8 md:p-10 rounded-2xl border border-white/10 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-400 pl-1" htmlFor="name">Нэр</label>
                                            <input className="w-full bg-surface-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary neon-input transition-all duration-300" id="name" placeholder="Таны нэр" type="text" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-400 pl-1" htmlFor="email">Имэйл</label>
                                            <input className="w-full bg-surface-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary neon-input transition-all duration-300" id="email" placeholder="name@example.com" type="email" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-400 pl-1" htmlFor="subject">Сэдэв</label>
                                        <select className="w-full bg-surface-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary neon-input transition-all duration-300 appearance-none">
                                            <option>Ерөнхий асуулт</option>
                                            <option>Сургалтын талаар</option>
                                            <option>Техникийн тусламж</option>
                                            <option>Хамтран ажиллах</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-400 pl-1" htmlFor="message">Зурвас</label>
                                        <textarea className="w-full bg-surface-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary neon-input transition-all duration-300 min-h-[150px]" id="message" placeholder="Таны асуулт эсвэл санал..." />
                                    </div>
                                    <button className="w-full py-4 rounded-lg bg-primary text-black font-bold text-base hover:bg-white transition-all transform hover:scale-[1.01] neon-glow flex items-center justify-center gap-2 mt-4" type="button">
                                        <span>ИЛГЭЭХ</span>
                                        <MdSend className="text-[20px]" />
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col space-y-8 py-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Мэдээлэл</h3>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    Танд HSK шалгалт, шинэ систем эсвэл манай сургалтын талаар асуух зүйл байна уу? Бид танд туслахад үргэлж бэлэн байх болно.
                                </p>
                            </div>
                            <div className="space-y-5">
                                <div className="group flex items-start gap-5 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-300">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                        <MdAlternateEmail />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Хамтын ажиллагаа</p>
                                        <a className="text-lg text-white font-medium hover:text-primary transition-colors" href="mailto:tselmeg@yargait.com">
                                            tselmeg@yargait.com
                                        </a>
                                    </div>
                                </div>
                                <div className="group flex items-start gap-5 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-300">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                        <MdSupportAgent />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Тусламж &amp; Дэмжлэг</p>
                                        <a className="text-lg text-white font-medium hover:text-primary transition-colors" href="mailto:tushig@yargait.com">
                                            tushig@yargait.com
                                        </a>
                                    </div>
                                </div>
                                <div className="group flex items-start gap-5 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-300">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                        <MdLocationOn />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Байршил</p>
                                        <span className="text-lg text-gray-300 font-medium">
                                            Улаанбаатар хот, Монгол Улс
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-8 mt-4 border-t border-white/10 flex gap-6">
                                <a className="text-gray-500 hover:text-primary transition-colors hover:scale-110 transform" href="#" aria-label="Facebook">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                                </a>
                                <a className="text-gray-500 hover:text-primary transition-colors hover:scale-110 transform" href="#" aria-label="Instagram">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                                </a>
                                <a className="text-gray-500 hover:text-primary transition-colors hover:scale-110 transform" href="#" aria-label="Twitter">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}