import { useEffect } from "react";
import Movies from "./components/movies/Movies"
import Searcher from "./components/searcher/Searcher";
import useMovies from "./hooks/useMovies";

function App() {

  const { movies, getMovies, loading } = useMovies();

  return (
    <>
      <Searcher getMovies={getMovies} />
      <Movies movies={movies} />
    </>
  )
}

export default App
