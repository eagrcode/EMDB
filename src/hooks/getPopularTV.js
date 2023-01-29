import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../configs/tmdbConfig";

const API_KEY = "20be784f740b6b638c906dde5b35efae";

// Fetch popular TV
const fetchPopularTV = () => {
  return axios
    .get(`${baseURL}/movie/top_rated?api_key=${API_KEY}&page=1&lang=us`)
    .then((res) => res.data.results);
};

export const useFetchPopularTV = () => {
  return useQuery(["popularTV"], fetchPopularTV, {
    onSuccess: (popularTV) => {
      console.log(popularTV);
    },
  });
};
