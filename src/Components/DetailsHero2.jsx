import { useParams } from "react-router";
import { useItemDetails, useCredits } from "../getDetails";

function DetailsHero2() {
  const { id } = useParams();

  const { data: info, isLoading, isError } = useItemDetails(id);
  const { data: credits, isLoadingCredits, isErrorCredits } = useCredits(id);

  // Cast image path
  const baseURL = "https://image.tmdb.org/t/p/w92";

  // backdrop path
  const path = "https://image.tmdb.org/t/p/w1280";
  const posterPath = "https://image.tmdb.org/t/p/w342";

  if (isLoading || isLoadingCredits) {
    return <h1>Loading...</h1>;
  }

  if (isError || isErrorCredits) {
    return <h1>Error</h1>;
  }

  return (
    <header id="hero-section">
      <div
        key={info.id}
        className="hero-container details"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), hsl(240, 100%, 5%)), url("${path}${info.backdrop_path}")`,
        }}
      >
        <div className="overlay-container details">
          <div className="hero-text-container details">
            <div>
              <h1>{info.title}</h1>
            </div>
            <div>
              <em>{info.tagline}</em>
            </div>
            <div className="info-container">
              {info.release_date} | {info.genres[0]?.name},{" "}
              {info.genres[1].name}, {info.genres[2]?.name} | {info.runtime}{" "}
              mins
            </div>
            <div className="overview-container">
              <p>{info.overview}</p>
            </div>
          </div>
          <h2>Cast</h2>
          <div className="cast-container">
            <div className="cast-item">
              <img src={`${baseURL}${credits.cast[0]?.profile_path}`} />
              <span className="cast-name">{credits.cast[0].name}</span>
            </div>
            <div className="cast-item">
              <img src={`${baseURL}${credits.cast[1]?.profile_path}`} />
              <span className="cast-name">{credits.cast[1].name}</span>
            </div>
            <div className="cast-item">
              <img src={`${baseURL}${credits.cast[2]?.profile_path}`} />
              <span className="cast-name">{credits.cast[2].name}</span>
            </div>
            <div className="cast-item">
              <img src={`${baseURL}${credits.cast[3]?.profile_path}`} />
              <span className="cast-name">{credits.cast[3].name}</span>
            </div>
            <div className="cast-item">
              <img src={`${baseURL}${credits.cast[4]?.profile_path}`} />
              <span className="cast-name">{credits.cast[4].name}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DetailsHero2;
