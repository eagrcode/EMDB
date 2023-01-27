import { Row } from "../Components";

function Similar({ similar, isLoading, isError }) {
  const path = "https://image.tmdb.org/t/p/w185";

  if (isLoading) {
    return (
      <section id="similar-section">
        <Row title={"Loading"} />
      </section>
    );
  }

  if (isError) {
    return (
      <section id="similar-section">
        <Row title={"Error"} />
      </section>
    );
  }

  return (
    <section id="similar-section">
      <Row data={similar} title={"Similar Movies"} path={path} />
    </section>
  );
}

export default Similar;
