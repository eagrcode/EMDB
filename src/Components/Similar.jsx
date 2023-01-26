import { useSimilar } from "../getSimilar";
import { useParams } from "react-router";

import { Row } from "../Components";

function Similar() {
  const { id } = useParams();

  const { data: sim } = useSimilar(id);

  const path = "https://image.tmdb.org/t/p/w185";

  return (
    <section id="similar-section">
      <Row data={sim} title={"Similar Movies"} path={path} />
    </section>
  );
}

export default Similar;
