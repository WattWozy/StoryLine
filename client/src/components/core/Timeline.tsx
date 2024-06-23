import React from "react";

interface TimelineProps {
  from: number;
  to?: number;
}

const getVerticalLines = (from: number, to: number): string => {
  let lines = '' + from;
  for (let year = from; year <= to; year++) {
    if (year % 5 == 0) {
        lines += ' | '
    }
  }
  lines += to;
  return lines;
}

const Timeline: React.FC<TimelineProps> = ({ from, to }) => {
    

    const currentYear: number = new Date().getFullYear();

    const verticalLines = getVerticalLines(from, currentYear);


  
  return (
    <>
      <div>From: {from}</div>
      <div>To: {to ? to : currentYear}</div>
      <span className="text-nowrap overflow-scroll text-clip flex max-w-full max-h-11">{verticalLines}</span>
    </>
  );
};

export default Timeline;
