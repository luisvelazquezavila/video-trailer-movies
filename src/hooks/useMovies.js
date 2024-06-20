import { useCallback, useContext, useState } from "react";
import searchMovies from "../services/searchMovies";
import { searchMovie } from "../services/searchMovie";
import { MoviesContext } from "../context/MoviesContext";

export default function useMovies() {
  
  const { trailer, setTrailer, movie, setMovie } = useContext(MoviesContext);

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const getMovie = useCallback(async ({ id }) => {

    try {
      setError(null);
      const dataMovie = await searchMovie({ id });

      if (dataMovie.videos && dataMovie.videos.results) {
        const trailer = dataMovie.videos.results.find(
          (vid) => vid.name === "Official Trailer"
        );
        setTrailer(trailer ? trailer : dataMovie.videos.results[0]);
      }
      setMovie(dataMovie);
    } catch (error) {
      setError(error.message);
    } 
    
  }, [setMovie, setTrailer]); 

  const getMovies = useCallback(async ({ searchKey }) => {

    try {
      setError(null);
      const foundMovies = await searchMovies({ searchKey });
      setMovies(foundMovies);
      setMovie(foundMovies[0]);
      if (foundMovies.length) {
        await getMovie({id: foundMovies[0].id});
      }
    } catch (error) {
      setError(error.message);
    } 
    
  }, [setMovie, getMovie]); 

  const selectMovie = async ({ movie }) => {
    getMovie({id: movie.id});
    setMovie(movie);
    window.scrollTo(0, 0);
  };

  return { movies, getMovies, getMovie, selectMovie, trailer, movie };
}