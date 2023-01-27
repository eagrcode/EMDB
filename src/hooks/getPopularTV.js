import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = "20be784f740b6b638c906dde5b35efae";

// Fetch popular TV
const fetchPopularTV = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1&lang=us`
    )
    .then((res) => res.data.results);
};

export const useFetchPopularTV = () => {
  return useQuery(["popularTV"], fetchPopularTV, {
    onSuccess: (popularTV) => {
      console.log(popularTV);
    },
  });
};
