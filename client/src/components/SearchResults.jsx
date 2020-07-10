import React, { useContext } from "react";
import styles from "../modules/searchResults.module.css";
import { SearchContext } from "../context/SearchContext.jsx";

const SearchResults = (props) => {
  const searchContext = useContext(SearchContext);

  return (
    <div className={styles.resultContainer}>
      <div className={styles.title}>Search Results</div>
      <div className={styles.subTitle}>results for term:</div>
    </div>
  );
};

export default SearchResults;
