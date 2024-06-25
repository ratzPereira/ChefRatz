import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card.jsx";

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
        const response = await axios.get(
          `https://chef-ratz.vercel.app/api/items`,
          {
            params: { query },
          },
        );
        setResults(response.data);
      } catch (error) {
        setError(error || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        Search
      </h1>
      <div className="bg-white md:max-w-3xl mx-auto p-4 rounded relative flex items-center">
        <IoIosSearch className="w-5 h-5 mr-2 text-neutral-300" />
        <input
          value={query}
          onChange={handleSearch}
          className="outline-none w-full placeholder:text-[#1b2629]"
          name="query"
          type="search"
          placeholder="Search for a recipe"
          id="search"
          required=""
        />
      </div>
      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {results &&
          results.map((item) => <Card key={item._id} item={item}></Card>)}
      </ul>
    </div>
  );
};

export default Search;
