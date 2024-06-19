import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const SearchKeyContext = createContext();

export default function SearchKeyProvider({ children }) {

  const [searchKey, setSearchKey] = useState("");

  return (
    <SearchKeyContext.Provider value={{
      searchKey,
      setSearchKey,
    }}>
      {children}
    </SearchKeyContext.Provider>
  )
}

SearchKeyProvider.propTypes = {
  children: PropTypes.element
}