import React from "react";
import { Person } from "@/global/types";
import PersonLine from "./PersonLine";

interface TimeLineProps {
  persons: Array<Person>;
}

const currentYear = new Date().getFullYear();

const renderPerson = (
  person: Person,
  row: number,
  firstYearOfTimeLine: number,
  lengthOfTimeLine: number
) => {
  const { birth, death } = person;
  const colStart = birth - firstYearOfTimeLine + 1;
  const colEnd = death ? death - firstYearOfTimeLine + 1 : lengthOfTimeLine;
  //necessary to use inline styling since tailwind does not support dynamic styling
  return (
    <div
      key={row}
      style={{
        gridRowStart: row + 2,
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
      }}
      className="h-10"
    >
      <div
        className={
          "w-full border-t-4 border-red-500 rounded-r-full rounded-l-full"
        }
      ></div>
      <div className="whitespace-nowrap border-2 border-gray-200 rounded-md p-2 bg-white text-black text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {person.name}
      </div>
    </div>
  );
};

const getYears = (length: number) => {
  return Array.from(
    { length: length },
    (_, index) => currentYear - index
  ).reverse();
};

const Timeline2: React.FC<TimeLineProps> = ({ persons }) => {
  const earliestBirthYear = persons.reduce((earliest, person) => {
    return person.birth < earliest ? person.birth : earliest;
  }, Infinity);

  const years = getYears(currentYear - 1900);
  const columns = years.length;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(90px, 1fr)`,
      }}
      className="overflow-x-auto bg-white h-screen pt-32"
    >
      {years.map((year) => (
        <div className="text-6 font-light" key={year}>
          {year}
        </div>
      ))}

      {persons.map((person, row) =>
        renderPerson(person, row, years[0], years.length)
      )}
    </div>
  );
};

export default Timeline2;
