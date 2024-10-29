import { SearchResult } from '@/global/types'
import React from 'react'

interface DropdownProps {
    results : Array<SearchResult>
}

const Dropdown : React.FC<DropdownProps> = ({results}) => {
    
  return (
    <>
    <div>Hello world</div>
    {results.map((result, index) => (
      <div key={index}>
        <div>{result.name}</div>
        <div>{result.description}</div>
        <div>{result.birthYear}</div>
        <div>{result.deathYear}</div>
      </div>
    ))}
    </>
  )
}

export default Dropdown