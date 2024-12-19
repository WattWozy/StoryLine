"use client";
import { SearchResult, WikipediaApiResponse } from "@/global/types";
import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";

const Search = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchResult, setsearchResult] = useState("search result");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const handleKeyDown = () => {
      if (inputRef.current && document.activeElement !== inputRef.current) {
        inputRef.current.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);




  const fetchResults = async (term: string) => {
    console.log("*** fetching with searchterm " + term + " ***");

    const response = await fetch(`https://en.wikipedia.org/w/rest.php/v1/search/title?q=${term}&limit=10`, {
      method: "GET",
    });

    if (response.ok) {
      const json: WikipediaApiResponse = await response.json();

      const filteredResults: Array<SearchResult> = json.pages.filter(page => {
        const { description } = page;
        return description?.includes('(') && description.includes(')');
      }).map(page => {
        const { birthYear, deathYear } = getBirthYearFromDescription(page.description);

        const searchResult: SearchResult = {
          name: page.title,
          description: page.description,
          birthYear: birthYear,
          deathYear: deathYear,
          imageUrl: page.thumbnail?.url
        }

        return searchResult;
      });

      setResults(filteredResults);
      setsearchResult(json?.pages[0]?.excerpt);
    } else {
      setsearchResult("Response status: " + response.status.toString());
    }
  };

  const getBirthYearFromDescription = (description: String) => {
    const yearPattern = /(\d{4})[–-](\d{4})/;
    const yearAlive = /\( *born *.*?\d+.*?\)/i;

    const dead = description.match(yearPattern);
    const alive = description.match(yearAlive);

    if (dead) {
      return {
        birthYear: parseInt(dead[1], 10),
        deathYear: parseInt(dead[2], 10)
      };
    } else if (alive) {
      const aliveYear = alive.toString().replace(/[a-zA-Z\s()]/g, '')
      return {
        birthYear: parseInt(aliveYear),
        deathYear: new Date().getFullYear(),
      };
    }

    return { birthYear: null, deathYear: null };
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setsearchTerm(term);
    if (term.length > 2) {
      fetchResults(term);
    } else {
      setResults([]); // Clear results if less than 3 characters
    }
  };

  return (
    <>
      <div className="w-96 relative flex flex-col z-40">
        <div className="relative mt-2 text-lg">
          <input
            ref={inputRef}
            value={searchTerm}
            type="search"
            className="form-input peer w-full border-b-2 border-gray-700 bg-transparent py-2 placeholder:text-lg text-black placeholder-gray-700 focus:border-black outline-none focus:outline-none"
            placeholder="Search for anyone you can think of.."
            onChange={handleChange}
          />
        </div>
        <ul className="absolute w-full left-0 top-14 right-0 mt-1 bg-white rounded-lg shadow-lg max-h-90 overflow-y-auto scrollbar-minimal">
          <Dropdown results={results} />
        </ul>
      </div>
    </>
  );
};

export default Search;
