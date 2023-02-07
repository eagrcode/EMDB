import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../configs/tmdbConfig";

// Fetch popular TV
const fetchPopularTV = () => {
  return axios
    .get(`${baseURL}/tv/popular?api_key=${import.meta.env.VITE_API_KEY}&page=1&lang=us`)
    .then((res) => res.data.results);
};

export const useFetchPopularTV = () => {
  return useQuery(["popularTV"], fetchPopularTV, {
    onSuccess: (popularTV) => {
      console.log(popularTV);
    },
  });
};
