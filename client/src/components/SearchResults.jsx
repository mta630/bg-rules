import React, { useContext } from "react";
import styles from "../modules/searchResults.module.css";
import { SearchProvider } from "../context/SearchContext.jsx";

const SearchResults = (props) => {
  const search = useContext(SearchProvider.context);

  return (
    <div className={styles.resultContainer}>
      <div className={styles.title}>Search Results</div>
      <div className={styles.subTitle}>results for term:</div>
    </div>
  );
};

export default SearchResults;
