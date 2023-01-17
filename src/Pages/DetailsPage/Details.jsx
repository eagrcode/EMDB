import { useParams } from "react-router";
import { useItemDetails, useCredits } from "../../getDetails";

import "../DetailsPage/details.css";

function Details() {
  const { id } = useParams();

  const { data: info, isLoading, isError } = useItemDetails(id);

  const {
    data: credits,
    isLoading: loadingCredits,
    isError: errorCredits,
  } = useCredits(id);

  // Cast image path

  const baseURL = "https://image.tmdb.org/t/p/w154";

  // backdrop path
  const path = "https://image.tmdb.org/t/p/w1280";
  const posterPath = "https://image.tmdb.org/t/p/w342";

  if (isLoading || loadingCredits) {
    return <h1>Loading...</h1>;
  }

  if (isError || errorCredits) {
    return <h1>Error</h1>;
  }

  // Success screen
  return (
    <>
      <header id="details-hero-section">
        <div
          className="details-hero-container"
          style={{
            backgroundImage: `url("${path}${info.backdrop_path}")`,
          }}
        ></div>
        <div className="details-inner-hero-container">
          <div className="backdrop-text">
            <div>
              <h1>{info.title}</h1>
            </div>
            <div>
              <em>{info.tagline}</em>
            </div>
            <div>
              {info.release_date} | {info.genres[0]?.name},{" "}
              {info.genres[1].name}, {info.genres[2]?.name} | {info.runtime}{" "}
              mins
            </div>
            <div>
              <p>{info.overview}</p>
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
            <div className="btn-container">
              {/* <button className="hero-btn">
              Play Trailer <FaPlayCircle />
            </button> */}
            </div>
          </div>
          <img id="hero-card" src={`${posterPath}${info.poster_path}`} />
        </div>
      </header>
      <section id="trailer-section">
        <div>YEAHYEAHYEAH</div>
      </section>
    </>
  );
}

export default Details;
