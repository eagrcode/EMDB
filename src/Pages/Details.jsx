import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Details() {
  const {
    data: info,
    isLoading,
    isError,
  } = useQuery(
    ["info"],
    () => {
      return axios
        .get(
          "https://api.themoviedb.org/3/movie/76600?api_key=20be784f740b6b638c906dde5b35efae&language=en-US"
        )
        .then((res) => res.data);
    },
    {
      onSuccess: (info) => {
        console.log(info);
      },
    }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  return <p>{info?.original_title}</p>;
}

export default Details;
