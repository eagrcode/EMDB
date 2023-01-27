import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = "20be784f740b6b638c906dde5b35efae";

// Fetch movie details by ID
const fetchTrending = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
    .then((res) => res.data.results);
};

export const usefetchTrending = () => {
  return useQuery(["trending"], fetchTrending, {
    onSuccess: (trending) => {
      console.log(trending);
    },
  });
};
