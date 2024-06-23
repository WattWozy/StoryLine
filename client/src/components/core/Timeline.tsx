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
            console.log(year);
        }
    }
    years.push(to);

    return years;
}

const Timeline: React.FC<TimelineProps> = ({ from, to }) => {
    

    const currentYear: number = new Date().getFullYear();

    const yearsToDisplay = getEveryXYears(from, currentYear, 100);

    yearsToDisplay.forEach((year) => console.log(year));
  
  return (
    <>
      <div>From: {from}</div>
      <div>To: {to ? to : currentYear}</div>
      <div className="text-nowrap overflow-scroll text-clip flex max-w-full">
        {yearsToDisplay.map((divNumber, i) => (
            <div className="min-w-12" key={i}>
                <div className="text-center">{divNumber}</div>
                <div className="text-center">|</div>
            </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;
