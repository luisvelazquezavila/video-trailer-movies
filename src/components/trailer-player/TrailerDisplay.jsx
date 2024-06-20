import { Box } from "@mui/material";
import { useState } from "react";
import useMovies from "../../hooks/useMovies";
import Video from "./video/Video";
import PosterMovie from "./poster-movie/PosterMovie";
import "./trailer-display.css";

export default function TrailerDisplay() {

  const { movie } = useMovies();
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <div>
        {movie ? (
          <Box
            className="trailer-display"
            sx={{ backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")` }}
          >
            {playing ? (
              <Video setPlaying={setPlaying} />
            ) : (
              <PosterMovie setPlaying={setPlaying} />
            )}
          </Box>
        ) : null}
      </div>
    </>
  )
}