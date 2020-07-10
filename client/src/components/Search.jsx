import React, { useState, useContext } from "react";
import styles from "../modules/search.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchContext from "../context/SearchContext.jsx";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const search = useContext(SearchContext);

  const handleSearch = (query) => {
    axios
      .get(
        `https://api.boardgameatlas.com/api/search?name=${query}&limit=5&fuzzy_match=true&client_id=vzbLlqyKcH`
      )
      .then((data) => {
        console.log(data);
        setResults(data.data.games);
        search.setResults(data.data.games);
        search.setQuery(query);
      })
      .catch((err) => {
        console.error("There was a problem with the request: ", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    <Link></Link>;
  };

  return (
    <div>
      <div>Search for a game title to see its rules and so much more!</div>
      <form onSubmit={handleSubmit.bind(this)}>
        <input
          type="search"
          placeholder="Type a game title here"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
};

export default Search;
