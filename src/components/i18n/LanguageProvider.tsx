"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Lang } from '@/components/i18n/translations';

type LanguageContextValue = {
    lang: Lang;
    setLang: (lang: Lang) => void;
    toggleLang: () => void;
    mounted: boolean;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
const STORAGE_KEY = "hanzi.lang";

// Helper to get initial language from localStorage (only runs on client)
function getInitialLang(): Lang {
    if (typeof window === "undefined") return "mn";
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "mn" ? stored : "mn";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>("mn");
    const [mounted, setMounted] = useState(false);

    // Initialize language from localStorage after mount to avoid hydration mismatch
    useEffect(() => {
        const storedLang = getInitialLang();
        setLangState(storedLang);
        setMounted(true);
    }, []);

    // Persist language changes to localStorage
    useEffect(() => {
        if (!mounted) return;
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang;
    }, [lang, mounted]);

    const setLang = (value: Lang) => setLangState(value);
    const toggleLang = () => setLangState((prev) => (prev === "mn" ? "en" : "mn"));

    const value = useMemo(() => ({ lang, setLang, toggleLang, mounted }), [lang, mounted]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
    return ctx;
}
