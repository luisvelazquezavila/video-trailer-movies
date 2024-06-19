import useSearchKey from "../../hooks/useSearchKey"
import { PropTypes } from "prop-types"
import searchIcon from "../../assets/icons8-busqueda.svg"
import "./searcher.css"
import { Box } from "@mui/material";
import { useEffect } from "react";

export default function Searcher({ getMovies }) {

  const { searchKey, setSearchKey } = useSearchKey();

  useEffect(() => {
    getMovies({ searchKey });
  }, [getMovies, searchKey]);

  const handleSubmit = e => {
    e.preventDefault();
    getMovies({ searchKey });
    console.log(searchKey);
  }

  const handleChange = e => {
    const newSearch = e.target.value;
    if (newSearch.startsWith(" ")) return;
    setSearchKey(newSearch);
  }
 
  return (
    <header>
      <h1 className="title">Trailer Popular Movies</h1>
      <div className="searcher">
        <Box 
          className="searcher__form" onSubmit={handleSubmit}
          component="form"
          sx={{ marginLeft: { xs: "0", sm: "5rem" } }}
        >
          <input 
            className="searcher__input-text"
            onChange={handleChange}
            type="text" 
            placeholder="Movie title..." 
            value={searchKey}
          />
          <button className="searcher__button">
            <img src={searchIcon} alt="serach icon" />
          </button>
        </Box>
      </div>
    </header>
  )
}

Searcher.propTypes = {
  getMovies: PropTypes.func
}