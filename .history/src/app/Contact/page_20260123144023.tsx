import { MdAlternateEmail, MdSupportAgent, MdLocationOn, MdSend } from '@/components/icon/Material_icon';
import { FaFacebookF, FaInstagram, FaTwitter } from '@/components/icon/Font_Awesome_icon';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { t } from '@/components/i18n/translations';

export default function ContactPage() {
    const { lang } = useLanguage();
    return (
        <main className="grow flex flex-col items-center w-full">
            <section className="w-full py-16 lg:py-24 relative">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{t(lang, 'contactTitle')}</h1>
                        <p className="text-xl md:text-2xl text-primary font-medium tracking-wide neon-text-glow opacity-90">
                            {t(lang, 'contactSubtitle')}
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
                                            <input className="w-full bg-surface-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary neon-input transition-all duration-300" id="name" placeholder="{t(lang, 'contactName')}" type="text" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-gray-400 pl-1" htmlFor="email">{t(lang, 'contactEmail')}</label>
                                            <input className="w-full bg-surface-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary neon-input transition-all duration-300" id="email" placeholder="name@example.com" type="email" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-400 pl-1" htmlFor="subject">{t(lang, 'contactSubject')}</label>
                                        <select className="w-full bg-surface-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary neon-input transition-all duration-300 appearance-none">
                                            <option>{t(lang, 'contactSubjectGeneral')}</option>
                                            <option>{t(lang, 'contactSubjectCourse')}</option>
                                            <option>{t(lang, 'contactSubjectTech')}</option>
                                            <option>{t(lang, 'contactSubjectPartnership')}</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-400 pl-1" htmlFor="message">{t(lang, 'contactMessage')}</label>
                                        <textarea className="w-full bg-surface-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-primary neon-input transition-all duration-300 min-h-37.5" id="message" placeholder={t(lang, 'contactMessagePlaceholder')} />
                                    </div>
                                    <button className="w-full py-4 rounded-lg bg-primary text-black font-bold text-base hover:bg-white transition-all transform hover:scale-[1.01] neon-glow flex items-center justify-center gap-2 mt-4" type="button">
                                        <span>{t(lang, 'contactSubmit')}</span>
                                        <MdSend className="text-[20px]" />
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col space-y-8 py-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">{t(lang, 'contactInfoTitle')}</h3>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    {t(lang, 'contactInfoBody')}
                                </p>
                            </div>
                            <div className="space-y-5">
                                <div className="group flex items-start gap-5 p-5 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-primary/30 transition-all duration-300">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                        <MdAlternateEmail />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">{t(lang, 'contactCollab')}</p>
                                        <a className="text-lg text-white font-medium hover:text-primary transition-colors" href="mailto:tselmeg@yargait.com">
                                            tselmeg@yargait.com
                                        </a>
                                    </div>
                                </div>
                                <div className="group flex items-start gap-5 p-5 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-primary/30 transition-all duration-300">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                        <MdSupportAgent />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">{t(lang, 'contactSupport')}</p>
                                        <a className="text-lg text-white font-medium hover:text-primary transition-colors" href="mailto:tushig@yargait.com">
                                            tushig@yargait.com
                                        </a>
                                    </div>
                                </div>
                                <div className="group flex items-start gap-5 p-5 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-primary/30 transition-all duration-300">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                        <MdLocationOn />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">{t(lang, 'contactLocation')}</p>
                                        <span className="text-lg text-gray-300 font-medium">
                                            {t(lang, 'contactCity')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-8 mt-4 border-t border-white/10 flex gap-6">
                                <a className="text-gray-500 hover:text-primary transition-colors hover:scale-110 transform" href="#" aria-label="Facebook">
                                    <span className="sr-only">Facebook</span>
                                    <FaFacebookF className="h-6 w-6" aria-hidden="true" />
                                </a>
                                <a className="text-gray-500 hover:text-primary transition-colors hover:scale-110 transform" href="#" aria-label="Instagram">
                                    <span className="sr-only">Instagram</span>
                                    <FaInstagram className="h-6 w-6" aria-hidden="true" />
                                </a>
                                <a className="text-gray-500 hover:text-primary transition-colors hover:scale-110 transform" href="#" aria-label="Twitter">
                                    <span className="sr-only">Twitter</span>
                                    <FaTwitter className="h-6 w-6" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}