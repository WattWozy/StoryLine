"use client";
import { SearchResult, WikipediaApiResponse } from "@/global/types";
import Image from "next/image";
import React, { useState } from "react";
import Dropdown from "./Dropdown";

// https://serpapi.com/search.json?q=${searchTerm}&location=Austin,+Texas,+United+States&hl=en&gl=us&google_domain=google.com+
// wikipedias api

const Search = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchResult, setsearchResult] = useState("search result");

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    console.log("*** fetching with searchterm " + searchTerm + " ***");

    const response = await fetch(`https://en.wikipedia.org/w/rest.php/v1/search/title?q=${searchTerm}&limit=10`, {
      method: "GET",
    });

    if (response.ok) {
      const json: WikipediaApiResponse = await response.json();

      console.log(json);
      console.log(json.pages[0]);
      console.log(json.pages[0].description);


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
    // Regular expression to match years in the format "(YYYY–YYYY)"
    const yearPattern = /(\d{4})[–-](\d{4})/;

    // Extract the birth and death years from the description using regex
    const match = description.match(yearPattern);

    // If regex found the years, return them in an object
    if (match) {
      return {
        birthYear: parseInt(match[1], 10),
        deathYear: parseInt(match[2], 10)
      };
    }

    // If no match found, return null for both
    return { birthYear: null, deathYear: null };
  }

  return (
    <>

      <div className="w-96 relative lex flex-col">

        <form onSubmit={handleSubmit}>
          <input
            value={searchTerm}
            type="search"
            placeholder="Search for anyone..."
            className="w-full py-2 px-4 rounded-full bg-white/80 focus:outline-none focus:ring-2 focus:ring-white"
            onChange={(e) => setsearchTerm(e.target.value)}
          />
          <button hidden type="submit">
            Search
          </button>
        </form>
        <ul className="absolute w-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
          <Dropdown results={results} />
        </ul>
      </div>
    </>
  );
};

export default Search;
