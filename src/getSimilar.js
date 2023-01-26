import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = "20be784f740b6b638c906dde5b35efae";

const fetchSimilar = ({ queryKey }) => {
  const id = queryKey[1];
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US`
    )
    .then((res) => res.data.results);
};

export const useSimilar = (id) => {
  return useQuery(["similar", id], fetchSimilar, {
    onSuccess: (similar) => {
      console.log(similar);
    },
  });
};
