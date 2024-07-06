'use client'
import React, { useEffect, useRef } from 'react';

const Timeline2: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 151 }, (_, index) => currentYear - index).reverse();

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
        }
    }, []);

    let person = { "name": "Alfred Hitchcock", "birth": 1899, "death": 1980 }

    const renderPerson = (year: number, rowIndex: number) => {
        if (person.birth == year && rowIndex === 2 || person.death == year && rowIndex === 2) {
            return <div className="bg-red-500 rounded-r-full w-4 h-4 mx-auto"></div>
        }
        if (person.birth < year && person.death > year && rowIndex === 2) {
            return <div className="w-full h-4 bg-red-500 mx-auto"></div>
        }
        if (person.death == year + 1 && rowIndex === 1) {
            return <p className='text-xs'>{person.name}</p>
        }

        return null;
    };

    return (
        <div className='overflow-x-auto bg-white h-screen flex flex-col pt-32' ref={scrollContainerRef}>
            <table className="w-max flex-grow">
                <thead>
                    <tr>
                        {years.map(year => (
                            <th className='text-6 font-light' key={year}>{year}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='h-full'>
                    {[...Array(10)].map((_, rowIndex) => (
                        <tr key={rowIndex} className='border-2 h-[10%]'>
                            {years.map(year => (
                                <td className='border-2 w-8' key={year}>
                                    {renderPerson(year, rowIndex)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Timeline2