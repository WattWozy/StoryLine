'use client'
import React, { useRef, useEffect, useState, useCallback } from 'react';

const Timeline: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [visibleYears, setVisibleYears] = useState<number[]>([]);
  const [oldestYear, setOldestYear] = useState<number>(() => {
    const currentYear = new Date().getFullYear();
    return currentYear - 10; // Start with 10 years of history
  });
  const currentYear = new Date().getFullYear();
  const yearWidth = 50; // pixels per year

  const calculateVisibleYears = useCallback((): number[] => {
    if (!scrollRef.current) return [];

    const { scrollLeft, clientWidth } = scrollRef.current;
    const startPixel = scrollLeft;
    const endPixel = scrollLeft + clientWidth;

    const startVisibleYear = Math.max(oldestYear, currentYear - Math.floor(endPixel / yearWidth));
    const endVisibleYear = currentYear;

    return Array.from(
      { length: endVisibleYear - startVisibleYear + 1 },
      (_, i) => startVisibleYear + i
    );
  }, [oldestYear, currentYear]);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    // Prevent scrolling beyond the current year
    if (scrollLeft < 0) {
      scrollRef.current.scrollLeft = 0;
      return;
    }

    setVisibleYears(calculateVisibleYears());

    // Load more years if we're near the start
    if (scrollLeft < clientWidth * 0.2) {
      setOldestYear(prev => prev - 10);
    }
  }, [calculateVisibleYears]);

  useEffect(() => {
    handleScroll(); // Initial calculation

    // Scroll to the right end (current year) on initial load
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    }
  }, [handleScroll]);

  return (
    <div 
      ref={scrollRef}
      className="overflow-x-auto h-[calc(100vh-6rem)] bg-gray-100 pt-32"
      style={{ 
        width: '100%',
        overflowY: 'hidden'
      }}
      onScroll={handleScroll}
    >
      <div 
        className="relative h-full"
        style={{ 
          width: `${(currentYear - oldestYear + 1) * yearWidth}px`,
          backgroundImage: 'repeating-linear-gradient(to bottom, #ccc 0 1px, transparent 1px 10%)',
          backgroundSize: `${yearWidth}px 100%`
        }}
      >
        {visibleYears.map((year) => (
          <div 
            key={year} 
            className="absolute top-0 bottom-0 flex flex-col items-center"
            style={{ left: `${(year - oldestYear) * yearWidth}px`, width: `${yearWidth}px` }}
          >
            <div className="text-sm font-bold">{year}</div>
            <div className="w-px bg-gray-300 flex-grow"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;