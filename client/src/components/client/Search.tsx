"use client";
import Image from "next/image";
import React, { useState } from "react";

// https://serpapi.com/search.json?q=${searchTerm}&location=Austin,+Texas,+United+States&hl=en&gl=us&google_domain=google.com+
// wikipedias api

const Search = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [imageUrl, setImageUrl] = useState("")
  const [searchResult, setsearchResult] = useState("search result");

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    console.log("*** fetching with searchterm " + searchTerm + " ***");

    const response = await fetch(`https://en.wikipedia.org/w/rest.php/v1/search/title?q=${searchTerm}&limit=10`, { 
      method: "GET",
    }); 

    if (response.ok) {
      const json = await response.json();

      console.log(json);
      console.log(json.pages[1]);
      console.log(json.pages[1].description);


      setImageUrl("http://" + json.pages[1].thumbnail.url)
      
      
      setsearchResult(json?.pages[1]?.excerpt);
    } else {
      setsearchResult("Response status: " + response.status.toString());
    }
    
  };

  return (
    <>
      <div>{searchResult}</div>
      <img src={imageUrl} 
           alt="en jävla bild"
      />
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
