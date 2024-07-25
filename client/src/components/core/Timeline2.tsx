import React from "react";
import { Person } from "@/global/types";
import PersonLine from "./PersonLine";

interface TimeLineProps {
  persons: Array<Person>;
}

const currentYear = new Date().getFullYear();

const renderPerson = (person: Person, row: number) => {
  const { birth, death } = person;
  const rowStart = ` row-start-${row + 2}`;
  const colStart = ` col-start-${birth - 2012}`;
  const colEnd = death ? ` col-end-${death - 2012}` : " col-end-12";
  console.log(colStart);
  console.log(colEnd);

  return (
    <div
      key={row}
      className={"bg-blue-500 h-10" + colStart + colEnd + rowStart}
    >
      <div className={"w-full border-t-4 border-red-500"}></div>
      {/* <div className="whitespace-nowrap border-2 border-gray-200 rounded-md p-2 bg-white text-black text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {person.name}
      </div> */}
    </div>
  );
};

const getEveryXYears = (X: number) => {
  return Array.from(
    { length: 12 / X },
    (_, index) => currentYear - index * X
  ).reverse();
};

const Timeline2: React.FC<TimeLineProps> = ({ persons }) => {
  const years = getEveryXYears(1);

  return (
    <div className="grid grid-rows-5 grid-cols-[repeat(12,_minmax(0,_1fr))] overflow-x-auto bg-white h-screen pt-32">
      {years.map((year) => (
        <div className="text-6 font-light" key={year}>
          {year}
        </div>
      ))}

      {persons.map((person, row) => (
        <PersonLine key={row} person={person} row={row} />
      ))}
    </div>
  );
};

export default Timeline2;
