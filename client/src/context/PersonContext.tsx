"use client"
import { Person } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

interface PersonContextType {
  persons: Person[];
  addPerson: (person: Person) => void;
  removePerson: (person: Person) => void;
}

const PersonContext = createContext<PersonContextType | undefined>(undefined);

export const PersonContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [persons, setPersons] = useState<Person[]>([

  ]);
  const addPerson = (person: Person) => {
    setPersons(prevPersons => [...prevPersons, person]);
  };
  const removePerson = (personToBeRemoved: Person) =>{
    setPersons(persons.filter(person => person !== personToBeRemoved))
  }

  return (
    <PersonContext.Provider value={{ persons, addPerson, removePerson }}>
      {children}
    </PersonContext.Provider>
  );
};

export const usePersonContext = () => {
  const context = useContext(PersonContext);
  if (!context) {
    throw new Error("useItems must be used within an ItemsProvider");
  }
  return context;
};
