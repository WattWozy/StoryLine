import { SearchResult } from '@/global/types'
import React from 'react'
import defaultImage from '../../../public/defaultImage.jpg'

interface DropdownProps {
  results: Array<SearchResult>
}

const Dropdown: React.FC<DropdownProps> = ({ results }) => {

  return (
    <li className='flex flex-col bg-white rounded-2xl z-50 max-h-96'>
      {results.map((result, index) => (
        <div className='flex flex-row items-center p-2 hover:bg-slate-200 transition duration-200' key={index}>
          <img className='object-cover flex items-center justify-center mr-3'
            src={result.imageUrl || defaultImage.src}
            alt={result.name}
          />
          <div className='justify-end'>
            <div className='flex-grow text-lg font-semibold text-gray-800'>{result.name}</div>
            <span className='text-gray-600'>{result.birthYear}</span>
            <span className='mx-2'>-</span>
            <span className='text-gray-600'>{result.deathYear} {result.BC}</span>
          </div>
        </div>
      ))}
    </li>
  )
}

export default Dropdown
