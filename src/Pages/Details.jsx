import { useParams } from "react-router";
import { useItemDetails } from "../getDetails";

function Details() {
  const { id } = useParams();

  const { data: info, isLoading, isError } = useItemDetails(id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  return <p>{info?.original_title}</p>;
}

export default Details;
