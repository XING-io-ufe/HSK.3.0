import React from "react";
import { MdMenu } from "../Material_icon";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-black font-bold text-xl">汉</div>
                        <span className="text-xl font-bold tracking-tight text-white">
                            Hanzi
                            <span className="text-primary">.mn</span>
                        </span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Нүүр</a>
                        <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Бидний тухай</a>
                        <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Хичээлүүд</a>
                        <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Блог</a>
                        <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Холбоо барих</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="hidden sm:flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-black transition-transform hover:scale-105 hover:bg-white neon-glow">
                            Эхлэх
                        </button>
                        <button className="md:hidden p-2 text-gray-400 hover:text-white" aria-label="Menu">
                            <MdMenu size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
