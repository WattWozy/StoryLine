import React from 'react'
import Search from '../search/Search'

const Header = () => {
  return (
    <header className='w-full fixed top-0 flex items-center bg-red-400 h-28 px-6 z-30'>
      <div className='w-1/3'></div>
      <div className='text-6xl font-serif w-1/3 text-center'>StoryLine</div>
      <div className='w-1/3 flex justify-center'>
        <Search />
      </div>
    </header>
  )
}

export default Header