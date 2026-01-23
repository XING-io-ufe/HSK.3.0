"use client";
import React, { useEffect, useState } from 'react';

type CountdownProps = {
  target?: string; // ISO date string
};

function getTimeLeft(target: Date) {
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

export default function Countdown({ target = '2026-01-01T00:00:00Z' }: CountdownProps) {
  const targetDate = React.useMemo(() => new Date(target), [target]);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-3xl glass-card p-6 rounded-xl border-t border-white/10">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-white font-mono">{timeLeft.days}</span>
        <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Өдөр</span>
      </div>
      <div className="flex flex-col items-center border-l border-white/5">
        <span className="text-3xl font-bold text-white font-mono">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Цаг</span>
      </div>
      <div className="flex flex-col items-center border-l border-white/5">
        <span className="text-3xl font-bold text-white font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Минут</span>
      </div>
      <div className="flex flex-col items-center border-l border-white/5">
        <span className="text-3xl font-bold text-primary font-mono animate-pulse">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">Секунд</span>
      </div>
    </div>
  );
}
