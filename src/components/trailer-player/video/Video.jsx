import { Box, Button } from "@mui/material";
import YouTube from "react-youtube";
import { PropTypes } from "prop-types";

export default function Video({ trailer, setPlaying }) {
  return (
    <Box 
      sx={{
        width: "100%", 
        height: "100%", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center"
      }}>
      <Button 
        sx={{ 
          width: "max-content"
        }} 
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
    </Box>
  )
}

Video.propTypes = {
  setPlaying: PropTypes.func,
  trailer: PropTypes.object
}