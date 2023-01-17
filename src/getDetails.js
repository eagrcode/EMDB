import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = "20be784f740b6b638c906dde5b35efae";

const fetchDetails = () => {
  // const id = queryKey[1];
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/76600?api_key=20be784f740b6b638c906dde5b35efae&language=en-US`
    )
    .then((res) => res.data.results);
};

// export const useItemDetails = () => {
//   return useQuery(["info"], fetchDetails);
// };
