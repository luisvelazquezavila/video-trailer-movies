import axios from 'axios';
const API_KEY = "2de4fdccf8723437fb4ecd3c510c2e52";
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