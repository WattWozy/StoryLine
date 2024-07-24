import React from "react";
import { Person } from "@/global/types";

interface TimeLineProps {
  persons: Array<Person>;
}

const currentYear = new Date().getFullYear();

const renderPerson = (year: number, person: Person) => {
  const { birth, death } = person;
  const shouldRenderPerson: boolean = year >= birth && (death === null || year <= death);
  let roundedBorder = "";
  if (year === birth){
    roundedBorder += " rounded-l-full"
  }
  if(year === death || (death === null && year === currentYear)) {
    roundedBorder += " rounded-r-full"
  }
  if (shouldRenderPerson) {
    return (
      <td className="h-4 relative group">
        <div className="absolute inset-0 flex items-center">
          <div className={"w-full border-t-4 border-red-500" + roundedBorder}></div>
        </div>
        <div className="absolute whitespace-nowrap border-2 border-gray-200 rounded-md p-2 bg-white text-black text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          {person.name}
        </div>
      </td>
    );
  } else return <td className="border-x w-8"></td>;
};

const getEveryXYears = (X: number) => {
  return Array.from(
    { length: 1000 / X },
    (_, index) => currentYear - index * X
  ).reverse();
};

const Timeline2: React.FC<TimeLineProps> = ({ persons }) => {
  const years = getEveryXYears(1);

  return (
    <div className="overflow-x-auto bg-white h-screen flex flex-col pt-32">
      <table className="w-max flex-grow">
        <thead>
          <tr>
            {years.map((year) => (
              <th className="text-6 font-light" key={year}>
                {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='h-full'>
          {persons.map((person, row) => (
            <tr key={row} className="h-[1%]">
              {years.map((year) => renderPerson(year, person))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timeline2;
