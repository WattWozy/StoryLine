import React from "react";
import { Person } from "@/global/types";

interface PersonProps {
  person: Person;
  row: number;
}

const PersonLine: React.FC<PersonProps> = async ({ person, row }) => {
  const { birth, death } = person;
  const colStart = birth - 2012;
  const colEnd = death ? death : 12;
  //unhappy with the name of this one, please rename it if you can think of something more suitable
  //Ne touche pas! necessary to use inline styling since tailwind does not support dynamic styling
  //Not sure if this needs to be a component at this point
  return (
    <div
      style={{
        gridRowStart: row + 2,
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
      }}
      className="h-10"
    >
      <div className={"w-full border-t-4 border-red-500 rounded-r-full rounded-l-full"}></div>
      <div className="whitespace-nowrap border-2 border-gray-200 rounded-md p-2 bg-white text-black text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {person.name}
      </div>
    </div>
  );
};

export default PersonLine;
