import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useParams } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const searchText = useParams();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get("query");
    if (queryParam) {
      setQuery(queryParam);
    }
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        console.log(query);
        const response = await axios.get(`http://localhost:5000/api/items`, {
          params: { query },
        });
        setResults(response.data);
      } catch (error) {
        setError(error || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [query]);

  console.log(results);

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        Search
      </h1>
      <div className="bg-white md:max-w-screen-3xl mx-auto p-4 rounded relative flex items-center">
        <IoIosSearch className="w-5 h-5 mr-2 text-neutral-300" />
        <input
          className="outline-none w-full placeholder:text-[#1b2629]"
          name="query"
          type="search"
          placeholder="Search for a recipe"
          id="search"
          required=""
        />
      </div>
      <ul>
        {results &&
          results.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
