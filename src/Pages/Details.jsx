import { useParams } from "react-router";

function Details() {
  const { id } = useParams();

  return <div>Details {id}</div>;
}

export default Details;
