import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../configs/tmdbConfig";

// Fetch upcoming movies
const fetchUpcoming = () => {
  return axios
    .get(`${baseURL}/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&page=1&lang=us`)
    .then((res) => res.data.results);
};

export const useFetchUpcoming = () => {
  return useQuery(["upcoming"], fetchUpcoming, {
    onSuccess: (upcoming) => {
      console.log(upcoming);
    },
  });
};
