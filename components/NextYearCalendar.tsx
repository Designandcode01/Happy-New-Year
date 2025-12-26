// components/NextYearCalendar.tsx
'use client';

import { useState } from 'react';

export default function NextYearCalendar() {
  const nextYear = new Date().getFullYear() + 1;
  const [currentMonth, setCurrentMonth] = useState(0); // 0 = January
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const generateCalendar = (monthIndex: number) => {
    const firstDay = new Date(nextYear, monthIndex, 1);
    const lastDay = new Date(nextYear, monthIndex + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay(); // 0 = Sunday
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = 
        new Date().getFullYear() === nextYear && 
        new Date().getMonth() === monthIndex && 
        new Date().getDate() === day;
      
      const isNewYearsDay = monthIndex === 0 && day === 1;
      const isSummerStart = monthIndex === 5 && day === 21;
      const isWinterStart = monthIndex === 11 && day === 21;
      
      let dayClass = "h-10 flex items-center justify-center rounded";
      
      if (isToday) {
        dayClass += " bg-yellow-500 text-gray-900 font-bold";
      } else if (isNewYearsDay) {
        dayClass += " bg-gradient-to-r from-pink-500 to-purple-500 font-bold";
      } else if (isSummerStart || isWinterStart) {
        dayClass += " bg-blue-600 font-bold";
      } else {
        dayClass += " hover:bg-white/10";
      }
      
      days.push(
        <div key={day} className={dayClass}>
          {day}
        </div>
      );
    }
    
    return days;
  };
  
  const nextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
  };
  
  const prevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={prevMonth}
          className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20"
        >
          &larr; Previous
        </button>
        <h3 className="text-2xl font-bold">{months[currentMonth]} {nextYear}</h3>
        <button 
          onClick={nextMonth}
          className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20"
        >
          Next &rarr;
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-4 text-center">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="font-bold text-yellow-300 py-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {generateCalendar(currentMonth)}
      </div>
      
      <div className="mt-6 pt-6 border-t border-white/20">
        <h4 className="font-bold text-lg mb-3">Key Dates in {nextYear}:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 mr-2 rounded"></div>
            <span>New Year&apos;s Day (Jan 1)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-600 mr-2 rounded"></div>
            <span>Season Starts</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-500 mr-2 rounded"></div>
            <span>Today (if applicable)</span>
          </div>
        </div>
      </div>
    </div>
  );
}