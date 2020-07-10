import React, { createContext, useState } from "react";

const SearchContext = createContext(null);

// This context provider is passed to any component requiring the context
const SearchProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        results,
        setResults,
        query,
        setQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.context = SearchContext;

export default SearchProvider;
