'use client'
import React, { useEffect, useRef } from 'react';

const Timeline2: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 1000 }, (_, index) => currentYear - index).reverse();

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
        }
    }, []);

    let persons: Person[] = [
        { "name": "Alfred Hitchcock", "birth": 1899, "death": 1980 },
        { "name": "Will Smith", "birth": 1968, "death": null },
        { "name": "Marie Curie", "birth": 1867, "death": 1934 },
        { "name": "Albert Einstein", "birth": 1879, "death": 1955 },
        { "name": "Leonardo da Vinci", "birth": 1452, "death": 1519 },
        { "name": "Queen Elizabeth II", "birth": 1926, "death": 2022 },
        { "name": "Nelson Mandela", "birth": 1918, "death": 2013 },
        { "name": "Frida Kahlo", "birth": 1907, "death": 1954 },
        { "name": "Stephen Hawking", "birth": 1942, "death": 2018 },
        { "name": "Malala Yousafzai", "birth": 1997, "death": null },
        { "name": "William Shakespeare", "birth": 1564, "death": 1616 },
        { "name": "Mahatma Gandhi", "birth": 1869, "death": 1948 },
        { "name": "Ada Lovelace", "birth": 1815, "death": 1852 },
        { "name": "Martin Luther King Jr.", "birth": 1929, "death": 1968 },
        { "name": "Elon Musk", "birth": 1971, "death": null }
    ];

    const renderPerson = (year: number, rowIndex: number, persons: Person[]) => {
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
                    {[...Array(50)].map((_, rowIndex) => (
                        <tr key={rowIndex} className='h-[1%]'>
                            {years.map(year => (
                                renderPerson(year, rowIndex, persons)
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Timeline2