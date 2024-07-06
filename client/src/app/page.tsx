import HistoricalPerson from '@/components/core/HistoricalPerson'
import Timeline from '@/components/core/Timeline'
import Timeline2 from '@/components/core/Timeline2'
import React from 'react'

const Home = () => {
  return (
    <main className='min-h-screen'>
      <Timeline2/>
      {/* <HistoricalPerson name="Albert Einstein" birth={new Date(Date.UTC(1879, 3, 14))} death={new Date(Date.UTC(1955, 4, 18))}/> */}
    </main>
  );
}

export default Home