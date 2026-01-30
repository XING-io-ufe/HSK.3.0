"use client";
import { useState, useMemo, useCallback } from 'react';
import type { Card } from './data';

export function useFlashcard(cards: Card[]) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const card = useMemo(() => cards[currentIndex], [cards, currentIndex]);

    const handleRotate = useCallback(() => {
        if (isFlipped) {
            setCurrentIndex((prev) => (prev + 1) % cards.length);
            setIsFlipped(false);
        } else {
            setIsFlipped(true);
        }
    }, [cards.length, isFlipped]);

    return { card, currentIndex, isFlipped, handleRotate, setCurrentIndex, setIsFlipped };
}
