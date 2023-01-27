import { CastRow } from "../Components";

function DetailsHero2({ info, isLoading, isError }) {
  // Cast image path
  const baseURL = "https://image.tmdb.org/t/p/w92";

  // backdrop path
  const path = "https://image.tmdb.org/t/p/w1280";
  const posterPath = "https://image.tmdb.org/t/p/w342";

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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), hsl(240, 100%, 5%)), url("${path}${info.backdrop_path}")`,
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
              {info?.release_date} | {info.genres[0]?.name},{" "}
              {info.genres[1]?.name}, {info.genres[2]?.name} | {info?.runtime}{" "}
              mins
            </div>
            <div className="overview-container">
              <p>{info.overview}</p>
            </div>
            <CastRow data={info.credits.cast} path={baseURL} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default DetailsHero2;
