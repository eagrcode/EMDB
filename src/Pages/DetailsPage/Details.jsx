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
        {/* <Videos /> */}
      </section>
    </>
  );
}

export default Details;
