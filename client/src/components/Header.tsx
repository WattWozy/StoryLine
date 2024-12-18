import React from 'react'
import Search from './client/Search'

const Header = () => {
  return (
    <header className='w-full fixed top-0 flex items-center bg-red-400 h-28 px-6 z-30'>
      <div className='flex-1'></div>
      <div className='text-6xl font-serif flex-grow text-center'>StoryLine</div>
      <div className='flex-1 flex justify-end'>
      <Search/>
      </div>
    </header>
  )
}

export default Header