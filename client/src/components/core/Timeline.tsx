import React from "react";

interface TimelineProps {
  from: number;
  to?: number;
}

const getEveryXYears = (from: number, to: number, X: number): number[] => {
  const years: number[] = [from];
  for (let year = from; year <= to; year++) {
    if (year % X === 0 && year != from) {
      years.push(year);
    }
  }
  years.push(to);

  return years;
};

const Timeline: React.FC<TimelineProps> = ({ from, to }) => {
  const currentYear: number = new Date().getFullYear();

  const yearsToDisplay = getEveryXYears(from, currentYear, 100);

  yearsToDisplay.forEach((year) => console.log(year));

  return (
    <div className="relative top-10 text-nowrap text-clip flex max-w-full h-full justify-center">
      {yearsToDisplay.map((divNumber, i) => (
        <div className="min-w-12 flex flex-col h-screen items-center" key={i}>
          <div className="text-center">{divNumber}</div>
          <div className="bg-black w-1px h-full opacity-50"></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
