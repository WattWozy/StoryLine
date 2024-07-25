
import Timeline from "@/components/core/Timeline";
import GridTimeLine from "@/components/core/GridTimeLine";

import React from "react";
import { Person } from "@/global/types";

const persons: Person[] = [
  { name: "Alfred Hitchcock", birth: 1899, death: 1980 },
  { name: "Will Smith", birth: 1968, death: null },
  { name: "Marie Curie", birth: 1867, death: 1934 },
  { name: "Albert Einstein", birth: 1879, death: 1955 },
  { name: "Leonardo da Vinci", birth: 1452, death: 1519 },
  { name: "Queen Elizabeth II", birth: 1926, death: 2022 },
  { name: "Nelson Mandela", birth: 1918, death: 2013 },
  { name: "Frida Kahlo", birth: 1907, death: 1954 },
  { name: "Stephen Hawking", birth: 1942, death: 2018 },
  { name: "Malala Yousafzai", birth: 1997, death: null },
  { name: "William Shakespeare", birth: 1564, death: 1616 },
  { name: "Mahatma Gandhi", birth: 1869, death: 1948 },
  { name: "Ada Lovelace", birth: 1815, death: 1852 },
  { name: "Martin Luther King Jr.", birth: 1929, death: 1968 },
  { name: "Elon Musk", birth: 1971, death: null },
];

const testPersons: Person[] = [
  { name: "Will Smith", birth: 1968, death: null },
  { name: "Queen Elizabeth II", birth: 1926, death: 2022 },
  { name: "Nelson Mandela", birth: 1918, death: 2013 },
  { name: "Frida Kahlo", birth: 1907, death: 1954 },
  { name: "Stephen Hawking", birth: 1942, death: 2018 },
  { name: "Malala Yousafzai", birth: 1997, death: null },
  { name: "Martin Luther King Jr.", birth: 1929, death: 1968 },
  { name: "Elon Musk", birth: 1971, death: null },
];

const Home = () => {
  return (
    <main className="min-h-screen">
      <GridTimeLine persons={testPersons}/>
      {/* <OldTimeline from={1500} /> */}
      {/* <HistoricalPerson name="Albert Einstein" birth={new Date(Date.UTC(1879, 3, 14))} death={new Date(Date.UTC(1955, 4, 18))}/> */}
    </main>
  );
};

export default Home;
