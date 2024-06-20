import { Button } from "@mui/material";
import YouTube from "react-youtube";
import useMovies from "../../../hooks/useMovies";
import { PropTypes } from "prop-types";
import "./video.css"

export default function Video({ setPlaying }) {

  const { trailer } = useMovies();

  return (
    <div className="video-tariler">
      <Button 
        variant='contained' 
        onClick={() => setPlaying(false)}
      > 
        Cerrar
      </Button>

      <YouTube
        videoId={trailer.key}
        className="reproductor container"
        containerClassName={"youtube-container amru"}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            controls: 1,
            cc_load_policy: 0,
            fs: 0,
            iv_load_policy: 0,
            modestbranding: 0,
            rel: 0,
            showinfo: 0,
          },
        }}
      />               
    </div>
  )
}

Video.propTypes = {
  setPlaying: PropTypes.func
}