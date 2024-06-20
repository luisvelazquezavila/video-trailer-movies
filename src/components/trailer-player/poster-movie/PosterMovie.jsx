import { Button } from "@mui/material";
import useMovies from "../../../hooks/useMovies";
import { PropTypes } from "prop-types";
import "./poster-movie.css"

export default function PosterMovie({ setPlaying }) {

  const { trailer, movie } = useMovies();

  return (
    <div className="container">
      {trailer ? (
        <Button
          onClick={() => setPlaying(true)}
          variant='contained'
        >
          Reproducir Trailer
        </Button>
      ) : (
        "Sorry, no trailer available"
      )}
      <h2 className="movie-title">
          {movie.title}
      </h2>
      <p className="movie-overview">
        {movie.overview}
      </p>
    </div>
  )
}

PosterMovie.propTypes = {
  setPlaying: PropTypes.func
}