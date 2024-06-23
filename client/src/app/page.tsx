import HistoricalPerson from '@/components/core/HistoricalPerson'
import Timeline from '@/components/core/Timeline'
import React from 'react'

const Home = () => {
  return (
    <>
      <Timeline from = {-100} />
      <HistoricalPerson name="Albert Einstein" birth={new Date(Date.UTC(1879, 3, 14))} death={new Date(Date.UTC(1955, 4, 18))}/>
    </>
  );
}

export default Home