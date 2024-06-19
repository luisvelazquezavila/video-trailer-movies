import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

export const searchMovie = async (id) => {
  const { data } = await axios.get(`${API_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      append_to_response: "videos",
    },
  });

  // if (data.videos && data.videos.results) {
  //   const trailer = data.videos.results.find(
  //     (vid) => vid.name === "Official Trailer"
  //   );
  //   setTrailer(trailer ? trailer : data.videos.results[0]);
  // }

  return data;
};