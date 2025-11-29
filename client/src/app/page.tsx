import GridTimeLine from "@/components/timeline/GridTimeLine";

import React from "react";
import { Person } from "@/types";


const testPersons: Person[] = [
  {
    name: "Alfred Hitchcock", birthYear: 2012, deathYear: 2020,
    description: "",
    BC: undefined,
    imageUrl: ""
  },
  {
    name: "Will Smith", birthYear: 1968, deathYear: null,
    description: "",
    BC: undefined,
    imageUrl: ""
  },
  {
    name: "Queen Elizabeth II", birthYear: 1926, deathYear: 2022,
    description: "",
    BC: undefined,
    imageUrl: ""
  },
  {
    name: "Nelson Mandela", birthYear: 1918, deathYear: 2013,
    description: "",
    BC: undefined,
    imageUrl: ""
  },
  {
    name: "Frida Kahlo", birthYear: 1907, deathYear: 1954,
    description: "",
    BC: undefined,
    imageUrl: ""
  },
  {
    name: "Stephen Hawking", birthYear: 1942, deathYear: 2018,
    description: "",
    BC: undefined,
    imageUrl: ""
  },
  {
    name: "Malala Yousafzai", birthYear: 1997, deathYear: null,
    description: "",
    BC: undefined,
    imageUrl: ""
  },
  {
    name: "Martin Luther King Jr.", birthYear: 1929, deathYear: 1968,
    description: "",
    BC: undefined,
    imageUrl: ""
  },
  {
    name: "Elon Musk", birthYear: 1971, deathYear: null,
    description: "",
    BC: undefined,
    imageUrl: ""
  },
];


const Home = () => {
  return (
    <main className="min-h-screen">
      <GridTimeLine/>
    </main>
  );
};

export default Home;
