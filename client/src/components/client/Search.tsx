"use client";
import React, { useState } from "react";

// https://serpapi.com/search.json?q=${searchTerm}&location=Austin,+Texas,+United+States&hl=en&gl=us&google_domain=google.com

const Search = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [searchResult, setsearchResult] = useState("search result");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("*** fetching with searchterm " + searchTerm + " ***");
    const response = await fetch("https://swapi.dev/api/people/1/", { //dummy api for now
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();

      console.log(data);
      setsearchResult(data?.name);
    } else {
      setsearchResult("Response status: " + response.status.toString());
    }
  };

  return (
    <>
      <div>{searchResult}</div>
      <form onSubmit={handleSubmit}>
        <input
          value={searchTerm}
          type="search"
          placeholder="Search for anyone..."
          className="py-2 px-4 rounded-full bg-white/80 focus:outline-none focus:ring-2 focus:ring-white"
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <button hidden type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
