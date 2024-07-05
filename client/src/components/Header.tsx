import React from 'react'

const Header = () => {
  return (
    <header className='w-full fixed top-0 flex items-center bg-red-400 h-28 px-6'>
      <div className='flex-1'></div>
      <div className='text-6xl font-serif flex-grow text-center'>StoryLine</div>
      <div className='flex-1 flex justify-end'>
        <input
          type="text"
          placeholder="Search for anyone..."
          className="py-2 px-4 rounded-full bg-white/80 focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>
    </header>
  )
}

export default Header