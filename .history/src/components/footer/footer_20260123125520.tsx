"use client"
import { FaFacebookF, FaInstagram, FaTwitter } from '@/components/icon/Font_Awesome_icon';

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black py-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-gray-800 text-white font-bold text-xs">汉</div>
                    <span className="text-lg font-bold text-gray-500">Hanzi.mn</span>
                </div>
                <div className="text-sm text-gray-600">© 2024 Hanzi.mn. Бүх эрх хуулиар хамгаалагдсан.</div>
                <div className="flex gap-4">
                    <a className="text-gray-600 hover:text-white transition-colors" href="#" aria-label="Facebook"><span className="sr-only">Facebook</span><FaFacebookF size={18} /></a>
                    <a className="text-gray-600 hover:text-white transition-colors" href="#" aria-label="Instagram"><span className="sr-only">Instagram</span><FaInstagram size={18} /></a>
                    <a className="text-gray-600 hover:text-white transition-colors" href="#" aria-label="Twitter"><span className="sr-only">Twitter</span><FaTwitter size={18} /></a>
                </div>
            </div>
        </footer>
    );
}
