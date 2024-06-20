import Movies from "./components/movies/Movies"
import Searcher from "./components/searcher/Searcher";
import TrailerDisplay from "./components/trailer-player/TrailerDisplay";
import SearchKeyProvider from "./context/SearchKeyContext";
import useMovies from "./hooks/useMovies";

function App() {

  const { movies, getMovies } = useMovies();

  return (
    <SearchKeyProvider>
      <Searcher getMovies={getMovies} />
      <TrailerDisplay />
      <Movies movies={movies} />
    </SearchKeyProvider>
  )
}

export default App
