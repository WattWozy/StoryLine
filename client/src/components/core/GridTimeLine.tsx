"use client"
import React from "react";
import { Person } from "@/global/types";
import PersonLine from "./PersonLine";
import { usePersonContext } from "../contexts/PersonContext";

interface TimeLineProps {
  persons: Array<Person>;
}

const currentYear = new Date().getFullYear();

const getTimeLineYears = (length: number) => {
  return Array.from({ length: length }, (_, index) => currentYear - index).reverse();
};

const Timeline = () => {
  
  const { persons } = usePersonContext();

  const earliestBirthYear = persons.reduce((earliest, person) => {
    return person.birthYear < earliest ? person.birthYear : earliest;
  }, Infinity);

  const years = getTimeLineYears(currentYear - earliestBirthYear);
  // need to find a more exact way of centering the years over the lines
  // scroll to control min width of columns could work
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${years.length}, minmax(50px, 1fr)`,
      }}
      className="overflow-x-auto bg-white h-screen pt-32 z-0"
    >
      {years.map((year) => (
        <div key={year} className="h-10 ">
          <div className=" -left-4 relative  text-6 font-light overflow-visible h-8">
            {year % 5 === 0 || year === currentYear ? year : ""}
          </div>
          <div
            className={
              "h-screen w-px" +
              (year % 5 === 0 ? " bg-slate-500" : " bg-slate-300")
            }
          ></div>
        </div>
      ))}

      {persons.map((person, row) => (
        <PersonLine
          key={row}
          person={person}
          row={row}
          timeLineStart={years[0]}
          timeLineLength={years.length}
        />
      )
        
      )}
    </div>
  );
};

export default Timeline;
