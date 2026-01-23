"use client"
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from '@/components/icon/Font_Awesome_icon';

export default function Footer() {
    return (
        <footer className="relative z-9999 border-t border-white/5 bg-[#000000] py-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Hanzi.mn" width={24} height={24} className="h-6 w-6 object-contain" />
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
