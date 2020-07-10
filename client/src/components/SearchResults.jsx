import React from "react";
import styles from "../modules/searchResults.module.css";

const SearchResults = (props) => {
  return (
    <div className={styles.resultContainer}>
      <div className={styles.title}>Search Results</div>
      <div className={styles.subTitle}>results for term:</div>
    </div>
  );
};

export default SearchResults;
