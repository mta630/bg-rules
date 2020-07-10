import React from "react";
import styles from "../modules/search.module.css";

const Search = () => {
  return (
    <div>
      <div>Search for a game title to see its rules and so much more!</div>
      <form>
        <input type="search"></input>
      </form>
    </div>
  );
};

export default Search;
