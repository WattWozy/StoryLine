// // components/SearchBar.jsx

// import { useState, useEffect } from "react";
// // import axios from "axios";

// const SearchBar = ({ onResultSelect }) => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (query.length < 3) {
//       setResults([]);
//       return;
//     }

//     const fetchResults = async () => {
//       setIsLoading(true);
//       try {
//         // const response = await axios.get(
//         //   `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${query}%20person`
//         // );
//         // const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${query}%20person`, {
//           const response = await fetch(`'https://cors-anywhere.herokuapp.com/https://www.wikidata.org/w/api.php?action=query&list=search&srsearch=Will&format=json&srwhat=text&srprop=snippet&srnamespace=0&srlimit=10&srinfo=suggestion&srsearch=haswbstatement:P31=Q5'`, {
//             method: "GET",
//             mode: 'no-cors', // Setting the mode to 'no-cors'
//           })
//         const searchResults = response;
//         console.log(searchResults)
//         searchResults.forEach(result => {
//           setResults(result.snippet);;
//       });
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//       setIsLoading(false);
//     };

//     const debounceTimeout = setTimeout(() => {
//       fetchResults();
//     }, 300); // Debounce API call by 300ms

//     return () => clearTimeout(debounceTimeout);
//   }, [query]);

//   const handleChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleResultClick = (title) => {
//     setQuery(title);
//     setResults([]);
//     onResultSelect(title); // Trigger parent function when result is selected
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && query.length > 2) {
//       onResultSelect(query);
//       setResults([]);
//     }
//   };

//   return (
//     <div style={{ position: "relative", width: "300px" }}>
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         onKeyDown={handleKeyDown}
//         placeholder="Search for a person..."
//         style={{
//           width: "100%",
//           padding: "10px",
//           fontSize: "16px",
//           borderRadius: "4px",
//           border: "1px solid #ccc",
//         }}
//       />
//       {isLoading && <div>Loading...</div>}
//       {results.length > 0 && (
//         <ul
//           style={{
//             position: "absolute",
//             top: "40px",
//             left: "0",
//             width: "100%",
//             backgroundColor: "#fff",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//             borderRadius: "4px",
//             zIndex: 1000,
//             listStyleType: "none",
//             margin: 0,
//             padding: "10px",
//           }}
//         >
//           {results.map((result) => (
//             <li
//               key={result.pageid}
//               onClick={() => handleResultClick(result.title)}
//               style={{
//                 padding: "10px",
//                 cursor: "pointer",
//                 borderBottom: "1px solid #eee",
//               }}
//             >
//               {result.title}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
