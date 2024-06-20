import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.themoviedb.org/3";

export default async function searchMovies({ searchKey }) {
  const type = searchKey ? "search" : "discover";
  const {
    data: { results },
  } = await axios.get(`${API_URL}/${type}/movie`, {
    params: {
      api_key: API_KEY,
      query: searchKey,
    },
  });

  return results;
}