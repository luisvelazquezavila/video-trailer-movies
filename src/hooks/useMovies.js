import { useCallback, useState } from "react";
import searchMovies from "../services/searchMovies";
import { searchMovie } from "../services/searchMovie";

export default function useMovies() {
  const [movies, setMovies] = useState([]);
  // const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  // const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMovies = useCallback(async ({ searchKey }) => {

    // if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      // previousSearch.current = search;
      const foundMovies = await searchMovies({ searchKey });
      setMovies(foundMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    
  }, []); 

  const getMovie = useCallback(async ({ id }) => {

    try {
      setError(null);
      const data = await searchMovie({ id });

      if (data.videos && data.videos.results) {
        const trailer = data.videos.results.find(
          (vid) => vid.name === "Official Trailer"
        );
        setTrailer(trailer ? trailer : data.videos.results[0]);
      }

      setMovie(data);
    } catch (error) {
      setError(error.message);
    } 
    
  }, []); 

  const selectMovie = async ({ movie }) => {
    getMovie(movie.id);
    setMovie(movie);
    window.scrollTo(0, 0);
  };

  return { movies, loading, getMovies, getMovie, selectMovie };
}