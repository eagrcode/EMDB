import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = "20be784f740b6b638c906dde5b35efae";

// Fetch top rated TV
const fetchTopRatedTV = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&page=1&lang=us`
    )
    .then((res) => res.data.results);
};

export const useFetchTopRatedTV = () => {
  return useQuery(["topRatedTV"], fetchTopRatedTV, {
    onSuccess: (topRatedTV) => {
      console.log(topRatedTV);
    },
  });
};
