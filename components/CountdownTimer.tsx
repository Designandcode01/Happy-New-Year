// components/CountdownTimer.tsx
'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isNewYear, setIsNewYear] = useState(false);
  
  const nextYear = new Date().getFullYear() + 1;
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);
      const difference = newYearDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setIsNewYear(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    setTimeLeft(calculateTimeLeft());
    
    return () => clearInterval(timer);
  }, [nextYear]);
  
  return (
    <div className="bg-gradient-to-r from-yellow-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
      {isNewYear ? (
        <div className="text-center py-12">
          <div className="text-6xl font-bold mb-4 animate-pulse">🎉 Happy New Year {nextYear}! 🎉</div>
          <p className="text-2xl">Welcome to a new beginning filled with health and happiness!</p>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-8 text-center">Countdown to {nextYear}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <TimeBox value={timeLeft.days} label="Days" color="from-yellow-500 to-orange-500" />
            <TimeBox value={timeLeft.hours} label="Hours" color="from-pink-500 to-rose-500" />
            <TimeBox value={timeLeft.minutes} label="Minutes" color="from-purple-500 to-indigo-500" />
            <TimeBox value={timeLeft.seconds} label="Seconds" color="from-blue-500 to-cyan-500" />
          </div>
          <p className="text-center mt-8 text-xl">
            Time remaining until New Year&apos;s Day {nextYear}
          </p>
        </>
      )}
    </div>
  );
}

function TimeBox({ value, label, color }: { value: number; label: string; color: string }) {
  return (
    <div className="text-center">
      <div className={`bg-gradient-to-br ${color} rounded-xl p-6 shadow-lg mb-2`}>
        <div className="text-5xl font-bold">{value.toString().padStart(2, '0')}</div>
      </div>
      <div className="text-xl font-semibold">{label}</div>
    </div>
  );
}