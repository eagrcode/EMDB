import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../configs/tmdbConfig";

// Fetch top rated TV
const fetchTopRatedTV = () => {
  return axios
    .get(`${baseURL}/tv/top_rated?api_key=${import.meta.env.VITE_API_KEY}&page=1&lang=us`)
    .then((res) => res.data.results);
};

export const useFetchTopRatedTV = () => {
  return useQuery(["topRatedTV"], fetchTopRatedTV, {
    onSuccess: (topRatedTV) => {
      console.log(topRatedTV);
    },
  });
};
