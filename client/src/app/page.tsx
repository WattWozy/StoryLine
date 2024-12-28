import GridTimeLine from "@/components/core/GridTimeLine";

import React from "react";
import { Person } from "@/global/types";

const persons: Person[] = [];

const testPersons: Person[] = [
  { name: "Alfred Hitchcock", birth: 2012, death: 2020 },
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
    </main>
  );
};

export default Home;
