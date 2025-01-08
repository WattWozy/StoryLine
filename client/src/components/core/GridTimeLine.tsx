"use client"
import React, { useEffect, useState } from "react";
import { Person } from "@/global/types";
import PersonLine from "./PersonLine";
import { usePersonContext } from "../contexts/PersonContext";
import { log } from "console";

interface TimeLineProps {
  persons: Array<Person>;
}

const currentYear = new Date().getFullYear();
const yearsInterval = 10;

const getTimelineYears = (startYear: number, endYear: number) => {
  let timelineYears: Array<number> = [];
  for (var i = startYear; i <= endYear; i++) {
    timelineYears.push(i);
  }
  return timelineYears;
}

const Timeline = () => {

  const { persons } = usePersonContext();
  const defaultYears = getTimelineYears(currentYear - 50, currentYear)
  const [yearsToDisplay, setYearsToDisplay] = useState<number[]>(defaultYears);

  useEffect(() => {

    return () => {
      if (persons.length !== 0) {
        let earliestBirthYear = persons[0].birthYear
        let latestDeathYear = persons[0].deathYear
        for (var i = 0; i < persons.length; i++) {
          if (persons[i].birthYear < earliestBirthYear) {
            earliestBirthYear = persons[i].birthYear;
          }
          if (persons[i].deathYear > latestDeathYear) {
            latestDeathYear = persons[i].deathYear;
          }
        }
        const timelineYears = getTimelineYears(earliestBirthYear, latestDeathYear)
        setYearsToDisplay(timelineYears)
      } else {
        const timelineYears = getTimelineYears(currentYear - 50, currentYear)
        setYearsToDisplay(timelineYears)
      }
    }
  }, [persons])

  const numberOfYears = yearsToDisplay.length;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numberOfYears}, minmax(20px, 1fr)`,
      }}
      className="overflow-x-auto bg-white h-screen w-screen pt-32 z-0"
    >
      {yearsToDisplay.map((year) => (
        <div key={year} className="h-10 ">
          <div className=" -left-4 relative  text-6 font-light overflow-visible h-8">
            {year % yearsInterval === 0 || year === currentYear ? year : ""}
          </div>
          <div
            className={
              "h-screen w-px" +
              (year % yearsInterval === 0 ? " bg-slate-500" : " bg-slate-300")
            }
          ></div>
        </div>
      ))}

      {persons.map((person, row) => (
        <PersonLine
          key={row}
          person={person}
          row={row}
          timeLineStart={yearsToDisplay[0]}
          timeLineLength={numberOfYears}
        />
      )

      )}
    </div>
  );
};

export default Timeline;
