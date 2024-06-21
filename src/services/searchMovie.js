import axios from 'axios';

const API_KEY = "2de4fdccf8723437fb4ecd3c510c2e52";
const API_URL = "https://api.themoviedb.org/3";

export const searchMovie = async ({ id }) => {
  const { data } = await axios.get(`${API_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      append_to_response: "videos",
    },
  });

  return data;
};