import React, { createContext, useState } from "react";

export const SearchContext = createContext();

// This context provider is passed to any component requiring the context
export const SearchProvider = ({ children }) => {
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
