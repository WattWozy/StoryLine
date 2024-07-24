import React, { useEffect, useRef } from 'react';
import { Person } from '@/global/types';

interface TimeLineProps {
    persons : Array<Person>
}

const renderPersons2 = (year: number, rowIndex: number, persons: Person[]) => {

}

const renderPersons = (year: number, rowIndex: number, persons: Person[]) => {

    let row = 0
    for (let person of persons) {
        if (person.death === year && rowIndex === row) {
            return (
                <td className="h-4 relative group">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t-4 border-red-500 rounded-r-full"></div>
                    </div>
                    <div className="absolute whitespace-nowrap border-2 border-gray-200 rounded-md p-2 bg-white text-black text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        {person.name}
                    </div>
                </td>
            );
        }
        if (person.birth === year && rowIndex === row) {
            return (
                <td className="h-4 relative group">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t-4 border-red-500 rounded-l-full"></div>
                    </div>
                    <div className="absolute whitespace-nowrap border-2 border-gray-200 rounded-md p-2 bg-white text-black text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        {person.name}
                    </div>
                </td>
            );
        }
        if (person.birth < year && (person.death === null || person.death > year) && rowIndex === row) {
            return (
                <td className="h-4 relative group">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t-4 border-red-500"></div>
                    </div>
                    <div className="absolute whitespace-nowrap border-2 border-gray-200 rounded-md p-2 bg-white text-black text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        {person.name}
                    </div>
                </td>
            );
        }
        row++;
    }

    return <td className='border-x w-8' key={year}></td>;
};

const getEveryXYears = (X: number) => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 1000/X }, (_, index) => (currentYear - index * X) ).reverse();
}

const Timeline2: React.FC<TimeLineProps> = ({persons}) => {

    const currentYear = new Date().getFullYear();
    const years = getEveryXYears(1);

    return (
        <div className='overflow-x-auto bg-white h-screen flex flex-col pt-32'>
            <table className="w-max flex-grow">
                <thead>
                    <tr>
                        {years.map(year => (
                            <th className='text-6 font-light' key={year}>{year}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='h-full'>
                    {[...Array(53)].map((_, rowIndex) => (
                        <tr key={rowIndex} className='h-[1%]'>
                            {years.map(year => (
                                renderPersons(year, rowIndex, persons)
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Timeline2