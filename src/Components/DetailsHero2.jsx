// configs
import { imageURL, backdropSizes } from "../configs/tmdbConfig";

// components
import { CastRow } from "../Components";

function DetailsHero2({ info, isLoading, isError }) {
  // config destructure
  const { b300, b780, b1280, bOrig } = backdropSizes;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <header id="hero-section">
      <div
        className="hero-container details"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), hsl(240, 100%, 5%)), url("${imageURL}${b1280}${info.backdrop_path}")`,
        }}
      >
        <div className="overlay-container details">
          <div className="hero-text-container details">
            <div className="details-title-container">
              <h1>{info.title || info.original_name}</h1>
              <span id="rating">{Math.round(info.vote_average * 10) / 10}</span>
            </div>
            <div>
              <em>{info.tagline}</em>
            </div>
            <div className="info-container">
              {info?.release_date} | {info.genres[0]?.name}, {info.genres[1]?.name},{" "}
              {info.genres[2]?.name} | {info?.runtime} mins
            </div>
            <div className="overview-container">
              <p>{info.overview}</p>
            </div>
            <CastRow data={info.credits.cast} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default DetailsHero2;
