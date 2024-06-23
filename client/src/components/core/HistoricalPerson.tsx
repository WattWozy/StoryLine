import React from 'react'
import Image from 'next/image'

interface HistoricalPersonProps {
    name: String
    birth: Date
    death: Date
}

const HistoricalPerson: React.FC<HistoricalPersonProps> = ({name, birth, death}) => {
  return (
      <div className='bg-orange-400 rounded-xl pl-4 overflow-hidden text-nowrap w-2/4 left-1/3 top-20 opacity-85 absolute flex justify-between flex-row'>
          Name: {name} Born: {birth.getFullYear()} RIP: {death.getFullYear()}
          <Image className='rounded-full' src="/albert-einstein-3.jpg" alt="genius" height={10} width={20}/>
      </div>
  );
}

export default HistoricalPerson