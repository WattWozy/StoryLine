import { SearchResult } from '@/global/types'
import React from 'react'

interface DropdownProps {
  results: Array<SearchResult>
}

const Dropdown: React.FC<DropdownProps> = ({ results }) => {

  return (
    <li className='flex flex-col bg-slate-50 rounded-2xl'>
      {results.map((result, index) => (
        <div className='flex flex-row items-center p-2 hover:bg-slate-100 transition duration-200' key={index}>
          <img className='w-20 h-20 rounded-full flex items-center justify-center mr-3'
            src={result.imageUrl}>

          </img>
          <div className='justify-end' >
            <div className='flex-grow text-lg font-semibold text-gray-800'>{result.name}</div>

            <span className='text-gray-600'>{result.birthYear}</span>
            <span className='mx-2'>-</span>
            <span className='text-gray-600'>{result.deathYear}</span>
          </div>
        </div>
      ))}
    </li>
  )
}

export default Dropdown