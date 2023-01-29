import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../configs/tmdbConfig";

const API_KEY = "20be784f740b6b638c906dde5b35efae";

// Fetch upcoming movies
const fetchUpcoming = () => {
  return axios
    .get(`${baseURL}/movie/upcoming?api_key=${API_KEY}&page=1&lang=us`)
    .then((res) => res.data.results);
};

export const useFetchUpcoming = () => {
  return useQuery(["upcoming"], fetchUpcoming, {
    onSuccess: (upcoming) => {
      console.log(upcoming);
    },
  });
};
