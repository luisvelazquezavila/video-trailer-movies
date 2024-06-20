import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const MoviesContext = createContext();

export default function MoviesProvider({ children }) {

  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });

  return (
    <MoviesContext.Provider value={{
      trailer,
      setTrailer,
      movie,
      setMovie,
    }}>
      {children}
    </MoviesContext.Provider>
  )
}

MoviesProvider.propTypes = {
  children: PropTypes.element
}