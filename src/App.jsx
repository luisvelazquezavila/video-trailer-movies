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
      <main>
        <TrailerDisplay />
        <Movies movies={movies} />
      </main>
    </SearchKeyProvider>
  )
}

export default App
