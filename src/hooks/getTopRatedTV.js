import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../configs/tmdbConfig";

const API_KEY = "20be784f740b6b638c906dde5b35efae";

// Fetch top rated TV
const fetchTopRatedTV = () => {
  return axios
    .get(`${baseURL}/tv/top_rated?api_key=${API_KEY}&page=1&lang=us`)
    .then((res) => res.data.results);
};

export const useFetchTopRatedTV = () => {
  return useQuery(["topRatedTV"], fetchTopRatedTV, {
    onSuccess: (topRatedTV) => {
      console.log(topRatedTV);
    },
  });
};
