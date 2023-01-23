import "../DetailsPage/details.css";

import { DetailsHero2 } from "../../Components";

import { useCredits } from "../../getDetails";

import { Videos } from "../../Components";

import { useParams } from "react-router";

function Details() {
  const id = useParams();

  const {
    data: credits,
    isLoading: loadingCredits,
    isError: errorCredits,
  } = useCredits(id);

  // Cast image path
  const baseURL = "https://image.tmdb.org/t/p/w92";

  return (
    <>
      <DetailsHero2 />
      <section id="trailer-section">
        <h2 className="media-header">Media</h2>
        <Videos />
        {/* <h2>Top Cast</h2>
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
        </div> */}
      </section>
    </>
  );
}

export default Details;
