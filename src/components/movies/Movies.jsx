import { PropTypes } from "prop-types";
import { Box, Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import "./movies.css"
import useMovies from "../../hooks/useMovies";

export default function Movies({ movies }) {

  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const { selectMovie } = useMovies();

  return (
    <Box 
      className="movies"
      sx={{ 
        width: { xs: "95%", sm: "80%" }, 
        gap: { xs: ".5rem", sm: "2.5rem" }
      }}
    >
      {
        movies.map(movie => {
          return movie.poster_path
            ? (
              <CardActionArea 
                key={movie.id}
                onClick={() => selectMovie({ movie })}
                sx={{
                  mb: 1, "&:hover": {cursor: "pointer", transform: "scale(1.02)"},
                  display: "grid",
                  placeItems: "flex-start",
                }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    src={`${URL_IMAGE + movie.poster_path}`}
                    alt={movie.title}
                    sx={{ objectFit: "cover" }}
                  />
                </Card>
                <Typography 
                  component="p" 
                  fontSize={24} 
                  color="white"
                  sx={{"&:hover": {cursor: "pointer", textDecoration: "underline"}}}
                >
                  {movie.title}
                </Typography>
              </CardActionArea> 
            )
          : null  
        })
      }
    </Box>
  )
}

Movies.propTypes = {
  movies: PropTypes.array
}