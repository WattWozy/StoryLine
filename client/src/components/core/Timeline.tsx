import React from "react";

interface TimelineProps {
  from: number;
  to?: number;
}

const Timeline: React.FC<TimelineProps> = ({ from, to }) => {

  const currentYear: number = new Date().getFullYear();
  
  return (
    <>
      <div>From: {from}</div>
      <div>To: {to ? to : currentYear}</div>
    </>
  );
};

export default Timeline;
