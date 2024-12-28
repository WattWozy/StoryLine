import React from "react";
import { Person } from "@/global/types";

interface PersonProps {
  person: Person;
  row: number;
  timeLineStart: number;
  timeLineLength: number;
}
// a line on the timeline representing a person
const PersonLine: React.FC<PersonProps> = async ({ person, row, timeLineStart, timeLineLength }) => {
  const { birth, death } = person;
  const startColumn = birth - timeLineStart + 1;
  const endColumn = death ? death - timeLineStart + 1 : timeLineLength;
  //unhappy with the name of this one, please rename it if you can think of something more suitable
  //Ne touche pas! necessary to use inline styling since tailwind does not support dynamic styling
  //Not sure if this needs to be a component at this point
  return (
    <div
      style={{
        gridRowStart: row + 2,
        gridColumnStart: startColumn,
        gridColumnEnd: endColumn,
      }}
      className="h-10 group"
    >
      <div
        className={
          "w-full border-t-4 border-red-500 rounded-r-full rounded-l-full"
        }
      ></div>
      <div className="whitespace-nowrap border-2 border-gray-200 rounded-md p-2 bg-white text-black text-lg transition-opacity duration-300">
        {person.name}
      </div>
    </div>
  );
};

export default PersonLine;
