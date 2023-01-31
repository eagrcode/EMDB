import { Row } from "../Components";

// configs
import { imageURL, posterSizes } from "../configs/tmdbConfig";

function Similar({ mediaType, similar, isLoading, isError }) {
  // config destructure
  const { p92, p154, p185, p342, p500, p780, pOrig } = posterSizes;

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
      <Row
        mediaType={mediaType}
        data={similar}
        title={"Similar Movies"}
        imageURL={imageURL}
        imageSize={p185}
      />
    </section>
  );
}

export default Similar;
