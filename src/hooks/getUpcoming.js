import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = "20be784f740b6b638c906dde5b35efae";

// Fetch upcoming movies
const fetchUpcoming = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1&lang=us`
    )
    .then((res) => res.data.results);
};

export const useFetchUpcoming = () => {
  return useQuery(["upcoming"], fetchUpcoming, {
    onSuccess: (upcoming) => {
      console.log(upcoming);
    },
  });
};
